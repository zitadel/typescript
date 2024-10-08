import { importPKCS8, SignJWT } from "jose";

type ApiConfiguration = {
  url: string;
  token: string;
  userId: string;
};

const QA: Omit<ApiConfiguration, "token"> = {
  url: process.env.MULTITENANCY_QA_URL,
  userId: process.env.MULTITENANCY_QA_USERID,
};

const PROD: Omit<ApiConfiguration, "token"> = {
  url: process.env.MULTITENANCY_PROD_URL,
  userId: process.env.MULTITENANCY_PROD_USERID,
};

export async function getApiConfiguration(
  host: string,
): Promise<ApiConfiguration> {
  const config = host.includes("wild") ? QA : PROD;

  const systemToken = await systemAPIToken();

  return { ...config, token: systemToken };
}

export async function systemAPIToken() {
  const audience = process.env.ZITADEL_API_URL; // https://zitadel.app
  const userID = process.env.ZITADEL_SERVICE_USER_ID; // customer-portal
  const key = process.env.ZITADEL_SERVICE_USER_TOKEN; // private key

  const token = new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .setIssuer(userID)
    .setSubject(userID)
    .setAudience(audience)
    .sign(await importPKCS8(key, "RS256"));

  return token;
}
