import * as jspb from 'google-protobuf'

import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as zitadel_settings_v2alpha_settings_pb from '../../../zitadel/settings/v2alpha/settings_pb';


export class LockoutSettings extends jspb.Message {
  getMaxPasswordAttempts(): number;
  setMaxPasswordAttempts(value: number): LockoutSettings;

  getResourceOwnerType(): zitadel_settings_v2alpha_settings_pb.ResourceOwnerType;
  setResourceOwnerType(value: zitadel_settings_v2alpha_settings_pb.ResourceOwnerType): LockoutSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LockoutSettings.AsObject;
  static toObject(includeInstance: boolean, msg: LockoutSettings): LockoutSettings.AsObject;
  static serializeBinaryToWriter(message: LockoutSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LockoutSettings;
  static deserializeBinaryFromReader(message: LockoutSettings, reader: jspb.BinaryReader): LockoutSettings;
}

export namespace LockoutSettings {
  export type AsObject = {
    maxPasswordAttempts: number,
    resourceOwnerType: zitadel_settings_v2alpha_settings_pb.ResourceOwnerType,
  }
}

