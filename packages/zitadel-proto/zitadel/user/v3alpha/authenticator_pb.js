// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/user/v3alpha/authenticator.proto (package zitadel.user.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from enum zitadel.user.v3alpha.AuthNKeyType
 */
export const AuthNKeyType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.v3alpha.AuthNKeyType",
  [
    {no: 0, name: "AUTHN_KEY_TYPE_UNSPECIFIED"},
    {no: 1, name: "AUTHN_KEY_TYPE_JSON"},
  ],
);

/**
 * @generated from enum zitadel.user.v3alpha.WebAuthNAuthenticatorType
 */
export const WebAuthNAuthenticatorType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.v3alpha.WebAuthNAuthenticatorType",
  [
    {no: 0, name: "WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED"},
    {no: 1, name: "WEB_AUTH_N_AUTHENTICATOR_PLATFORM"},
    {no: 2, name: "WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM"},
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.Authenticators
 */
export const Authenticators = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.Authenticators",
  () => [
    { no: 1, name: "usernames", kind: "message", T: Username, repeated: true },
    { no: 2, name: "password", kind: "message", T: Password },
    { no: 3, name: "web_auth_n", kind: "message", T: WebAuthN, repeated: true },
    { no: 4, name: "totps", kind: "message", T: TOTP, repeated: true },
    { no: 5, name: "otp_sms", kind: "message", T: OTPSMS, repeated: true },
    { no: 6, name: "otp_email", kind: "message", T: OTPEmail, repeated: true },
    { no: 7, name: "authentication_keys", kind: "message", T: AuthenticationKey, repeated: true },
    { no: 8, name: "identity_providers", kind: "message", T: IdentityProvider, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.Username
 */
export const Username = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.Username",
  () => [
    { no: 1, name: "username_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_organization_specific", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetUsername
 */
export const SetUsername = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetUsername",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_organization_specific", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.Password
 */
export const Password = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.Password",
  () => [
    { no: 1, name: "last_changed", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.WebAuthN
 */
export const WebAuthN = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.WebAuthN",
  () => [
    { no: 1, name: "web_auth_n_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "user_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.OTPSMS
 */
export const OTPSMS = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.OTPSMS",
  () => [
    { no: 1, name: "otp_sms_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.OTPEmail
 */
export const OTPEmail = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.OTPEmail",
  () => [
    { no: 1, name: "otp_email_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.TOTP
 */
export const TOTP = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.TOTP",
  () => [
    { no: 1, name: "totp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AuthenticationKey
 */
export const AuthenticationKey = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AuthenticationKey",
  () => [
    { no: 1, name: "authentication_key_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: Details },
    { no: 3, name: "type", kind: "enum", T: proto3.getEnumType(AuthNKeyType) },
    { no: 4, name: "expiration_date", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IdentityProvider
 */
export const IdentityProvider = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IdentityProvider",
  () => [
    { no: 1, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "idp_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetAuthenticators
 */
export const SetAuthenticators = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetAuthenticators",
  () => [
    { no: 1, name: "usernames", kind: "message", T: SetUsername, repeated: true },
    { no: 2, name: "password", kind: "message", T: SetPassword },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetPassword
 */
export const SetPassword = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetPassword",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "type" },
    { no: 2, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "type" },
    { no: 3, name: "change_required", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SendPasswordResetEmail
 */
export const SendPasswordResetEmail = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SendPasswordResetEmail",
  () => [
    { no: 2, name: "url_template", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SendPasswordResetSMS
 */
export const SendPasswordResetSMS = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SendPasswordResetSMS",
  [],
);

/**
 * @generated from message zitadel.user.v3alpha.ReturnPasswordResetCode
 */
export const ReturnPasswordResetCode = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ReturnPasswordResetCode",
  [],
);

/**
 * @generated from message zitadel.user.v3alpha.AuthenticatorRegistrationCode
 */
export const AuthenticatorRegistrationCode = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AuthenticatorRegistrationCode",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SendWebAuthNRegistrationLink
 */
export const SendWebAuthNRegistrationLink = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SendWebAuthNRegistrationLink",
  () => [
    { no: 1, name: "url_template", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ReturnWebAuthNRegistrationCode
 */
export const ReturnWebAuthNRegistrationCode = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ReturnWebAuthNRegistrationCode",
  [],
);

/**
 * @generated from message zitadel.user.v3alpha.RedirectURLs
 */
export const RedirectURLs = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RedirectURLs",
  () => [
    { no: 1, name: "success_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "failure_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.LDAPCredentials
 */
export const LDAPCredentials = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.LDAPCredentials",
  () => [
    { no: 1, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IdentityProviderIntent
 */
export const IdentityProviderIntent = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IdentityProviderIntent",
  () => [
    { no: 1, name: "idp_intent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_intent_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IDPInformation
 */
export const IDPInformation = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IDPInformation",
  () => [
    { no: 1, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "raw_information", kind: "message", T: Struct },
    { no: 5, name: "oauth", kind: "message", T: IDPOAuthAccessInformation, oneof: "access" },
    { no: 6, name: "ldap", kind: "message", T: IDPLDAPAccessInformation, oneof: "access" },
    { no: 7, name: "saml", kind: "message", T: IDPSAMLAccessInformation, oneof: "access" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IDPOAuthAccessInformation
 */
export const IDPOAuthAccessInformation = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IDPOAuthAccessInformation",
  () => [
    { no: 1, name: "access_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id_token", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IDPLDAPAccessInformation
 */
export const IDPLDAPAccessInformation = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IDPLDAPAccessInformation",
  () => [
    { no: 1, name: "attributes", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IDPSAMLAccessInformation
 */
export const IDPSAMLAccessInformation = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IDPSAMLAccessInformation",
  () => [
    { no: 1, name: "assertion", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.IDPAuthenticator
 */
export const IDPAuthenticator = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.IDPAuthenticator",
  () => [
    { no: 1, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

