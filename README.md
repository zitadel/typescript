# ZITADEL TypeScript with Turborepo

This repository contains all TypeScript and JavaScript packages and applications you need to create your own ZITADEL
Login UI.

<img src="./apps/login/screenshots/collage.png"alt="collage of login screens" width="1600px" />

[![npm package](https://img.shields.io/npm/v/@zitadel/proto.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@zitadel/proto)
[![npm package](https://img.shields.io/npm/v/@zitadel/client.svg?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@zitadel/client)

> [!WARNING]
> ⚠️ This repo and packages are in beta state and subject to change ⚠️

The scope of functionality of this repo and packages is under active development.

The `@zitadel/client` package is using [@connectrpc/connect](https://github.com/connectrpc/connect-es#readme).

You can read the [contribution guide](/CONTRIBUTING.md) on how to contribute.
Questions can be raised in our [Discord channel](https://discord.gg/erh5Brh7jE) or as
a [GitHub issue](https://github.com/zitadel/typescript/issues).

## Developing Your Own ZITADEL Login UI

We think the easiest path of getting up and running, is the following:

1. Fork and clone this repository
1. [Run the ZITADEL Cloud login UI locally](#run-login-ui)
1. Make changes to the code and see the effects live on your local machine
1. Study the rest of this README.md and get familiar and comfortable with how everything works.
1. Decide on a way of how you want to build and run your login UI.
   You can reuse ZITADEL Clouds way.
   But if you need more freedom, you can also import the packages you need into your self built application.

## Included Apps And Packages

- `login`: The login UI used by ZITADEL Cloud, powered by Next.js
- `@zitadel/client`: shared client utilities for node and browser environments
- `@zitadel/proto`: Protocol Buffers (proto) definitions used by ZITADEL projects
- `@zitadel/tsconfig`: shared `tsconfig.json`s used throughout the monorepo
- `@zitadel/eslint-config`: ESLint preset

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Login

The login is currently in a work in progress state.
The goal is to implement a login UI, using the session API of ZITADEL, which also implements the OIDC Standard and is
ready to use for everyone.

In the first phase we want to have a MVP login ready with the OIDC Standard and a basic feature set. In a second step
the features will be extended.

This list should show the current implementation state, and also what is missing.
You can already use the current state, and extend it with your needs.

#### Features list

- [x] Local User Registration (with Password)
- [x] User Registration and Login with external Provider
  - [x] Google
  - [x] GitHub
  - [x] GitHub Enterprise
  - [x] GitLab
  - [x] GitLab Enterprise
  - [x] Azure
  - [x] Apple
  - [x] Generic OIDC
  - [x] Generic OAuth
  - [x] Generic JWT
  - [x] LDAP
  - [x] SAML SP
- Multifactor Registration an Login
  - [x] Passkeys
  - [x] TOTP
  - [x] OTP: Email Code
  - [x] OTP: SMS Code
- [x] Password Change/Reset
- [x] Domain Discovery
- [x] Branding
- OIDC Standard

  - [x] Authorization Code Flow with PKCE
  - [x] AuthRequest `hintUserId`
  - [x] AuthRequest `loginHint`
  - [x] AuthRequest `prompt`
    - [x] Login
    - [x] Select Account
    - [ ] Consent
    - [x] Create
  - Scopes
    - [x] `openid email profile address``
    - [x] `offline access`
    - [x] `urn:zitadel:iam:org:idp:id:{idp_id}`
    - [x] `urn:zitadel:iam:org:project:id:zitadel:aud`
    - [x] `urn:zitadel:iam:org:id:{orgid}`
    - [x] `urn:zitadel:iam:org:domain:primary:{domain}`
  - [ ] AuthRequest UI locales

  #### Flow diagram

  This diagram shows the available pages and flows.

  > Note that back navigation or retries are not displayed.

```mermaid
    flowchart TD
    A[Start] --> register
    A[Start] --> accounts
    A[Start] --> loginname
    loginname -- signInWithIDP --> idp-success
    loginname -- signInWithIDP --> idp-failure
    idp-success --> B[signedin]
    loginname --> password
    loginname -- hasPasskey --> passkey
    loginname -- allowRegister --> register
    passkey-add --passwordAllowed --> password
    passkey -- hasPassword --> password
    passkey --> B[signedin]
    password -- hasMFA --> mfa
    password -- allowPasskeys --> passkey-add
    password -- reset --> password-set
    email -- reset --> password-set
    password-set --> B[signedin]
    password-change --> B[signedin]
    password -- userstate=initial --> password-change

    mfa --> otp
    otp --> B[signedin]
    mfa--> u2f
    u2f -->B[signedin]
    register -- password/passkey --> B[signedin]
    password --> B[signedin]
    password-- forceMFA -->mfaset
    mfaset --> u2fset
    mfaset --> otpset
    u2fset --> B[signedin]
    otpset --> B[signedin]
    accounts--> loginname
    password -- not verified yet -->verify
    register-- withpassword -->verify
    passkey-- notVerified --> verify
    verify --> B[signedin]
```

You can find a more detailed documentation of the different pages [on this link](./apps/login/readme.md).

#### Custom translations

The new login uses the [SettingsApi](https://zitadel.com/docs/apis/resources/settings_service_v2/settings-service-get-hosted-login-translation) to load custom translations.
Translations can be overriden at both the instance and organization levels.
To find the keys more easily, you can inspect the HTML and search for a `data-i18n-key` attribute, or look at the defaults in `/apps/login/locales/[locale].ts`.
![Custom Translations](.github/custom-i18n.png)

## Tooling

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Useful Commands

- `make login-quality` - Check the quality of your code against a production build without installing any dependencies besides Docker
- `pnpm generate` - Build proto stubs for the client package
- `pnpm dev` - Develop all packages and the login app
- `pnpm build` - Build all packages and the login app
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

Learn more about developing the login UI in the [contribution guide](/CONTRIBUTING.md).

## Versioning And Publishing Packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets).
Here is their [documentation](https://github.com/changesets/changesets#documentation) for more information about the
workflow.

The [GitHub Action](https://github.com/changesets/action) needs an `NPM_TOKEN` and `GITHUB_TOKEN` in the repository
settings. The [Changesets bot](https://github.com/apps/changeset-bot) should also be installed on the GitHub repository.

Read the [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)
for more information about this automation

### Run Login UI

To run the application make sure to install the dependencies with

#### Preparing the app

```sh
pnpm install
```

then generate the GRPC stubs with (a [Buf](https://buf.build) account is required)

```sh
pnpm generate
```

#### Running app against a local Instance of ZITADEL

To run the application against a local ZITADEL instance, use the following command:

```sh
docker compose up
```

- **ZITADEL Admin email**: `zitadel-admin@zitadel.localhost`
- **ZITADEL Admin password**: `Password1!`
  
>[!NOTE]
> When using Docker Compose, a local SMTP server can be configured for testing email functionality.
>The SMTP provider UI is available at: `http://localhost:8025`

To configure the local SMTP provider:

1. Navigate to `http://localhost:8080/ui/console/instance?id=smtpprovider`
2. Select Generic SMTP
3. Set the Host and Port to `mailhog:1025`
4. Fill in the remaining fields with any data (they won’t be validated)
5. Click Test on step 3
6. Finally, activate the SMTP provider

#### Pointing app to a backend

Update `apps/login/.env.local` with:

```env
ZITADEL_API_URL=<http://localhost:8080 or Zitadel URL instance>
ZITADEL_SERVICE_USER_TOKEN=<Personal Access Token from machine user with Org Owener and Iam Owener memberships>
CUSTOM_REQUEST_HEADERS=x-zitadel-public-host:auth.staging.env.datum.net,x-zitadel-public-proto:https
```

#### Starting the app

Start the login application in dev mode:

```sh
pnpm dev
```

Open the login application with your favorite browser at `localhost:3000`.
Change the source code and see the changes live in your browser.

Make sure the application still behaves as expected by running all tests

```sh
pnpm test
```

To satisfy your unique workflow requirements, check out the package.json in the root directory for more detailed scripts.

### Run Production UI Locally

To run the production build of the Login UI locally, follow these steps:

1. **Build the production Docker image:**

   ```sh
   make login_standalone_build
   ```

   This command will build the Docker image for the production-ready Login UI.

2. **Prepare your environment file:**

   Create or update your environment file (e.g., `.env.production`) with the necessary environment variables. At a minimum, you will need:

   ```env
   ZITADEL_API_URL=<your-zitadel-instance-url>
   ZITADEL_SERVICE_USER_TOKEN=<your-service-user-token>
   CUSTOM_REQUEST_HEADERS=x-zitadel-public-host:auth.staging.env.datum.net,x-zitadel-public-proto:https

   ```

3. **Run the Docker image:**

   ```sh
   docker run --env-file <env file path> -p 3000:3000 zitadel-login:local
   ```

   Replace `<env file path>` with the path to your environment file (e.g., `.env.production`).

4. **Access the UI:**

   Open your browser and navigate to [localhost:3000/ui/v2/login/register](localhost:3000/ui/v2/login/register) to view the production registration component running locally as example.

### Run Login UI Acceptance tests

To run the acceptance tests you need a running ZITADEL environment and a component which receives HTTP requests for the emails and sms's.
This component should also be able to return the content of these notifications, as the codes and links are used in the login flows.
There is a basic implementation in Golang available under [the sink package](./acceptance/sink).

To setup ZITADEL with the additional Sink container for handling the notifications:

```sh
pnpm run-sink
```

Then you can start the acceptance tests with:

```sh
pnpm test:acceptance
```

### Deploy to Vercel

To deploy your own version on Vercel, navigate to your instance and create a service user.
Then create a personal access token (PAT), copy and set it as ZITADEL_SERVICE_USER_TOKEN, then navigate to your instance
settings and make sure it gets IAM_OWNER permissions.
Finally set your instance url as ZITADEL_API_URL. Make sure to set it without trailing slash.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzitadel%2Ftypescript&env=ZITADEL_API_URL,ZITADEL_SERVICE_USER_TOKEN&root-directory=apps/login&envDescription=Setup%20a%20service%20account%20with%20IAM_LOGIN_CLIENT%20membership%20on%20your%20instance%20and%20provide%20its%20personal%20access%20token.&project-name=zitadel-login&repository-name=zitadel-login)
