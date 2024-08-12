"use client";

import { BrandingSettings } from "@zitadel/proto/zitadel/settings/v2/branding_settings_pb";
import { useEffect } from "react";
import { computeColors } from "../utils/colors";

export type ZitadelReactProps = {
  dark: boolean;
  children: React.ReactNode;
  branding: Partial<BrandingSettings>;
};

export const DARK_PRIMARY = "#2073c4";
export const PRIMARY = "#5469d4";

export function ZitadelReactProvider({ dark, children, branding }: ZitadelReactProps) {
  useEffect(() => {
    const color = dark ? (branding.darkTheme?.primaryColor ?? DARK_PRIMARY) : (branding.lightTheme?.primaryColor ?? PRIMARY);
    computeColors(color, dark);
  }, []);

  return <div className={`${dark ? "ztdl-dark" : "ztdl-light"} `}>{children}</div>;
}
