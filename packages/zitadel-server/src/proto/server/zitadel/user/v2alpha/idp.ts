/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "zitadel.user.v2alpha";

export interface IDPInformation {
  oauth?: IDPOAuthAccessInformation | undefined;
  idpInformation: Buffer;
}

export interface IDPOAuthAccessInformation {
  accessToken: string;
  idToken?: string | undefined;
}

export interface IDPLink {
  idpId: string;
  idpExternalId: string;
  displayName: string;
}

function createBaseIDPInformation(): IDPInformation {
  return { oauth: undefined, idpInformation: Buffer.alloc(0) };
}

export const IDPInformation = {
  encode(message: IDPInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oauth !== undefined) {
      IDPOAuthAccessInformation.encode(message.oauth, writer.uint32(10).fork()).ldelim();
    }
    if (message.idpInformation.length !== 0) {
      writer.uint32(18).bytes(message.idpInformation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.oauth = IDPOAuthAccessInformation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idpInformation = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IDPInformation {
    return {
      oauth: isSet(object.oauth) ? IDPOAuthAccessInformation.fromJSON(object.oauth) : undefined,
      idpInformation: isSet(object.idpInformation)
        ? Buffer.from(bytesFromBase64(object.idpInformation))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: IDPInformation): unknown {
    const obj: any = {};
    message.oauth !== undefined &&
      (obj.oauth = message.oauth ? IDPOAuthAccessInformation.toJSON(message.oauth) : undefined);
    message.idpInformation !== undefined &&
      (obj.idpInformation = base64FromBytes(
        message.idpInformation !== undefined ? message.idpInformation : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<IDPInformation>): IDPInformation {
    return IDPInformation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IDPInformation>): IDPInformation {
    const message = createBaseIDPInformation();
    message.oauth = (object.oauth !== undefined && object.oauth !== null)
      ? IDPOAuthAccessInformation.fromPartial(object.oauth)
      : undefined;
    message.idpInformation = object.idpInformation ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseIDPOAuthAccessInformation(): IDPOAuthAccessInformation {
  return { accessToken: "", idToken: undefined };
}

export const IDPOAuthAccessInformation = {
  encode(message: IDPOAuthAccessInformation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.idToken !== undefined) {
      writer.uint32(18).string(message.idToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPOAuthAccessInformation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPOAuthAccessInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idToken = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IDPOAuthAccessInformation {
    return {
      accessToken: isSet(object.accessToken) ? String(object.accessToken) : "",
      idToken: isSet(object.idToken) ? String(object.idToken) : undefined,
    };
  },

  toJSON(message: IDPOAuthAccessInformation): unknown {
    const obj: any = {};
    message.accessToken !== undefined && (obj.accessToken = message.accessToken);
    message.idToken !== undefined && (obj.idToken = message.idToken);
    return obj;
  },

  create(base?: DeepPartial<IDPOAuthAccessInformation>): IDPOAuthAccessInformation {
    return IDPOAuthAccessInformation.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IDPOAuthAccessInformation>): IDPOAuthAccessInformation {
    const message = createBaseIDPOAuthAccessInformation();
    message.accessToken = object.accessToken ?? "";
    message.idToken = object.idToken ?? undefined;
    return message;
  },
};

function createBaseIDPLink(): IDPLink {
  return { idpId: "", idpExternalId: "", displayName: "" };
}

export const IDPLink = {
  encode(message: IDPLink, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpId !== "") {
      writer.uint32(10).string(message.idpId);
    }
    if (message.idpExternalId !== "") {
      writer.uint32(18).string(message.idpExternalId);
    }
    if (message.displayName !== "") {
      writer.uint32(26).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDPLink {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDPLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.idpId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idpExternalId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.displayName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IDPLink {
    return {
      idpId: isSet(object.idpId) ? String(object.idpId) : "",
      idpExternalId: isSet(object.idpExternalId) ? String(object.idpExternalId) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: IDPLink): unknown {
    const obj: any = {};
    message.idpId !== undefined && (obj.idpId = message.idpId);
    message.idpExternalId !== undefined && (obj.idpExternalId = message.idpExternalId);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  create(base?: DeepPartial<IDPLink>): IDPLink {
    return IDPLink.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<IDPLink>): IDPLink {
    const message = createBaseIDPLink();
    message.idpId = object.idpId ?? "";
    message.idpExternalId = object.idpExternalId ?? "";
    message.displayName = object.displayName ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
