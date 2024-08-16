import { ProviderSlug } from "@/lib/demos";
import { getBrandingSettings, PROVIDER_NAME_MAPPING } from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import { headers } from "next/headers";

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
  params: { provider: ProviderSlug };
}) {
  const host = headers().get("X-Forwarded-Host");
  if (!host) {
    throw new Error("No host header found!");
  }

  const { id, token, authRequestId, organization } = searchParams;
  const { provider } = params;

  const branding = await getBrandingSettings(host, organization);

  if (provider) {
    return (
      <DynamicTheme branding={branding}>
        <div className="flex flex-col items-center space-y-4">
          <h1>Login failure</h1>
          <div>
            An error signing in with{" "}
            {PROVIDER_NAME_MAPPING[provider]
              ? PROVIDER_NAME_MAPPING[provider]
              : provider}{" "}
            happened!
          </div>

          {/* <Alert type={AlertType.ALERT}>
                    {}
                  </Alert> */}
        </div>
      </DynamicTheme>
    );
  } else {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h1>Register</h1>
        <p className="ztdl-p">No id and token received!</p>
      </div>
    );
  }
}
