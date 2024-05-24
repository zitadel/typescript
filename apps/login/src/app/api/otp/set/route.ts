import {
  SessionCookie,
  getMostRecentSessionCookie,
  getSessionCookieById,
  getSessionCookieByLoginName,
} from "@/utils/cookies";
import { setSessionAndUpdateCookie } from "@/utils/session";
import { PartialMessage } from "@zitadel/client";
import { Checks } from "@zitadel/proto/zitadel/session/v2beta/session_service_pb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body) {
    const { loginName, sessionId, organization, authRequestId, code, method } =
      body;

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
        : getMostRecentSessionCookie()
            .then((session) => {
              if (!session) {
                return Promise.reject("No recent session found");
              } else {
                return session;
              }
            })
            .catch((error) => {
              return Promise.reject(error);
            });

    return recentPromise
      .then((recent) => {
        const checks: PartialMessage<Checks> = {};

        if (method === "time-based") {
          checks.totp = {
            code,
          };
        } else if (method === "sms") {
          checks.otpSms = {
            code,
          };
        } else if (method === "email") {
          checks.otpEmail = {
            code,
          };
        }

        return setSessionAndUpdateCookie(
          recent,
          checks,
          undefined,
          authRequestId,
        ).then((session) => {
          return NextResponse.json({
            sessionId: session.id,
            factors: session.factors,
            challenges: session.challenges,
          });
        });
      })
      .catch((error) => {
        return NextResponse.json({ details: error }, { status: 500 });
      });
  } else {
    return NextResponse.json(
      { details: "Request body is missing" },
      { status: 400 },
    );
  }
}
