"use server";

import { addSessionToCookie, updateSessionCookie } from "@/lib/cookies";
import {
  createSessionForUserIdAndIdpIntent,
  createSessionFromChecks,
  getSecuritySettings,
  getSession,
  setSession,
} from "@/lib/zitadel";
import { ConnectError, Duration, timestampMs } from "@zitadel/client";
import { CredentialsCheckError, CredentialsCheckErrorSchema, ErrorDetail } from "@zitadel/proto/zitadel/message_pb";
import { Challenges, RequestChallenges } from "@zitadel/proto/zitadel/session/v2/challenge_pb";
import { Session } from "@zitadel/proto/zitadel/session/v2/session_pb";
import { Checks } from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { headers } from "next/headers";
import { getServiceUrlFromHeaders } from "../service-url";
import { getServerTranslation } from "../server-translations";

type CustomCookieData = {
  id: string;
  token: string;
  loginName: string;
  organization?: string;
  creationTs: string;
  expirationTs: string;
  changeTs: string;
  requestId?: string; // if its linked to an OIDC flow
};

const passwordAttemptsHandler = async (error: ConnectError) => {
  const details = error.findDetails(CredentialsCheckErrorSchema);

  if (details[0] && "failedAttempts" in details[0]) {
    const failedAttempts = details[0].failedAttempts;
    throw {
      error: await getServerTranslation("cookie.errors", "failedToAuthenticateAttempts", { failedAttempts }),
      failedAttempts: failedAttempts,
    };
  }
  throw error;
};

export async function createSessionAndUpdateCookie(command: {
  checks: Checks;
  requestId: string | undefined;
  lifetime?: Duration;
}): Promise<Session> {
  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);

  let sessionLifetime = command.lifetime;

  if (!sessionLifetime) {
    console.warn(await getServerTranslation("cookie.errors","noSessionLifetimeProvided"));

    sessionLifetime = {
      seconds: BigInt(24 * 60 * 60), // 24 hours
      nanos: 0,
    } as Duration; // for usecases where the lifetime is not specified (user discovery)
  }

  const createdSession = await createSessionFromChecks({
    serviceUrl,
    checks: command.checks,
    lifetime: sessionLifetime,
  });

  if (createdSession) {
    return getSession({
      serviceUrl,
      sessionId: createdSession.sessionId,
      sessionToken: createdSession.sessionToken,
    }).then(async (response) => {
      if (response?.session && response.session?.factors?.user?.loginName) {
        const sessionCookie: CustomCookieData = {
          id: createdSession.sessionId,
          token: createdSession.sessionToken,
          creationTs: response.session.creationDate ? `${timestampMs(response.session.creationDate)}` : "",
          expirationTs: response.session.expirationDate ? `${timestampMs(response.session.expirationDate)}` : "",
          changeTs: response.session.changeDate ? `${timestampMs(response.session.changeDate)}` : "",
          loginName: response.session.factors.user.loginName ?? "",
        };

        if (command.requestId) {
          sessionCookie.requestId = command.requestId;
        }

        if (response.session.factors.user.organizationId) {
          sessionCookie.organization = response.session.factors.user.organizationId;
        }

        const securitySettings = await getSecuritySettings({ serviceUrl });
        const iFrameEnabled = !!securitySettings?.embeddedIframe?.enabled;

        await addSessionToCookie({ session: sessionCookie, iFrameEnabled });

        return response.session as Session;
      } else {
        throw new Error(await getServerTranslation("cookie.errors", "couldNotGetSessionOrLoginName"));
      }
    });
  } else {
    throw new Error(await getServerTranslation("common.errors", "couldNotCreateSession"));
  }
}

export async function createSessionForIdpAndUpdateCookie({
  userId,
  idpIntent,
  requestId,
  lifetime,
}: {
  userId: string;
  idpIntent: {
    idpIntentId?: string | undefined;
    idpIntentToken?: string | undefined;
  };
  requestId: string | undefined;
  lifetime?: Duration;
}): Promise<Session> {
  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);

  let sessionLifetime = lifetime;

  if (!sessionLifetime) {
    console.warn(
      await getServerTranslation("cookie.errors", "noIdpSessionLifetimeProvided"),
    );

    sessionLifetime = {
      seconds: BigInt(24 * 60 * 60), // 24 hours
      nanos: 0,
    } as Duration;
  }

  const createdSession = await createSessionForUserIdAndIdpIntent({
    serviceUrl,
    userId,
    idpIntent,
    lifetime: sessionLifetime,
  }).catch(async (error: ErrorDetail | CredentialsCheckError) => {
    console.error("Could not set session", error);
    if ("failedAttempts" in error && error.failedAttempts) {
      throw {
        error: await getServerTranslation("cookie.errors", "failedToAuthenticateIdpAttempts", { failedAttempts: error.failedAttempts }),
        failedAttempts: error.failedAttempts,
      };
    }
    throw error;
  });

  if (!createdSession) {
    throw new Error(await getServerTranslation("common.errors", "couldNotCreateSession"));
  }

  const { session } = await getSession({
    serviceUrl,
    sessionId: createdSession.sessionId,
    sessionToken: createdSession.sessionToken,
  });

  if (!session || !session.factors?.user?.loginName) {
    throw new Error(await getServerTranslation("cookie.errors", "couldNotRetrieveSession"));
  }

  const sessionCookie: CustomCookieData = {
    id: createdSession.sessionId,
    token: createdSession.sessionToken,
    creationTs: session.creationDate ? `${timestampMs(session.creationDate)}` : "",
    expirationTs: session.expirationDate ? `${timestampMs(session.expirationDate)}` : "",
    changeTs: session.changeDate ? `${timestampMs(session.changeDate)}` : "",
    loginName: session.factors.user.loginName ?? "",
    organization: session.factors.user.organizationId ?? "",
  };

  if (requestId) {
    sessionCookie.requestId = requestId;
  }

  if (session.factors.user.organizationId) {
    sessionCookie.organization = session.factors.user.organizationId;
  }

  const securitySettings = await getSecuritySettings({ serviceUrl });
  const iFrameEnabled = !!securitySettings?.embeddedIframe?.enabled;

  return addSessionToCookie({ session: sessionCookie, iFrameEnabled }).then(() => {
    return session as Session;
  });
}

export type SessionWithChallenges = Session & {
  challenges: Challenges | undefined;
};

export async function setSessionAndUpdateCookie(command: {
  recentCookie: CustomCookieData;
  checks?: Checks;
  challenges?: RequestChallenges;
  requestId?: string;
  lifetime: Duration;
}) {
  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);

  return setSession({
    serviceUrl,
    sessionId: command.recentCookie.id,
    sessionToken: command.recentCookie.token,
    challenges: command.challenges,
    checks: command.checks,
    lifetime: command.lifetime,
  })
    .then(async (updatedSession) => {
      if (updatedSession) {
        const sessionCookie: CustomCookieData = {
          id: command.recentCookie.id,
          token: updatedSession.sessionToken,
          creationTs: command.recentCookie.creationTs,
          expirationTs: command.recentCookie.expirationTs,
          // just overwrite the changeDate with the new one
          changeTs: updatedSession.details?.changeDate ? `${timestampMs(updatedSession.details.changeDate)}` : "",
          loginName: command.recentCookie.loginName,
          organization: command.recentCookie.organization,
        };

        if (command.requestId) {
          sessionCookie.requestId = command.requestId;
        }

        return getSession({
          serviceUrl,
          sessionId: sessionCookie.id,
          sessionToken: sessionCookie.token,
        }).then(async (response) => {
          if (
            !response?.session ||
            !response.session.factors?.user?.loginName
          ) {
            throw new Error(await getServerTranslation("cookie.errors", "couldNotGetSessionOrLoginName"));
          }

          const { session } = response;
          const newCookie: CustomCookieData = {
            id: sessionCookie.id,
            token: updatedSession.sessionToken,
            creationTs: sessionCookie.creationTs,
            expirationTs: sessionCookie.expirationTs,
            // just overwrite the changeDate with the new one
            changeTs: updatedSession.details?.changeDate ? `${timestampMs(updatedSession.details.changeDate)}` : "",
            loginName: session.factors?.user?.loginName ?? "",
            organization: session.factors?.user?.organizationId ?? "",
          };

          if (sessionCookie.requestId) {
            newCookie.requestId = sessionCookie.requestId;
          }

          const securitySettings = await getSecuritySettings({ serviceUrl });
          const iFrameEnabled = !!securitySettings?.embeddedIframe?.enabled;

          return updateSessionCookie({
            id: sessionCookie.id,
            session: newCookie,
            iFrameEnabled,
          }).then(() => {
            return { challenges: updatedSession.challenges, ...session };
          });
        });
      } else {
        throw new Error(await getServerTranslation("cookie.errors", "sessionCouldNotBeSet"));
      }
    })
    .catch(passwordAttemptsHandler);
}
