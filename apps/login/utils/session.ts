import { createSession, getSession, server, setSession } from "#/lib/zitadel";
import {
  SessionCookie,
  addSessionToCookie,
  updateSessionCookie,
} from "./cookies";
import { ChallengeKind, Session, Challenges } from "@zitadel/server";

export async function createSessionAndUpdateCookie(
  loginName: string,
  password: string | undefined,
  domain: string,
  challenges: ChallengeKind[] | undefined
): Promise<Session> {
  const createdSession = await createSession(
    server,
    loginName,
    domain,
    password,
    challenges
  );

  if (createdSession) {
    return getSession(
      server,
      createdSession.sessionId,
      createdSession.sessionToken
    ).then((response) => {
      if (response?.session && response.session?.factors?.user?.loginName) {
        const sessionCookie: SessionCookie = {
          id: createdSession.sessionId,
          token: createdSession.sessionToken,
          changeDate: response.session.changeDate?.toString() ?? "",
          loginName: response.session?.factors?.user?.loginName ?? "",
        };

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
}

export type SessionWithChallenges = Session & {
  challenges: Challenges | undefined;
};

export async function setSessionAndUpdateCookie(
  sessionId: string,
  sessionToken: string,
  loginName: string,
  password: string | undefined,
  passkey: { credentialAssertionData: any } | undefined,
  domain: string | undefined,
  challenges: ChallengeKind[] | undefined
): Promise<SessionWithChallenges> {
  return setSession(
    server,
    sessionId,
    sessionToken,
    domain,
    password,
    passkey,
    challenges
  ).then((updatedSession) => {
    if (updatedSession) {
      const sessionCookie: SessionCookie = {
        id: sessionId,
        token: updatedSession.sessionToken,
        changeDate: updatedSession.details?.changeDate?.toString() ?? "",
        loginName: loginName,
      };

      return getSession(server, sessionCookie.id, sessionCookie.token).then(
        (response) => {
          if (response?.session && response.session.factors?.user?.loginName) {
            const { session } = response;
            const newCookie: SessionCookie = {
              id: sessionCookie.id,
              token: updatedSession.sessionToken,
              changeDate: session.changeDate?.toString() ?? "",
              loginName: session.factors?.user?.loginName ?? "",
            };

            return updateSessionCookie(sessionCookie.id, newCookie).then(() => {
              return { challenges: updatedSession.challenges, ...session };
            });
          } else {
            throw "could not get session or session does not have loginName";
          }
        }
      );
    } else {
      throw "Session not be set";
    }
  });
}
