import {
  getBrandingSettings,
  getIdentityProviders,
  getLegalAndSupportSettings,
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { SignInWithIDP } from "@/ui/SignInWithIDP";
import { makeReqCtx } from "@zitadel/client/v2";
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

  const authRequestId = searchParams?.authRequestId;
  const organization = searchParams?.organization;

  const legal = await getLegalAndSupportSettings(host, organization);

  const identityProviders = await getIdentityProviders(host, organization);

  console.log("host", host);
  // const host = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000";

  const branding = await getBrandingSettings(host, organization);

  return (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Register</h1>
        <p className="ztdl-p">
          Select one of the following providers to register
        </p>

        {legal && identityProviders && host && (
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
