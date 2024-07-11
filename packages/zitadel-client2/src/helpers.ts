import type { ServiceType } from "@bufbuild/protobuf";
import { Transport, createPromiseClient } from "@connectrpc/connect";

export function createClientFor<TService extends ServiceType>(
  service: TService
) {
  return (transport: Transport) => createPromiseClient(service, transport);
}
