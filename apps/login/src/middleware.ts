import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getApiConfiguration } from "./lib/api";

export const config = {
  matcher: [
    "/.well-known/:path*",
    "/oauth/:path*",
    "/oidc/:path*",
    "/idps/callback/:path*",
  ],
};

export function middleware(request: NextRequest) {
  const apiConfig = getApiConfiguration(request.nextUrl.host);

  const INSTANCE_URL = apiConfig.url;
  const INSTANCE_HOST = `${INSTANCE_URL}`.replace("https://", "");
  const SERVICE_USER_ID = apiConfig.userId;

  // escape proxy if the target is the same
  if (INSTANCE_HOST === request.nextUrl.host) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-zitadel-login-client", SERVICE_USER_ID);

  // this is a workaround for the next.js server not forwarding the host header
  // requestHeaders.set("x-zitadel-forwarded", `host="${request.nextUrl.host}"`);
  requestHeaders.set("x-zitadel-public-host", `${request.nextUrl.host}`);

  // this is a workaround for the next.js server not forwarding the host header
  requestHeaders.set("x-zitadel-instance-host", INSTANCE_HOST);

  const responseHeaders = new Headers();
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Access-Control-Allow-Headers", "*");

  request.nextUrl.href = `${INSTANCE_URL}${request.nextUrl.pathname}${request.nextUrl.search}`;
  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
    headers: responseHeaders,
  });
}
