import { getTranslations } from "next-intl/server";

/**
 * Get server-side translation for a specific key with optional interpolation
 */
export async function getServerTranslation(
  base: string,
  key: string,
  params?: Record<string, any>,
  locale?: string
): Promise<string> {
  const t = await getTranslations({ locale, namespace: `server.${base}` });
  return t(key, params);
}