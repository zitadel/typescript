import {
  getActiveIdentityProviders,
  getBrandingSettings,
  getLegalAndSupportSettings,
  getLoginSettings,
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import UsernameForm from "@/ui/UsernameForm";
import { makeReqCtx } from "@zitadel/client/v2";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const host = headers().get("X-Forwarded-Host");
  if (!host) {
    throw new Error("No host header found!");
  }

  console.log("host", host);

  const loginName = searchParams?.loginName;
  const authRequestId = searchParams?.authRequestId;
  const organization = searchParams?.organization;
  const submit: boolean = searchParams?.submit === "true";

  const loginSettings = await getLoginSettings(host, organization);
  const legal = await getLegalAndSupportSettings(host);

  const identityProviders = await getActiveIdentityProviders(
    host,
    organization,
  ).then((resp) => {
    return resp.identityProviders;
  });

  const idphost = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const branding = await getBrandingSettings(host, organization);

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
          allowRegister={!!loginSettings?.allowRegister}
        >
          {legal && identityProviders && (
            <SignInWithIDP
              host={idphost}
              identityProviders={identityProviders}
              authRequestId={authRequestId}
              organization={organization}
            ></SignInWithIDP>
          )}
        </UsernameForm>
      </div>
    </DynamicTheme>
  );
}
