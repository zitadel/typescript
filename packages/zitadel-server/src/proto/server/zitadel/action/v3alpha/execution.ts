/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Details } from "../../object/v2beta/object";

export const protobufPackage = "zitadel.action.v3alpha";

export interface Execution {
  executionId: string;
  /** Details provide some base information (such as the last change date) of the target. */
  details:
    | Details
    | undefined;
  /** Targets which are called in the defined conditions. */
  targets: string[];
  /** Included executions with the same condition-types. */
  includes: string[];
}

export interface Condition {
  /** Condition-type to execute if a request on the defined API point happens. */
  request?:
    | RequestExecution
    | undefined;
  /** Condition-type to execute on response if a request on the defined API point happens. */
  response?:
    | ResponseExecution
    | undefined;
  /** Condition-type to execute if function is used, replaces actions v1. */
  function?:
    | string
    | undefined;
  /** Condition-type to execute if an event is created in the system. */
  event?: EventExecution | undefined;
}

export interface RequestExecution {
  /** GRPC-method as condition. */
  method?:
    | string
    | undefined;
  /** GRPC-service as condition. */
  service?:
    | string
    | undefined;
  /** All calls to any available service and endpoint as condition. */
  all?: boolean | undefined;
}

export interface ResponseExecution {
  /** GRPC-method as condition. */
  method?:
    | string
    | undefined;
  /** GRPC-service as condition. */
  service?:
    | string
    | undefined;
  /** All calls to any available service and endpoint as condition. */
  all?: boolean | undefined;
}

export interface EventExecution {
  /** Event name as condition. */
  event?:
    | string
    | undefined;
  /** Event group as condition, all events under this group. */
  group?:
    | string
    | undefined;
  /** all events as condition. */
  all?: boolean | undefined;
}

function createBaseExecution(): Execution {
  return { executionId: "", details: undefined, targets: [], includes: [] };
}

export const Execution = {
  encode(message: Execution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.executionId !== "") {
      writer.uint32(10).string(message.executionId);
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.targets) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.includes) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Execution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.executionId = reader.string();
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

          message.targets.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.includes.push(reader.string());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Execution {
    return {
      executionId: isSet(object.executionId) ? String(object.executionId) : "",
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      targets: Array.isArray(object?.targets) ? object.targets.map((e: any) => String(e)) : [],
      includes: Array.isArray(object?.includes) ? object.includes.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Execution): unknown {
    const obj: any = {};
    message.executionId !== undefined && (obj.executionId = message.executionId);
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    if (message.targets) {
      obj.targets = message.targets.map((e) => e);
    } else {
      obj.targets = [];
    }
    if (message.includes) {
      obj.includes = message.includes.map((e) => e);
    } else {
      obj.includes = [];
    }
    return obj;
  },

  create(base?: DeepPartial<Execution>): Execution {
    return Execution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Execution>): Execution {
    const message = createBaseExecution();
    message.executionId = object.executionId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.targets = object.targets?.map((e) => e) || [];
    message.includes = object.includes?.map((e) => e) || [];
    return message;
  },
};

function createBaseCondition(): Condition {
  return { request: undefined, response: undefined, function: undefined, event: undefined };
}

export const Condition = {
  encode(message: Condition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.request !== undefined) {
      RequestExecution.encode(message.request, writer.uint32(10).fork()).ldelim();
    }
    if (message.response !== undefined) {
      ResponseExecution.encode(message.response, writer.uint32(18).fork()).ldelim();
    }
    if (message.function !== undefined) {
      writer.uint32(26).string(message.function);
    }
    if (message.event !== undefined) {
      EventExecution.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Condition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.request = RequestExecution.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.response = ResponseExecution.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.function = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.event = EventExecution.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Condition {
    return {
      request: isSet(object.request) ? RequestExecution.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? ResponseExecution.fromJSON(object.response) : undefined,
      function: isSet(object.function) ? String(object.function) : undefined,
      event: isSet(object.event) ? EventExecution.fromJSON(object.event) : undefined,
    };
  },

  toJSON(message: Condition): unknown {
    const obj: any = {};
    message.request !== undefined &&
      (obj.request = message.request ? RequestExecution.toJSON(message.request) : undefined);
    message.response !== undefined &&
      (obj.response = message.response ? ResponseExecution.toJSON(message.response) : undefined);
    message.function !== undefined && (obj.function = message.function);
    message.event !== undefined && (obj.event = message.event ? EventExecution.toJSON(message.event) : undefined);
    return obj;
  },

  create(base?: DeepPartial<Condition>): Condition {
    return Condition.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Condition>): Condition {
    const message = createBaseCondition();
    message.request = (object.request !== undefined && object.request !== null)
      ? RequestExecution.fromPartial(object.request)
      : undefined;
    message.response = (object.response !== undefined && object.response !== null)
      ? ResponseExecution.fromPartial(object.response)
      : undefined;
    message.function = object.function ?? undefined;
    message.event = (object.event !== undefined && object.event !== null)
      ? EventExecution.fromPartial(object.event)
      : undefined;
    return message;
  },
};

function createBaseRequestExecution(): RequestExecution {
  return { method: undefined, service: undefined, all: undefined };
}

export const RequestExecution = {
  encode(message: RequestExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== undefined) {
      writer.uint32(10).string(message.method);
    }
    if (message.service !== undefined) {
      writer.uint32(18).string(message.service);
    }
    if (message.all !== undefined) {
      writer.uint32(24).bool(message.all);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestExecution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.method = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.service = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.all = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RequestExecution {
    return {
      method: isSet(object.method) ? String(object.method) : undefined,
      service: isSet(object.service) ? String(object.service) : undefined,
      all: isSet(object.all) ? Boolean(object.all) : undefined,
    };
  },

  toJSON(message: RequestExecution): unknown {
    const obj: any = {};
    message.method !== undefined && (obj.method = message.method);
    message.service !== undefined && (obj.service = message.service);
    message.all !== undefined && (obj.all = message.all);
    return obj;
  },

  create(base?: DeepPartial<RequestExecution>): RequestExecution {
    return RequestExecution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RequestExecution>): RequestExecution {
    const message = createBaseRequestExecution();
    message.method = object.method ?? undefined;
    message.service = object.service ?? undefined;
    message.all = object.all ?? undefined;
    return message;
  },
};

function createBaseResponseExecution(): ResponseExecution {
  return { method: undefined, service: undefined, all: undefined };
}

export const ResponseExecution = {
  encode(message: ResponseExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.method !== undefined) {
      writer.uint32(10).string(message.method);
    }
    if (message.service !== undefined) {
      writer.uint32(18).string(message.service);
    }
    if (message.all !== undefined) {
      writer.uint32(24).bool(message.all);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseExecution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.method = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.service = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.all = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseExecution {
    return {
      method: isSet(object.method) ? String(object.method) : undefined,
      service: isSet(object.service) ? String(object.service) : undefined,
      all: isSet(object.all) ? Boolean(object.all) : undefined,
    };
  },

  toJSON(message: ResponseExecution): unknown {
    const obj: any = {};
    message.method !== undefined && (obj.method = message.method);
    message.service !== undefined && (obj.service = message.service);
    message.all !== undefined && (obj.all = message.all);
    return obj;
  },

  create(base?: DeepPartial<ResponseExecution>): ResponseExecution {
    return ResponseExecution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<ResponseExecution>): ResponseExecution {
    const message = createBaseResponseExecution();
    message.method = object.method ?? undefined;
    message.service = object.service ?? undefined;
    message.all = object.all ?? undefined;
    return message;
  },
};

function createBaseEventExecution(): EventExecution {
  return { event: undefined, group: undefined, all: undefined };
}

export const EventExecution = {
  encode(message: EventExecution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.event !== undefined) {
      writer.uint32(10).string(message.event);
    }
    if (message.group !== undefined) {
      writer.uint32(18).string(message.group);
    }
    if (message.all !== undefined) {
      writer.uint32(24).bool(message.all);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventExecution {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExecution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.event = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.group = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.all = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): EventExecution {
    return {
      event: isSet(object.event) ? String(object.event) : undefined,
      group: isSet(object.group) ? String(object.group) : undefined,
      all: isSet(object.all) ? Boolean(object.all) : undefined,
    };
  },

  toJSON(message: EventExecution): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = message.event);
    message.group !== undefined && (obj.group = message.group);
    message.all !== undefined && (obj.all = message.all);
    return obj;
  },

  create(base?: DeepPartial<EventExecution>): EventExecution {
    return EventExecution.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventExecution>): EventExecution {
    const message = createBaseEventExecution();
    message.event = object.event ?? undefined;
    message.group = object.group ?? undefined;
    message.all = object.all ?? undefined;
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
