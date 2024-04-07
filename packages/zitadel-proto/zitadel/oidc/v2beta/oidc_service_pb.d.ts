// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/oidc/v2beta/oidc_service.proto (package zitadel.oidc.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { AuthorizationError, AuthRequest } from "./authorization_pb.js";
import type { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.oidc.v2beta.GetAuthRequestRequest
 */
export declare class GetAuthRequestRequest extends Message<GetAuthRequestRequest> {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId: string;

  constructor(data?: PartialMessage<GetAuthRequestRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.GetAuthRequestRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthRequestRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthRequestRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthRequestRequest;

  static equals(a: GetAuthRequestRequest | PlainMessage<GetAuthRequestRequest> | undefined, b: GetAuthRequestRequest | PlainMessage<GetAuthRequestRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.oidc.v2beta.GetAuthRequestResponse
 */
export declare class GetAuthRequestResponse extends Message<GetAuthRequestResponse> {
  /**
   * @generated from field: zitadel.oidc.v2beta.AuthRequest auth_request = 1;
   */
  authRequest?: AuthRequest;

  constructor(data?: PartialMessage<GetAuthRequestResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.GetAuthRequestResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAuthRequestResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAuthRequestResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAuthRequestResponse;

  static equals(a: GetAuthRequestResponse | PlainMessage<GetAuthRequestResponse> | undefined, b: GetAuthRequestResponse | PlainMessage<GetAuthRequestResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.oidc.v2beta.CreateCallbackRequest
 */
export declare class CreateCallbackRequest extends Message<CreateCallbackRequest> {
  /**
   * @generated from field: string auth_request_id = 1;
   */
  authRequestId: string;

  /**
   * @generated from oneof zitadel.oidc.v2beta.CreateCallbackRequest.callback_kind
   */
  callbackKind: {
    /**
     * @generated from field: zitadel.oidc.v2beta.Session session = 2;
     */
    value: Session;
    case: "session";
  } | {
    /**
     * @generated from field: zitadel.oidc.v2beta.AuthorizationError error = 3;
     */
    value: AuthorizationError;
    case: "error";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<CreateCallbackRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.CreateCallbackRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCallbackRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCallbackRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCallbackRequest;

  static equals(a: CreateCallbackRequest | PlainMessage<CreateCallbackRequest> | undefined, b: CreateCallbackRequest | PlainMessage<CreateCallbackRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.oidc.v2beta.Session
 */
export declare class Session extends Message<Session> {
  /**
   * @generated from field: string session_id = 1;
   */
  sessionId: string;

  /**
   * @generated from field: string session_token = 2;
   */
  sessionToken: string;

  constructor(data?: PartialMessage<Session>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.Session";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session;

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean;
}

/**
 * @generated from message zitadel.oidc.v2beta.CreateCallbackResponse
 */
export declare class CreateCallbackResponse extends Message<CreateCallbackResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  /**
   * @generated from field: string callback_url = 2;
   */
  callbackUrl: string;

  constructor(data?: PartialMessage<CreateCallbackResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.oidc.v2beta.CreateCallbackResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateCallbackResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateCallbackResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateCallbackResponse;

  static equals(a: CreateCallbackResponse | PlainMessage<CreateCallbackResponse> | undefined, b: CreateCallbackResponse | PlainMessage<CreateCallbackResponse> | undefined): boolean;
}

