import {
  getBrandingSettings,
  getLegalAndSupportSettings,
  getPasswordComplexitySettings,
} from "@/lib/zitadel";
import DynamicTheme from "@/ui/DynamicTheme";
import RegisterFormWithoutPassword from "@/ui/RegisterFormWithoutPassword";
import SetPasswordForm from "@/ui/SetPasswordForm";
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

  const { firstname, lastname, email, organization, authRequestId } =
    searchParams;

  const setPassword = !!(firstname && lastname && email);

  const legal = await getLegalAndSupportSettings(host, organization);
  const passwordComplexitySettings = await getPasswordComplexitySettings(
    host,
    organization,
  );

  const branding = await getBrandingSettings(host, organization);

  return setPassword ? (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Set Password</h1>
        <p className="ztdl-p">Set the password for your account</p>

        {legal && passwordComplexitySettings && (
          <SetPasswordForm
            passwordComplexitySettings={passwordComplexitySettings}
            email={email}
            firstname={firstname}
            lastname={lastname}
            organization={organization}
            authRequestId={authRequestId}
          ></SetPasswordForm>
        )}
      </div>
    </DynamicTheme>
  ) : (
    <DynamicTheme branding={branding}>
      <div className="flex flex-col items-center space-y-4">
        <h1>Register</h1>
        <p className="ztdl-p">Create your ZITADEL account.</p>

        {legal && passwordComplexitySettings && (
          <RegisterFormWithoutPassword
            legal={legal}
            organization={organization}
            firstname={firstname}
            lastname={lastname}
            email={email}
            authRequestId={authRequestId}
          ></RegisterFormWithoutPassword>
        )}
      </div>
    </DynamicTheme>
  );
}
