// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/user/v2beta/idp.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.user.v2beta.LDAPCredentials
 */
export declare class LDAPCredentials extends Message<LDAPCredentials> {
  /**
   * @generated from field: string username = 1;
   */
  username: string;

  /**
   * @generated from field: string password = 2;
   */
  password: string;

  constructor(data?: PartialMessage<LDAPCredentials>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.LDAPCredentials";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LDAPCredentials;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LDAPCredentials;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LDAPCredentials;

  static equals(a: LDAPCredentials | PlainMessage<LDAPCredentials> | undefined, b: LDAPCredentials | PlainMessage<LDAPCredentials> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.RedirectURLs
 */
export declare class RedirectURLs extends Message<RedirectURLs> {
  /**
   * @generated from field: string success_url = 1;
   */
  successUrl: string;

  /**
   * @generated from field: string failure_url = 2;
   */
  failureUrl: string;

  constructor(data?: PartialMessage<RedirectURLs>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.RedirectURLs";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RedirectURLs;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RedirectURLs;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RedirectURLs;

  static equals(a: RedirectURLs | PlainMessage<RedirectURLs> | undefined, b: RedirectURLs | PlainMessage<RedirectURLs> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPIntent
 */
export declare class IDPIntent extends Message<IDPIntent> {
  /**
   * @generated from field: string idp_intent_id = 1;
   */
  idpIntentId: string;

  /**
   * @generated from field: string idp_intent_token = 2;
   */
  idpIntentToken: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;

  constructor(data?: PartialMessage<IDPIntent>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPIntent";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPIntent;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPIntent;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPIntent;

  static equals(a: IDPIntent | PlainMessage<IDPIntent> | undefined, b: IDPIntent | PlainMessage<IDPIntent> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPInformation
 */
export declare class IDPInformation extends Message<IDPInformation> {
  /**
   * @generated from oneof zitadel.user.v2beta.IDPInformation.access
   */
  access: {
    /**
     * @generated from field: zitadel.user.v2beta.IDPOAuthAccessInformation oauth = 1;
     */
    value: IDPOAuthAccessInformation;
    case: "oauth";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.IDPLDAPAccessInformation ldap = 6;
     */
    value: IDPLDAPAccessInformation;
    case: "ldap";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.IDPSAMLAccessInformation saml = 7;
     */
    value: IDPSAMLAccessInformation;
    case: "saml";
  } | { case: undefined; value?: undefined };

  /**
   * @generated from field: string idp_id = 2;
   */
  idpId: string;

  /**
   * @generated from field: string user_id = 3;
   */
  userId: string;

  /**
   * @generated from field: string user_name = 4;
   */
  userName: string;

  /**
   * @generated from field: google.protobuf.Struct raw_information = 5;
   */
  rawInformation?: Struct;

  constructor(data?: PartialMessage<IDPInformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPInformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPInformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPInformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPInformation;

  static equals(a: IDPInformation | PlainMessage<IDPInformation> | undefined, b: IDPInformation | PlainMessage<IDPInformation> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPOAuthAccessInformation
 */
export declare class IDPOAuthAccessInformation extends Message<IDPOAuthAccessInformation> {
  /**
   * @generated from field: string access_token = 1;
   */
  accessToken: string;

  /**
   * @generated from field: optional string id_token = 2;
   */
  idToken?: string;

  constructor(data?: PartialMessage<IDPOAuthAccessInformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPOAuthAccessInformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPOAuthAccessInformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPOAuthAccessInformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPOAuthAccessInformation;

  static equals(a: IDPOAuthAccessInformation | PlainMessage<IDPOAuthAccessInformation> | undefined, b: IDPOAuthAccessInformation | PlainMessage<IDPOAuthAccessInformation> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPLDAPAccessInformation
 */
export declare class IDPLDAPAccessInformation extends Message<IDPLDAPAccessInformation> {
  /**
   * @generated from field: google.protobuf.Struct attributes = 1;
   */
  attributes?: Struct;

  constructor(data?: PartialMessage<IDPLDAPAccessInformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPLDAPAccessInformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPLDAPAccessInformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPLDAPAccessInformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPLDAPAccessInformation;

  static equals(a: IDPLDAPAccessInformation | PlainMessage<IDPLDAPAccessInformation> | undefined, b: IDPLDAPAccessInformation | PlainMessage<IDPLDAPAccessInformation> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPSAMLAccessInformation
 */
export declare class IDPSAMLAccessInformation extends Message<IDPSAMLAccessInformation> {
  /**
   * @generated from field: bytes assertion = 1;
   */
  assertion: Uint8Array;

  constructor(data?: PartialMessage<IDPSAMLAccessInformation>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPSAMLAccessInformation";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPSAMLAccessInformation;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPSAMLAccessInformation;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPSAMLAccessInformation;

  static equals(a: IDPSAMLAccessInformation | PlainMessage<IDPSAMLAccessInformation> | undefined, b: IDPSAMLAccessInformation | PlainMessage<IDPSAMLAccessInformation> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.IDPLink
 */
export declare class IDPLink extends Message<IDPLink> {
  /**
   * @generated from field: string idp_id = 1;
   */
  idpId: string;

  /**
   * @generated from field: string user_id = 2;
   */
  userId: string;

  /**
   * @generated from field: string user_name = 3;
   */
  userName: string;

  constructor(data?: PartialMessage<IDPLink>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.IDPLink";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IDPLink;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IDPLink;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IDPLink;

  static equals(a: IDPLink | PlainMessage<IDPLink> | undefined, b: IDPLink | PlainMessage<IDPLink> | undefined): boolean;
}

