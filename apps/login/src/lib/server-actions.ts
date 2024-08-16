"use server";

import { loadMostRecentSession } from "@zitadel/next";
import { sessionService, verifyTOTPRegistration } from "./zitadel";
import { headers } from "next/headers";

export async function verifyTOTP(
  code: string,
  loginName?: string,
  organization?: string,
) {
  const host = headers().get("X-Forwarded-Host");
  if (!host) {
    throw new Error("No host header found!");
  }

  return loadMostRecentSession(sessionService(host), {
    loginName,
    organization,
  }).then((session) => {
    if (session?.factors?.user?.id) {
      return verifyTOTPRegistration(host, code, session.factors.user.id);
    } else {
      throw Error("No user id found in session.");
    }
  });
}
