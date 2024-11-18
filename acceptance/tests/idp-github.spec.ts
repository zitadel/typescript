import {test as base} from "@playwright/test";
import {OtpType, PasswordUserWithOTP} from './user';
import path from 'path';
import dotenv from 'dotenv';
import {loginScreenExpect, loginWithPassword} from "./login";
import {startSink} from "./otp";

// Read from ".env" file.
dotenv.config({path: path.resolve(__dirname, '.env.local')});

const test = base.extend<{ user: PasswordUserWithOTP }>({
    user: async ({page}, use) => {
        const user = new PasswordUserWithOTP({
            email: "otp_sms@example.com",
            firstName: "first",
            lastName: "last",
            password: "Password1!",
            organization: "",
            type: OtpType.sms,
        });

        await user.ensure(page);
        await use(user);
    },
});


test("login with GitHub IDP - auto redirect", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given the user has only idp GitHub added as auth method

    // User is automatically redirected to GitHub
    // User authenticates in GitHub
    // User is redirect to ZITADEL login
    // User is redirected to the app (default redirect url)
});


test("login with GitHub IDP - auto redirect, error", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given the user has only idp GitHub added as auth method

    // User is automatically redirected to GitHub
    // User authenticates in GitHub and gets an error
    // User is redirect to ZITADEL login
    // Error is shown to the user "Something went wrong in GitHub Login"
});


test("login with GitHub IDP", async ({user, page}) => {
    // Given username password and idp GitHub is configure on the organization as authencation method
    // Given the user has username password and GitHub configured

    // Login form shows username field and a GitHub Login button
    // User clicks on the GitHub button
    // User is redirected to GitHub
    // User authenticates in GitHub and gets an error
    // User is redirect to ZITADEL login automatically
    // User is redirected to app automatically (default redirect url)
});

 
test("login with GitHub IDP, error", async ({user, page}) => {
    // Given username password and idp GitHub is configure on the organization as authencation method
    // Given the user has username password and GitHub configured

    // Login form shows username field and a GitHub Login button
    // User clicks on the GitHub button
    // User is redirected to GitHub
    // User authenticates in GitHub and gets an error
    // User is redirect to ZITADEL login
    // Error is shown to the user "Something went wrong in GitHub Login"
    // User can choose password for authentication
});

test("login with GitHub IDP, no user existing - auto register", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with account creation alloweed, and automatic creation enabled
    // Given ZITADEL Action is added to autofill missing user information
    // Given no user exists yet

    // User is automatically redirected to GitHub
    // User authenticates in GitHub
    // User is redirect to ZITADEL login
    // User is created in ZITADEL
    // User is redirected to the app (default redirect url)
});

test("login with GitHub IDP, no user existing - auto register not possible", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with account creation alloweed, and automatic creation enabled
    // Given no user exists yet

    // User is automatically redirected to GitHub
    // User authenticates in GitHub
    // User is redirect to ZITADEL login
    // Because of missing informaiton on the user auto creation is not possible
    // User will see the registration page with pre filled user information
    // User fills missing information
    // User clicks register button
    // User is created in ZITADEL
    // User is redirected to the app (default redirect url)
});

test("login with GitHub IDP, no user existing - auto register enabled - manual creation disabled, creation not possible", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with account creation not allowed, and automatic creation enabled
    // Given no user exists yet

    // User is automatically redirected to GitHub
    // User authenticates in GitHub
    // User is redirect to ZITADEL login
    // Because of missing informaiton on the user auto creation is not possible
    // Error message is shown, that registration of the user was not possible due to missing information
});

test("login with GitHub IDP, no user linked - auto link", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with account linking allowed, and linking set to existing email
    // Given ZITADEL Action is added to autofill missing user information
    // Given user with email address user@zitadel.com exists

    // User is automatically redirected to GitHub
    // User authenticates in GitHub with user@zitadel.com
    // User is redirect to ZITADEL login
    // User is linked with existing user in ZITADEL
    // User is redirected to the app (default redirect url)
});

test("login with GitHub IDP, no user linked, user doesn't exist - no auto link", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with manually account linking  not allowed, and linking set to existing email
    // Given ZITADEL Action is added to autofill missing user information
    // Given user with email address user@zitadel.com doesn't exists

    // User is automatically redirected to GitHub
    // User authenticates in GitHub with user@zitadel.com
    // User is redirect to ZITADEL login
    // User with email address user@zitadel.com can not be found
    // User will get an error message that account linking wasn't possible
});


test("login with GitHub IDP, no user linked, user doesn't exist - no auto link", async ({user, page}) => {
    // Given idp GitHub is configure on the organization as only authencation method
    // Given idp GitHub is configure with manually account linking allowed, and linking set to existing email
    // Given ZITADEL Action is added to autofill missing user information
    // Given user with email address user@zitadel.com doesn't exists

    // User is automatically redirected to GitHub
    // User authenticates in GitHub with user@zitadel.com
    // User is redirect to ZITADEL login
    // User with email address user@zitadel.com can not be found
    // User is prompted to link the account manually
    // User is redirected to the app (default redirect url)
});