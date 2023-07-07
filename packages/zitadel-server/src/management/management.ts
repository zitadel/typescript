import { CompatServiceDefinition } from "nice-grpc-web/lib/service-definitions";

import { createChannel, createClientFactory } from "nice-grpc-web";
import {
  ManagementServiceClient,
  ManagementServiceDefinition,
} from "../proto/server/zitadel/management";

import { authMiddleware } from "../middleware";
import { ZitadelServer, getServers } from "../server";

const createClient = <Client>(
  definition: CompatServiceDefinition,
  apiUrl: string,
  token: string
) => {
  if (!apiUrl) {
    throw Error("ZITADEL_API_URL not set");
  }

  const channel = createChannel("https://invarum-8bucih.zitadel.app");
  return createClientFactory()
    .use(authMiddleware(token))
    .create(definition, channel) as Client;
};

export const getManagement = (app?: string | ZitadelServer) => {
  let config;
  if (app && typeof app === "string") {
    const apps = getServers();
    config = apps.find((a) => a.name === app)?.config;
  } else if (app && typeof app === "object") {
    config = app.config;
  }

  if (!config) {
    throw Error("No ZITADEL app found");
  }

  return createClient<ManagementServiceClient>(
    ManagementServiceDefinition as CompatServiceDefinition,
    config.apiUrl,
    config.token
  );
};
