import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class IDPInformation extends jspb.Message {
  getOauth(): IDPOAuthAccessInformation | undefined;
  setOauth(value?: IDPOAuthAccessInformation): IDPInformation;
  hasOauth(): boolean;
  clearOauth(): IDPInformation;

  getIdpInformation(): Uint8Array | string;
  getIdpInformation_asU8(): Uint8Array;
  getIdpInformation_asB64(): string;
  setIdpInformation(value: Uint8Array | string): IDPInformation;

  getAccessCase(): IDPInformation.AccessCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDPInformation.AsObject;
  static toObject(includeInstance: boolean, msg: IDPInformation): IDPInformation.AsObject;
  static serializeBinaryToWriter(message: IDPInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDPInformation;
  static deserializeBinaryFromReader(message: IDPInformation, reader: jspb.BinaryReader): IDPInformation;
}

export namespace IDPInformation {
  export type AsObject = {
    oauth?: IDPOAuthAccessInformation.AsObject,
    idpInformation: Uint8Array | string,
  }

  export enum AccessCase { 
    ACCESS_NOT_SET = 0,
    OAUTH = 1,
  }
}

export class IDPOAuthAccessInformation extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): IDPOAuthAccessInformation;

  getIdToken(): string;
  setIdToken(value: string): IDPOAuthAccessInformation;
  hasIdToken(): boolean;
  clearIdToken(): IDPOAuthAccessInformation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDPOAuthAccessInformation.AsObject;
  static toObject(includeInstance: boolean, msg: IDPOAuthAccessInformation): IDPOAuthAccessInformation.AsObject;
  static serializeBinaryToWriter(message: IDPOAuthAccessInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDPOAuthAccessInformation;
  static deserializeBinaryFromReader(message: IDPOAuthAccessInformation, reader: jspb.BinaryReader): IDPOAuthAccessInformation;
}

export namespace IDPOAuthAccessInformation {
  export type AsObject = {
    accessToken: string,
    idToken?: string,
  }

  export enum IdTokenCase { 
    _ID_TOKEN_NOT_SET = 0,
    ID_TOKEN = 2,
  }
}

export class IDPLink extends jspb.Message {
  getIdpId(): string;
  setIdpId(value: string): IDPLink;

  getIdpExternalId(): string;
  setIdpExternalId(value: string): IDPLink;

  getDisplayName(): string;
  setDisplayName(value: string): IDPLink;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDPLink.AsObject;
  static toObject(includeInstance: boolean, msg: IDPLink): IDPLink.AsObject;
  static serializeBinaryToWriter(message: IDPLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDPLink;
  static deserializeBinaryFromReader(message: IDPLink, reader: jspb.BinaryReader): IDPLink;
}

export namespace IDPLink {
  export type AsObject = {
    idpId: string,
    idpExternalId: string,
    displayName: string,
  }
}

