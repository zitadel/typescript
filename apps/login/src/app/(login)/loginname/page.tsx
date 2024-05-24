import {
  getBrandingSettings,
  getLegalAndSupportSettings,
  getLoginSettings,
<<<<<<< HEAD
  getIdentityProviders,
=======
  server,
>>>>>>> main
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import UsernameForm from "@/ui/UsernameForm";
<<<<<<< HEAD

export default async function Page(props: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const loginName = props.searchParams?.loginName;
  const authRequestId = props.searchParams?.authRequestId;
  const organization = props.searchParams?.organization;
  const submit: boolean = props.searchParams?.submit === "true";

  const loginSettings = await getLoginSettings(organization);
  const legal = await getLegalAndSupportSettings();
  const identityProviders = await getIdentityProviders(organization);
=======
import {
  GetActiveIdentityProvidersResponse,
  IdentityProvider,
  ZitadelServer,
  settings,
} from "@zitadel/server";

function getIdentityProviders(
  server: ZitadelServer,
  orgId?: string,
): Promise<IdentityProvider[] | undefined> {
  const settingsService = settings.getSettings(server);
  return settingsService
    .getActiveIdentityProviders(
      orgId ? { ctx: { orgId } } : { ctx: { instance: true } },
      {},
    )
    .then((resp: GetActiveIdentityProvidersResponse) => {
      return resp.identityProviders;
    });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const loginName = searchParams?.loginName;
  const authRequestId = searchParams?.authRequestId;
  const organization = searchParams?.organization;
  const submit: boolean = searchParams?.submit === "true";

  const loginSettings = await getLoginSettings(server, organization);
  const legal = await getLegalAndSupportSettings(server);

  const identityProviders = await getIdentityProviders(server, organization);
>>>>>>> main

  const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

<<<<<<< HEAD
  const branding = await getBrandingSettings(organization);
=======
  const branding = await getBrandingSettings(server, organization);
>>>>>>> main

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Welcome back!</h1>
        <p className="ztdl-p">Enter your login data.</p>

        <UsernameForm
          loginSettings={loginSettings}
          loginName={loginName}
          authRequestId={authRequestId}
          organization={organization}
          submit={submit}
        />

        {legal && identityProviders && process.env.ZITADEL_API_URL && (
          <SignInWithIDP
            host={host}
            identityProviders={identityProviders}
            authRequestId={authRequestId}
            organization={organization}
          ></SignInWithIDP>
        )}
      </div>
    </DynamicTheme>
  );
}
