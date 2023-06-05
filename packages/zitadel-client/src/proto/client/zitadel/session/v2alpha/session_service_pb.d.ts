import * as jspb from 'google-protobuf'

import * as zitadel_object_v2alpha_object_pb from '../../../zitadel/object/v2alpha/object_pb';
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb';
import * as zitadel_session_v2alpha_session_pb from '../../../zitadel/session/v2alpha/session_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class ListSessionsRequest extends jspb.Message {
  getQuery(): zitadel_object_v2alpha_object_pb.ListQuery | undefined;
  setQuery(value?: zitadel_object_v2alpha_object_pb.ListQuery): ListSessionsRequest;
  hasQuery(): boolean;
  clearQuery(): ListSessionsRequest;

  getQueriesList(): Array<zitadel_session_v2alpha_session_pb.SearchQuery>;
  setQueriesList(value: Array<zitadel_session_v2alpha_session_pb.SearchQuery>): ListSessionsRequest;
  clearQueriesList(): ListSessionsRequest;
  addQueries(value?: zitadel_session_v2alpha_session_pb.SearchQuery, index?: number): zitadel_session_v2alpha_session_pb.SearchQuery;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
  static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
  export type AsObject = {
    query?: zitadel_object_v2alpha_object_pb.ListQuery.AsObject,
    queriesList: Array<zitadel_session_v2alpha_session_pb.SearchQuery.AsObject>,
  }
}

export class ListSessionsResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.ListDetails | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.ListDetails): ListSessionsResponse;
  hasDetails(): boolean;
  clearDetails(): ListSessionsResponse;

  getSessionsList(): Array<zitadel_session_v2alpha_session_pb.Session>;
  setSessionsList(value: Array<zitadel_session_v2alpha_session_pb.Session>): ListSessionsResponse;
  clearSessionsList(): ListSessionsResponse;
  addSessions(value?: zitadel_session_v2alpha_session_pb.Session, index?: number): zitadel_session_v2alpha_session_pb.Session;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
  static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.ListDetails.AsObject,
    sessionsList: Array<zitadel_session_v2alpha_session_pb.Session.AsObject>,
  }
}

export class GetSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): GetSessionRequest;

  getSessionToken(): string;
  setSessionToken(value: string): GetSessionRequest;
  hasSessionToken(): boolean;
  clearSessionToken(): GetSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionRequest): GetSessionRequest.AsObject;
  static serializeBinaryToWriter(message: GetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionRequest;
  static deserializeBinaryFromReader(message: GetSessionRequest, reader: jspb.BinaryReader): GetSessionRequest;
}

export namespace GetSessionRequest {
  export type AsObject = {
    sessionId: string,
    sessionToken?: string,
  }

  export enum SessionTokenCase { 
    _SESSION_TOKEN_NOT_SET = 0,
    SESSION_TOKEN = 2,
  }
}

export class GetSessionResponse extends jspb.Message {
  getSession(): zitadel_session_v2alpha_session_pb.Session | undefined;
  setSession(value?: zitadel_session_v2alpha_session_pb.Session): GetSessionResponse;
  hasSession(): boolean;
  clearSession(): GetSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSessionResponse): GetSessionResponse.AsObject;
  static serializeBinaryToWriter(message: GetSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSessionResponse;
  static deserializeBinaryFromReader(message: GetSessionResponse, reader: jspb.BinaryReader): GetSessionResponse;
}

export namespace GetSessionResponse {
  export type AsObject = {
    session?: zitadel_session_v2alpha_session_pb.Session.AsObject,
  }
}

export class CreateSessionRequest extends jspb.Message {
  getChecks(): Checks | undefined;
  setChecks(value?: Checks): CreateSessionRequest;
  hasChecks(): boolean;
  clearChecks(): CreateSessionRequest;

  getMetadataMap(): jspb.Map<string, Uint8Array | string>;
  clearMetadataMap(): CreateSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionRequest): CreateSessionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionRequest;
  static deserializeBinaryFromReader(message: CreateSessionRequest, reader: jspb.BinaryReader): CreateSessionRequest;
}

export namespace CreateSessionRequest {
  export type AsObject = {
    checks?: Checks.AsObject,
    metadataMap: Array<[string, Uint8Array | string]>,
  }
}

export class CreateSessionResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): CreateSessionResponse;
  hasDetails(): boolean;
  clearDetails(): CreateSessionResponse;

  getSessionId(): string;
  setSessionId(value: string): CreateSessionResponse;

  getSessionToken(): string;
  setSessionToken(value: string): CreateSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSessionResponse): CreateSessionResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSessionResponse;
  static deserializeBinaryFromReader(message: CreateSessionResponse, reader: jspb.BinaryReader): CreateSessionResponse;
}

export namespace CreateSessionResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    sessionId: string,
    sessionToken: string,
  }
}

export class SetSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): SetSessionRequest;

  getSessionToken(): string;
  setSessionToken(value: string): SetSessionRequest;

  getChecks(): Checks | undefined;
  setChecks(value?: Checks): SetSessionRequest;
  hasChecks(): boolean;
  clearChecks(): SetSessionRequest;

  getMetadataMap(): jspb.Map<string, Uint8Array | string>;
  clearMetadataMap(): SetSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetSessionRequest): SetSessionRequest.AsObject;
  static serializeBinaryToWriter(message: SetSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSessionRequest;
  static deserializeBinaryFromReader(message: SetSessionRequest, reader: jspb.BinaryReader): SetSessionRequest;
}

export namespace SetSessionRequest {
  export type AsObject = {
    sessionId: string,
    sessionToken: string,
    checks?: Checks.AsObject,
    metadataMap: Array<[string, Uint8Array | string]>,
  }
}

export class SetSessionResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): SetSessionResponse;
  hasDetails(): boolean;
  clearDetails(): SetSessionResponse;

  getSessionToken(): string;
  setSessionToken(value: string): SetSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetSessionResponse): SetSessionResponse.AsObject;
  static serializeBinaryToWriter(message: SetSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetSessionResponse;
  static deserializeBinaryFromReader(message: SetSessionResponse, reader: jspb.BinaryReader): SetSessionResponse;
}

export namespace SetSessionResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    sessionToken: string,
  }
}

export class DeleteSessionRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): DeleteSessionRequest;

  getSessionToken(): string;
  setSessionToken(value: string): DeleteSessionRequest;
  hasSessionToken(): boolean;
  clearSessionToken(): DeleteSessionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionRequest): DeleteSessionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSessionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionRequest;
  static deserializeBinaryFromReader(message: DeleteSessionRequest, reader: jspb.BinaryReader): DeleteSessionRequest;
}

export namespace DeleteSessionRequest {
  export type AsObject = {
    sessionId: string,
    sessionToken?: string,
  }

  export enum SessionTokenCase { 
    _SESSION_TOKEN_NOT_SET = 0,
    SESSION_TOKEN = 2,
  }
}

export class DeleteSessionResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): DeleteSessionResponse;
  hasDetails(): boolean;
  clearDetails(): DeleteSessionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSessionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSessionResponse): DeleteSessionResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteSessionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSessionResponse;
  static deserializeBinaryFromReader(message: DeleteSessionResponse, reader: jspb.BinaryReader): DeleteSessionResponse;
}

export namespace DeleteSessionResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
  }
}

export class Checks extends jspb.Message {
  getUser(): CheckUser | undefined;
  setUser(value?: CheckUser): Checks;
  hasUser(): boolean;
  clearUser(): Checks;

  getPassword(): CheckPassword | undefined;
  setPassword(value?: CheckPassword): Checks;
  hasPassword(): boolean;
  clearPassword(): Checks;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Checks.AsObject;
  static toObject(includeInstance: boolean, msg: Checks): Checks.AsObject;
  static serializeBinaryToWriter(message: Checks, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Checks;
  static deserializeBinaryFromReader(message: Checks, reader: jspb.BinaryReader): Checks;
}

export namespace Checks {
  export type AsObject = {
    user?: CheckUser.AsObject,
    password?: CheckPassword.AsObject,
  }

  export enum UserCase { 
    _USER_NOT_SET = 0,
    USER = 1,
  }

  export enum PasswordCase { 
    _PASSWORD_NOT_SET = 0,
    PASSWORD = 2,
  }
}

export class CheckUser extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CheckUser;

  getLoginName(): string;
  setLoginName(value: string): CheckUser;

  getSearchCase(): CheckUser.SearchCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckUser.AsObject;
  static toObject(includeInstance: boolean, msg: CheckUser): CheckUser.AsObject;
  static serializeBinaryToWriter(message: CheckUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckUser;
  static deserializeBinaryFromReader(message: CheckUser, reader: jspb.BinaryReader): CheckUser;
}

export namespace CheckUser {
  export type AsObject = {
    userId: string,
    loginName: string,
  }

  export enum SearchCase { 
    SEARCH_NOT_SET = 0,
    USER_ID = 1,
    LOGIN_NAME = 2,
  }
}

export class CheckPassword extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): CheckPassword;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPassword.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPassword): CheckPassword.AsObject;
  static serializeBinaryToWriter(message: CheckPassword, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPassword;
  static deserializeBinaryFromReader(message: CheckPassword, reader: jspb.BinaryReader): CheckPassword;
}

export namespace CheckPassword {
  export type AsObject = {
    password: string,
  }
}

