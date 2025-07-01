namespace NodeJS {
  interface ProcessEnv {
    /**
     * Optional: custom request headers to be added to every request
     * Split by comma, key value pairs separated by colon
     */
    CUSTOM_REQUEST_HEADERS?: string;
  }
}
