import { DescMessage, StreamRequest, UnaryRequest } from "@zitadel/client";

const etagCache = new Map<string, string>(); // TODO use a more sophisticated cache that works across cloud run instances

export type AnyFn = (...args: any[]) => any;

export const etagInterceptor =
  (next: AnyFn) =>
  async (
    req:
      | UnaryRequest<DescMessage, DescMessage>
      | StreamRequest<DescMessage, DescMessage>,
  ) => {
    const url = req.url;
    console.log("Etag interceptor for", url);
    const etag = etagCache.get(url);

    if (etag) {
      req.header.set("if-none-match", etag);
    }

    const res = await next(req);

    const newEtag = res.header.get("etag");
    if (newEtag) {
      etagCache.set(url, newEtag);
    }

    return res;
  };
