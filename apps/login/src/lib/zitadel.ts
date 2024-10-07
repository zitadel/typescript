import {
  createOIDCServiceClient,
  createSessionServiceClient,
  createSettingsServiceClient,
  createUserServiceClient,
  makeReqCtx,
} from "@zitadel/client/v2";
import { createServerTransport } from "@zitadel/node";
import { RequestChallenges } from "@zitadel/proto/zitadel/session/v2/challenge_pb";
import { Checks } from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { IDPInformation } from "@zitadel/proto/zitadel/user/v2/idp_pb";
import {
  RetrieveIdentityProviderIntentRequest,
  VerifyPasskeyRegistrationRequest,
  VerifyU2FRegistrationRequest,
} from "@zitadel/proto/zitadel/user/v2/user_service_pb";

import { create, fromJson, toJson } from "@zitadel/client";
import { TextQueryMethod } from "@zitadel/proto/zitadel/object/v2/object_pb";
import { CreateCallbackRequest } from "@zitadel/proto/zitadel/oidc/v2/oidc_service_pb";
import { BrandingSettingsSchema } from "@zitadel/proto/zitadel/settings/v2/branding_settings_pb";
import { LegalAndSupportSettingsSchema } from "@zitadel/proto/zitadel/settings/v2/legal_settings_pb";
import {
  IdentityProviderType,
  LoginSettingsSchema,
} from "@zitadel/proto/zitadel/settings/v2/login_settings_pb";
import { PasswordComplexitySettingsSchema } from "@zitadel/proto/zitadel/settings/v2/password_settings_pb";
import type { RedirectURLsJson } from "@zitadel/proto/zitadel/user/v2/idp_pb";
import {
  SearchQuery,
  SearchQuerySchema,
} from "@zitadel/proto/zitadel/user/v2/query_pb";
import { unstable_cache } from "next/cache";
import { getApiConfiguration } from "./api";
import { PROVIDER_MAPPING } from "./idp";

const SESSION_LIFETIME_S = 3600; // TODO load from oidc settings
const CACHE_REVALIDATION_INTERVAL_IN_SECONDS = process.env
  .CACHE_REVALIDATION_INTERVAL_IN_SECONDS
  ? Number(process.env.CACHE_REVALIDATION_INTERVAL_IN_SECONDS)
  : 3600;

const transport = createServerTransport(
  process.env.ZITADEL_SERVICE_USER_TOKEN!,
  {
    baseUrl: process.env.ZITADEL_API_URL!,
    httpVersion: "2",
  },
);

// TODO: check for better typing
function createServiceForHost(host: string, mapper: (transport: any) => any) {
  const targetApi = getApiConfiguration(host);

  console.log("targetApi", host, targetApi);
  const transport = createServerTransport(targetApi.token, {
    baseUrl: targetApi.url,
    httpVersion: "2",
  });

  return mapper(transport);
}

export const idpService = (host: string) =>
  createServiceForHost(host, createSessionServiceClient);
export const orgService = (host: string) =>
  createServiceForHost(host, createSessionServiceClient);
export const sessionService = (host: string) =>
  createServiceForHost(host, createSessionServiceClient);
export const userService = (host: string) =>
  createServiceForHost(host, createUserServiceClient);
export const oidcService = (host: string) =>
  createServiceForHost(host, createOIDCServiceClient);
export const settingsService = (host: string) =>
  createServiceForHost(host, createSettingsServiceClient);

export async function getBrandingSettings(host: string, organization?: string) {
  return unstable_cache(
    async () => {
      return await settingsService(host)
        .getBrandingSettings({ ctx: makeReqCtx(organization) }, {})
        .then((resp: any) =>
          resp.settings
            ? toJson(BrandingSettingsSchema, resp.settings)
            : undefined,
        );
    },
    ["brandingSettings", organization ?? "default"],
    {
      revalidate: CACHE_REVALIDATION_INTERVAL_IN_SECONDS,
      tags: ["brandingSettings"],
    },
  )().then((resp) =>
    resp ? fromJson(BrandingSettingsSchema, resp) : undefined,
  );
}

export async function getLoginSettings(host: string, orgId?: string) {
  return unstable_cache(
    async () => {
      return await settingsService(host)
        .getLoginSettings({ ctx: makeReqCtx(orgId) }, {})
        .then((resp) =>
          resp.settings
            ? toJson(LoginSettingsSchema, resp.settings)
            : undefined,
        );
    },
    ["loginSettings", orgId ?? "default"],
    {
      revalidate: CACHE_REVALIDATION_INTERVAL_IN_SECONDS,
      tags: ["loginSettings"],
    },
  )().then((resp) => (resp ? fromJson(LoginSettingsSchema, resp) : undefined));
}

export async function addOTPEmail(host: string, userId: string) {
  return userService(host).addOTPEmail(
    {
      userId,
    },
    {},
  );
}

export async function addOTPSMS(host: string, userId: string) {
  return userService(host).addOTPSMS({ userId }, {});
}

export async function registerTOTP(host: string, userId: string) {
  return userService(host).registerTOTP({ userId }, {});
}

export async function getGeneralSettings(host: string) {
  return settingsService(host)
    .getGeneralSettings({}, {})
    .then((resp: any) => resp.supportedLanguages);
}

export async function getLegalAndSupportSettings(
  host: string,
  organization?: string,
) {
  return unstable_cache(
    async () => {
      return await settingsService(host)
        .getLegalAndSupportSettings({ ctx: makeReqCtx(organization) }, {})
        .then((resp) =>
          resp.settings
            ? toJson(LegalAndSupportSettingsSchema, resp.settings)
            : undefined,
        );
    },
    ["legalAndSupportSettings", organization ?? "default"],
    {
      revalidate: CACHE_REVALIDATION_INTERVAL_IN_SECONDS,
      tags: ["legalAndSupportSettings"],
    },
  )().then((resp) =>
    resp ? fromJson(LegalAndSupportSettingsSchema, resp) : undefined,
  );
}

export async function getPasswordComplexitySettings(organization?: string) {
  return unstable_cache(
    async () => {
      return await settingsService
        .getPasswordComplexitySettings({ ctx: makeReqCtx(organization) })
        .then((resp) =>
          resp.settings
            ? toJson(PasswordComplexitySettingsSchema, resp.settings)
            : undefined,
        );
    },
    ["complexitySettings", organization ?? "default"],
    {
      revalidate: CACHE_REVALIDATION_INTERVAL_IN_SECONDS,
      tags: ["complexitySettings"],
    },
  )().then((resp) =>
    resp ? fromJson(PasswordComplexitySettingsSchema, resp) : undefined,
  );
}

export async function createSessionFromChecks(
  host: string,
  command: { checks: Checks; challenges: RequestChallenges | undefined },
) {
  return sessionService(host).createSession(
    {
      checks: command.checks,
      challenges: command.challenges,
      lifetime: {
        seconds: BigInt(SESSION_LIFETIME_S),
        nanos: 0,
      },
    },
    {},
  );
}

export async function createSessionForUserIdAndIdpIntent(
  host: string,
  command: {
    userId: string;
    idpIntent: {
      idpIntentId?: string | undefined;
      idpIntentToken?: string | undefined;
    };
  },
) {
  return sessionService(host).createSession({
    checks: {
      user: {
        search: {
          case: "userId",
          value: command.userId,
        },
      },
      idpIntent: command.idpIntent,
    },
    // lifetime: {
    //   seconds: 300,
    //   nanos: 0,
    // },
  });
}

export async function setSession(
  host: string,
  command: {
    sessionId: string;
    sessionToken: string;
    challenges: RequestChallenges | undefined;
    checks?: Checks;
  },
) {
  return sessionService(host).setSession(
    {
      sessionId: command.sessionId,
      sessionToken: command.sessionToken,
      challenges: command.challenges,
      checks: command.checks ? command.checks : {},
      metadata: {},
    },
    {},
  );
}

export async function getSession(
  host: string,
  command: {
    sessionId: string;
    sessionToken: string;
  },
) {
  return sessionService(host).getSession(
    { sessionId: command.sessionId, sessionToken: command.sessionToken },
    {},
  );
}

export async function deleteSession(
  host: string,
  command: { sessionId: string; sessionToken: string },
) {
  return sessionService(host).deleteSession(
    { sessionId: command.sessionId, sessionToken: command.sessionToken },
    {},
  );
}

export async function listSessions(host: string, ids: string[]) {
  return sessionService(host).listSessions(
    {
      queries: [
        {
          query: {
            case: "idsQuery",
            value: { ids: ids },
          },
        },
      ],
    },
    {},
  );
}

export type AddHumanUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
  organization: string | undefined;
};

export async function addHumanUser(
  host: string,
  { email, firstName, lastName, password, organization }: AddHumanUserData,
) {
  return userService(host).addHumanUser({
    email: { email },
    username: email,
    profile: { givenName: firstName, familyName: lastName },
    organization: organization
      ? { org: { case: "orgId", value: organization } }
      : undefined,
    passwordType: password
      ? { case: "password", value: { password: password } }
      : undefined,
  });
}

export async function verifyTOTPRegistration(
  host: string,
  command: { code: string; userId: string },
) {
  return userService(host).verifyTOTPRegistration(
    { code: command.code, userId: command.userId },
    {},
  );
}

export async function getUserByID(host: string, userId: string) {
  return userService(host).getUserByID({ userId }, {});
}

export async function listUsers(
  host: string,
  {
    loginName,
    userName,
    email,
    organizationId,
  }: {
    loginName?: string;
    userName?: string;
    email?: string;
    organizationId?: string;
  },
) {
  const queries: SearchQuery[] = [];

  if (loginName) {
    queries.push(
      create(SearchQuerySchema, {
        query: {
          case: "loginNameQuery",
          value: {
            loginName: loginName,
            method: TextQueryMethod.EQUALS,
          },
        },
      }),
    );
  }

  if (userName) {
    queries.push(
      create(SearchQuerySchema, {
        query: {
          case: "userNameQuery",
          value: {
            userName: userName,
            method: TextQueryMethod.EQUALS,
          },
        },
      }),
    );
  }

  if (organizationId) {
    queries.push(
      create(SearchQuerySchema, {
        query: {
          case: "organizationIdQuery",
          value: {
            organizationId,
          },
        },
      }),
    );
  }

  if (email) {
    queries.push(
      create(SearchQuerySchema, {
        query: {
          case: "emailQuery",
          value: {
            emailAddress: email,
          },
        },
      }),
    );
  }

  return userService(host).listUsers({ queries: queries });
}

export async function getOrgsByDomain(host: string, domain: string) {
  return orgService(host).listOrganizations(
    {
      queries: [
        {
          query: {
            case: "domainQuery",
            value: { domain, method: TextQueryMethod.EQUALS },
          },
        },
      ],
    },
    {},
  );
}

export async function startIdentityProviderFlow({
  idpId,
  urls,
}: {
  idpId: string;
  urls: RedirectURLsJson;
}) {
  return userService(host).startIdentityProviderIntent({
    idpId,
    content: {
      case: "urls",
      value: urls,
    },
  });
}

export async function retrieveIdentityProviderInformation({
  idpIntentId,
  idpIntentToken,
}: RetrieveIdentityProviderIntentRequest) {
  return userService(host).retrieveIdentityProviderIntent({
    idpIntentId,
    idpIntentToken,
  });
}

export async function getAuthRequest({
  authRequestId,
}: {
  authRequestId: string;
}) {
  return oidcService(host).getAuthRequest({
    authRequestId,
  });
}

export async function createCallback(req: CreateCallbackRequest) {
  return oidcService(host).createCallback(req);
}

export async function verifyEmail(userId: string, verificationCode: string) {
  return userService(host).verifyEmail(
    {
      userId,
      verificationCode,
    },
    {},
  );
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function resendEmailCode(userId: string) {
  return userService(host).resendEmailCode(
    {
      userId,
    },
    {},
  );
}

export function retrieveIDPIntent(id: string, token: string) {
  return userService(host).retrieveIdentityProviderIntent(
    { idpIntentId: id, idpIntentToken: token },
    {},
  );
}

export function getIDPByID(id: string) {
  return idpService.getIDPByID({ id }, {}).then((resp) => resp.idp);
}

export function addIDPLink(
  idp: {
    id: string;
    userId: string;
    userName: string;
  },
  userId: string,
) {
  return userService(host).addIDPLink(
    {
      idpLink: {
        userId: idp.userId,
        idpId: idp.id,
        userName: idp.userName,
      },
      userId,
    },
    {},
  );
}

export function createUser(
  provider: IdentityProviderType,
  info: IDPInformation,
) {
  const userData = PROVIDER_MAPPING[provider](info);
  return userService(host).addHumanUser(userData, {});
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function passwordReset(userId: string) {
  return userService(host).passwordReset(
    {
      userId,
    },
    {},
  );
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */

// TODO check for token requirements!
export async function createPasskeyRegistrationLink(
  userId: string,
  // token: string,
) {
  // const transport = createServerTransport(token, {
  //   baseUrl: process.env.ZITADEL_API_URL!,
  //   httpVersion: "2",
  // });

  // const service = createUserServiceClient(transport);
  return userService(host).createPasskeyRegistrationLink({
    userId,
    medium: {
      case: "returnCode",
      value: {},
    },
  });
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @param domain the domain on which the factor is registered
 * @returns the newly set email
 */

// TODO check for token requirements!
export async function registerU2F(
  userId: string,
  domain: string,
  // token: string,
) {
  // const transport = createServerTransport(token, {
  //   baseUrl: process.env.ZITADEL_API_URL!,
  //   httpVersion: "2",
  // });

  // const service = createUserServiceClient(transport);
  return userService(host).registerU2F({
    userId,
    domain,
  });
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @param domain the domain on which the factor is registered
 * @returns the newly set email
 */
export async function verifyU2FRegistration(
  request: VerifyU2FRegistrationRequest,
) {
  return userService(host).verifyU2FRegistration(request, {});
}

export async function getActiveIdentityProviders(orgId?: string) {
  return settingsService(host).getActiveIdentityProviders(
    { ctx: makeReqCtx(orgId) },
    {},
  );
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function verifyPasskeyRegistration(
  request: VerifyPasskeyRegistrationRequest,
) {
  return userService(host).verifyPasskeyRegistration(request, {});
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function registerPasskey(
  userId: string,
  code: { id: string; code: string },
  domain: string,
) {
  return userService(host).registerPasskey({
    userId,
    code,
    domain,
  });
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function listAuthenticationMethodTypes(userId: string) {
  return userService(host).listAuthenticationMethodTypes({
    userId,
  });
}
