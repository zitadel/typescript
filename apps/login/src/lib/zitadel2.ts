import { createServerTransport } from "@zitadel/node";
import { createSettingsServiceClient } from "@zitadel/client2/v2beta";

const transport = createServerTransport(
  process.env.ZITADEL_SERVICE_USER_TOKEN!,
  {
    baseUrl: process.env.ZITADEL_API_URL!,
    httpVersion: "2",
  },
);

export const settingsService = createSettingsServiceClient(transport);
