// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/event.proto (package zitadel.event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage, Struct, Timestamp } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { LocalizedMessage } from "./message_pb.js";

/**
 * @generated from message zitadel.event.v1.Event
 */
export declare class Event extends Message<Event> {
  /**
   * @generated from field: zitadel.event.v1.Editor editor = 1;
   */
  editor?: Editor;

  /**
   * @generated from field: zitadel.event.v1.Aggregate aggregate = 2;
   */
  aggregate?: Aggregate;

  /**
   * @generated from field: uint64 sequence = 3;
   */
  sequence: bigint;

  /**
   * @generated from field: google.protobuf.Timestamp creation_date = 4;
   */
  creationDate?: Timestamp;

  /**
   * @generated from field: google.protobuf.Struct payload = 5;
   */
  payload?: Struct;

  /**
   * @generated from field: zitadel.event.v1.EventType type = 6;
   */
  type?: EventType;

  constructor(data?: PartialMessage<Event>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.event.v1.Event";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Event;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Event;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Event;

  static equals(a: Event | PlainMessage<Event> | undefined, b: Event | PlainMessage<Event> | undefined): boolean;
}

/**
 * @generated from message zitadel.event.v1.Editor
 */
export declare class Editor extends Message<Editor> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  /**
   * @generated from field: string display_name = 2;
   */
  displayName: string;

  /**
   * @generated from field: string service = 3;
   */
  service: string;

  constructor(data?: PartialMessage<Editor>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.event.v1.Editor";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Editor;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Editor;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Editor;

  static equals(a: Editor | PlainMessage<Editor> | undefined, b: Editor | PlainMessage<Editor> | undefined): boolean;
}

/**
 * @generated from message zitadel.event.v1.Aggregate
 */
export declare class Aggregate extends Message<Aggregate> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.event.v1.AggregateType type = 2;
   */
  type?: AggregateType;

  /**
   * @generated from field: string resource_owner = 3;
   */
  resourceOwner: string;

  constructor(data?: PartialMessage<Aggregate>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.event.v1.Aggregate";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Aggregate;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Aggregate;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Aggregate;

  static equals(a: Aggregate | PlainMessage<Aggregate> | undefined, b: Aggregate | PlainMessage<Aggregate> | undefined): boolean;
}

/**
 * @generated from message zitadel.event.v1.EventType
 */
export declare class EventType extends Message<EventType> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: zitadel.v1.LocalizedMessage localized = 2;
   */
  localized?: LocalizedMessage;

  constructor(data?: PartialMessage<EventType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.event.v1.EventType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventType;

  static equals(a: EventType | PlainMessage<EventType> | undefined, b: EventType | PlainMessage<EventType> | undefined): boolean;
}

/**
 * @generated from message zitadel.event.v1.AggregateType
 */
export declare class AggregateType extends Message<AggregateType> {
  /**
   * @generated from field: string type = 1;
   */
  type: string;

  /**
   * @generated from field: zitadel.v1.LocalizedMessage localized = 2;
   */
  localized?: LocalizedMessage;

  constructor(data?: PartialMessage<AggregateType>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.event.v1.AggregateType";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregateType;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregateType;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregateType;

  static equals(a: AggregateType | PlainMessage<AggregateType> | undefined, b: AggregateType | PlainMessage<AggregateType> | undefined): boolean;
}

