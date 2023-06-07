import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class Organisation extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): Organisation;

  getOrgDomain(): string;
  setOrgDomain(value: string): Organisation;

  getOrgCase(): Organisation.OrgCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organisation.AsObject;
  static toObject(includeInstance: boolean, msg: Organisation): Organisation.AsObject;
  static serializeBinaryToWriter(message: Organisation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organisation;
  static deserializeBinaryFromReader(message: Organisation, reader: jspb.BinaryReader): Organisation;
}

export namespace Organisation {
  export type AsObject = {
    orgId: string,
    orgDomain: string,
  }

  export enum OrgCase { 
    ORG_NOT_SET = 0,
    ORG_ID = 1,
    ORG_DOMAIN = 2,
  }
}

export class RequestContext extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): RequestContext;

  getInstance(): boolean;
  setInstance(value: boolean): RequestContext;

  getResourceOwnerCase(): RequestContext.ResourceOwnerCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestContext.AsObject;
  static toObject(includeInstance: boolean, msg: RequestContext): RequestContext.AsObject;
  static serializeBinaryToWriter(message: RequestContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestContext;
  static deserializeBinaryFromReader(message: RequestContext, reader: jspb.BinaryReader): RequestContext;
}

export namespace RequestContext {
  export type AsObject = {
    orgId: string,
    instance: boolean,
  }

  export enum ResourceOwnerCase { 
    RESOURCE_OWNER_NOT_SET = 0,
    ORG_ID = 1,
    INSTANCE = 2,
  }
}

export class ListQuery extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): ListQuery;

  getLimit(): number;
  setLimit(value: number): ListQuery;

  getAsc(): boolean;
  setAsc(value: boolean): ListQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListQuery.AsObject;
  static toObject(includeInstance: boolean, msg: ListQuery): ListQuery.AsObject;
  static serializeBinaryToWriter(message: ListQuery, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListQuery;
  static deserializeBinaryFromReader(message: ListQuery, reader: jspb.BinaryReader): ListQuery;
}

export namespace ListQuery {
  export type AsObject = {
    offset: number,
    limit: number,
    asc: boolean,
  }
}

export class Details extends jspb.Message {
  getSequence(): number;
  setSequence(value: number): Details;

  getChangeDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setChangeDate(value?: google_protobuf_timestamp_pb.Timestamp): Details;
  hasChangeDate(): boolean;
  clearChangeDate(): Details;

  getResourceOwner(): string;
  setResourceOwner(value: string): Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Details.AsObject;
  static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
  static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Details;
  static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
}

export namespace Details {
  export type AsObject = {
    sequence: number,
    changeDate?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    resourceOwner: string,
  }
}

export class ListDetails extends jspb.Message {
  getTotalResult(): number;
  setTotalResult(value: number): ListDetails;

  getProcessedSequence(): number;
  setProcessedSequence(value: number): ListDetails;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): ListDetails;
  hasTimestamp(): boolean;
  clearTimestamp(): ListDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDetails.AsObject;
  static toObject(includeInstance: boolean, msg: ListDetails): ListDetails.AsObject;
  static serializeBinaryToWriter(message: ListDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDetails;
  static deserializeBinaryFromReader(message: ListDetails, reader: jspb.BinaryReader): ListDetails;
}

export namespace ListDetails {
  export type AsObject = {
    totalResult: number,
    processedSequence: number,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

