import { DescMessage, StreamRequest, UnaryRequest } from "@zitadel/client";

export type AnyFn = (...args: any[]) => any;

type CachedEtag = { etag: string; expiresAt: number };
const etagCache = new Map<string, CachedEtag>(); // TODO use Redis or similar for persistence

function parseMaxAge(cacheControl: string | null): number | null {
  if (!cacheControl) return null;
  const match = cacheControl.match(/max-age=(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}

export const etagInterceptor =
  (next: AnyFn) =>
  async (
    req:
      | UnaryRequest<DescMessage, DescMessage>
      | StreamRequest<DescMessage, DescMessage>,
  ) => {
    const url = req.url;
    console.log("Etag interceptor for", url);

    // Check if we have a non-expired etag
    const cached = etagCache.get(url);
    if (cached && cached.expiresAt > Date.now()) {
      req.header.set("if-none-match", cached.etag);
    } else if (cached) {
      etagCache.delete(url); // Remove expired etag
    }

    const res = await next(req);

    const newEtag = res.header.get("etag");
    const cacheControl = res.header.get("cache-control");
    if (newEtag) {
      const maxAge = parseMaxAge(cacheControl);
      const expiresAt = maxAge
        ? Date.now() + maxAge * 1000
        : Date.now() + 60 * 1000; // default 60s
      etagCache.set(url, { etag: newEtag, expiresAt });
    }

    return res;
  };
