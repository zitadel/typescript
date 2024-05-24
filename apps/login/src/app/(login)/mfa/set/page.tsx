<<<<<<< HEAD
"use client";
import { Button, ButtonVariants } from "@/ui/Button";
import { TextInput } from "@/ui/Input";
import UserAvatar from "@/ui/UserAvatar";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Password</h1>
      <p className="ztdl-p mb-6 block">Enter your password.</p>

      <UserAvatar
        showDropdown
        displayName="Max Peintner"
        loginName="max@zitadel.com"
      ></UserAvatar>
      <div className="w-full">
        <TextInput type="password" label="Password" />
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <Button
          onClick={() => router.back()}
          variant={ButtonVariants.Secondary}
        >
          back
        </Button>
        <Button variant={ButtonVariants.Primary}>continue</Button>
      </div>
    </div>
=======
import {
  getBrandingSettings,
  getLoginSettings,
  getSession,
  getUserByID,
  listAuthenticationMethodTypes,
  server,
} from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import ChooseSecondFactorToSetup from "@/ui/ChooseSecondFactorToSetup";
import DynamicTheme from "@/ui/DynamicTheme";
import UserAvatar from "@/ui/UserAvatar";
import {
  getMostRecentCookieWithLoginname,
  getSessionCookieById,
} from "@/utils/cookies";
import { user } from "@zitadel/server";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const { loginName, checkAfter, authRequestId, organization, sessionId } =
    searchParams;

  const sessionWithData = sessionId
    ? await loadSessionById(sessionId, organization)
    : await loadSessionByLoginname(loginName, organization);

  async function loadSessionByLoginname(
    loginName?: string,
    organization?: string,
  ) {
    const recent = await getMostRecentCookieWithLoginname(
      loginName,
      organization,
    );
    return getSession(server, recent.id, recent.token).then((response) => {
      if (response?.session && response.session.factors?.user?.id) {
        const userId = response.session.factors.user.id;
        return listAuthenticationMethodTypes(userId).then((methods) => {
          return getUserByID(userId).then((user) => {
            return {
              factors: response.session?.factors,
              authMethods: methods.authMethodTypes ?? [],
              phoneVerified: user.user?.human?.phone?.isVerified ?? false,
              emailVerified: user.user?.human?.email?.isVerified ?? false,
            };
          });
        });
      }
    });
  }

  async function loadSessionById(sessionId: string, organization?: string) {
    const recent = await getSessionCookieById(sessionId, organization);
    return getSession(server, recent.id, recent.token).then((response) => {
      if (response?.session && response.session.factors?.user?.id) {
        const userId = response.session.factors.user.id;
        return listAuthenticationMethodTypes(userId).then((methods) => {
          return getUserByID(userId).then((user) => {
            return {
              factors: response.session?.factors,
              authMethods: methods.authMethodTypes ?? [],
              phoneVerified: user.user?.human?.phone?.isVerified ?? false,
              emailVerified: user.user?.human?.email?.isVerified ?? false,
            };
          });
        });
      }
    });
  }

  const branding = await getBrandingSettings(server, organization);
  const loginSettings = await getLoginSettings(server, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Set up 2-Factor</h1>

        <p className="ztdl-p">Choose one of the following second factors.</p>

        {sessionWithData && (
          <UserAvatar
            loginName={loginName ?? sessionWithData.factors?.user?.loginName}
            displayName={sessionWithData.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}

        {!(loginName || sessionId) && (
          <Alert>Provide your active session as loginName param</Alert>
        )}

        {loginSettings && sessionWithData ? (
          <ChooseSecondFactorToSetup
            loginName={loginName}
            sessionId={sessionId}
            authRequestId={authRequestId}
            organization={organization}
            loginSettings={loginSettings}
            userMethods={sessionWithData.authMethods ?? []}
            phoneVerified={sessionWithData.phoneVerified ?? false}
            emailVerified={sessionWithData.emailVerified ?? false}
            checkAfter={checkAfter === "true"}
          ></ChooseSecondFactorToSetup>
        ) : (
          <Alert>No second factors available to setup.</Alert>
        )}
      </div>
    </DynamicTheme>
>>>>>>> main
  );
}
