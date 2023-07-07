import { CompatServiceDefinition } from "nice-grpc-web/lib/service-definitions";
import { createChannel, createClientFactory } from "nice-grpc-web";
import {
  AuthServiceClient,
  AuthServiceDefinition,
  GetMyUserResponse,
} from "../proto/server/zitadel/auth";
import { ZitadelServer } from "../server";
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

export async function getAuth(app?: ZitadelServer): Promise<AuthServiceClient> {
  return createClient<AuthServiceClient>(
    AuthServiceDefinition as CompatServiceDefinition,
    ""
  );
}

export async function getMyUser(): Promise<GetMyUserResponse> {
  const auth = await getAuth();
  const response = await auth.getMyUser({});
  return response;
}
