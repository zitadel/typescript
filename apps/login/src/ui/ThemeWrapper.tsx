"use client";

import { setTheme } from "@/utils/colors";
import { useEffect } from "react";
import { BrandingSettings } from "@zitadel/proto/zitadel/settings/v2beta/branding_settings_pb";

type Props = {
  branding: Partial<BrandingSettings> | undefined;
  children: React.ReactNode;
};

const ThemeWrapper = ({ children, branding }: Props) => {
  useEffect(() => {
    setTheme(document, branding);
  }, []);

  const defaultClasses = "bg-background-light-600 dark:bg-background-dark-600";

  return <div className={defaultClasses}>{children}</div>;
};

export default ThemeWrapper;
