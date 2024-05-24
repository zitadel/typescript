<<<<<<< HEAD
import { sessionService } from "@/lib/zitadel";
=======
import {
  server,
  deleteSession,
  getSession,
  getUserByID,
  listAuthenticationMethodTypes,
} from "@/lib/zitadel";
>>>>>>> main
import {
  SessionCookie,
  getMostRecentSessionCookie,
  getSessionCookieById,
  getSessionCookieByLoginName,
  removeSessionFromCookie,
} from "@/utils/cookies";
import {
  createSessionAndUpdateCookie,
  createSessionForIdpAndUpdateCookie,
  setSessionAndUpdateCookie,
} from "@/utils/session";
<<<<<<< HEAD
=======
import { Challenges, Checks, RequestChallenges } from "@zitadel/server";
>>>>>>> main
import { NextRequest, NextResponse } from "next/server";
import { RequestChallenges } from "@zitadel/proto/zitadel/session/v2beta/challenge_pb";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body) {
    const {
      userId,
      idpIntent,
      loginName,
      password,
      organization,
      authRequestId,
    } = body;

    if (userId && idpIntent) {
      return createSessionForIdpAndUpdateCookie(
        userId,
        idpIntent,
        organization,
        authRequestId,
      ).then((session) => {
        return NextResponse.json(session);
      });
    } else {
      return createSessionAndUpdateCookie(
        loginName,
        password,
        undefined,
        organization,
        authRequestId,
      ).then((session) => {
        return NextResponse.json(session);
      });
    }
  } else {
    return NextResponse.json(
      { details: "Session could not be created" },
      { status: 500 },
    );
  }
}

/**
 *
 * @param request password for the most recent session
 * @returns the updated most recent Session with the added password
 */
export async function PUT(request: NextRequest) {
  const body = await request.json();

<<<<<<< HEAD
  if (!body) {
=======
  if (body) {
    const {
      loginName,
      sessionId,
      organization,
      checks,
      authRequestId,
      challenges,
    } = body;

    const recentPromise: Promise<SessionCookie> = sessionId
      ? getSessionCookieById(sessionId).catch((error) => {
          return Promise.reject(error);
        })
      : loginName
        ? getSessionCookieByLoginName(loginName, organization).catch(
            (error) => {
              return Promise.reject(error);
            },
          )
        : getMostRecentSessionCookie().catch((error) => {
            return Promise.reject(error);
          });

    const domain: string = request.nextUrl.hostname;

    if (challenges && challenges.webAuthN && !challenges.webAuthN.domain) {
      challenges.webAuthN.domain = domain;
    }

    return recentPromise
      .then(async (recent) => {
        if (
          challenges &&
          (challenges.otpEmail === "" || challenges.otpSms === "")
        ) {
          const sessionResponse = await getSession(
            server,
            recent.id,
            recent.token,
          );
          if (sessionResponse && sessionResponse.session?.factors?.user?.id) {
            const userResponse = await getUserByID(
              sessionResponse.session.factors.user.id,
            );
            if (
              challenges.otpEmail === "" &&
              userResponse.user?.human?.email?.email
            ) {
              challenges.otpEmail = userResponse.user?.human?.email?.email;
            }

            if (
              challenges.otpSms === "" &&
              userResponse.user?.human?.phone?.phone
            ) {
              challenges.otpSms = userResponse.user?.human?.phone?.phone;
            }
          }
        }

        return setSessionAndUpdateCookie(
          recent,
          checks,
          challenges,
          authRequestId,
        ).then(async (session) => {
          // if password, check if user has MFA methods
          let authMethods;
          if (checks && checks.password && session.factors?.user?.id) {
            const response = await listAuthenticationMethodTypes(
              session.factors?.user?.id,
            );
            if (response.authMethodTypes && response.authMethodTypes.length) {
              authMethods = response.authMethodTypes;
            }
          }

          return NextResponse.json({
            sessionId: session.id,
            factors: session.factors,
            challenges: session.challenges,
            authMethods,
          });
        });
      })
      .catch((error) => {
        console.error(error);
        return NextResponse.json({ details: error }, { status: 500 });
      });
  } else {
>>>>>>> main
    return NextResponse.json(
      { details: "Request body is missing" },
      { status: 400 },
    );
  }

  const {
    loginName,
    sessionId,
    organization,
    password,
    webAuthN,
    authRequestId,
  } = body;
  const challenges: RequestChallenges = body.challenges;

  const sessionCookie = sessionId
    ? await getSessionCookieById(sessionId)
    : loginName
      ? await getSessionCookieByLoginName(loginName, organization)
      : await getMostRecentSessionCookie();

  if (!sessionCookie) {
    return NextResponse.json(
      { details: "No session cookie found" },
      { status: 404 },
    );
  }

  const domain: string = request.nextUrl.hostname;

  if (challenges && challenges.webAuthN && !challenges.webAuthN.domain) {
    challenges.webAuthN.domain = domain;
  }

  const session = await setSessionAndUpdateCookie(
    sessionCookie,
    password,
    webAuthN,
    challenges,
    authRequestId,
  );

  return NextResponse.json({
    sessionId: session.id,
    factors: session.factors,
    challenges: session.challenges,
  });
}

/**
 *
 * @param request id of the session to be deleted
 */
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const session = await getSessionCookieById(id);

    return sessionService
      .deleteSession({ sessionId: session.id, sessionToken: session.token })
      .then(() => {
        return removeSessionFromCookie(session)
          .then(() => {
            return NextResponse.json({});
          })
          .catch((error) => {
            return NextResponse.json(
              { details: "could not set cookie" },
              { status: 500 },
            );
          });
      })
      .catch((error) => {
        return NextResponse.json(
          { details: "could not delete session" },
          { status: 500 },
        );
      });
  } else {
    return NextResponse.error();
  }
}
