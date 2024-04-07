// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/user/v3alpha/user_service.proto (package zitadel.user.v3alpha, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Struct } from "@bufbuild/protobuf";
import { Details, ListDetails, ListQuery, Organization } from "../../object/v2beta/object_pb.js";
import { FieldName, SearchQuery } from "./query_pb.js";
import { User } from "./user_pb.js";
import { AuthenticatorRegistrationCode, IdentityProviderIntent, IDPAuthenticator, IDPInformation, LDAPCredentials, RedirectURLs, ReturnPasswordResetCode, ReturnWebAuthNRegistrationCode, SendPasswordResetEmail, SendPasswordResetSMS, SendWebAuthNRegistrationLink, SetAuthenticators, SetPassword, SetUsername, WebAuthNAuthenticatorType } from "./authenticator_pb.js";
import { ReturnEmailVerificationCode, ReturnPhoneVerificationCode, SendEmailVerificationCode, SendPhoneVerificationCode, SetContact, SetEmail, SetPhone } from "./communication_pb.js";

/**
 * @generated from message zitadel.user.v3alpha.ListUsersRequest
 */
export const ListUsersRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ListUsersRequest",
  () => [
    { no: 1, name: "query", kind: "message", T: ListQuery },
    { no: 2, name: "sorting_column", kind: "enum", T: proto3.getEnumType(FieldName) },
    { no: 3, name: "queries", kind: "message", T: SearchQuery, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ListUsersResponse
 */
export const ListUsersResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ListUsersResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: ListDetails },
    { no: 2, name: "sorting_column", kind: "enum", T: proto3.getEnumType(FieldName) },
    { no: 3, name: "result", kind: "message", T: User, repeated: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.GetUserByIDRequest
 */
export const GetUserByIDRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.GetUserByIDRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.GetUserByIDResponse
 */
export const GetUserByIDResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.GetUserByIDResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.CreateUserRequest
 */
export const CreateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.CreateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "organization", kind: "message", T: Organization },
    { no: 3, name: "authenticators", kind: "message", T: SetAuthenticators },
    { no: 4, name: "contact", kind: "message", T: SetContact },
    { no: 5, name: "schema_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "data", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.CreateUserResponse
 */
export const CreateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.CreateUserResponse",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: Details },
    { no: 3, name: "email_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "phone_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.UpdateUserRequest
 */
export const UpdateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.UpdateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contact", kind: "message", T: SetContact, opt: true },
    { no: 5, name: "schema_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 6, name: "data", kind: "message", T: Struct, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.UpdateUserResponse
 */
export const UpdateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.UpdateUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 3, name: "email_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 4, name: "phone_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.DeactivateUserRequest
 */
export const DeactivateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.DeactivateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.DeactivateUserResponse
 */
export const DeactivateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.DeactivateUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ReactivateUserRequest
 */
export const ReactivateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ReactivateUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ReactivateUserResponse
 */
export const ReactivateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ReactivateUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.LockUserRequest
 */
export const LockUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.LockUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.LockUserResponse
 */
export const LockUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.LockUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.UnlockUserRequest
 */
export const UnlockUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.UnlockUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.UnlockUserResponse
 */
export const UnlockUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.UnlockUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.DeleteUserRequest
 */
export const DeleteUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.DeleteUserRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.DeleteUserResponse
 */
export const DeleteUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.DeleteUserResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetContactEmailRequest
 */
export const SetContactEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetContactEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "message", T: SetEmail },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetContactEmailResponse
 */
export const SetContactEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetContactEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 3, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyContactEmailRequest
 */
export const VerifyContactEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyContactEmailRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyContactEmailResponse
 */
export const VerifyContactEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyContactEmailResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ResendContactEmailCodeRequest
 */
export const ResendContactEmailCodeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ResendContactEmailCodeRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_code", kind: "message", T: SendEmailVerificationCode, oneof: "verification" },
    { no: 3, name: "return_code", kind: "message", T: ReturnEmailVerificationCode, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ResendContactEmailCodeResponse
 */
export const ResendContactEmailCodeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ResendContactEmailCodeResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetContactPhoneRequest
 */
export const SetContactPhoneRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetContactPhoneRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone", kind: "message", T: SetPhone },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetContactPhoneResponse
 */
export const SetContactPhoneResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetContactPhoneResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 3, name: "email_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyContactPhoneRequest
 */
export const VerifyContactPhoneRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyContactPhoneRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyContactPhoneResponse
 */
export const VerifyContactPhoneResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyContactPhoneResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ResendContactPhoneCodeRequest
 */
export const ResendContactPhoneCodeRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ResendContactPhoneCodeRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_code", kind: "message", T: SendPhoneVerificationCode, oneof: "verification" },
    { no: 3, name: "return_code", kind: "message", T: ReturnPhoneVerificationCode, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.ResendContactPhoneCodeResponse
 */
export const ResendContactPhoneCodeResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.ResendContactPhoneCodeResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddUsernameRequest
 */
export const AddUsernameRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddUsernameRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "message", T: SetUsername },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddUsernameResponse
 */
export const AddUsernameResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddUsernameResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "username_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveUsernameRequest
 */
export const RemoveUsernameRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveUsernameRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveUsernameResponse
 */
export const RemoveUsernameResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveUsernameResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetPasswordRequest
 */
export const SetPasswordRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetPasswordRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_password", kind: "message", T: SetPassword },
    { no: 3, name: "current_password", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
    { no: 4, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "verification" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.SetPasswordResponse
 */
export const SetPasswordResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.SetPasswordResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RequestPasswordResetRequest
 */
export const RequestPasswordResetRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RequestPasswordResetRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_email", kind: "message", T: SendPasswordResetEmail, oneof: "medium" },
    { no: 3, name: "send_sms", kind: "message", T: SendPasswordResetSMS, oneof: "medium" },
    { no: 4, name: "return_code", kind: "message", T: ReturnPasswordResetCode, oneof: "medium" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RequestPasswordResetResponse
 */
export const RequestPasswordResetResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RequestPasswordResetResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartWebAuthNRegistrationRequest
 */
export const StartWebAuthNRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartWebAuthNRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "domain", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "authenticator_type", kind: "enum", T: proto3.getEnumType(WebAuthNAuthenticatorType) },
    { no: 2, name: "code", kind: "message", T: AuthenticatorRegistrationCode, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartWebAuthNRegistrationResponse
 */
export const StartWebAuthNRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartWebAuthNRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "web_auth_n_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential_creation_options", kind: "message", T: Struct },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyWebAuthNRegistrationRequest
 */
export const VerifyWebAuthNRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyWebAuthNRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "web_auth_n_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key_credential", kind: "message", T: Struct },
    { no: 4, name: "web_auth_n_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyWebAuthNRegistrationResponse
 */
export const VerifyWebAuthNRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyWebAuthNRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.CreateWebAuthNRegistrationLinkRequest
 */
export const CreateWebAuthNRegistrationLinkRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.CreateWebAuthNRegistrationLinkRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "send_link", kind: "message", T: SendWebAuthNRegistrationLink, oneof: "medium" },
    { no: 3, name: "return_code", kind: "message", T: ReturnWebAuthNRegistrationCode, oneof: "medium" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.CreateWebAuthNRegistrationLinkResponse
 */
export const CreateWebAuthNRegistrationLinkResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.CreateWebAuthNRegistrationLinkResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "code", kind: "message", T: AuthenticatorRegistrationCode, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveWebAuthNAuthenticatorRequest
 */
export const RemoveWebAuthNAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveWebAuthNAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "web_auth_n_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveWebAuthNAuthenticatorResponse
 */
export const RemoveWebAuthNAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveWebAuthNAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartTOTPRegistrationRequest
 */
export const StartTOTPRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartTOTPRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartTOTPRegistrationResponse
 */
export const StartTOTPRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartTOTPRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "totp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyTOTPRegistrationRequest
 */
export const VerifyTOTPRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyTOTPRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "totp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyTOTPRegistrationResponse
 */
export const VerifyTOTPRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyTOTPRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveTOTPAuthenticatorRequest
 */
export const RemoveTOTPAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveTOTPAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "totp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveTOTPAuthenticatorResponse
 */
export const RemoveTOTPAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveTOTPAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddOTPSMSAuthenticatorRequest
 */
export const AddOTPSMSAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddOTPSMSAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phone", kind: "message", T: SetPhone },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddOTPSMSAuthenticatorResponse
 */
export const AddOTPSMSAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddOTPSMSAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "otp_sms_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyOTPSMSRegistrationRequest
 */
export const VerifyOTPSMSRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyOTPSMSRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "otp_sms_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyOTPSMSRegistrationResponse
 */
export const VerifyOTPSMSRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyOTPSMSRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveOTPSMSAuthenticatorRequest
 */
export const RemoveOTPSMSAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveOTPSMSAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "otp_sms_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveOTPSMSAuthenticatorResponse
 */
export const RemoveOTPSMSAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveOTPSMSAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddOTPEmailAuthenticatorRequest
 */
export const AddOTPEmailAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddOTPEmailAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "email", kind: "message", T: SetEmail },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddOTPEmailAuthenticatorResponse
 */
export const AddOTPEmailAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddOTPEmailAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "otp_email_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "verification_code", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyOTPEmailRegistrationRequest
 */
export const VerifyOTPEmailRegistrationRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyOTPEmailRegistrationRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "otp_email_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "code", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.VerifyOTPEmailRegistrationResponse
 */
export const VerifyOTPEmailRegistrationResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.VerifyOTPEmailRegistrationResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveOTPEmailAuthenticatorRequest
 */
export const RemoveOTPEmailAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveOTPEmailAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "otp_email_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveOTPEmailAuthenticatorResponse
 */
export const RemoveOTPEmailAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveOTPEmailAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartIdentityProviderIntentRequest
 */
export const StartIdentityProviderIntentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartIdentityProviderIntentRequest",
  () => [
    { no: 1, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "urls", kind: "message", T: RedirectURLs, oneof: "content" },
    { no: 3, name: "ldap", kind: "message", T: LDAPCredentials, oneof: "content" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.StartIdentityProviderIntentResponse
 */
export const StartIdentityProviderIntentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.StartIdentityProviderIntentResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "auth_url", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "next_step" },
    { no: 3, name: "idp_intent", kind: "message", T: IdentityProviderIntent, oneof: "next_step" },
    { no: 4, name: "post_form", kind: "scalar", T: 12 /* ScalarType.BYTES */, oneof: "next_step" },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RetrieveIdentityProviderIntentRequest
 */
export const RetrieveIdentityProviderIntentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RetrieveIdentityProviderIntentRequest",
  () => [
    { no: 1, name: "idp_intent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_intent_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RetrieveIdentityProviderIntentResponse
 */
export const RetrieveIdentityProviderIntentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RetrieveIdentityProviderIntentResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
    { no: 2, name: "idp_information", kind: "message", T: IDPInformation },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddIDPAuthenticatorRequest
 */
export const AddIDPAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddIDPAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_authenticator", kind: "message", T: IDPAuthenticator },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.AddIDPAuthenticatorResponse
 */
export const AddIDPAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.AddIDPAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveIDPAuthenticatorRequest
 */
export const RemoveIDPAuthenticatorRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveIDPAuthenticatorRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "idp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.user.v3alpha.RemoveIDPAuthenticatorResponse
 */
export const RemoveIDPAuthenticatorResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.user.v3alpha.RemoveIDPAuthenticatorResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

