import { getBrandingSettings, sessionService } from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import PasswordForm from "@/ui/PasswordForm";
import UserAvatar from "@/ui/UserAvatar";
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
        />
      </div>
    </DynamicTheme>
  );
}
