// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/feature/v2beta/user.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.feature.v2beta.SetUserFeatureRequest
 */
export declare class SetUserFeatureRequest extends Message<SetUserFeatureRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<SetUserFeatureRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetUserFeatureRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetUserFeatureRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetUserFeatureRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetUserFeatureRequest;

  static equals(a: SetUserFeatureRequest | PlainMessage<SetUserFeatureRequest> | undefined, b: SetUserFeatureRequest | PlainMessage<SetUserFeatureRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.SetUserFeaturesResponse
 */
export declare class SetUserFeaturesResponse extends Message<SetUserFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<SetUserFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.SetUserFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetUserFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetUserFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetUserFeaturesResponse;

  static equals(a: SetUserFeaturesResponse | PlainMessage<SetUserFeaturesResponse> | undefined, b: SetUserFeaturesResponse | PlainMessage<SetUserFeaturesResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetUserFeaturesRequest
 */
export declare class ResetUserFeaturesRequest extends Message<ResetUserFeaturesRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<ResetUserFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.ResetUserFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetUserFeaturesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetUserFeaturesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetUserFeaturesRequest;

  static equals(a: ResetUserFeaturesRequest | PlainMessage<ResetUserFeaturesRequest> | undefined, b: ResetUserFeaturesRequest | PlainMessage<ResetUserFeaturesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.ResetUserFeaturesResponse
 */
export declare class ResetUserFeaturesResponse extends Message<ResetUserFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<ResetUserFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.ResetUserFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResetUserFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResetUserFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResetUserFeaturesResponse;

  static equals(a: ResetUserFeaturesResponse | PlainMessage<ResetUserFeaturesResponse> | undefined, b: ResetUserFeaturesResponse | PlainMessage<ResetUserFeaturesResponse> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetUserFeaturesRequest
 */
export declare class GetUserFeaturesRequest extends Message<GetUserFeaturesRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: bool inheritance = 2;
   */
  inheritance: boolean;

  constructor(data?: PartialMessage<GetUserFeaturesRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetUserFeaturesRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserFeaturesRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserFeaturesRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserFeaturesRequest;

  static equals(a: GetUserFeaturesRequest | PlainMessage<GetUserFeaturesRequest> | undefined, b: GetUserFeaturesRequest | PlainMessage<GetUserFeaturesRequest> | undefined): boolean;
}

/**
 * @generated from message zitadel.feature.v2beta.GetUserFeaturesResponse
 */
export declare class GetUserFeaturesResponse extends Message<GetUserFeaturesResponse> {
  /**
   * @generated from field: zitadel.object.v2beta.Details details = 1;
   */
  details?: Details;

  constructor(data?: PartialMessage<GetUserFeaturesResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.feature.v2beta.GetUserFeaturesResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserFeaturesResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserFeaturesResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserFeaturesResponse;

  static equals(a: GetUserFeaturesResponse | PlainMessage<GetUserFeaturesResponse> | undefined, b: GetUserFeaturesResponse | PlainMessage<GetUserFeaturesResponse> | undefined): boolean;
}

