<<<<<<< HEAD
import { sessionService, userService } from "@/lib/zitadel";
=======
import { getSession, server, verifyPasskeyRegistration } from "@/lib/zitadel";
>>>>>>> main
import { getSessionCookieById } from "@/utils/cookies";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (body) {
    let { passkeyId, passkeyName, publicKeyCredential, sessionId } = body;

    if (!!!passkeyName) {
      const { browser, device, os } = userAgent(request);
      passkeyName = `${device.vendor ?? ""} ${device.model ?? ""}${
        device.vendor || device.model ? ", " : ""
      }${os.name}${os.name ? ", " : ""}${browser.name}`;
    }
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

    const userId = session?.session?.factors?.user?.id;

    if (userId) {
<<<<<<< HEAD
      return userService
        .verifyPasskeyRegistration({
          passkeyId,
          passkeyName,
          publicKeyCredential,
          userId,
        })
=======
      return verifyPasskeyRegistration(
        server,
        passkeyId,
        passkeyName,
        publicKeyCredential,
        userId,
      )
>>>>>>> main
        .then((resp) => {
          return NextResponse.json(resp);
        })
        .catch((error) => {
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
