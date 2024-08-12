"use client";

import { BrandingSettings } from "@zitadel/proto/zitadel/settings/v2/branding_settings_pb";
import { ZitadelReactProvider } from "@zitadel/react";
import { useTheme } from "next-themes";

type Props = {
  children: React.ReactNode;
  branding: Partial<BrandingSettings>;
};

export function LayoutProviders({ children, branding }: Props) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className={`${isDark ? "ui-dark" : "ui-light"} `}>
      <ZitadelReactProvider dark={isDark} branding={branding}>
        {children}
      </ZitadelReactProvider>
    </div>
  );
}
