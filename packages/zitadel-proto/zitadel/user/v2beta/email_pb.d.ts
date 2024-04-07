// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/user/v2beta/email.proto (package zitadel.user.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message zitadel.user.v2beta.SetHumanEmail
 */
export declare class SetHumanEmail extends Message<SetHumanEmail> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * if no verification is specified, an email is sent with the default url
   *
   * @generated from oneof zitadel.user.v2beta.SetHumanEmail.verification
   */
  verification: {
    /**
     * @generated from field: zitadel.user.v2beta.SendEmailVerificationCode send_code = 2;
     */
    value: SendEmailVerificationCode;
    case: "sendCode";
  } | {
    /**
     * @generated from field: zitadel.user.v2beta.ReturnEmailVerificationCode return_code = 3;
     */
    value: ReturnEmailVerificationCode;
    case: "returnCode";
  } | {
    /**
     * @generated from field: bool is_verified = 4;
     */
    value: boolean;
    case: "isVerified";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<SetHumanEmail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.SetHumanEmail";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetHumanEmail;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetHumanEmail;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetHumanEmail;

  static equals(a: SetHumanEmail | PlainMessage<SetHumanEmail> | undefined, b: SetHumanEmail | PlainMessage<SetHumanEmail> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.HumanEmail
 */
export declare class HumanEmail extends Message<HumanEmail> {
  /**
   * @generated from field: string email = 1;
   */
  email: string;

  /**
   * @generated from field: bool is_verified = 2;
   */
  isVerified: boolean;

  constructor(data?: PartialMessage<HumanEmail>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.HumanEmail";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HumanEmail;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HumanEmail;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HumanEmail;

  static equals(a: HumanEmail | PlainMessage<HumanEmail> | undefined, b: HumanEmail | PlainMessage<HumanEmail> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.SendEmailVerificationCode
 */
export declare class SendEmailVerificationCode extends Message<SendEmailVerificationCode> {
  /**
   * @generated from field: optional string url_template = 1;
   */
  urlTemplate?: string;

  constructor(data?: PartialMessage<SendEmailVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.SendEmailVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendEmailVerificationCode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendEmailVerificationCode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendEmailVerificationCode;

  static equals(a: SendEmailVerificationCode | PlainMessage<SendEmailVerificationCode> | undefined, b: SendEmailVerificationCode | PlainMessage<SendEmailVerificationCode> | undefined): boolean;
}

/**
 * @generated from message zitadel.user.v2beta.ReturnEmailVerificationCode
 */
export declare class ReturnEmailVerificationCode extends Message<ReturnEmailVerificationCode> {
  constructor(data?: PartialMessage<ReturnEmailVerificationCode>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.user.v2beta.ReturnEmailVerificationCode";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReturnEmailVerificationCode;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReturnEmailVerificationCode;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReturnEmailVerificationCode;

  static equals(a: ReturnEmailVerificationCode | PlainMessage<ReturnEmailVerificationCode> | undefined, b: ReturnEmailVerificationCode | PlainMessage<ReturnEmailVerificationCode> | undefined): boolean;
}

