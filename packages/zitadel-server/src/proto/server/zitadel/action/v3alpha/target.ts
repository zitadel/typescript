/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Duration } from "../../../google/protobuf/duration";
import { Details } from "../../object/v2beta/object";

export const protobufPackage = "zitadel.action.v3alpha";

export interface SetRESTWebhook {
  url: string;
}

export interface SetRESTRequestResponse {
  url: string;
}

export interface Target {
  /** ID is the read-only unique identifier of the target. */
  targetId: string;
  /** Details provide some base information (such as the last change date) of the target. */
  details:
    | Details
    | undefined;
  /** Unique name of the target. */
  name: string;
  restWebhook?: SetRESTWebhook | undefined;
  restRequestResponse?:
    | SetRESTRequestResponse
    | undefined;
  /** Timeout defines the duration until ZITADEL cancels the execution. */
  timeout:
    | Duration
    | undefined;
  /** Set the execution to run asynchronously. */
  isAsync?:
    | boolean
    | undefined;
  /** Define if any error stops the whole execution. By default the process continues as normal. */
  interruptOnError?: boolean | undefined;
}

function createBaseSetRESTWebhook(): SetRESTWebhook {
  return { url: "" };
}

export const SetRESTWebhook = {
  encode(message: SetRESTWebhook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRESTWebhook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRESTWebhook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRESTWebhook {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: SetRESTWebhook): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create(base?: DeepPartial<SetRESTWebhook>): SetRESTWebhook {
    return SetRESTWebhook.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRESTWebhook>): SetRESTWebhook {
    const message = createBaseSetRESTWebhook();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseSetRESTRequestResponse(): SetRESTRequestResponse {
  return { url: "" };
}

export const SetRESTRequestResponse = {
  encode(message: SetRESTRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.url !== "") {
      writer.uint32(10).string(message.url);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetRESTRequestResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetRESTRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetRESTRequestResponse {
    return { url: isSet(object.url) ? String(object.url) : "" };
  },

  toJSON(message: SetRESTRequestResponse): unknown {
    const obj: any = {};
    message.url !== undefined && (obj.url = message.url);
    return obj;
  },

  create(base?: DeepPartial<SetRESTRequestResponse>): SetRESTRequestResponse {
    return SetRESTRequestResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetRESTRequestResponse>): SetRESTRequestResponse {
    const message = createBaseSetRESTRequestResponse();
    message.url = object.url ?? "";
    return message;
  },
};

function createBaseTarget(): Target {
  return {
    targetId: "",
    details: undefined,
    name: "",
    restWebhook: undefined,
    restRequestResponse: undefined,
    timeout: undefined,
    isAsync: undefined,
    interruptOnError: undefined,
  };
}

export const Target = {
  encode(message: Target, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.targetId !== "") {
      writer.uint32(10).string(message.targetId);
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.restWebhook !== undefined) {
      SetRESTWebhook.encode(message.restWebhook, writer.uint32(34).fork()).ldelim();
    }
    if (message.restRequestResponse !== undefined) {
      SetRESTRequestResponse.encode(message.restRequestResponse, writer.uint32(42).fork()).ldelim();
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(50).fork()).ldelim();
    }
    if (message.isAsync !== undefined) {
      writer.uint32(56).bool(message.isAsync);
    }
    if (message.interruptOnError !== undefined) {
      writer.uint32(64).bool(message.interruptOnError);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Target {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.targetId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.restWebhook = SetRESTWebhook.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.restRequestResponse = SetRESTRequestResponse.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.timeout = Duration.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag != 56) {
            break;
          }

          message.isAsync = reader.bool();
          continue;
        case 8:
          if (tag != 64) {
            break;
          }

          message.interruptOnError = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Target {
    return {
      targetId: isSet(object.targetId) ? String(object.targetId) : "",
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      restWebhook: isSet(object.restWebhook) ? SetRESTWebhook.fromJSON(object.restWebhook) : undefined,
      restRequestResponse: isSet(object.restRequestResponse)
        ? SetRESTRequestResponse.fromJSON(object.restRequestResponse)
        : undefined,
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined,
      isAsync: isSet(object.isAsync) ? Boolean(object.isAsync) : undefined,
      interruptOnError: isSet(object.interruptOnError) ? Boolean(object.interruptOnError) : undefined,
    };
  },

  toJSON(message: Target): unknown {
    const obj: any = {};
    message.targetId !== undefined && (obj.targetId = message.targetId);
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.name !== undefined && (obj.name = message.name);
    message.restWebhook !== undefined &&
      (obj.restWebhook = message.restWebhook ? SetRESTWebhook.toJSON(message.restWebhook) : undefined);
    message.restRequestResponse !== undefined && (obj.restRequestResponse = message.restRequestResponse
      ? SetRESTRequestResponse.toJSON(message.restRequestResponse)
      : undefined);
    message.timeout !== undefined && (obj.timeout = message.timeout ? Duration.toJSON(message.timeout) : undefined);
    message.isAsync !== undefined && (obj.isAsync = message.isAsync);
    message.interruptOnError !== undefined && (obj.interruptOnError = message.interruptOnError);
    return obj;
  },

  create(base?: DeepPartial<Target>): Target {
    return Target.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Target>): Target {
    const message = createBaseTarget();
    message.targetId = object.targetId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.name = object.name ?? "";
    message.restWebhook = (object.restWebhook !== undefined && object.restWebhook !== null)
      ? SetRESTWebhook.fromPartial(object.restWebhook)
      : undefined;
    message.restRequestResponse = (object.restRequestResponse !== undefined && object.restRequestResponse !== null)
      ? SetRESTRequestResponse.fromPartial(object.restRequestResponse)
      : undefined;
    message.timeout = (object.timeout !== undefined && object.timeout !== null)
      ? Duration.fromPartial(object.timeout)
      : undefined;
    message.isAsync = object.isAsync ?? undefined;
    message.interruptOnError = object.interruptOnError ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
