// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/settings/v2beta/settings_service.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Details, ListDetails, RequestContext } from "../../object/v2beta/object_pb.js";
import type { IdentityProvider, LoginSettings } from "./login_settings_pb.js";
import type { PasswordComplexitySettings } from "./password_settings_pb.js";
import type { BrandingSettings } from "./branding_settings_pb.js";
import type { DomainSettings } from "./domain_settings_pb.js";
import type { LegalAndSupportSettings } from "./legal_settings_pb.js";
import type { LockoutSettings } from "./lockout_settings_pb.js";
import type { EmbeddedIframeSettings, SecuritySettings } from "./security_settings_pb.js";

/**
 * @generated from message zitadel.settings.v2beta.GetLoginSettingsRequest
 */
export declare class GetLoginSettingsRequest extends Message<GetLoginSettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetLoginSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLoginSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLoginSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLoginSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLoginSettingsRequest;

  static equals(a: GetLoginSettingsRequest | PlainMessage<GetLoginSettingsRequest> | undefined, b: GetLoginSettingsRequest | PlainMessage<GetLoginSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetLoginSettingsResponse
 */
export declare class GetLoginSettingsResponse extends Message<GetLoginSettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.LoginSettings settings = 2;
   */
  settings?: LoginSettings;

  constructor(data?: PartialMessage<GetLoginSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLoginSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLoginSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLoginSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLoginSettingsResponse;

  static equals(a: GetLoginSettingsResponse | PlainMessage<GetLoginSettingsResponse> | undefined, b: GetLoginSettingsResponse | PlainMessage<GetLoginSettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest
 */
export declare class GetPasswordComplexitySettingsRequest extends Message<GetPasswordComplexitySettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetPasswordComplexitySettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetPasswordComplexitySettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPasswordComplexitySettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPasswordComplexitySettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPasswordComplexitySettingsRequest;

  static equals(a: GetPasswordComplexitySettingsRequest | PlainMessage<GetPasswordComplexitySettingsRequest> | undefined, b: GetPasswordComplexitySettingsRequest | PlainMessage<GetPasswordComplexitySettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse
 */
export declare class GetPasswordComplexitySettingsResponse extends Message<GetPasswordComplexitySettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.PasswordComplexitySettings settings = 2;
   */
  settings?: PasswordComplexitySettings;

  constructor(data?: PartialMessage<GetPasswordComplexitySettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetPasswordComplexitySettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPasswordComplexitySettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPasswordComplexitySettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPasswordComplexitySettingsResponse;

  static equals(a: GetPasswordComplexitySettingsResponse | PlainMessage<GetPasswordComplexitySettingsResponse> | undefined, b: GetPasswordComplexitySettingsResponse | PlainMessage<GetPasswordComplexitySettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetBrandingSettingsRequest
 */
export declare class GetBrandingSettingsRequest extends Message<GetBrandingSettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetBrandingSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetBrandingSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBrandingSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBrandingSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBrandingSettingsRequest;

  static equals(a: GetBrandingSettingsRequest | PlainMessage<GetBrandingSettingsRequest> | undefined, b: GetBrandingSettingsRequest | PlainMessage<GetBrandingSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetBrandingSettingsResponse
 */
export declare class GetBrandingSettingsResponse extends Message<GetBrandingSettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.BrandingSettings settings = 2;
   */
  settings?: BrandingSettings;

  constructor(data?: PartialMessage<GetBrandingSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetBrandingSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBrandingSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBrandingSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBrandingSettingsResponse;

  static equals(a: GetBrandingSettingsResponse | PlainMessage<GetBrandingSettingsResponse> | undefined, b: GetBrandingSettingsResponse | PlainMessage<GetBrandingSettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetDomainSettingsRequest
 */
export declare class GetDomainSettingsRequest extends Message<GetDomainSettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetDomainSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetDomainSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDomainSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDomainSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDomainSettingsRequest;

  static equals(a: GetDomainSettingsRequest | PlainMessage<GetDomainSettingsRequest> | undefined, b: GetDomainSettingsRequest | PlainMessage<GetDomainSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetDomainSettingsResponse
 */
export declare class GetDomainSettingsResponse extends Message<GetDomainSettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.DomainSettings settings = 2;
   */
  settings?: DomainSettings;

  constructor(data?: PartialMessage<GetDomainSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetDomainSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDomainSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDomainSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDomainSettingsResponse;

  static equals(a: GetDomainSettingsResponse | PlainMessage<GetDomainSettingsResponse> | undefined, b: GetDomainSettingsResponse | PlainMessage<GetDomainSettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest
 */
export declare class GetLegalAndSupportSettingsRequest extends Message<GetLegalAndSupportSettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetLegalAndSupportSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLegalAndSupportSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLegalAndSupportSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLegalAndSupportSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLegalAndSupportSettingsRequest;

  static equals(a: GetLegalAndSupportSettingsRequest | PlainMessage<GetLegalAndSupportSettingsRequest> | undefined, b: GetLegalAndSupportSettingsRequest | PlainMessage<GetLegalAndSupportSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse
 */
export declare class GetLegalAndSupportSettingsResponse extends Message<GetLegalAndSupportSettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.LegalAndSupportSettings settings = 2;
   */
  settings?: LegalAndSupportSettings;

  constructor(data?: PartialMessage<GetLegalAndSupportSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLegalAndSupportSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLegalAndSupportSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLegalAndSupportSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLegalAndSupportSettingsResponse;

  static equals(a: GetLegalAndSupportSettingsResponse | PlainMessage<GetLegalAndSupportSettingsResponse> | undefined, b: GetLegalAndSupportSettingsResponse | PlainMessage<GetLegalAndSupportSettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetLockoutSettingsRequest
 */
export declare class GetLockoutSettingsRequest extends Message<GetLockoutSettingsRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetLockoutSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLockoutSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLockoutSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLockoutSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLockoutSettingsRequest;

  static equals(a: GetLockoutSettingsRequest | PlainMessage<GetLockoutSettingsRequest> | undefined, b: GetLockoutSettingsRequest | PlainMessage<GetLockoutSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetLockoutSettingsResponse
 */
export declare class GetLockoutSettingsResponse extends Message<GetLockoutSettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.LockoutSettings settings = 2;
   */
  settings?: LockoutSettings;

  constructor(data?: PartialMessage<GetLockoutSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetLockoutSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLockoutSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLockoutSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLockoutSettingsResponse;

  static equals(a: GetLockoutSettingsResponse | PlainMessage<GetLockoutSettingsResponse> | undefined, b: GetLockoutSettingsResponse | PlainMessage<GetLockoutSettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetActiveIdentityProvidersRequest
 */
export declare class GetActiveIdentityProvidersRequest extends Message<GetActiveIdentityProvidersRequest> {
  /**
   * @generated from field: zitadel.object.v2beta.RequestContext ctx = 1;
   */
  ctx?: RequestContext;

  constructor(data?: PartialMessage<GetActiveIdentityProvidersRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetActiveIdentityProvidersRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveIdentityProvidersRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveIdentityProvidersRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveIdentityProvidersRequest;

  static equals(a: GetActiveIdentityProvidersRequest | PlainMessage<GetActiveIdentityProvidersRequest> | undefined, b: GetActiveIdentityProvidersRequest | PlainMessage<GetActiveIdentityProvidersRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetActiveIdentityProvidersResponse
 */
export declare class GetActiveIdentityProvidersResponse extends Message<GetActiveIdentityProvidersResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * @generated from field: repeated zitadel.settings.v2beta.IdentityProvider identity_providers = 2;
   */
  identityProviders: IdentityProvider[];

  constructor(data?: PartialMessage<GetActiveIdentityProvidersResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetActiveIdentityProvidersResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActiveIdentityProvidersResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActiveIdentityProvidersResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActiveIdentityProvidersResponse;

  static equals(a: GetActiveIdentityProvidersResponse | PlainMessage<GetActiveIdentityProvidersResponse> | undefined, b: GetActiveIdentityProvidersResponse | PlainMessage<GetActiveIdentityProvidersResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetGeneralSettingsRequest
 */
export declare class GetGeneralSettingsRequest extends Message<GetGeneralSettingsRequest> {
  constructor(data?: PartialMessage<GetGeneralSettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetGeneralSettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGeneralSettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGeneralSettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGeneralSettingsRequest;

  static equals(a: GetGeneralSettingsRequest | PlainMessage<GetGeneralSettingsRequest> | undefined, b: GetGeneralSettingsRequest | PlainMessage<GetGeneralSettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetGeneralSettingsResponse
 */
export declare class GetGeneralSettingsResponse extends Message<GetGeneralSettingsResponse> {
  /**
   * @generated from field: string default_org_id = 1;
   */
  defaultOrgId: string;

  /**
   * @generated from field: string default_language = 2;
   */
  defaultLanguage: string;

  /**
   * @generated from field: repeated string supported_languages = 3;
   */
  supportedLanguages: string[];

  constructor(data?: PartialMessage<GetGeneralSettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetGeneralSettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGeneralSettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGeneralSettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGeneralSettingsResponse;

  static equals(a: GetGeneralSettingsResponse | PlainMessage<GetGeneralSettingsResponse> | undefined, b: GetGeneralSettingsResponse | PlainMessage<GetGeneralSettingsResponse> | undefined): boolean;
}

/**
 * This is an empty request
 *
 * @generated from message zitadel.settings.v2beta.GetSecuritySettingsRequest
 */
export declare class GetSecuritySettingsRequest extends Message<GetSecuritySettingsRequest> {
  constructor(data?: PartialMessage<GetSecuritySettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetSecuritySettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSecuritySettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSecuritySettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSecuritySettingsRequest;

  static equals(a: GetSecuritySettingsRequest | PlainMessage<GetSecuritySettingsRequest> | undefined, b: GetSecuritySettingsRequest | PlainMessage<GetSecuritySettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.GetSecuritySettingsResponse
 */
export declare class GetSecuritySettingsResponse extends Message<GetSecuritySettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: zitadel.settings.v2beta.SecuritySettings settings = 2;
   */
  settings?: SecuritySettings;

  constructor(data?: PartialMessage<GetSecuritySettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.GetSecuritySettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSecuritySettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSecuritySettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSecuritySettingsResponse;

  static equals(a: GetSecuritySettingsResponse | PlainMessage<GetSecuritySettingsResponse> | undefined, b: GetSecuritySettingsResponse | PlainMessage<GetSecuritySettingsResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.SetSecuritySettingsRequest
 */
export declare class SetSecuritySettingsRequest extends Message<SetSecuritySettingsRequest> {
  /**
   * @generated from field: zitadel.settings.v2beta.EmbeddedIframeSettings embedded_iframe = 1;
   */
  embeddedIframe?: EmbeddedIframeSettings;

  /**
   * @generated from field: bool enable_impersonation = 2;
   */
  enableImpersonation: boolean;

  constructor(data?: PartialMessage<SetSecuritySettingsRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.SetSecuritySettingsRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSecuritySettingsRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSecuritySettingsRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSecuritySettingsRequest;

  static equals(a: SetSecuritySettingsRequest | PlainMessage<SetSecuritySettingsRequest> | undefined, b: SetSecuritySettingsRequest | PlainMessage<SetSecuritySettingsRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.settings.v2beta.SetSecuritySettingsResponse
 */
export declare class SetSecuritySettingsResponse extends Message<SetSecuritySettingsResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<SetSecuritySettingsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.settings.v2beta.SetSecuritySettingsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetSecuritySettingsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetSecuritySettingsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetSecuritySettingsResponse;

  static equals(a: SetSecuritySettingsResponse | PlainMessage<SetSecuritySettingsResponse> | undefined, b: SetSecuritySettingsResponse | PlainMessage<SetSecuritySettingsResponse> | undefined): boolean;
}

