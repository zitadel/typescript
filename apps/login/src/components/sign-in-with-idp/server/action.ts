"use server";

import { startIDPFlow } from "@/lib/server/idp";
import { redirect } from "next/navigation";

export type RedictToIdpState = { error?: string | null } | undefined;

export async function redictToIdpAuction(
  prevState: RedictToIdpState,
  formData: FormData,
): Promise<RedictToIdpState> {
  const params = new URLSearchParams();

  const linkOnly = formData.get("linkOnly") === "true";
  const authRequestId = formData.get("authRequestId") as string;
  const organization = formData.get("organization") as string;
  const idpId = formData.get("id") as string;
  const provider = formData.get("provider") as string;

  if (linkOnly) params.set("link", "true");
  if (authRequestId) params.set("authRequestId", authRequestId);
  if (organization) params.set("organization", organization);

  try {
    const response = await startIDPFlow({
      idpId,
      successUrl: `/idp/${provider}/success?` + params.toString(),
      failureUrl: `/idp/${provider}/failure?` + params.toString(),
    });

    if (response && "error" in response && response?.error) {
      return { error: response.error };
    }

    if (response && "redirect" in response && response?.redirect) {
      redirect(response.redirect);
    }
  } catch {
    return { error: "Could not start IDP flow" };
  }
}
