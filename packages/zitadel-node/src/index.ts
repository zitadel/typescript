import { createGrpcTransport, GrpcTransportOptions } from "@connectrpc/connect-node";
import { NewAuthorizationBearerInterceptor } from "@zitadel/client";
import { importPKCS8, SignJWT } from "jose";

/**
 * Create a server transport with the given token and configuration options.
 * @param token
 * @param opts
 */
export function createServerTransport(token: string, opts: GrpcTransportOptions) {
  return createGrpcTransport({
    ...opts,
    interceptors: [...(opts.interceptors || []), NewAuthorizationBearerInterceptor(token)],
  });
}

export async function newSystemToken() {
  return await new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .setIssuer(process.env.SYSTEM_USER_ID ?? "")
    .setSubject(process.env.SYSTEM_USER_ID ?? "")
    .setAudience(process.env.AUDIENCE ?? "")
    .sign(await importPKCS8(process.env.SYSTEM_USER_PRIVATE_KEY ?? "", "RS256"));
}
