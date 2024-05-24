// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/oidc/v2beta/authorization.proto (package zitadel.oidc.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, Duration, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.oidc.v2beta.Prompt
 */
export declare enum Prompt {
  /**
   * @generated from enum value: PROMPT_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROMPT_NONE = 1;
   */
  NONE = 1,

  /**
   * @generated from enum value: PROMPT_LOGIN = 2;
   */
  LOGIN = 2,

  /**
   * @generated from enum value: PROMPT_CONSENT = 3;
   */
  CONSENT = 3,

  /**
   * @generated from enum value: PROMPT_SELECT_ACCOUNT = 4;
   */
  SELECT_ACCOUNT = 4,

  /**
   * @generated from enum value: PROMPT_CREATE = 5;
   */
  CREATE = 5,
}

/**
 * @generated from enum zitadel.oidc.v2beta.ErrorReason
 */
export declare enum ErrorReason {
  /**
   * @generated from enum value: ERROR_REASON_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Error states from https://datatracker.ietf.org/doc/html/rfc6749#section-4.2.2.1
   *
   * @generated from enum value: ERROR_REASON_INVALID_REQUEST = 1;
   */
  INVALID_REQUEST = 1,

  /**
   * @generated from enum value: ERROR_REASON_UNAUTHORIZED_CLIENT = 2;
   */
  UNAUTHORIZED_CLIENT = 2,

  /**
   * @generated from enum value: ERROR_REASON_ACCESS_DENIED = 3;
   */
  ACCESS_DENIED = 3,

  /**
   * @generated from enum value: ERROR_REASON_UNSUPPORTED_RESPONSE_TYPE = 4;
   */
  UNSUPPORTED_RESPONSE_TYPE = 4,

  /**
   * @generated from enum value: ERROR_REASON_INVALID_SCOPE = 5;
   */
  INVALID_SCOPE = 5,

  /**
   * @generated from enum value: ERROR_REASON_SERVER_ERROR = 6;
   */
  SERVER_ERROR = 6,

  /**
   * @generated from enum value: ERROR_REASON_TEMPORARY_UNAVAILABLE = 7;
   */
  TEMPORARY_UNAVAILABLE = 7,

  /**
   * Error states from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
   *
   * @generated from enum value: ERROR_REASON_INTERACTION_REQUIRED = 8;
   */
  INTERACTION_REQUIRED = 8,

  /**
   * @generated from enum value: ERROR_REASON_LOGIN_REQUIRED = 9;
   */
  LOGIN_REQUIRED = 9,

  /**
   * @generated from enum value: ERROR_REASON_ACCOUNT_SELECTION_REQUIRED = 10;
   */
  ACCOUNT_SELECTION_REQUIRED = 10,

  /**
   * @generated from enum value: ERROR_REASON_CONSENT_REQUIRED = 11;
   */
  CONSENT_REQUIRED = 11,

  /**
   * @generated from enum value: ERROR_REASON_INVALID_REQUEST_URI = 12;
   */
  INVALID_REQUEST_URI = 12,

  /**
   * @generated from enum value: ERROR_REASON_INVALID_REQUEST_OBJECT = 13;
   */
  INVALID_REQUEST_OBJECT = 13,

  /**
   * @generated from enum value: ERROR_REASON_REQUEST_NOT_SUPPORTED = 14;
   */
  REQUEST_NOT_SUPPORTED = 14,

  /**
   * @generated from enum value: ERROR_REASON_REQUEST_URI_NOT_SUPPORTED = 15;
   */
  REQUEST_URI_NOT_SUPPORTED = 15,

  /**
   * @generated from enum value: ERROR_REASON_REGISTRATION_NOT_SUPPORTED = 16;
   */
  REGISTRATION_NOT_SUPPORTED = 16,
}

/**
 * @generated from message zitadel.oidc.v2beta.AuthRequest
 */
export declare class AuthRequest extends Message<AuthRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 2;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: string client_id = 3;
   */
  clientId: string;

  /**
   * @generated from field: repeated string scope = 4;
   */
  scope: string[];

  /**
   * @generated from field: string redirect_uri = 5;
   */
  redirectUri: string;

  /**
   * @generated from field: repeated zitadel.oidc.v2beta.Prompt prompt = 6;
   */
  prompt: Prompt[];

  /**
   * @generated from field: repeated string ui_locales = 7;
   */
  uiLocales: string[];

  /**
   * @generated from field: optional string login_hint = 8;
   */
  loginHint?: string;

  /**
   * @generated from field: optional google.protobuf.Duration max_age = 9;
   */
  maxAge?: Duration;

  /**
   * @generated from field: optional string hint_user_id = 10;
   */
  hintUserId?: string;

  constructor(data?: PartialMessage<AuthRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.AuthRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthRequest;

  static equals(a: AuthRequest | PlainMessage<AuthRequest> | undefined, b: AuthRequest | PlainMessage<AuthRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.oidc.v2beta.AuthorizationError
 */
export declare class AuthorizationError extends Message<AuthorizationError> {
  /**
   * @generated from field: zitadel.oidc.v2beta.ErrorReason error = 1;
   */
  error: ErrorReason;

  /**
   * @generated from field: optional string error_description = 2;
   */
  errorDescription?: string;

  /**
   * @generated from field: optional string error_uri = 3;
   */
  errorUri?: string;

  constructor(data?: PartialMessage<AuthorizationError>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.AuthorizationError";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizationError;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizationError;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizationError;

  static equals(a: AuthorizationError | PlainMessage<AuthorizationError> | undefined, b: AuthorizationError | PlainMessage<AuthorizationError> | undefined): boolean;
}

