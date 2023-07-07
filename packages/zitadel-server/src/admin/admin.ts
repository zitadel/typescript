import { CompatServiceDefinition } from "nice-grpc-web/lib/service-definitions";

import { createChannel, createClientFactory } from "nice-grpc-web";
import {
  AdminServiceClient,
  AdminServiceDefinition,
} from "../proto/server/zitadel/admin";
import { authMiddleware } from "../middleware";

const createClient = <Client>(
  definition: CompatServiceDefinition,
  accessToken: string
) => {
  const channel = createChannel("https://invarum-8bucih.zitadel.app");
  return createClientFactory()
    .use(authMiddleware(accessToken))
    .create(definition, channel) as Client;
};

export const getAdmin = () =>
  createClient<AdminServiceClient>(
    AdminServiceDefinition as CompatServiceDefinition,
    "https://invarum-8bucih.zitadel.app"
  );
