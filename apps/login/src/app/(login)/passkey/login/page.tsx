import { getBrandingSettings, getSession, sessionService } from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import LoginPasskey from "@/ui/LoginPasskey";
import UserAvatar from "@/ui/UserAvatar";
import { getSessionCookieById, loadMostRecentSession } from "@zitadel/next";
import { headers } from "next/headers";

const title = "Authenticate with a passkey";
const description =
  "Your device will ask for your fingerprint, face, or screen lock";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const host = headers().get("X-Forwarded-Host");
  if (!host) {
    throw new Error("No host header found!");
  }

  const { loginName, altPassword, authRequestId, organization, sessionId } =
    searchParams;

  const sessionFactors = sessionId
    ? await loadSessionById(host, sessionId, organization)
    : await loadMostRecentSession(sessionService(host), {
        loginName,
        organization,
      });

  async function loadSessionById(
    host: string,
    sessionId: string,
    organization?: string,
  ) {
    const recent = await getSessionCookieById({ sessionId, organization });
    return getSession(host, recent.id, recent.token).then((response) => {
      if (response?.session) {
        return response.session;
      }
    });
  }

  const branding = await getBrandingSettings(host, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>{title}</h1>

        {sessionFactors && (
          <UserAvatar
            loginName={loginName ?? sessionFactors.factors?.user?.loginName}
            displayName={sessionFactors.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}
        <p className="ztdl-p mb-6 block">{description}</p>

        {!(loginName || sessionId) && (
          <Alert>Provide your active session as loginName param</Alert>
        )}

        {(loginName || sessionId) && (
          <LoginPasskey
            loginName={loginName}
            sessionId={sessionId}
            authRequestId={authRequestId}
            altPassword={altPassword === "true"}
            organization={organization}
          />
        )}
      </div>
    </DynamicTheme>
  );
}
