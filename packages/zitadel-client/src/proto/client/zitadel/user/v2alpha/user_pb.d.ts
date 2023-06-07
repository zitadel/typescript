import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class User extends jspb.Message {
  getId(): string;
  setId(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: string,
  }
}

export class SetHumanProfile extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): SetHumanProfile;

  getLastName(): string;
  setLastName(value: string): SetHumanProfile;

  getNickName(): string;
  setNickName(value: string): SetHumanProfile;
  hasNickName(): boolean;
  clearNickName(): SetHumanProfile;

  getDisplayName(): string;
  setDisplayName(value: string): SetHumanProfile;
  hasDisplayName(): boolean;
  clearDisplayName(): SetHumanProfile;

  getPreferredLanguage(): string;
  setPreferredLanguage(value: string): SetHumanProfile;
  hasPreferredLanguage(): boolean;
  clearPreferredLanguage(): SetHumanProfile;

  getGender(): Gender;
  setGender(value: Gender): SetHumanProfile;
  hasGender(): boolean;
  clearGender(): SetHumanProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetHumanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: SetHumanProfile): SetHumanProfile.AsObject;
  static serializeBinaryToWriter(message: SetHumanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetHumanProfile;
  static deserializeBinaryFromReader(message: SetHumanProfile, reader: jspb.BinaryReader): SetHumanProfile;
}

export namespace SetHumanProfile {
  export type AsObject = {
    firstName: string,
    lastName: string,
    nickName?: string,
    displayName?: string,
    preferredLanguage?: string,
    gender?: Gender,
  }

  export enum NickNameCase { 
    _NICK_NAME_NOT_SET = 0,
    NICK_NAME = 3,
  }

  export enum DisplayNameCase { 
    _DISPLAY_NAME_NOT_SET = 0,
    DISPLAY_NAME = 4,
  }

  export enum PreferredLanguageCase { 
    _PREFERRED_LANGUAGE_NOT_SET = 0,
    PREFERRED_LANGUAGE = 5,
  }

  export enum GenderCase { 
    _GENDER_NOT_SET = 0,
    GENDER = 6,
  }
}

export class SetMetadataEntry extends jspb.Message {
  getKey(): string;
  setKey(value: string): SetMetadataEntry;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): SetMetadataEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetMetadataEntry.AsObject;
  static toObject(includeInstance: boolean, msg: SetMetadataEntry): SetMetadataEntry.AsObject;
  static serializeBinaryToWriter(message: SetMetadataEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetMetadataEntry;
  static deserializeBinaryFromReader(message: SetMetadataEntry, reader: jspb.BinaryReader): SetMetadataEntry;
}

export namespace SetMetadataEntry {
  export type AsObject = {
    key: string,
    value: Uint8Array | string,
  }
}

export enum Gender { 
  GENDER_UNSPECIFIED = 0,
  GENDER_FEMALE = 1,
  GENDER_MALE = 2,
  GENDER_DIVERSE = 3,
}
