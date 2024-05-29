import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import UsernameForm from "@/ui/UsernameForm";
import { settingsService } from "@/lib/zitadel2";
import { makeReqCtx } from "@zitadel/client2/v2beta";
import { toPlainMessage } from "@zitadel/client2";
import { BrandingSettings } from "@zitadel/server";

export default async function Page(props: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const loginName = props.searchParams?.loginName;
  const authRequestId = props.searchParams?.authRequestId;
  const organization = props.searchParams?.organization;
  const submit: boolean = props.searchParams?.submit === "true";

  const loginSettings = toPlainMessage(
    await settingsService.getLoginSettings({ ctx: makeReqCtx(organization) }),
  );
  const legalAndSupportSettings =
    await settingsService.getLegalAndSupportSettings({
      ctx: makeReqCtx(organization),
    });
  const activeIdentityProviders =
    await settingsService.getActiveIdentityProviders({
      ctx: makeReqCtx(organization),
    });

  const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const brandingSettings = toPlainMessage(
    await settingsService.getBrandingSettings({
      ctx: makeReqCtx(organization),
    }),
  );

  // TODO: Remove type casting
  // - Why is this cast necessary?
  // It will require to fix everywhere we use `DynamicTheme` component, incremental update
  const branding = brandingSettings.settings as BrandingSettings | undefined;

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Welcome back!</h1>
        <p className="ztdl-p">Enter your login data.</p>

        <UsernameForm
          loginSettings={loginSettings.settings}
          loginName={loginName}
          authRequestId={authRequestId}
          organization={organization}
          submit={submit}
        />

        {legalAndSupportSettings.settings &&
          activeIdentityProviders.identityProviders &&
          process.env.ZITADEL_API_URL && (
            <SignInWithIDP
              host={host}
              identityProviders={activeIdentityProviders.identityProviders}
              authRequestId={authRequestId}
              organization={organization}
            ></SignInWithIDP>
          )}
      </div>
    </DynamicTheme>
  );
}
