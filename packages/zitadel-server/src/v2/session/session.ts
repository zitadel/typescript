import { CompatServiceDefinition } from "nice-grpc-web/lib/service-definitions";

import {
  SessionServiceClient,
  SessionServiceDefinition,
} from "../../proto/server/zitadel/session/v2alpha/session_service";

import { ZitadelServer, createClient, getServers } from "../../server";

export const getSession = (server?: string | ZitadelServer) => {
  let config;
  if (server && typeof server === "string") {
    const apps = getServers();
    config = apps.find((a) => a.name === server)?.config;
  } else if (server && typeof server === "object") {
    config = server.config;
  }

  if (!config) {
    throw Error("No ZITADEL server found");
  }

  return createClient<SessionServiceClient>(
    SessionServiceDefinition as CompatServiceDefinition,
    config.apiUrl,
    config.token
  );
};
