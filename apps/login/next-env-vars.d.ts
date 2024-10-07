declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The system api url
     */
    ZITADEL_API_URL: string;

    /**
     * The system api service user ID
     */
    ZITADEL_SERVICE_USER_ID: string;

    /**
     * The service user key
     */
    ZITADEL_SERVICE_USER_TOKEN: string;

    // TODO remove this
    MULTITENANCY_QA_URL: string;
    MULTITENANCY_QA_USERID: string;
    MULTITENANCY_PROD_URL: string;
    MULTITENANCY_PROD_USERID: string;
  }
}
