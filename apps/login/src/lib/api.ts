type ApiConfiguration = {
  url: string;
  token: string;
  userId: string;
};

const QA: ApiConfiguration = {
  url: process.env.MULTITENANCY_QA_URL!,
  token: process.env.MULTITENANCY_QA_TOKEN!,
  userId: process.env.MULTITENANCY_QA_USERID!,
};

const PROD: ApiConfiguration = {
  url: process.env.MULTITENANCY_PROD_URL!,
  token: process.env.MULTITENANCY_PROD_TOKEN!,
  userId: process.env.MULTITENANCY_PROD_USERID!,
};

export function getApiConfiguration(host: string): ApiConfiguration {
  console.log(host);
  return host.includes("wild") ? QA : PROD;
}
