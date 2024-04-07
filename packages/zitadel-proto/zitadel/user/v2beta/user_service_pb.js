// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/user/v2beta/user_service.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { Details, ListDetails, ListQuery, Organization } from "../../object/v2beta/object_pb.js";
import { SetHumanProfile, SetMetadataEntry, User } from "./user_pb.js";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email_pb.js";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone_pb.js";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink, SetPassword } from "./password_pb.js";
import { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp_pb.js";
import { SearchQuery, UserFieldName } from "./query_pb.js";
import { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth_pb.js";

/**
 * @generated from enum zitadel.user.v2beta.AuthenticationMethodType
 */
export const AuthenticationMethodType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.user.v2beta.AuthenticationMethodType",
  [
    {no: 0, name: "AUTHENTICATION_METHOD_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "AUTHENTICATION_METHOD_TYPE_PASSWORD", localName: "PASSWORD"},
    {no: 2, name: "AUTHENTICATION_METHOD_TYPE_PASSKEY", localName: "PASSKEY"},
    {no: 3, name: "AUTHENTICATION_METHOD_TYPE_IDP", localName: "IDP"},
    {no: 4, name: "AUTHENTICATION_METHOD_TYPE_TOTP", localName: "TOTP"},
    {no: 5, name: "AUTHENTICATION_METHOD_TYPE_U2F", localName: "U2F"},
    {no: 6, name: "AUTHENTICATION_METHOD_TYPE_OTP_SMS", localName: "OTP_SMS"},
    {no: 7, name: "AUTHENTICATION_METHOD_TYPE_OTP_EMAIL", localName: "OTP_EMAIL"},
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddHumanUserRequest
 */
export const AddHumanUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddHumanUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 11, name: "organization", kind: "message", T: Organization },
    { no: 4, name: "profile", kind: "message", T: SetHumanProfile },
    { no: 5, name: "email", kind: "message", T: SetHumanEmail },
    { no: 10, name: "phone", kind: "message", T: SetHumanPhone },
    { no: 6, name: "metadata", kind: "message", T: SetMetadataEntry, repeated: true },
    { no: 7, name: "password", kind: "message", T: Password, oneof: "password_type" },
    { no: 8, name: "hashed_password", kind: "message", T: HashedPassword, oneof: "password_type" },
    { no: 9, name: "idp_links", kind: "message", T: IDPLink, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddHumanUserResponse
 */
export const AddHumanUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddHumanUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: Details },
    { no: 3, name: "email_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "phone_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.GetUserByIDRequest
 */
export const GetUserByIDRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.GetUserByIDRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.GetUserByIDResponse
 */
export const GetUserByIDResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.GetUserByIDResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ListUsersRequest
 */
export const ListUsersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ListUsersRequest",
  () => [
    { no: 1, name: "query", kind: "message", T: ListQuery },
    { no: 2, name: "sorting_column", kind: "enum", T: proto3.getEnumType(UserFieldName) },
    { no: 3, name: "queries", kind: "message", T: SearchQuery, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ListUsersResponse
 */
export const ListUsersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ListUsersResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: ListDetails },
    { no: 2, name: "sorting_column", kind: "enum", T: proto3.getEnumType(UserFieldName) },
    { no: 3, name: "result", kind: "message", T: User, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetEmailRequest
 */
export const SetEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "send_code", kind: "message", T: SendEmailVerificationCode, oneof: "verification" },
    { no: 4, name: "return_code", kind: "message", T: ReturnEmailVerificationCode, oneof: "verification" },
    { no: 5, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetEmailResponse
 */
export const SetEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ResendEmailCodeRequest
 */
export const ResendEmailCodeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ResendEmailCodeRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_code", kind: "message", T: SendEmailVerificationCode, oneof: "verification" },
    { no: 3, name: "return_code", kind: "message", T: ReturnEmailVerificationCode, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ResendEmailCodeResponse
 */
export const ResendEmailCodeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ResendEmailCodeResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyEmailRequest
 */
export const VerifyEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyEmailResponse
 */
export const VerifyEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetPhoneRequest
 */
export const SetPhoneRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetPhoneRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "send_code", kind: "message", T: SendPhoneVerificationCode, oneof: "verification" },
    { no: 4, name: "return_code", kind: "message", T: ReturnPhoneVerificationCode, oneof: "verification" },
    { no: 5, name: "is_verified", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetPhoneResponse
 */
export const SetPhoneResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetPhoneResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ResendPhoneCodeRequest
 */
export const ResendPhoneCodeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ResendPhoneCodeRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "send_code", kind: "message", T: SendPhoneVerificationCode, oneof: "verification" },
    { no: 4, name: "return_code", kind: "message", T: ReturnPhoneVerificationCode, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ResendPhoneCodeResponse
 */
export const ResendPhoneCodeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ResendPhoneCodeResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyPhoneRequest
 */
export const VerifyPhoneRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyPhoneRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyPhoneResponse
 */
export const VerifyPhoneResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyPhoneResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.DeleteUserRequest
 */
export const DeleteUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.DeleteUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.DeleteUserResponse
 */
export const DeleteUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.DeleteUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.UpdateHumanUserRequest
 */
export const UpdateHumanUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.UpdateHumanUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "profile", kind: "message", T: SetHumanProfile, opt: true },
    { no: 4, name: "email", kind: "message", T: SetHumanEmail, opt: true },
    { no: 5, name: "phone", kind: "message", T: SetHumanPhone, opt: true },
    { no: 6, name: "password", kind: "message", T: SetPassword, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.UpdateHumanUserResponse
 */
export const UpdateHumanUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.UpdateHumanUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "email_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "phone_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.DeactivateUserRequest
 */
export const DeactivateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.DeactivateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.DeactivateUserResponse
 */
export const DeactivateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.DeactivateUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ReactivateUserRequest
 */
export const ReactivateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ReactivateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ReactivateUserResponse
 */
export const ReactivateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ReactivateUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.LockUserRequest
 */
export const LockUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.LockUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.LockUserResponse
 */
export const LockUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.LockUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.UnlockUserRequest
 */
export const UnlockUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.UnlockUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.UnlockUserResponse
 */
export const UnlockUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.UnlockUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterPasskeyRequest
 */
export const RegisterPasskeyRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterPasskeyRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "message", T: PasskeyRegistrationCode, opt: true },
    { no: 3, name: "authenticator", kind: "enum", T: proto3.getEnumType(PasskeyAuthenticator) },
    { no: 4, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterPasskeyResponse
 */
export const RegisterPasskeyResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterPasskeyResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "passkey_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential_creation_options", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyPasskeyRegistrationRequest
 */
export const VerifyPasskeyRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyPasskeyRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "passkey_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential", kind: "message", T: Struct },
    { no: 4, name: "passkey_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyPasskeyRegistrationResponse
 */
export const VerifyPasskeyRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyPasskeyRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterU2FRequest
 */
export const RegisterU2FRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterU2FRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterU2FResponse
 */
export const RegisterU2FResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterU2FResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "u2f_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential_creation_options", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyU2FRegistrationRequest
 */
export const VerifyU2FRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyU2FRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "u2f_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential", kind: "message", T: Struct },
    { no: 4, name: "token_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyU2FRegistrationResponse
 */
export const VerifyU2FRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyU2FRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterTOTPRequest
 */
export const RegisterTOTPRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterTOTPRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RegisterTOTPResponse
 */
export const RegisterTOTPResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RegisterTOTPResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyTOTPRegistrationRequest
 */
export const VerifyTOTPRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyTOTPRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.VerifyTOTPRegistrationResponse
 */
export const VerifyTOTPRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.VerifyTOTPRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddOTPSMSRequest
 */
export const AddOTPSMSRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddOTPSMSRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddOTPSMSResponse
 */
export const AddOTPSMSResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddOTPSMSResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RemoveOTPSMSRequest
 */
export const RemoveOTPSMSRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RemoveOTPSMSRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RemoveOTPSMSResponse
 */
export const RemoveOTPSMSResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RemoveOTPSMSResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddOTPEmailRequest
 */
export const AddOTPEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddOTPEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddOTPEmailResponse
 */
export const AddOTPEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddOTPEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RemoveOTPEmailRequest
 */
export const RemoveOTPEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RemoveOTPEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RemoveOTPEmailResponse
 */
export const RemoveOTPEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RemoveOTPEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest
 */
export const CreatePasskeyRegistrationLinkRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.CreatePasskeyRegistrationLinkRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_link", kind: "message", T: SendPasskeyRegistrationLink, oneof: "medium" },
    { no: 3, name: "return_code", kind: "message", T: ReturnPasskeyRegistrationCode, oneof: "medium" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse
 */
export const CreatePasskeyRegistrationLinkResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.CreatePasskeyRegistrationLinkResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "code", kind: "message", T: PasskeyRegistrationCode, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.StartIdentityProviderIntentRequest
 */
export const StartIdentityProviderIntentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.StartIdentityProviderIntentRequest",
  () => [
    { no: 1, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "urls", kind: "message", T: RedirectURLs, oneof: "content" },
    { no: 3, name: "ldap", kind: "message", T: LDAPCredentials, oneof: "content" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.StartIdentityProviderIntentResponse
 */
export const StartIdentityProviderIntentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.StartIdentityProviderIntentResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "auth_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "next_step" },
    { no: 3, name: "idp_intent", kind: "message", T: IDPIntent, oneof: "next_step" },
    { no: 4, name: "post_form", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "next_step" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest
 */
export const RetrieveIdentityProviderIntentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RetrieveIdentityProviderIntentRequest",
  () => [
    { no: 1, name: "idp_intent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_intent_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse
 */
export const RetrieveIdentityProviderIntentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.RetrieveIdentityProviderIntentResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "idp_information", kind: "message", T: IDPInformation },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddIDPLinkRequest
 */
export const AddIDPLinkRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddIDPLinkRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_link", kind: "message", T: IDPLink },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.AddIDPLinkResponse
 */
export const AddIDPLinkResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.AddIDPLinkResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.PasswordResetRequest
 */
export const PasswordResetRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.PasswordResetRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_link", kind: "message", T: SendPasswordResetLink, oneof: "medium" },
    { no: 3, name: "return_code", kind: "message", T: ReturnPasswordResetCode, oneof: "medium" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.PasswordResetResponse
 */
export const PasswordResetResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.PasswordResetResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetPasswordRequest
 */
export const SetPasswordRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetPasswordRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_password", kind: "message", T: Password },
    { no: 3, name: "current_password", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
    { no: 4, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.SetPasswordResponse
 */
export const SetPasswordResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.SetPasswordResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ListAuthenticationMethodTypesRequest
 */
export const ListAuthenticationMethodTypesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ListAuthenticationMethodTypesRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v2beta.ListAuthenticationMethodTypesResponse
 */
export const ListAuthenticationMethodTypesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v2beta.ListAuthenticationMethodTypesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: ListDetails },
    { no: 2, name: "auth_method_types", kind: "enum", T: proto3.getEnumType(AuthenticationMethodType), repeated: true },
  ],
);

