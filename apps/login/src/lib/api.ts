import { importPKCS8, SignJWT } from "jose";
import { getInstanceByHost } from "./zitadel";

type ApiConfiguration = {
  url: string;
  token: string;
};

export async function getApiUrl(host: string): Promise<ApiConfiguration> {
  const instance = await getInstanceByHost(host);
  const generatedDomain = instance.domains.find(
    (domain) => domain.generated === true,
  );

  if (!generatedDomain?.domain) {
    throw new Error("No generated domain found");
  }

  const systemToken = await systemAPIToken();

  console.log(`host: ${host}, api: ${generatedDomain?.domain}`);

  return { url: generatedDomain?.domain, token: systemToken };
}

export async function systemAPIToken() {
  const audience = process.env.AUDIENCE;
  const userID = process.env.SYSTEM_USER_ID;
  const key = process.env.SYSTEM_USER_PRIVATE_KEY;

  const decodedToken = Buffer.from(key, "base64").toString("utf-8");

  const token = new SignJWT({})
    .setProtectedHeader({ alg: "RS256" })
    .setIssuedAt()
    .setExpirationTime("1h")
    .setIssuer(userID)
    .setSubject(userID)
    .setAudience(audience)
    .sign(await importPKCS8(decodedToken, "RS256"));

  return token;
}
