/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zitadel.user.v2alpha";

export interface SetUserPassword {
  password?: Password | undefined;
  hashedPassword?: HashedPassword | undefined;
}

export interface Password {
  password: string;
  changeRequired: boolean;
}

export interface HashedPassword {
  hash: string;
  algorithm: string;
  changeRequired: boolean;
}

function createBaseSetUserPassword(): SetUserPassword {
  return { password: undefined, hashedPassword: undefined };
}

export const SetUserPassword = {
  encode(message: SetUserPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== undefined) {
      Password.encode(message.password, writer.uint32(10).fork()).ldelim();
    }
    if (message.hashedPassword !== undefined) {
      HashedPassword.encode(message.hashedPassword, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetUserPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetUserPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.password = Password.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.hashedPassword = HashedPassword.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetUserPassword {
    return {
      password: isSet(object.password) ? Password.fromJSON(object.password) : undefined,
      hashedPassword: isSet(object.hashedPassword) ? HashedPassword.fromJSON(object.hashedPassword) : undefined,
    };
  },

  toJSON(message: SetUserPassword): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password ? Password.toJSON(message.password) : undefined);
    message.hashedPassword !== undefined &&
      (obj.hashedPassword = message.hashedPassword ? HashedPassword.toJSON(message.hashedPassword) : undefined);
    return obj;
  },

  create(base?: DeepPartial<SetUserPassword>): SetUserPassword {
    return SetUserPassword.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetUserPassword>): SetUserPassword {
    const message = createBaseSetUserPassword();
    message.password = (object.password !== undefined && object.password !== null)
      ? Password.fromPartial(object.password)
      : undefined;
    message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
      ? HashedPassword.fromPartial(object.hashedPassword)
      : undefined;
    return message;
  },
};

function createBasePassword(): Password {
  return { password: "", changeRequired: false };
}

export const Password = {
  encode(message: Password, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.changeRequired === true) {
      writer.uint32(16).bool(message.changeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Password {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.password = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.changeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Password {
    return {
      password: isSet(object.password) ? String(object.password) : "",
      changeRequired: isSet(object.changeRequired) ? Boolean(object.changeRequired) : false,
    };
  },

  toJSON(message: Password): unknown {
    const obj: any = {};
    message.password !== undefined && (obj.password = message.password);
    message.changeRequired !== undefined && (obj.changeRequired = message.changeRequired);
    return obj;
  },

  create(base?: DeepPartial<Password>): Password {
    return Password.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Password>): Password {
    const message = createBasePassword();
    message.password = object.password ?? "";
    message.changeRequired = object.changeRequired ?? false;
    return message;
  },
};

function createBaseHashedPassword(): HashedPassword {
  return { hash: "", algorithm: "", changeRequired: false };
}

export const HashedPassword = {
  encode(message: HashedPassword, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.algorithm !== "") {
      writer.uint32(18).string(message.algorithm);
    }
    if (message.changeRequired === true) {
      writer.uint32(24).bool(message.changeRequired);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HashedPassword {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashedPassword();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.hash = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.algorithm = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.changeRequired = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HashedPassword {
    return {
      hash: isSet(object.hash) ? String(object.hash) : "",
      algorithm: isSet(object.algorithm) ? String(object.algorithm) : "",
      changeRequired: isSet(object.changeRequired) ? Boolean(object.changeRequired) : false,
    };
  },

  toJSON(message: HashedPassword): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.algorithm !== undefined && (obj.algorithm = message.algorithm);
    message.changeRequired !== undefined && (obj.changeRequired = message.changeRequired);
    return obj;
  },

  create(base?: DeepPartial<HashedPassword>): HashedPassword {
    return HashedPassword.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<HashedPassword>): HashedPassword {
    const message = createBaseHashedPassword();
    message.hash = object.hash ?? "";
    message.algorithm = object.algorithm ?? "";
    message.changeRequired = object.changeRequired ?? false;
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
