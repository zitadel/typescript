import * as jspb from 'google-protobuf'

import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb';
import * as zitadel_object_v2alpha_object_pb from '../../../zitadel/object/v2alpha/object_pb';
import * as zitadel_settings_v2alpha_branding_settings_pb from '../../../zitadel/settings/v2alpha/branding_settings_pb';
import * as zitadel_settings_v2alpha_domain_settings_pb from '../../../zitadel/settings/v2alpha/domain_settings_pb';
import * as zitadel_settings_v2alpha_legal_settings_pb from '../../../zitadel/settings/v2alpha/legal_settings_pb';
import * as zitadel_settings_v2alpha_lockout_settings_pb from '../../../zitadel/settings/v2alpha/lockout_settings_pb';
import * as zitadel_settings_v2alpha_login_settings_pb from '../../../zitadel/settings/v2alpha/login_settings_pb';
import * as zitadel_settings_v2alpha_password_settings_pb from '../../../zitadel/settings/v2alpha/password_settings_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class GetLoginSettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetLoginSettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetLoginSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginSettingsRequest): GetLoginSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLoginSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginSettingsRequest;
  static deserializeBinaryFromReader(message: GetLoginSettingsRequest, reader: jspb.BinaryReader): GetLoginSettingsRequest;
}

export namespace GetLoginSettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetLoginSettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetLoginSettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetLoginSettingsResponse;

  getSettings(): zitadel_settings_v2alpha_login_settings_pb.LoginSettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_login_settings_pb.LoginSettings): GetLoginSettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetLoginSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoginSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoginSettingsResponse): GetLoginSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLoginSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoginSettingsResponse;
  static deserializeBinaryFromReader(message: GetLoginSettingsResponse, reader: jspb.BinaryReader): GetLoginSettingsResponse;
}

export namespace GetLoginSettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_login_settings_pb.LoginSettings.AsObject,
  }
}

export class GetPasswordComplexitySettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetPasswordComplexitySettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetPasswordComplexitySettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPasswordComplexitySettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPasswordComplexitySettingsRequest): GetPasswordComplexitySettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPasswordComplexitySettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPasswordComplexitySettingsRequest;
  static deserializeBinaryFromReader(message: GetPasswordComplexitySettingsRequest, reader: jspb.BinaryReader): GetPasswordComplexitySettingsRequest;
}

export namespace GetPasswordComplexitySettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetPasswordComplexitySettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetPasswordComplexitySettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetPasswordComplexitySettingsResponse;

  getSettings(): zitadel_settings_v2alpha_password_settings_pb.PasswordComplexitySettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_password_settings_pb.PasswordComplexitySettings): GetPasswordComplexitySettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetPasswordComplexitySettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPasswordComplexitySettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPasswordComplexitySettingsResponse): GetPasswordComplexitySettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPasswordComplexitySettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPasswordComplexitySettingsResponse;
  static deserializeBinaryFromReader(message: GetPasswordComplexitySettingsResponse, reader: jspb.BinaryReader): GetPasswordComplexitySettingsResponse;
}

export namespace GetPasswordComplexitySettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_password_settings_pb.PasswordComplexitySettings.AsObject,
  }
}

export class GetBrandingSettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetBrandingSettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetBrandingSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandingSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandingSettingsRequest): GetBrandingSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetBrandingSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandingSettingsRequest;
  static deserializeBinaryFromReader(message: GetBrandingSettingsRequest, reader: jspb.BinaryReader): GetBrandingSettingsRequest;
}

export namespace GetBrandingSettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetBrandingSettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetBrandingSettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetBrandingSettingsResponse;

  getSettings(): zitadel_settings_v2alpha_branding_settings_pb.BrandingSettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_branding_settings_pb.BrandingSettings): GetBrandingSettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetBrandingSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBrandingSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBrandingSettingsResponse): GetBrandingSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetBrandingSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBrandingSettingsResponse;
  static deserializeBinaryFromReader(message: GetBrandingSettingsResponse, reader: jspb.BinaryReader): GetBrandingSettingsResponse;
}

export namespace GetBrandingSettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_branding_settings_pb.BrandingSettings.AsObject,
  }
}

export class GetDomainSettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetDomainSettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetDomainSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDomainSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDomainSettingsRequest): GetDomainSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetDomainSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDomainSettingsRequest;
  static deserializeBinaryFromReader(message: GetDomainSettingsRequest, reader: jspb.BinaryReader): GetDomainSettingsRequest;
}

export namespace GetDomainSettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetDomainSettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetDomainSettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetDomainSettingsResponse;

  getSettings(): zitadel_settings_v2alpha_domain_settings_pb.DomainSettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_domain_settings_pb.DomainSettings): GetDomainSettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetDomainSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDomainSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDomainSettingsResponse): GetDomainSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetDomainSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDomainSettingsResponse;
  static deserializeBinaryFromReader(message: GetDomainSettingsResponse, reader: jspb.BinaryReader): GetDomainSettingsResponse;
}

export namespace GetDomainSettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_domain_settings_pb.DomainSettings.AsObject,
  }
}

export class GetLegalAndSupportSettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetLegalAndSupportSettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetLegalAndSupportSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLegalAndSupportSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLegalAndSupportSettingsRequest): GetLegalAndSupportSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLegalAndSupportSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLegalAndSupportSettingsRequest;
  static deserializeBinaryFromReader(message: GetLegalAndSupportSettingsRequest, reader: jspb.BinaryReader): GetLegalAndSupportSettingsRequest;
}

export namespace GetLegalAndSupportSettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetLegalAndSupportSettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetLegalAndSupportSettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetLegalAndSupportSettingsResponse;

  getSettings(): zitadel_settings_v2alpha_legal_settings_pb.LegalAndSupportSettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_legal_settings_pb.LegalAndSupportSettings): GetLegalAndSupportSettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetLegalAndSupportSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLegalAndSupportSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLegalAndSupportSettingsResponse): GetLegalAndSupportSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLegalAndSupportSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLegalAndSupportSettingsResponse;
  static deserializeBinaryFromReader(message: GetLegalAndSupportSettingsResponse, reader: jspb.BinaryReader): GetLegalAndSupportSettingsResponse;
}

export namespace GetLegalAndSupportSettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_legal_settings_pb.LegalAndSupportSettings.AsObject,
  }
}

export class GetLockoutSettingsRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetLockoutSettingsRequest;
  hasCtx(): boolean;
  clearCtx(): GetLockoutSettingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLockoutSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLockoutSettingsRequest): GetLockoutSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetLockoutSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLockoutSettingsRequest;
  static deserializeBinaryFromReader(message: GetLockoutSettingsRequest, reader: jspb.BinaryReader): GetLockoutSettingsRequest;
}

export namespace GetLockoutSettingsRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetLockoutSettingsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): GetLockoutSettingsResponse;
  hasDetails(): boolean;
  clearDetails(): GetLockoutSettingsResponse;

  getSettings(): zitadel_settings_v2alpha_lockout_settings_pb.LockoutSettings | undefined;
  setSettings(value?: zitadel_settings_v2alpha_lockout_settings_pb.LockoutSettings): GetLockoutSettingsResponse;
  hasSettings(): boolean;
  clearSettings(): GetLockoutSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLockoutSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLockoutSettingsResponse): GetLockoutSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetLockoutSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLockoutSettingsResponse;
  static deserializeBinaryFromReader(message: GetLockoutSettingsResponse, reader: jspb.BinaryReader): GetLockoutSettingsResponse;
}

export namespace GetLockoutSettingsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    settings?: zitadel_settings_v2alpha_lockout_settings_pb.LockoutSettings.AsObject,
  }
}

export class GetActiveIdentityProvidersRequest extends jspb.Message {
  getCtx(): zitadel_object_v2alpha_object_pb.RequestContext | undefined;
  setCtx(value?: zitadel_object_v2alpha_object_pb.RequestContext): GetActiveIdentityProvidersRequest;
  hasCtx(): boolean;
  clearCtx(): GetActiveIdentityProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveIdentityProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveIdentityProvidersRequest): GetActiveIdentityProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: GetActiveIdentityProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveIdentityProvidersRequest;
  static deserializeBinaryFromReader(message: GetActiveIdentityProvidersRequest, reader: jspb.BinaryReader): GetActiveIdentityProvidersRequest;
}

export namespace GetActiveIdentityProvidersRequest {
  export type AsObject = {
    ctx?: zitadel_object_v2alpha_object_pb.RequestContext.AsObject,
  }
}

export class GetActiveIdentityProvidersResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.ListDetails | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.ListDetails): GetActiveIdentityProvidersResponse;
  hasDetails(): boolean;
  clearDetails(): GetActiveIdentityProvidersResponse;

  getIdentityProvidersList(): Array<zitadel_settings_v2alpha_login_settings_pb.IdentityProvider>;
  setIdentityProvidersList(value: Array<zitadel_settings_v2alpha_login_settings_pb.IdentityProvider>): GetActiveIdentityProvidersResponse;
  clearIdentityProvidersList(): GetActiveIdentityProvidersResponse;
  addIdentityProviders(value?: zitadel_settings_v2alpha_login_settings_pb.IdentityProvider, index?: number): zitadel_settings_v2alpha_login_settings_pb.IdentityProvider;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActiveIdentityProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetActiveIdentityProvidersResponse): GetActiveIdentityProvidersResponse.AsObject;
  static serializeBinaryToWriter(message: GetActiveIdentityProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActiveIdentityProvidersResponse;
  static deserializeBinaryFromReader(message: GetActiveIdentityProvidersResponse, reader: jspb.BinaryReader): GetActiveIdentityProvidersResponse;
}

export namespace GetActiveIdentityProvidersResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.ListDetails.AsObject,
    identityProvidersList: Array<zitadel_settings_v2alpha_login_settings_pb.IdentityProvider.AsObject>,
  }
}

export class GetGeneralSettingsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeneralSettingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeneralSettingsRequest): GetGeneralSettingsRequest.AsObject;
  static serializeBinaryToWriter(message: GetGeneralSettingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeneralSettingsRequest;
  static deserializeBinaryFromReader(message: GetGeneralSettingsRequest, reader: jspb.BinaryReader): GetGeneralSettingsRequest;
}

export namespace GetGeneralSettingsRequest {
  export type AsObject = {
  }
}

export class GetGeneralSettingsResponse extends jspb.Message {
  getDefaultOrgId(): string;
  setDefaultOrgId(value: string): GetGeneralSettingsResponse;

  getDefaultLanguage(): string;
  setDefaultLanguage(value: string): GetGeneralSettingsResponse;

  getSupportedLanguagesList(): Array<string>;
  setSupportedLanguagesList(value: Array<string>): GetGeneralSettingsResponse;
  clearSupportedLanguagesList(): GetGeneralSettingsResponse;
  addSupportedLanguages(value: string, index?: number): GetGeneralSettingsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGeneralSettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGeneralSettingsResponse): GetGeneralSettingsResponse.AsObject;
  static serializeBinaryToWriter(message: GetGeneralSettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGeneralSettingsResponse;
  static deserializeBinaryFromReader(message: GetGeneralSettingsResponse, reader: jspb.BinaryReader): GetGeneralSettingsResponse;
}

export namespace GetGeneralSettingsResponse {
  export type AsObject = {
    defaultOrgId: string,
    defaultLanguage: string,
    supportedLanguagesList: Array<string>,
  }
}

