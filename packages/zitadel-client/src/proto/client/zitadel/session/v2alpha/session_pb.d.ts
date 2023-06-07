import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class Session extends jspb.Message {
  getId(): string;
  setId(value: string): Session;

  getCreationDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreationDate(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasCreationDate(): boolean;
  clearCreationDate(): Session;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Session;
  hasChangeDate(): boolean;
  clearChangeDate(): Session;

  getSequence(): number;
  setSequence(value: number): Session;

  getFactors(): Factors | undefined;
  setFactors(value?: Factors): Session;
  hasFactors(): boolean;
  clearFactors(): Session;

  getMetadataMap(): jspb.Map<string, Uint8Array | string>;
  clearMetadataMap(): Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Session.AsObject;
  static toObject(includeInstance: boolean, msg: Session): Session.AsObject;
  static serializeBinaryToWriter(message: Session, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Session;
  static deserializeBinaryFromReader(message: Session, reader: jspb.BinaryReader): Session;
}

export namespace Session {
  export type AsObject = {
    id: string,
    creationDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sequence: number,
    factors?: Factors.AsObject,
    metadataMap: Array<[string, Uint8Array | string]>,
  }
}

export class Factors extends jspb.Message {
  getUser(): UserFactor | undefined;
  setUser(value?: UserFactor): Factors;
  hasUser(): boolean;
  clearUser(): Factors;

  getPassword(): PasswordFactor | undefined;
  setPassword(value?: PasswordFactor): Factors;
  hasPassword(): boolean;
  clearPassword(): Factors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Factors.AsObject;
  static toObject(includeInstance: boolean, msg: Factors): Factors.AsObject;
  static serializeBinaryToWriter(message: Factors, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Factors;
  static deserializeBinaryFromReader(message: Factors, reader: jspb.BinaryReader): Factors;
}

export namespace Factors {
  export type AsObject = {
    user?: UserFactor.AsObject,
    password?: PasswordFactor.AsObject,
  }
}

export class UserFactor extends jspb.Message {
  getVerifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserFactor;
  hasVerifiedAt(): boolean;
  clearVerifiedAt(): UserFactor;

  getId(): string;
  setId(value: string): UserFactor;

  getLoginName(): string;
  setLoginName(value: string): UserFactor;

  getDisplayName(): string;
  setDisplayName(value: string): UserFactor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFactor.AsObject;
  static toObject(includeInstance: boolean, msg: UserFactor): UserFactor.AsObject;
  static serializeBinaryToWriter(message: UserFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFactor;
  static deserializeBinaryFromReader(message: UserFactor, reader: jspb.BinaryReader): UserFactor;
}

export namespace UserFactor {
  export type AsObject = {
    verifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    id: string,
    loginName: string,
    displayName: string,
  }
}

export class PasswordFactor extends jspb.Message {
  getVerifiedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setVerifiedAt(value?: google_protobuf_timestamp_pb.Timestamp): PasswordFactor;
  hasVerifiedAt(): boolean;
  clearVerifiedAt(): PasswordFactor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordFactor.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordFactor): PasswordFactor.AsObject;
  static serializeBinaryToWriter(message: PasswordFactor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordFactor;
  static deserializeBinaryFromReader(message: PasswordFactor, reader: jspb.BinaryReader): PasswordFactor;
}

export namespace PasswordFactor {
  export type AsObject = {
    verifiedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class SearchQuery extends jspb.Message {
  getIdsQuery(): IDsQuery | undefined;
  setIdsQuery(value?: IDsQuery): SearchQuery;
  hasIdsQuery(): boolean;
  clearIdsQuery(): SearchQuery;

  getQueryCase(): SearchQuery.QueryCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQuery.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQuery): SearchQuery.AsObject;
  static serializeBinaryToWriter(message: SearchQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQuery;
  static deserializeBinaryFromReader(message: SearchQuery, reader: jspb.BinaryReader): SearchQuery;
}

export namespace SearchQuery {
  export type AsObject = {
    idsQuery?: IDsQuery.AsObject,
  }

  export enum QueryCase { 
    QUERY_NOT_SET = 0,
    IDS_QUERY = 1,
  }
}

export class IDsQuery extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): IDsQuery;
  clearIdsList(): IDsQuery;
  addIds(value: string, index?: number): IDsQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IDsQuery.AsObject;
  static toObject(includeInstance: boolean, msg: IDsQuery): IDsQuery.AsObject;
  static serializeBinaryToWriter(message: IDsQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IDsQuery;
  static deserializeBinaryFromReader(message: IDsQuery, reader: jspb.BinaryReader): IDsQuery;
}

export namespace IDsQuery {
  export type AsObject = {
    idsList: Array<string>,
  }
}

