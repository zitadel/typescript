import {
  getBrandingSettings,
  getSession,
  listAuthenticationMethodTypes,
  sessionService,
} from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import BackButton from "@/ui/BackButton";
import ChooseSecondFactor from "@/ui/ChooseSecondFactor";
import DynamicTheme from "@/ui/DynamicTheme";
import UserAvatar from "@/ui/UserAvatar";
import { getSessionCookieById, loadMostRecentSession } from "@zitadel/next";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const host = headers().get("host");
  if (!host) {
    throw new Error("No host header found!");
  }

  const { loginName, checkAfter, authRequestId, organization, sessionId } =
    searchParams;

  const sessionFactors = sessionId
    ? await loadSessionById(host, sessionId, organization)
    : await loadSessionByLoginname(host, loginName, organization);

  async function loadSessionByLoginname(
    host: string,
    loginName?: string,
    organization?: string,
  ) {
    return loadMostRecentSession(sessionService, {
      loginName,
      organization,
    }).then((session) => {
      if (session && session.factors?.user?.id) {
        return listAuthenticationMethodTypes(
          host,
          session.factors.user.id,
        ).then((methods) => {
          return {
            factors: session?.factors,
            authMethods: methods.authMethodTypes ?? [],
          };
        });
      }
    });
  }

  async function loadSessionById(
    host: string,
    sessionId: string,
    organization?: string,
  ) {
    const recent = await getSessionCookieById({ sessionId, organization });
    return getSession(host, recent.id, recent.token).then((response) => {
      if (response?.session && response.session.factors?.user?.id) {
        return listAuthenticationMethodTypes(
          host,
          response.session.factors.user.id,
        ).then((methods) => {
          return {
            factors: response.session?.factors,
            authMethods: methods.authMethodTypes ?? [],
          };
        });
      }
    });
  }

  const branding = await getBrandingSettings(host, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Verify 2-Factor</h1>

        <p className="ztdl-p">Choose one of the following second factors.</p>

        {sessionFactors && (
          <UserAvatar
            loginName={loginName ?? sessionFactors.factors?.user?.loginName}
            displayName={sessionFactors.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}

        {!(loginName || sessionId) && (
          <Alert>Provide your active session as loginName param</Alert>
        )}

        {sessionFactors ? (
          <ChooseSecondFactor
            loginName={loginName}
            sessionId={sessionId}
            authRequestId={authRequestId}
            organization={organization}
            userMethods={sessionFactors.authMethods ?? []}
          ></ChooseSecondFactor>
        ) : (
          <Alert>No second factors available to setup.</Alert>
        )}

        <div className="mt-8 flex w-full flex-row items-center">
          <BackButton />
          <span className="flex-grow"></span>
        </div>
      </div>
    </DynamicTheme>
  );
}
