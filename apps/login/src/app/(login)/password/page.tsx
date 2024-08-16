import {
  getBrandingSettings,
  getLoginSettings,
  sessionService,
} from "@/lib/zitadel";
import Alert from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import PasswordForm from "@/ui/PasswordForm";
import UserAvatar from "@/ui/UserAvatar";
import { loadMostRecentSession } from "@zitadel/next";
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

  const { loginName, organization, promptPasswordless, authRequestId, alt } =
    searchParams;

  const sessionFactors = await loadMostRecentSession(sessionService(host), {
    loginName,
    organization,
  });

  const branding = await getBrandingSettings(host, organization);
  const loginSettings = await getLoginSettings(host, organization);

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
        />
      </div>
    </DynamicTheme>
  );
}
