import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as zitadel_settings_v2alpha_settings_pb from '../../../zitadel/settings/v2alpha/settings_pb';


export class PasswordComplexitySettings extends jspb.Message {
  getMinLength(): number;
  setMinLength(value: number): PasswordComplexitySettings;

  getRequiresUppercase(): boolean;
  setRequiresUppercase(value: boolean): PasswordComplexitySettings;

  getRequiresLowercase(): boolean;
  setRequiresLowercase(value: boolean): PasswordComplexitySettings;

  getRequiresNumber(): boolean;
  setRequiresNumber(value: boolean): PasswordComplexitySettings;

  getRequiresSymbol(): boolean;
  setRequiresSymbol(value: boolean): PasswordComplexitySettings;

  getResourceOwnerType(): zitadel_settings_v2alpha_settings_pb.ResourceOwnerType;
  setResourceOwnerType(value: zitadel_settings_v2alpha_settings_pb.ResourceOwnerType): PasswordComplexitySettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordComplexitySettings.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordComplexitySettings): PasswordComplexitySettings.AsObject;
  static serializeBinaryToWriter(message: PasswordComplexitySettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordComplexitySettings;
  static deserializeBinaryFromReader(message: PasswordComplexitySettings, reader: jspb.BinaryReader): PasswordComplexitySettings;
}

export namespace PasswordComplexitySettings {
  export type AsObject = {
    minLength: number,
    requiresUppercase: boolean,
    requiresLowercase: boolean,
    requiresNumber: boolean,
    requiresSymbol: boolean,
    resourceOwnerType: zitadel_settings_v2alpha_settings_pb.ResourceOwnerType,
  }
}

