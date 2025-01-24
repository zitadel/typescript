"use server";

import {
  getLoginSettings,
  getUserByID,
  startIdentityProviderFlow,
} from "@/lib/zitadel";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getNextUrl } from "../client";
import { checkEmailVerification } from "../verify-helper";
import { createSessionForIdpAndUpdateCookie } from "./cookie";

export type RedirectToIdpState = { error?: string | null } | undefined;

export async function redirectToIdp(
  prevState: RedirectToIdpState,
  formData: FormData,
): Promise<RedirectToIdpState> {
  const params = new URLSearchParams();

  const linkOnly = formData.get("linkOnly") === "true";
  const authRequestId = formData.get("authRequestId") as string;
  const organization = formData.get("organization") as string;
  const idpId = formData.get("id") as string;
  const provider = formData.get("provider") as string;

  if (linkOnly) params.set("link", "true");
  if (authRequestId) params.set("authRequestId", authRequestId);
  if (organization) params.set("organization", organization);

  const response = await startIDPFlow({
    idpId,
    successUrl: `/idp/${provider}/success?` + params.toString(),
    failureUrl: `/idp/${provider}/failure?` + params.toString(),
  });

  if (response && "error" in response && response?.error) {
    return { error: response.error };
  }

  if (response && "redirect" in response && response?.redirect) {
    redirect(response.redirect);
  }
}

export type StartIDPFlowCommand = {
  idpId: string;
  successUrl: string;
  failureUrl: string;
};

export async function startIDPFlow(command: StartIDPFlowCommand) {
  const host = (await headers()).get("host");

  if (!host) {
    return { error: "Could not get host" };
  }

  return startIdentityProviderFlow({
    idpId: command.idpId,
    urls: {
      successUrl: `${host.includes("localhost") ? "http://" : "https://"}${host}${command.successUrl}`,
      failureUrl: `${host.includes("localhost") ? "http://" : "https://"}${host}${command.failureUrl}`,
    },
  }).then((response) => {
    if (
      response &&
      response.nextStep.case === "authUrl" &&
      response?.nextStep.value
    ) {
      return { redirect: response.nextStep.value };
    }
  });
}

type CreateNewSessionCommand = {
  userId: string;
  idpIntent: {
    idpIntentId: string;
    idpIntentToken: string;
  };
  loginName?: string;
  password?: string;
  organization?: string;
  authRequestId?: string;
};

export async function createNewSessionFromIdpIntent(
  command: CreateNewSessionCommand,
) {
  if (!command.userId || !command.idpIntent) {
    throw new Error("No userId or loginName provided");
  }

  const userResponse = await getUserByID(command.userId);

  if (!userResponse || !userResponse.user) {
    return { error: "User not found in the system" };
  }

  const loginSettings = await getLoginSettings(
    userResponse.user.details?.resourceOwner,
  );

  const session = await createSessionForIdpAndUpdateCookie(
    command.userId,
    command.idpIntent,
    command.authRequestId,
    loginSettings?.externalLoginCheckLifetime,
  );

  if (!session || !session.factors?.user) {
    return { error: "Could not create session" };
  }

  const humanUser =
    userResponse.user.type.case === "human"
      ? userResponse.user.type.value
      : undefined;

  // check to see if user was verified
  const emailVerificationCheck = checkEmailVerification(
    session,
    humanUser,
    command.organization,
    command.authRequestId,
  );

  if (emailVerificationCheck?.redirect) {
    return emailVerificationCheck;
  }

  // TODO: check if user has MFA methods
  // const mfaFactorCheck = checkMFAFactors(session, loginSettings, authMethods, organization, authRequestId);
  // if (mfaFactorCheck?.redirect) {
  //   return mfaFactorCheck;
  // }

  const url = await getNextUrl(
    command.authRequestId && session.id
      ? {
          sessionId: session.id,
          authRequestId: command.authRequestId,
          organization: session.factors.user.organizationId,
        }
      : {
          loginName: session.factors.user.loginName,
          organization: session.factors.user.organizationId,
        },
    loginSettings?.defaultRedirectUri,
  );

  if (url) {
    return { redirect: url };
  }
}
