import {
  createSessionServiceClient,
  createUserServiceClient,
  createOIDCServiceClient,
  createSettingsServiceClient,
  makeReqCtx,
} from "@zitadel/client/v2beta";

import { PartialMessage } from "@zitadel/client";

import { createServerTransport } from "@zitadel/node";
import { BrandingSettings } from "@zitadel/proto/zitadel/settings/v2beta/branding_settings_pb";
import {
  GetActiveIdentityProvidersResponse,
  GetBrandingSettingsResponse,
  GetLegalAndSupportSettingsResponse,
  GetLoginSettingsResponse,
  GetPasswordComplexitySettingsResponse,
} from "@zitadel/proto/zitadel/settings/v2beta/settings_service_pb";
import {
  IdentityProvider,
  LoginSettings,
} from "@zitadel/proto/zitadel/settings/v2beta/login_settings_pb";
import { LegalAndSupportSettings } from "@zitadel/proto/zitadel/settings/v2beta/legal_settings_pb";
import { PasswordComplexitySettings } from "@zitadel/proto/zitadel/settings/v2beta/password_settings_pb";
import { RequestChallenges } from "@zitadel/proto/zitadel/session/v2beta/challenge_pb";
import { CreateSessionResponse } from "@zitadel/proto/zitadel/session/v2beta/session_service_pb";
import {
  AddHumanUserRequest,
  AddHumanUserResponse,
  ListUsersRequest,
  ListUsersResponse,
} from "@zitadel/proto/zitadel/user/v2beta/user_service_pb";
import { TextQueryMethod } from "@zitadel/proto/zitadel/object/v2beta/object_pb";
import { SearchQuery } from "@zitadel/proto/zitadel/user/v2beta/query_pb";

const transport = createServerTransport(
  process.env.ZITADEL_SERVICE_USER_TOKEN!,
  {
    baseUrl: process.env.ZITADEL_API_URL!,
    httpVersion: "2",
  },
);

export const sessionService = createSessionServiceClient(transport);
export const userService = createUserServiceClient(transport);
export const oidcService = createOIDCServiceClient(transport);
export const settingsService = createSettingsServiceClient(transport);

export async function getBrandingSettings(
  orgId?: string,
): Promise<BrandingSettings | undefined> {
  return settingsService
    .getBrandingSettings({ ctx: makeReqCtx(orgId) })
    .then((resp: GetBrandingSettingsResponse) => resp.settings);
}

export async function getLoginSettings(
  orgId?: string,
): Promise<LoginSettings | undefined> {
  return settingsService
    .getLoginSettings({ ctx: makeReqCtx(orgId) })
    .then((resp: GetLoginSettingsResponse) => resp.settings);
}

export function getIdentityProviders(
  orgId?: string,
): Promise<IdentityProvider[] | undefined> {
  return settingsService
    .getActiveIdentityProviders({ ctx: makeReqCtx(orgId) })
    .then((resp: GetActiveIdentityProvidersResponse) => {
      return resp.identityProviders;
    });
}

export async function getLegalAndSupportSettings(
  orgId?: string,
): Promise<LegalAndSupportSettings | undefined> {
  return settingsService
    .getLegalAndSupportSettings({ ctx: makeReqCtx(orgId) }, {})
    .then((resp: GetLegalAndSupportSettingsResponse) => {
      return resp.settings;
    });
}

export async function getPasswordComplexitySettings(
  orgId?: string,
): Promise<PasswordComplexitySettings | undefined> {
  return settingsService
    .getPasswordComplexitySettings({ ctx: makeReqCtx(orgId) })
    .then((resp: GetPasswordComplexitySettingsResponse) => resp.settings);
}

export async function createSessionForLoginname(
  loginName: string,
  password: string | undefined,
  challenges: RequestChallenges | undefined,
): Promise<CreateSessionResponse | undefined> {
  return password
    ? sessionService.createSession(
        {
          checks: {
            user: {
              search: {
                case: "loginName",
                value: loginName,
              },
            },
            password: { password },
          },
          challenges,
          lifetime: {
            seconds: BigInt(300),
            nanos: 0,
          },
        },
        {},
      )
    : sessionService.createSession(
        {
          checks: {
            user: {
              search: {
                case: "loginName",
                value: loginName,
              },
            },
          },
          challenges,
          lifetime: {
            seconds: BigInt(300),
            nanos: 0,
          },
        },
        {},
      );
}

export async function createSessionForUserIdAndIdpIntent(
  userId: string,
  idpIntent: {
    idpIntentId?: string | undefined;
    idpIntentToken?: string | undefined;
  },
): Promise<CreateSessionResponse | undefined> {
  return sessionService.createSession(
    {
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

export async function addHumanUser({
  email,
  firstName,
  lastName,
  password,
  organization,
}: AddHumanUserData): Promise<AddHumanUserResponse> {
  const payload: PartialMessage<AddHumanUserRequest> = {
    email: { email },
    username: email,
    profile: { givenName: firstName, familyName: lastName },
  };

  if (organization) {
    payload.organization = {
      org: { case: "orgId", value: organization },
    };
  }

  if (password) {
    payload.passwordType = {
      case: "password",
      value: {
        password: password,
      },
    };
  }

  return userService.addHumanUser(payload);
}

export async function listUsers(
  userName: string,
  organizationId?: string,
): Promise<ListUsersResponse> {
  const queries = [
    new SearchQuery({
      query: {
        case: "userNameQuery",
        value: { userName, method: TextQueryMethod.EQUALS },
      },
    }),
  ];

  if (organizationId) {
    queries.push(
      new SearchQuery({
        query: {
          case: "organizationIdQuery",
          value: { organizationId },
        },
      }),
    );
  }

  return userService.listUsers(new ListUsersRequest({ queries }));
}
