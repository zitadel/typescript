import {
  getBrandingSettings,
  getLegalAndSupportSettings,
<<<<<<< HEAD
  settingsService,
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import { makeReqCtx } from "@zitadel/client/v2beta";
import { IdentityProvider } from "@zitadel/proto/zitadel/settings/v2beta/login_settings_pb";
import { GetActiveIdentityProvidersResponse } from "@zitadel/proto/zitadel/settings/v2beta/settings_service_pb";

function getIdentityProviders(
=======
  server,
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import {
  GetActiveIdentityProvidersResponse,
  IdentityProvider,
  ZitadelServer,
  settings,
} from "@zitadel/server";

function getIdentityProviders(
  server: ZitadelServer,
>>>>>>> main
  orgId?: string,
): Promise<IdentityProvider[] | undefined> {
  return settingsService
<<<<<<< HEAD
    .getActiveIdentityProviders({ ctx: makeReqCtx(orgId) })
=======
    .getActiveIdentityProviders(
      orgId ? { ctx: { orgId } } : { ctx: { instance: true } },
      {},
    )
>>>>>>> main
    .then((resp: GetActiveIdentityProvidersResponse) => {
      return resp.identityProviders;
    });
}

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const authRequestId = searchParams?.authRequestId;
  const organization = searchParams?.organization;

  const legal = await getLegalAndSupportSettings(organization);

  const identityProviders = await getIdentityProviders(organization);

  const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const branding = await getBrandingSettings(organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Register</h1>
        <p className="ztdl-p">
          Select one of the following providers to register
        </p>

        {legal && identityProviders && process.env.ZITADEL_API_URL && (
          <SignInWithIDP
            host={host}
            identityProviders={identityProviders}
            authRequestId={authRequestId}
            organization={organization}
          />
        )}
      </div>
    </DynamicTheme>
  );
}
