"use server";

import { createSessionAndUpdateCookie } from "@/lib/server/cookie";
import { addHumanUser, addOrganization, getLoginSettings, getUserByID } from "@/lib/zitadel";
import { create } from "@zitadel/client";
import { Factors } from "@zitadel/proto/zitadel/session/v2/session_pb";
import {
  ChecksJson,
  ChecksSchema,
} from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { headers } from "next/headers";
import { getNextUrl } from "../client";
import { getServiceUrlFromHeaders } from "../service";
import { checkEmailVerification } from "../verify-helper";

type RegisterUserCommand = {
  email: string;
  ereAccount: string;
  firstName: string;
  lastName: string;
  password?: string;
  organizationName: string;
  authRequestId?: string;
};

export type RegisterUserResponse = {
  userId: string;
  sessionId: string;
  factors: Factors | undefined;
};
export async function registerUser(command: RegisterUserCommand) {
  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);
  const host = _headers.get("host");

  if (!host || typeof host !== "string") {
    throw new Error("No host found");
  }

  console.log("Here ORg Name: " + command.organizationName);

  const addResponse = await addOrganization({
    serviceUrl,
    organizationName: command.organizationName,
    email: command.email,
    firstName: command.firstName,
    lastName: command.lastName,
    password: command.password ? command.password : undefined,
    ereAccount: command.ereAccount ? command.ereAccount : undefined
  });

  if (!addResponse) {
    return { error: "Could not create user" };
  }

  const loginSettings = await getLoginSettings({
    serviceUrl,

    organization: command.organizationName,
  });

  let userId = addResponse.createdAdmins[0].userId;

  let checkPayload: any = {
    user: { search: { case: "userId", value: userId } },
  };

  if (command.password) {
    checkPayload = {
      ...checkPayload,
      password: { password: command.password },
    } as ChecksJson;
  }

  const checks = create(ChecksSchema, checkPayload);

  const session = await createSessionAndUpdateCookie(
    checks,
    undefined,
    command.authRequestId,
    command.password ? loginSettings?.passwordCheckLifetime : undefined,
  );

  if (!session || !session.factors?.user) {
    return { error: "Could not create session" };
  }

  if (!command.password) {
    const params = new URLSearchParams({
      loginName: session.factors.user.loginName,
      organization: session.factors.user.organizationId,
    });

    if (command.authRequestId) {
      params.append("authRequestId", command.authRequestId);
    }

    return { redirect: "/passkey/set?" + params };
  } else {
    const userResponse = await getUserByID({
      serviceUrl,

      userId: session?.factors?.user?.id,
    });

    if (!userResponse.user) {
      return { error: "User not found in the system" };
    }

    const humanUser =
      userResponse.user.type.case === "human"
        ? userResponse.user.type.value
        : undefined;

    const emailVerificationCheck = checkEmailVerification(
      session,
      humanUser,
      session.factors.user.organizationId,
      command.authRequestId,
    );

    if (emailVerificationCheck?.redirect) {
      return emailVerificationCheck;
    }

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

    return { redirect: url };
  }
}
