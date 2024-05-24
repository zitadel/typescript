"use server";

import {
<<<<<<< HEAD
  createSessionForLoginname,
  createSessionForUserIdAndIdpIntent,
  sessionService,
=======
  createSessionFromChecks,
  createSessionForUserIdAndIdpIntent,
  getSession,
  server,
  setSession,
>>>>>>> main
} from "@/lib/zitadel";
import {
  SessionCookie,
  addSessionToCookie,
  updateSessionCookie,
} from "./cookies";
<<<<<<< HEAD
import { PlainMessage, PartialMessage } from "@zitadel/client";
import {
  Challenges,
  RequestChallenges,
} from "@zitadel/proto/zitadel/session/v2beta/challenge_pb";
import { Session } from "@zitadel/proto/zitadel/session/v2beta/session_pb";
import { CheckWebAuthN } from "@zitadel/proto/zitadel/session/v2beta/session_service_pb";
=======
import {
  Session,
  Challenges,
  RequestChallenges,
  Checks,
} from "@zitadel/server";
>>>>>>> main

export async function createSessionAndUpdateCookie(
  loginName: string,
  password: string | undefined,
  challenges: RequestChallenges | undefined,
  organization?: string,
  authRequestId?: string,
): Promise<Session> {
<<<<<<< HEAD
  const createdSession = await createSessionForLoginname(
    loginName,
    password,
=======
  const createdSession = await createSessionFromChecks(
    server,
    password
      ? {
          user: { loginName },
          password: { password },
          // totp: { code: totpCode },
        }
      : { user: { loginName } },
>>>>>>> main
    challenges,
  );

  if (createdSession) {
<<<<<<< HEAD
    return sessionService
      .getSession({
        sessionId: createdSession.sessionId,
        sessionToken: createdSession.sessionToken,
      })
      .then((response) => {
        if (response?.session && response.session?.factors?.user?.loginName) {
          const sessionCookie: SessionCookie = {
            id: createdSession.sessionId,
            token: createdSession.sessionToken,
            creationDate: `${response.session.creationDate?.toDate().getTime() ?? ""}`,
            expirationDate: `${response.session.expirationDate?.toDate().getTime() ?? ""}`,
            changeDate: `${response.session.changeDate?.toDate().getTime() ?? ""}`,
            loginName: response.session.factors.user.loginName ?? "",
            organization: response.session.factors.user.organizationId ?? "",
          };

          if (authRequestId) {
            sessionCookie.authRequestId = authRequestId;
          }

          if (organization) {
            sessionCookie.organization = organization;
          }

          return addSessionToCookie(sessionCookie).then(() => {
            return response.session as Session;
          });
        } else {
          throw "could not get session or session does not have loginName";
        }
      });
=======
    return getSession(
      server,
      createdSession.sessionId,
      createdSession.sessionToken,
    ).then((response) => {
      if (response?.session && response.session?.factors?.user?.loginName) {
        const sessionCookie: SessionCookie = {
          id: createdSession.sessionId,
          token: createdSession.sessionToken,
          creationDate: `${response.session.creationDate?.getTime() ?? ""}`,
          expirationDate: `${response.session.expirationDate?.getTime() ?? ""}`,
          changeDate: `${response.session.changeDate?.getTime() ?? ""}`,
          loginName: response.session.factors.user.loginName ?? "",
          organization: response.session.factors.user.organizationId ?? "",
        };

        if (authRequestId) {
          sessionCookie.authRequestId = authRequestId;
        }

        if (organization) {
          sessionCookie.organization = organization;
        }

        return addSessionToCookie(sessionCookie).then(() => {
          return response.session as Session;
        });
      } else {
        throw "could not get session or session does not have loginName";
      }
    });
>>>>>>> main
  } else {
    throw "Could not create session";
  }
}

export async function createSessionForUserIdAndUpdateCookie(
  userId: string,
  password: string | undefined,
  challenges: RequestChallenges | undefined,
  authRequestId: string | undefined,
<<<<<<< HEAD
) {
  const createdSession = await sessionService.createSession({
    checks: {
      user: {
        search: {
          case: "userId",
          value: userId,
        },
      },
      password: password ? { password } : undefined,
    },
    challenges,
    lifetime: {
      seconds: BigInt(300),
      nanos: 0,
    },
  });

  if (!createdSession) {
    throw "Could not create session";
  }

  const response = await sessionService.getSession({
    sessionId: createdSession.sessionId,
    sessionToken: createdSession.sessionToken,
  });

  if (!response.session?.factors?.user?.loginName) {
    throw "could not get session or session does not have loginName";
  }

  const sessionCookie: SessionCookie = {
    id: createdSession.sessionId,
    token: createdSession.sessionToken,
    creationDate: `${response.session.creationDate?.toDate().getTime() ?? ""}`,
    expirationDate: `${response.session.expirationDate?.toDate().getTime() ?? ""}`,
    changeDate: `${response.session.changeDate?.toDate().getTime() ?? ""}`,
    loginName: response.session.factors.user.loginName ?? "",
  };

  if (authRequestId) {
    sessionCookie.authRequestId = authRequestId;
  }

  if (response.session.factors.user.organizationId) {
    sessionCookie.organization = response.session.factors.user.organizationId;
  }

  await addSessionToCookie(sessionCookie);

  console.log(response.session);

  return response.session;
=======
): Promise<Session> {
  const createdSession = await createSessionFromChecks(
    server,
    password
      ? {
          user: { userId },
          password: { password },
          // totp: { code: totpCode },
        }
      : { user: { userId } },
    challenges,
  );

  if (createdSession) {
    return getSession(
      server,
      createdSession.sessionId,
      createdSession.sessionToken,
    ).then((response) => {
      if (response?.session && response.session?.factors?.user?.loginName) {
        const sessionCookie: SessionCookie = {
          id: createdSession.sessionId,
          token: createdSession.sessionToken,
          creationDate: `${response.session.creationDate?.getTime() ?? ""}`,
          expirationDate: `${response.session.expirationDate?.getTime() ?? ""}`,
          changeDate: `${response.session.changeDate?.getTime() ?? ""}`,
          loginName: response.session.factors.user.loginName ?? "",
        };

        if (authRequestId) {
          sessionCookie.authRequestId = authRequestId;
        }

        if (response.session.factors.user.organizationId) {
          sessionCookie.organization =
            response.session.factors.user.organizationId;
        }

        return addSessionToCookie(sessionCookie).then(() => {
          return response.session as Session;
        });
      } else {
        throw "could not get session or session does not have loginName";
      }
    });
  } else {
    throw "Could not create session";
  }
>>>>>>> main
}

export async function createSessionForIdpAndUpdateCookie(
  userId: string,
  idpIntent: {
    idpIntentId?: string | undefined;
    idpIntentToken?: string | undefined;
  },
  organization: string | undefined,
  authRequestId: string | undefined,
): Promise<Session> {
  const createdSession = await createSessionForUserIdAndIdpIntent(
<<<<<<< HEAD
=======
    server,
>>>>>>> main
    userId,
    idpIntent,
  );

  if (createdSession) {
<<<<<<< HEAD
    return sessionService
      .getSession({
        sessionId: createdSession.sessionId,
        sessionToken: createdSession.sessionToken,
      })
      .then((response) => {
        if (response?.session && response.session?.factors?.user?.loginName) {
          const sessionCookie: SessionCookie = {
            id: createdSession.sessionId,
            token: createdSession.sessionToken,
            creationDate: `${response.session.creationDate?.toDate().getTime() ?? ""}`,
            expirationDate: `${response.session.expirationDate?.toDate().getTime() ?? ""}`,
            changeDate: `${response.session.changeDate?.toDate().getTime() ?? ""}`,
            loginName: response.session.factors.user.loginName ?? "",
            organization: response.session.factors.user.organizationId ?? "",
          };

          if (authRequestId) {
            sessionCookie.authRequestId = authRequestId;
          }

          if (organization) {
            sessionCookie.organization = organization;
          }

          return addSessionToCookie(sessionCookie).then(() => {
            return response.session as Session;
          });
        } else {
          throw "could not get session or session does not have loginName";
        }
      });
=======
    return getSession(
      server,
      createdSession.sessionId,
      createdSession.sessionToken,
    ).then((response) => {
      if (response?.session && response.session?.factors?.user?.loginName) {
        const sessionCookie: SessionCookie = {
          id: createdSession.sessionId,
          token: createdSession.sessionToken,
          creationDate: `${response.session.creationDate?.getTime() ?? ""}`,
          expirationDate: `${response.session.expirationDate?.getTime() ?? ""}`,
          changeDate: `${response.session.changeDate?.getTime() ?? ""}`,
          loginName: response.session.factors.user.loginName ?? "",
          organization: response.session.factors.user.organizationId ?? "",
        };

        if (authRequestId) {
          sessionCookie.authRequestId = authRequestId;
        }

        if (organization) {
          sessionCookie.organization = organization;
        }

        return addSessionToCookie(sessionCookie).then(() => {
          return response.session as Session;
        });
      } else {
        throw "could not get session or session does not have loginName";
      }
    });
>>>>>>> main
  } else {
    throw "Could not create session";
  }
}

<<<<<<< HEAD
export type SessionWithChallenges = PlainMessage<Session> & {
=======
export type SessionWithChallenges = Session & {
>>>>>>> main
  challenges: Challenges | undefined;
};

export async function setSessionAndUpdateCookie(
  recentCookie: SessionCookie,
<<<<<<< HEAD
  password: string | undefined,
  webAuthN: PartialMessage<CheckWebAuthN> | undefined,
  challenges: RequestChallenges | undefined,
  authRequestId: string | undefined,
): Promise<SessionWithChallenges> {
  const updatedSession = await sessionService.setSession({
    sessionId: recentCookie.id,
    sessionToken: recentCookie.token,
    challenges,
    checks: {
      password: password ? { password } : undefined,
      webAuthN: webAuthN,
    },
  });

  if (updatedSession) {
    const sessionCookie: SessionCookie = {
      id: recentCookie.id,
      token: updatedSession.sessionToken,
      creationDate: recentCookie.creationDate,
      expirationDate: recentCookie.expirationDate,
      changeDate: `${updatedSession.details?.changeDate?.toDate().getTime() ?? ""}`,
      loginName: recentCookie.loginName,
      organization: recentCookie.organization,
    };

    if (authRequestId) {
      sessionCookie.authRequestId = authRequestId;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: remove
    const response = await sessionService.getSession({
      sessionId: sessionCookie.id,
      sessionToken: sessionCookie.token,
    });

    if (response?.session && response.session.factors?.user?.loginName) {
      const { session } = response;
      const newCookie: SessionCookie = {
        id: sessionCookie.id,
        token: updatedSession.sessionToken,
        creationDate: sessionCookie.creationDate,
        expirationDate: sessionCookie.expirationDate,
        changeDate: `${session.changeDate?.toDate().getTime() ?? ""}`,
        loginName: session.factors?.user?.loginName ?? "",
        organization: session.factors?.user?.organizationId ?? "",
      };

      if (sessionCookie.authRequestId) {
        newCookie.authRequestId = sessionCookie.authRequestId;
      }

      await updateSessionCookie(sessionCookie.id, newCookie);
      return {
        challenges: updatedSession.challenges,
        ...session,
      };
    } else {
      throw "could not get session or session does not have loginName";
    }
  } else {
    throw "Session not be set";
  }
=======
  checks: Checks,
  challenges: RequestChallenges | undefined,
  authRequestId: string | undefined,
): Promise<SessionWithChallenges> {
  return setSession(
    server,
    recentCookie.id,
    recentCookie.token,
    challenges,
    checks,
  ).then((updatedSession) => {
    if (updatedSession) {
      const sessionCookie: SessionCookie = {
        id: recentCookie.id,
        token: updatedSession.sessionToken,
        creationDate: recentCookie.creationDate,
        expirationDate: recentCookie.expirationDate,
        changeDate: `${updatedSession.details?.changeDate?.getTime() ?? ""}`,
        loginName: recentCookie.loginName,
        organization: recentCookie.organization,
      };

      if (authRequestId) {
        sessionCookie.authRequestId = authRequestId;
      }

      return getSession(server, sessionCookie.id, sessionCookie.token).then(
        (response) => {
          if (response?.session && response.session.factors?.user?.loginName) {
            const { session } = response;
            const newCookie: SessionCookie = {
              id: sessionCookie.id,
              token: updatedSession.sessionToken,
              creationDate: sessionCookie.creationDate,
              expirationDate: sessionCookie.expirationDate,
              changeDate: `${session.changeDate?.getTime() ?? ""}`,
              loginName: session.factors?.user?.loginName ?? "",
              organization: session.factors?.user?.organizationId ?? "",
            };

            if (sessionCookie.authRequestId) {
              newCookie.authRequestId = sessionCookie.authRequestId;
            }

            return updateSessionCookie(sessionCookie.id, newCookie).then(() => {
              return { challenges: updatedSession.challenges, ...session };
            });
          } else {
            throw "could not get session or session does not have loginName";
          }
        },
      );
    } else {
      throw "Session not be set";
    }
  });
>>>>>>> main
}
