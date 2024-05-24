<<<<<<< HEAD
import { getBrandingSettings, sessionService } from "@/lib/zitadel";
=======
import {
  getBrandingSettings,
  getLoginSettings,
  getSession,
  server,
} from "@/lib/zitadel";
>>>>>>> main
import Alert from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import PasswordForm from "@/ui/PasswordForm";
import UserAvatar from "@/ui/UserAvatar";
<<<<<<< HEAD
import { getMostRecentCookieWithLoginName } from "@/utils/cookies";

export default async function Page(props: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const recent = await getMostRecentCookieWithLoginName(
    props.searchParams.loginName,
    props.searchParams.organization,
  );

  const response = await sessionService.getSession({
    sessionId: recent.id,
    sessionToken: recent.token,
  });

  const branding = await getBrandingSettings(props.searchParams.organization);

  if (!response.session) {
    throw new Error("Session not found");
  }

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>{response.session.factors?.user?.displayName ?? "Password"}</h1>
        <p className="ztdl-p mb-6 block">Enter your password.</p>

        <UserAvatar
          loginName={
            props.searchParams.loginName ??
            response.session.factors?.user?.loginName
          }
          displayName={response.session.factors?.user?.displayName}
          showDropdown
        ></UserAvatar>

        <PasswordForm
          loginName={props.searchParams.loginName}
          authRequestId={props.searchParams.authRequestId}
          organization={props.searchParams.organization}
          promptPasswordless={props.searchParams.promptPasswordless === "true"}
          isAlternative={props.searchParams.alt === "true"}
=======
import { getMostRecentCookieWithLoginname } from "@/utils/cookies";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const { loginName, organization, promptPasswordless, authRequestId, alt } =
    searchParams;
  const sessionFactors = await loadSession(loginName, organization);

  async function loadSession(loginName?: string, organization?: string) {
    const recent = await getMostRecentCookieWithLoginname(
      loginName,
      organization,
    );

    return getSession(server, recent.id, recent.token).then((response) => {
      if (response?.session) {
        return response.session;
      }
    });
  }

  const branding = await getBrandingSettings(server, organization);
  const loginSettings = await getLoginSettings(server, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>{sessionFactors?.factors?.user?.displayName ?? "Password"}</h1>
        <p className="ztdl-p mb-6 block">Enter your password.</p>

        {!sessionFactors && (
          <div className="py-4">
            <Alert>
              Could not get the context of the user. Make sure to enter the
              username first or provide a loginName as searchParam.
            </Alert>
          </div>
        )}

        {sessionFactors && (
          <UserAvatar
            loginName={loginName ?? sessionFactors.factors?.user?.loginName}
            displayName={sessionFactors.factors?.user?.displayName}
            showDropdown
            searchParams={searchParams}
          ></UserAvatar>
        )}

        <PasswordForm
          loginName={loginName}
          authRequestId={authRequestId}
          organization={organization}
          loginSettings={loginSettings}
          promptPasswordless={promptPasswordless === "true"}
          isAlternative={alt === "true"}
>>>>>>> main
        />
      </div>
    </DynamicTheme>
  );
}
