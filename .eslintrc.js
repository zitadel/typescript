module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `@zitadel/eslint-config`
  extends: ["@zitadel/eslint-config/next-js"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
