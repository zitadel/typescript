/* eslint-disable */

import {
  createOIDCServiceClient,
  createSessionServiceClient,
  createSettingsServiceClient,
  createUserServiceClient,
  makeReqCtx,
} from "@zitadel/client/v2";
import { createManagementServiceClient } from "@zitadel/client/v1";
import { createServerTransport } from "@zitadel/node";
import { Checks } from "@zitadel/proto/zitadel/session/v2/session_service_pb";
import { RequestChallenges } from "@zitadel/proto/zitadel/session/v2/challenge_pb";
import {
  RetrieveIdentityProviderIntentRequest,
  VerifyPasskeyRegistrationRequest,
  VerifyU2FRegistrationRequest,
} from "@zitadel/proto/zitadel/user/v2/user_service_pb";

import { CreateCallbackRequest } from "@zitadel/proto/zitadel/oidc/v2/oidc_service_pb";
import { TextQueryMethod } from "@zitadel/proto/zitadel/object/v2/object_pb";
import type { RedirectURLs } from "@zitadel/proto/zitadel/user/v2/idp_pb";
import { ProviderSlug } from "./demos";
import { PartialMessage, PlainMessage } from "@zitadel/client";
import { headers } from "next/headers";
import { getApiConfiguration } from "./api";
import { IDPInformation, IDPLink } from "@zitadel/proto/zitadel/user/v2/idp_pb";

import { AnyKindOfDictionary } from "node_modules/cypress/types/lodash";
import { PROVIDER_MAPPING } from "@/app/(login)/idp/[provider]/success/page";

/* eslint no-use-before-define: 0 */ // --> OFF

const SESSION_LIFETIME_S = 3000;

function createServiceForHost(host: string, mapper: (transport: any) => any) {
  const targetApi = getApiConfiguration(host);

  console.log("targetApi", targetApi);
  const transport = createServerTransport(targetApi.token, {
    baseUrl: targetApi.url,
    httpVersion: "2",
  });

  return mapper(transport);
}

export const sessionService = (host: string) =>
  createServiceForHost(host, createSessionServiceClient);
export const managementService = (host: string) =>
  createServiceForHost(host, createManagementServiceClient);
export const userService = (host: string) =>
  createServiceForHost(host, createUserServiceClient);
export const oidcService = (host: string) =>
  createServiceForHost(host, createOIDCServiceClient);
export const settingsService = (host: string) =>
  createServiceForHost(host, createSettingsServiceClient);

export async function getBrandingSettings(host: string, organization?: string) {
  return settingsService(host)
    .getBrandingSettings({ ctx: makeReqCtx(organization) }, {})
    .then((resp: any) => resp.settings);
}

export async function getLoginSettings(host: string, orgId?: string) {
  return settingsService(host)
    .getLoginSettings({ ctx: makeReqCtx(orgId) }, {})
    .then((resp: any) => resp.settings);
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

export async function getIdentityProviders(host: string, orgId?: string) {
  return settingsService(host)
    .getActiveIdentityProviders({ ctx: makeReqCtx(orgId) }, {})
    .then((resp: any) => {
      return resp.identityProviders;
    });
}

export async function getLegalAndSupportSettings(
  host: string,
  organization?: string,
) {
  return settingsService(host)
    .getLegalAndSupportSettings({ ctx: makeReqCtx(organization) }, {})
    .then((resp: any) => {
      return resp.settings;
    });
}

export async function getPasswordComplexitySettings(
  host: string,
  organization?: string,
) {
  return settingsService(host)
    .getPasswordComplexitySettings({ ctx: makeReqCtx(organization) })
    .then((resp: any) => resp.settings);
}

export async function createSessionFromChecks(
  host: string,
  checks: PlainMessage<Checks>,
  challenges: PlainMessage<RequestChallenges> | undefined,
) {
  return sessionService(host).createSession(
    {
      checks: checks,
      challenges,
      lifetime: {
        seconds: BigInt(SESSION_LIFETIME_S),
        nanos: 0,
      },
    },
    {},
  );
}

export function retrieveIDPIntent(host: string, id: string, token: string) {
  return userService(host).retrieveIdentityProviderIntent(
    { idpIntentId: id, idpIntentToken: token },
    {},
  );
}

export function createUser(
  host: string,
  provider: ProviderSlug,
  info: IDPInformation,
): Promise<string> {
  const userData = PROVIDER_MAPPING[provider](info);
  return userService(host)
    .addHumanUser(userData, {})
    .then((resp: any) => resp.userId);
}

export async function createSessionForUserIdAndIdpIntent(
  host: string,
  userId: string,
  idpIntent: {
    idpIntentId?: string | undefined;
    idpIntentToken?: string | undefined;
  },
) {
  return sessionService(host).createSession({
    checks: {
      user: {
        search: {
          case: "userId",
          value: userId,
        },
      },
      idpIntent,
    },
    // lifetime: {
    //   seconds: 300,
    //   nanos: 0,
    // },
  });
}

export async function setSession(
  host: string,
  sessionId: string,
  sessionToken: string,
  challenges: RequestChallenges | undefined,
  checks?: PlainMessage<Checks>,
) {
  return sessionService(host).setSession(
    {
      sessionId,
      sessionToken,
      challenges,
      checks: checks ? checks : {},
      metadata: {},
    },
    {},
  );
}

export async function getSession(
  host: string,
  sessionId: string,
  sessionToken: string,
) {
  return sessionService(host).getSession({ sessionId, sessionToken }, {});
}

export async function deleteSession(
  host: string,
  sessionId: string,
  sessionToken: string,
) {
  return sessionService(host).deleteSession({ sessionId, sessionToken }, {});
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
  code: string,
  userId: string,
) {
  return userService(host).verifyTOTPRegistration({ code, userId }, {});
}

export async function getUserByID(host: string, userId: string) {
  return userService(host).getUserByID({ userId }, {});
}

export async function listUsers(
  host: string,
  userName: string,
  organizationId: string,
) {
  return userService(host).listUsers(
    {
      queries: organizationId
        ? [
            {
              query: {
                case: "userNameQuery",
                value: {
                  userName,
                  method: TextQueryMethod.EQUALS,
                },
              },
            },
            {
              query: {
                case: "organizationIdQuery",
                value: {
                  organizationId,
                },
              },
            },
          ]
        : [
            {
              query: {
                case: "userNameQuery",
                value: {
                  userName,
                  method: TextQueryMethod.EQUALS,
                },
              },
            },
          ],
    },
    {},
  );
}

export async function getOrgByDomain(host: string, domain: string) {
  return managementService(host).getOrgByDomainGlobal({ domain }, {});
}

export const PROVIDER_NAME_MAPPING: {
  [provider: string]: string;
} = {
  [ProviderSlug.GOOGLE]: "Google",
  [ProviderSlug.GITHUB]: "GitHub",
  [ProviderSlug.AZURE]: "Microft",
};

export async function startIdentityProviderFlow(
  host: string,
  {
    idpId,
    urls,
  }: {
    idpId: string;
    urls: PlainMessage<RedirectURLs>;
  },
) {
  return userService(host).startIdentityProviderIntent({
    idpId,
    content: {
      case: "urls",
      value: urls,
    },
  });
}

export async function retrieveIdentityProviderInformation(
  host: string,
  { idpIntentId, idpIntentToken }: RetrieveIdentityProviderIntentRequest,
) {
  return userService(host).retrieveIdentityProviderIntent({
    idpIntentId,
    idpIntentToken,
  });
}

export async function getAuthRequest(
  host: string,
  {
    authRequestId,
  }: {
    authRequestId: string;
  },
) {
  return oidcService(host).getAuthRequest({
    authRequestId,
  });
}

export async function createCallback(
  host: string,
  req: PlainMessage<CreateCallbackRequest>,
) {
  return oidcService(host).createCallback(req);
}

export async function verifyEmail(
  host: string,
  userId: string,
  verificationCode: string,
) {
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
export async function resendEmailCode(host: string, userId: string) {
  return userService(host).resendEmailCode(
    {
      userId,
    },
    {},
  );
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function passwordReset(
  host: string,
  userId: string,
): Promise<any> {
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
export async function createPasskeyRegistrationLink(
  host: string,
  userId: string,
) {
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
export async function registerU2F(
  host: string,
  userId: string,
  domain: string,
) {
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
  host: string,
  request: PlainMessage<VerifyU2FRegistrationRequest>,
) {
  return userService(host).verifyU2FRegistration(request, {});
}

export async function getActiveIdentityProviders(host: string, orgId?: string) {
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
  host: string,
  request: PartialMessage<VerifyPasskeyRegistrationRequest>,
) {
  // TODO: find a better way to handle this
  request = VerifyPasskeyRegistrationRequest.fromJson(request as any);
  return userService(host).verifyPasskeyRegistration(request, {});
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function registerPasskey(
  host: string,
  userId: string,
  code: { id: string; code: string },
  domain: string,
) {
  return userService(host).registerPasskey({
    userId,
    code,
    domain,
    // authenticator:
  });
}

/**
 *
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function listAuthenticationMethodTypes(
  host: string,
  userId: string,
) {
  return userService(host).listAuthenticationMethodTypes({
    userId,
  });
}
