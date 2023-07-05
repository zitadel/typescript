export const runtime = "edge";

import { getLoginSettings, server } from "#/lib/zitadel";
import UsernameForm from "#/ui/UsernameForm";

export default async function Page({
  searchParams,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
}) {
  const loginName = searchParams?.loginName;
  const submit: boolean = searchParams?.submit === "true";

  const loginSettings = await getLoginSettings(server);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Welcome back!</h1>
      <p className="ztdl-p">Enter your login data.</p>

      <UsernameForm
        loginSettings={loginSettings}
        loginName={loginName}
        submit={submit}
      />
    </div>
  );
}
