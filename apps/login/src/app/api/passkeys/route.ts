<<<<<<< HEAD
import { sessionService, userService } from "@/lib/zitadel";
=======
import {
  createPasskeyRegistrationLink,
  getSession,
  registerPasskey,
  server,
} from "@/lib/zitadel";
>>>>>>> main
import { getSessionCookieById } from "@/utils/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body) {
    const { sessionId } = body;

    const sessionCookie = await getSessionCookieById(sessionId);

<<<<<<< HEAD
    const session = await sessionService.getSession({
      sessionId: sessionCookie.id,
      sessionToken: sessionCookie.token,
    });
=======
    const session = await getSession(
      server,
      sessionCookie.id,
      sessionCookie.token,
    );
>>>>>>> main

    const domain: string = request.nextUrl.hostname;

    const userId = session?.session?.factors?.user?.id;

    if (userId) {
      // TODO: add org context
      return userService
        .createPasskeyRegistrationLink({
          userId,
          medium: {
            case: "returnCode",
            value: {},
          },
        })
        .then((resp) => {
          const code = resp.code;
          return userService
            .registerPasskey({
              userId,
              code,
              domain,
              // authenticator:
            })
            .then((resp) => {
              return NextResponse.json(resp);
            });
        })
        .catch((error) => {
          console.error("error on creating passkey registration link");
          return NextResponse.json(error, { status: 500 });
        });
    } else {
      return NextResponse.json(
        { details: "could not get session" },
        { status: 500 },
      );
    }
  } else {
    return NextResponse.json({}, { status: 400 });
  }
}
