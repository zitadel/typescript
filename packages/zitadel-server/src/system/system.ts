import { CompatServiceDefinition } from "nice-grpc-web/lib/service-definitions";
import { importPKCS8, SignJWT } from "jose";

import { createChannel, createClientFactory } from "nice-grpc-web";
import {
  SystemServiceClient,
  SystemServiceDefinition,
} from "../proto/server/zitadel/system";
import { authMiddleware } from "../middleware";

const createSystemClient = <Client>(
  definition: CompatServiceDefinition,
  accessToken: string
) => {
  const channel = createChannel("https://invarum-8bucih.zitadel.app");
  return createClientFactory()
    .use(authMiddleware(accessToken))
    .create(definition, channel) as Client;
};

export const getSystem = async () => {
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .setIssuer("")
    .setSubject("")
    .setAudience("")
    .sign(await importPKCS8("", "RS256"));

  return createSystemClient<SystemServiceClient>(
    SystemServiceDefinition as CompatServiceDefinition,
    token
  );
};
