"use server";

import { createUserServiceClient } from "@zitadel/client/v2";
import { createServerTransport } from "@zitadel/node";
import { getSessionCookieById } from "./cookies";

const transport = (url: string, token: string) =>
  createServerTransport(token, {
    baseUrl: url,
    httpVersion: "2",
  });

const userService = (sessionId: string) => {
  return getSessionCookieById({ sessionId }).then((session) => {
    return createUserServiceClient(
      // TODO: get baseurl dynamically
      transport(process.env.ZITADEL_API_URL, session.token),
    );
  });
};

export async function setPassword({
  sessionId,
  userId,
  password,
}: {
  sessionId: string;
  userId: string;
  password: string;
}) {
  return (await userService(sessionId)).setPassword(
    {
      userId,
      newPassword: { password, changeRequired: false },
    },
    {},
  );
}
