import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class SetUserPassword extends jspb.Message {
  getPassword(): Password | undefined;
  setPassword(value?: Password): SetUserPassword;
  hasPassword(): boolean;
  clearPassword(): SetUserPassword;

  getHashedPassword(): HashedPassword | undefined;
  setHashedPassword(value?: HashedPassword): SetUserPassword;
  hasHashedPassword(): boolean;
  clearHashedPassword(): SetUserPassword;

  getTypeCase(): SetUserPassword.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetUserPassword.AsObject;
  static toObject(includeInstance: boolean, msg: SetUserPassword): SetUserPassword.AsObject;
  static serializeBinaryToWriter(message: SetUserPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetUserPassword;
  static deserializeBinaryFromReader(message: SetUserPassword, reader: jspb.BinaryReader): SetUserPassword;
}

export namespace SetUserPassword {
  export type AsObject = {
    password?: Password.AsObject,
    hashedPassword?: HashedPassword.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    PASSWORD = 1,
    HASHED_PASSWORD = 2,
  }
}

export class Password extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): Password;

  getChangeRequired(): boolean;
  setChangeRequired(value: boolean): Password;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Password.AsObject;
  static toObject(includeInstance: boolean, msg: Password): Password.AsObject;
  static serializeBinaryToWriter(message: Password, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Password;
  static deserializeBinaryFromReader(message: Password, reader: jspb.BinaryReader): Password;
}

export namespace Password {
  export type AsObject = {
    password: string,
    changeRequired: boolean,
  }
}

export class HashedPassword extends jspb.Message {
  getHash(): string;
  setHash(value: string): HashedPassword;

  getAlgorithm(): string;
  setAlgorithm(value: string): HashedPassword;

  getChangeRequired(): boolean;
  setChangeRequired(value: boolean): HashedPassword;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HashedPassword.AsObject;
  static toObject(includeInstance: boolean, msg: HashedPassword): HashedPassword.AsObject;
  static serializeBinaryToWriter(message: HashedPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HashedPassword;
  static deserializeBinaryFromReader(message: HashedPassword, reader: jspb.BinaryReader): HashedPassword;
}

export namespace HashedPassword {
  export type AsObject = {
    hash: string,
    algorithm: string,
    changeRequired: boolean,
  }
}

