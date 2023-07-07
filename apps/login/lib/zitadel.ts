import {
  ZitadelServer,
  ZitadelServerOptions,
  user,
  settings,
  getServers,
  initializeServer,
  session,
  GetGeneralSettingsResponse,
  CreateSessionResponse,
  GetBrandingSettingsResponse,
  GetPasswordComplexitySettingsResponse,
  GetLegalAndSupportSettingsResponse,
  AddHumanUserResponse,
  BrandingSettings,
  ListSessionsResponse,
  LegalAndSupportSettings,
  PasswordComplexitySettings,
  GetSessionResponse,
  VerifyEmailResponse,
  SetSessionResponse,
  DeleteSessionResponse,
  VerifyPasskeyRegistrationResponse,
  ChallengeKind,
  LoginSettings,
  GetLoginSettingsResponse,
  ListAuthenticationMethodTypesResponse,
} from "@zitadel/server";

export const zitadelConfig: ZitadelServerOptions = {
  name: "zitadel login",
  apiUrl: "https://invarum-8bucih.zitadel.app",
  token: "0b6h3rzcFQYufL1tyJzR5rWjQF_v2UIIMwrnZYT5Zlr2ZBGfOTWhLdEIulQt1NInuNFh2IU",
};

let server: ZitadelServer;

if (!getServers().length) {
  console.log("initialize server");
  server = initializeServer(zitadelConfig);
}

export async function getBrandingSettings(
  server: ZitadelServer
): Promise<BrandingSettings | undefined> {
  const settingsService = settings.getSettings(server);
  return settingsService
    .getBrandingSettings({}, {})
    .then((resp: GetBrandingSettingsResponse) => resp.settings);
}

export async function getLoginSettings(
  server: ZitadelServer
): Promise<LoginSettings | undefined> {
  const settingsService = settings.getSettings(server);
  return settingsService
    .getLoginSettings({}, {})
    .then((resp: GetLoginSettingsResponse) => resp.settings);
}

export async function getGeneralSettings(
  server: ZitadelServer
): Promise<string[] | undefined> {
  const settingsService = settings.getSettings(server);
  return settingsService
    .getGeneralSettings({}, {})
    .then((resp: GetGeneralSettingsResponse) => resp.supportedLanguages);
}

export async function getLegalAndSupportSettings(
  server: ZitadelServer
): Promise<LegalAndSupportSettings | undefined> {
  const settingsService = settings.getSettings(server);
  return settingsService
    .getLegalAndSupportSettings({}, {})
    .then((resp: GetLegalAndSupportSettingsResponse) => {
      return resp.settings;
    });
}

export async function getPasswordComplexitySettings(
  server: ZitadelServer
): Promise<PasswordComplexitySettings | undefined> {
  const settingsService = settings.getSettings(server);

  return settingsService
    .getPasswordComplexitySettings({}, {})
    .then((resp: GetPasswordComplexitySettingsResponse) => resp.settings);
}

export async function createSession(
  server: ZitadelServer,
  loginName: string,
  domain: string,
  password: string | undefined,
  challenges: ChallengeKind[] | undefined
): Promise<CreateSessionResponse | undefined> {
  const sessionService = session.getSession(server);
  return password
    ? sessionService.createSession(
        {
          checks: { user: { loginName }, password: { password } },
          challenges,
          domain,
        },
        {}
      )
    : sessionService.createSession(
        { checks: { user: { loginName } }, domain },
        {}
      );
}

export async function setSession(
  server: ZitadelServer,
  sessionId: string,
  sessionToken: string,
  domain: string | undefined,
  password: string | undefined,
  passkey: { credentialAssertionData: any } | undefined,
  challenges: ChallengeKind[] | undefined
): Promise<SetSessionResponse | undefined> {
  const sessionService = session.getSession(server);

  const payload = { sessionId, sessionToken, challenges, domain };
  return password
    ? sessionService.setSession(
        {
          ...payload,
          checks: { password: { password }, passkey },
        },
        {}
      )
    : sessionService.setSession(payload, {});
}

export async function getSession(
  server: ZitadelServer,
  sessionId: string,
  sessionToken: string
): Promise<GetSessionResponse | undefined> {
  const sessionService = session.getSession(server);
  return sessionService.getSession({ sessionId, sessionToken }, {});
}

export async function deleteSession(
  server: ZitadelServer,
  sessionId: string,
  sessionToken: string
): Promise<DeleteSessionResponse | undefined> {
  const sessionService = session.getSession(server);
  return sessionService.deleteSession({ sessionId, sessionToken }, {});
}

export async function listSessions(
  server: ZitadelServer,
  ids: string[]
): Promise<ListSessionsResponse | undefined> {
  const sessionService = session.getSession(server);
  const query = { offset: 0, limit: 100, asc: true };
  const queries = [{ idsQuery: { ids } }];
  return sessionService.listSessions({ queries: queries }, {});
}

export type AddHumanUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string | undefined;
};

export async function addHumanUser(
  server: ZitadelServer,
  { email, firstName, lastName, password }: AddHumanUserData
): Promise<string> {
  const mgmt = user.getUser(server);

  const payload = {
    email: { email },
    username: email,
    profile: { firstName, lastName },
  };
  return mgmt
    .addHumanUser(
      password
        ? {
            ...payload,
            password: { password },
          }
        : payload,
      {}
    )
    .then((resp: AddHumanUserResponse) => {
      return resp.userId;
    });
}

export async function verifyEmail(
  server: ZitadelServer,
  userId: string,
  verificationCode: string
): Promise<VerifyEmailResponse> {
  const userservice = user.getUser(server);
  return userservice.verifyEmail(
    {
      userId,
      verificationCode,
    },
    {}
  );
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function setEmail(
  server: ZitadelServer,
  userId: string
): Promise<any> {
  const userservice = user.getUser(server);
  return userservice.setEmail(
    {
      userId,
    },
    {}
  );
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function createPasskeyRegistrationLink(
  userId: string
): Promise<any> {
  const userservice = user.getUser(server);

  return userservice.createPasskeyRegistrationLink({
    userId,
    returnCode: {},
  });
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function verifyPasskeyRegistration(
  server: ZitadelServer,
  passkeyId: string,
  passkeyName: string,
  publicKeyCredential:
    | {
        [key: string]: any;
      }
    | undefined,
  userId: string
): Promise<VerifyPasskeyRegistrationResponse> {
  const userservice = user.getUser(server);
  return userservice.verifyPasskeyRegistration(
    {
      passkeyId,
      passkeyName,

      publicKeyCredential,
      userId,
    },
    {}
  );
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function registerPasskey(
  userId: string,
  code: { id: string; code: string },
  domain: string
): Promise<any> {
  const userservice = user.getUser(server);
  return userservice.registerPasskey({
    userId,
    code,
    domain,
    // authenticator:
  });
}

/**
 *
 * @param server
 * @param userId the id of the user where the email should be set
 * @returns the newly set email
 */
export async function listAuthenticationMethodTypes(
  userId: string
): Promise<ListAuthenticationMethodTypesResponse> {
  const userservice = user.getUser(server);
  return userservice.listAuthenticationMethodTypes({
    userId,
  });
}

export { server };
