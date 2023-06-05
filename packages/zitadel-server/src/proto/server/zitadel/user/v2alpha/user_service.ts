/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Details, Organisation } from "../../object/v2alpha/object";
import {
  PasskeyAuthenticator,
  passkeyAuthenticatorFromJSON,
  passkeyAuthenticatorToJSON,
  PasskeyRegistrationCode,
  ReturnPasskeyRegistrationCode,
  SendPasskeyRegistrationLink,
} from "./auth";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email";
import { IDPInformation, IDPLink } from "./idp";
import { HashedPassword, Password } from "./password";
import { SetHumanProfile, SetMetadataEntry } from "./user";

export const protobufPackage = "zitadel.user.v2alpha";

export interface AddHumanUserRequest {
  /** optionally set your own id unique for the user */
  userId?:
    | string
    | undefined;
  /** optionally set a unique username, if none is provided the email will be used */
  username?: string | undefined;
  organisation: Organisation | undefined;
  profile: SetHumanProfile | undefined;
  email: SetHumanEmail | undefined;
  metadata: SetMetadataEntry[];
  password?: Password | undefined;
  hashedPassword?: HashedPassword | undefined;
  idpLinks: IDPLink[];
}

export interface AddHumanUserResponse {
  userId: string;
  details: Details | undefined;
  emailCode?: string | undefined;
}

export interface SetEmailRequest {
  userId: string;
  email: string;
  sendCode?: SendEmailVerificationCode | undefined;
  returnCode?: ReturnEmailVerificationCode | undefined;
  isVerified?: boolean | undefined;
}

export interface SetEmailResponse {
  details:
    | Details
    | undefined;
  /** in case the verification was set to return_code, the code will be returned */
  verificationCode?: string | undefined;
}

export interface VerifyEmailRequest {
  userId: string;
  verificationCode: string;
}

export interface VerifyEmailResponse {
  details: Details | undefined;
}

export interface RegisterPasskeyRequest {
  userId: string;
  code?: PasskeyRegistrationCode | undefined;
  authenticator: PasskeyAuthenticator;
}

export interface RegisterPasskeyResponse {
  details: Details | undefined;
  passkeyId: string;
  publicKeyCredentialCreationOptions: Buffer;
}

export interface VerifyPasskeyRegistrationRequest {
  userId: string;
  passkeyId: string;
  publicKeyCredential: Buffer;
  passkeyName: string;
}

export interface VerifyPasskeyRegistrationResponse {
  details: Details | undefined;
}

export interface CreatePasskeyRegistrationLinkRequest {
  userId: string;
  sendLink?: SendPasskeyRegistrationLink | undefined;
  returnCode?: ReturnPasskeyRegistrationCode | undefined;
}

export interface CreatePasskeyRegistrationLinkResponse {
  details:
    | Details
    | undefined;
  /** in case the medium was set to return_code, the code will be returned */
  code?: PasskeyRegistrationCode | undefined;
}

export interface StartIdentityProviderFlowRequest {
  idpId: string;
  successUrl: string;
  failureUrl: string;
}

export interface StartIdentityProviderFlowResponse {
  details: Details | undefined;
  authUrl?: string | undefined;
}

export interface RetrieveIdentityProviderInformationRequest {
  intentId: string;
  token: string;
}

export interface RetrieveIdentityProviderInformationResponse {
  details: Details | undefined;
  idpInformation: IDPInformation | undefined;
}

export interface AddIDPLinkRequest {
  userId: string;
  idpLink: IDPLink | undefined;
}

export interface AddIDPLinkResponse {
  details: Details | undefined;
}

function createBaseAddHumanUserRequest(): AddHumanUserRequest {
  return {
    userId: undefined,
    username: undefined,
    organisation: undefined,
    profile: undefined,
    email: undefined,
    metadata: [],
    password: undefined,
    hashedPassword: undefined,
    idpLinks: [],
  };
}

export const AddHumanUserRequest = {
  encode(message: AddHumanUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      writer.uint32(10).string(message.userId);
    }
    if (message.username !== undefined) {
      writer.uint32(18).string(message.username);
    }
    if (message.organisation !== undefined) {
      Organisation.encode(message.organisation, writer.uint32(26).fork()).ldelim();
    }
    if (message.profile !== undefined) {
      SetHumanProfile.encode(message.profile, writer.uint32(34).fork()).ldelim();
    }
    if (message.email !== undefined) {
      SetHumanEmail.encode(message.email, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.metadata) {
      SetMetadataEntry.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.password !== undefined) {
      Password.encode(message.password, writer.uint32(58).fork()).ldelim();
    }
    if (message.hashedPassword !== undefined) {
      HashedPassword.encode(message.hashedPassword, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.idpLinks) {
      IDPLink.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddHumanUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.username = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.organisation = Organisation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.profile = SetHumanProfile.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.email = SetHumanEmail.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.metadata.push(SetMetadataEntry.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.password = Password.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.hashedPassword = HashedPassword.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.idpLinks.push(IDPLink.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddHumanUserRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : undefined,
      username: isSet(object.username) ? String(object.username) : undefined,
      organisation: isSet(object.organisation) ? Organisation.fromJSON(object.organisation) : undefined,
      profile: isSet(object.profile) ? SetHumanProfile.fromJSON(object.profile) : undefined,
      email: isSet(object.email) ? SetHumanEmail.fromJSON(object.email) : undefined,
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => SetMetadataEntry.fromJSON(e)) : [],
      password: isSet(object.password) ? Password.fromJSON(object.password) : undefined,
      hashedPassword: isSet(object.hashedPassword) ? HashedPassword.fromJSON(object.hashedPassword) : undefined,
      idpLinks: Array.isArray(object?.idpLinks) ? object.idpLinks.map((e: any) => IDPLink.fromJSON(e)) : [],
    };
  },

  toJSON(message: AddHumanUserRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.username !== undefined && (obj.username = message.username);
    message.organisation !== undefined &&
      (obj.organisation = message.organisation ? Organisation.toJSON(message.organisation) : undefined);
    message.profile !== undefined &&
      (obj.profile = message.profile ? SetHumanProfile.toJSON(message.profile) : undefined);
    message.email !== undefined && (obj.email = message.email ? SetHumanEmail.toJSON(message.email) : undefined);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e ? SetMetadataEntry.toJSON(e) : undefined);
    } else {
      obj.metadata = [];
    }
    message.password !== undefined && (obj.password = message.password ? Password.toJSON(message.password) : undefined);
    message.hashedPassword !== undefined &&
      (obj.hashedPassword = message.hashedPassword ? HashedPassword.toJSON(message.hashedPassword) : undefined);
    if (message.idpLinks) {
      obj.idpLinks = message.idpLinks.map((e) => e ? IDPLink.toJSON(e) : undefined);
    } else {
      obj.idpLinks = [];
    }
    return obj;
  },

  create(base?: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest {
    return AddHumanUserRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddHumanUserRequest>): AddHumanUserRequest {
    const message = createBaseAddHumanUserRequest();
    message.userId = object.userId ?? undefined;
    message.username = object.username ?? undefined;
    message.organisation = (object.organisation !== undefined && object.organisation !== null)
      ? Organisation.fromPartial(object.organisation)
      : undefined;
    message.profile = (object.profile !== undefined && object.profile !== null)
      ? SetHumanProfile.fromPartial(object.profile)
      : undefined;
    message.email = (object.email !== undefined && object.email !== null)
      ? SetHumanEmail.fromPartial(object.email)
      : undefined;
    message.metadata = object.metadata?.map((e) => SetMetadataEntry.fromPartial(e)) || [];
    message.password = (object.password !== undefined && object.password !== null)
      ? Password.fromPartial(object.password)
      : undefined;
    message.hashedPassword = (object.hashedPassword !== undefined && object.hashedPassword !== null)
      ? HashedPassword.fromPartial(object.hashedPassword)
      : undefined;
    message.idpLinks = object.idpLinks?.map((e) => IDPLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAddHumanUserResponse(): AddHumanUserResponse {
  return { userId: "", details: undefined, emailCode: undefined };
}

export const AddHumanUserResponse = {
  encode(message: AddHumanUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(18).fork()).ldelim();
    }
    if (message.emailCode !== undefined) {
      writer.uint32(26).string(message.emailCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddHumanUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddHumanUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
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

          message.emailCode = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddHumanUserResponse {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      emailCode: isSet(object.emailCode) ? String(object.emailCode) : undefined,
    };
  },

  toJSON(message: AddHumanUserResponse): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.emailCode !== undefined && (obj.emailCode = message.emailCode);
    return obj;
  },

  create(base?: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse {
    return AddHumanUserResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddHumanUserResponse>): AddHumanUserResponse {
    const message = createBaseAddHumanUserResponse();
    message.userId = object.userId ?? "";
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.emailCode = object.emailCode ?? undefined;
    return message;
  },
};

function createBaseSetEmailRequest(): SetEmailRequest {
  return { userId: "", email: "", sendCode: undefined, returnCode: undefined, isVerified: undefined };
}

export const SetEmailRequest = {
  encode(message: SetEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.sendCode !== undefined) {
      SendEmailVerificationCode.encode(message.sendCode, writer.uint32(26).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnEmailVerificationCode.encode(message.returnCode, writer.uint32(34).fork()).ldelim();
    }
    if (message.isVerified !== undefined) {
      writer.uint32(40).bool(message.isVerified);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.sendCode = SendEmailVerificationCode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.returnCode = ReturnEmailVerificationCode.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.isVerified = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetEmailRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      email: isSet(object.email) ? String(object.email) : "",
      sendCode: isSet(object.sendCode) ? SendEmailVerificationCode.fromJSON(object.sendCode) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnEmailVerificationCode.fromJSON(object.returnCode) : undefined,
      isVerified: isSet(object.isVerified) ? Boolean(object.isVerified) : undefined,
    };
  },

  toJSON(message: SetEmailRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.email !== undefined && (obj.email = message.email);
    message.sendCode !== undefined &&
      (obj.sendCode = message.sendCode ? SendEmailVerificationCode.toJSON(message.sendCode) : undefined);
    message.returnCode !== undefined &&
      (obj.returnCode = message.returnCode ? ReturnEmailVerificationCode.toJSON(message.returnCode) : undefined);
    message.isVerified !== undefined && (obj.isVerified = message.isVerified);
    return obj;
  },

  create(base?: DeepPartial<SetEmailRequest>): SetEmailRequest {
    return SetEmailRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetEmailRequest>): SetEmailRequest {
    const message = createBaseSetEmailRequest();
    message.userId = object.userId ?? "";
    message.email = object.email ?? "";
    message.sendCode = (object.sendCode !== undefined && object.sendCode !== null)
      ? SendEmailVerificationCode.fromPartial(object.sendCode)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnEmailVerificationCode.fromPartial(object.returnCode)
      : undefined;
    message.isVerified = object.isVerified ?? undefined;
    return message;
  },
};

function createBaseSetEmailResponse(): SetEmailResponse {
  return { details: undefined, verificationCode: undefined };
}

export const SetEmailResponse = {
  encode(message: SetEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.verificationCode !== undefined) {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SetEmailResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : undefined,
    };
  },

  toJSON(message: SetEmailResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
    return obj;
  },

  create(base?: DeepPartial<SetEmailResponse>): SetEmailResponse {
    return SetEmailResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<SetEmailResponse>): SetEmailResponse {
    const message = createBaseSetEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.verificationCode = object.verificationCode ?? undefined;
    return message;
  },
};

function createBaseVerifyEmailRequest(): VerifyEmailRequest {
  return { userId: "", verificationCode: "" };
}

export const VerifyEmailRequest = {
  encode(message: VerifyEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.verificationCode !== "") {
      writer.uint32(18).string(message.verificationCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyEmailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.verificationCode = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyEmailRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      verificationCode: isSet(object.verificationCode) ? String(object.verificationCode) : "",
    };
  },

  toJSON(message: VerifyEmailRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.verificationCode !== undefined && (obj.verificationCode = message.verificationCode);
    return obj;
  },

  create(base?: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest {
    return VerifyEmailRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VerifyEmailRequest>): VerifyEmailRequest {
    const message = createBaseVerifyEmailRequest();
    message.userId = object.userId ?? "";
    message.verificationCode = object.verificationCode ?? "";
    return message;
  },
};

function createBaseVerifyEmailResponse(): VerifyEmailResponse {
  return { details: undefined };
}

export const VerifyEmailResponse = {
  encode(message: VerifyEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyEmailResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyEmailResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyEmailResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    return obj;
  },

  create(base?: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse {
    return VerifyEmailResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VerifyEmailResponse>): VerifyEmailResponse {
    const message = createBaseVerifyEmailResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseRegisterPasskeyRequest(): RegisterPasskeyRequest {
  return { userId: "", code: undefined, authenticator: 0 };
}

export const RegisterPasskeyRequest = {
  encode(message: RegisterPasskeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.code !== undefined) {
      PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
    }
    if (message.authenticator !== 0) {
      writer.uint32(24).int32(message.authenticator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPasskeyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.code = PasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.authenticator = reader.int32() as any;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterPasskeyRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      code: isSet(object.code) ? PasskeyRegistrationCode.fromJSON(object.code) : undefined,
      authenticator: isSet(object.authenticator) ? passkeyAuthenticatorFromJSON(object.authenticator) : 0,
    };
  },

  toJSON(message: RegisterPasskeyRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.code !== undefined && (obj.code = message.code ? PasskeyRegistrationCode.toJSON(message.code) : undefined);
    message.authenticator !== undefined && (obj.authenticator = passkeyAuthenticatorToJSON(message.authenticator));
    return obj;
  },

  create(base?: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest {
    return RegisterPasskeyRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterPasskeyRequest>): RegisterPasskeyRequest {
    const message = createBaseRegisterPasskeyRequest();
    message.userId = object.userId ?? "";
    message.code = (object.code !== undefined && object.code !== null)
      ? PasskeyRegistrationCode.fromPartial(object.code)
      : undefined;
    message.authenticator = object.authenticator ?? 0;
    return message;
  },
};

function createBaseRegisterPasskeyResponse(): RegisterPasskeyResponse {
  return { details: undefined, passkeyId: "", publicKeyCredentialCreationOptions: Buffer.alloc(0) };
}

export const RegisterPasskeyResponse = {
  encode(message: RegisterPasskeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.passkeyId !== "") {
      writer.uint32(18).string(message.passkeyId);
    }
    if (message.publicKeyCredentialCreationOptions.length !== 0) {
      writer.uint32(26).bytes(message.publicKeyCredentialCreationOptions);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterPasskeyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterPasskeyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.passkeyId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.publicKeyCredentialCreationOptions = reader.bytes() as Buffer;
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterPasskeyResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
      publicKeyCredentialCreationOptions: isSet(object.publicKeyCredentialCreationOptions)
        ? Buffer.from(bytesFromBase64(object.publicKeyCredentialCreationOptions))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: RegisterPasskeyResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.passkeyId !== undefined && (obj.passkeyId = message.passkeyId);
    message.publicKeyCredentialCreationOptions !== undefined &&
      (obj.publicKeyCredentialCreationOptions = base64FromBytes(
        message.publicKeyCredentialCreationOptions !== undefined
          ? message.publicKeyCredentialCreationOptions
          : Buffer.alloc(0),
      ));
    return obj;
  },

  create(base?: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse {
    return RegisterPasskeyResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<RegisterPasskeyResponse>): RegisterPasskeyResponse {
    const message = createBaseRegisterPasskeyResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.passkeyId = object.passkeyId ?? "";
    message.publicKeyCredentialCreationOptions = object.publicKeyCredentialCreationOptions ?? Buffer.alloc(0);
    return message;
  },
};

function createBaseVerifyPasskeyRegistrationRequest(): VerifyPasskeyRegistrationRequest {
  return { userId: "", passkeyId: "", publicKeyCredential: Buffer.alloc(0), passkeyName: "" };
}

export const VerifyPasskeyRegistrationRequest = {
  encode(message: VerifyPasskeyRegistrationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.passkeyId !== "") {
      writer.uint32(18).string(message.passkeyId);
    }
    if (message.publicKeyCredential.length !== 0) {
      writer.uint32(26).bytes(message.publicKeyCredential);
    }
    if (message.passkeyName !== "") {
      writer.uint32(34).string(message.passkeyName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPasskeyRegistrationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.passkeyId = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.publicKeyCredential = reader.bytes() as Buffer;
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.passkeyName = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPasskeyRegistrationRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      passkeyId: isSet(object.passkeyId) ? String(object.passkeyId) : "",
      publicKeyCredential: isSet(object.publicKeyCredential)
        ? Buffer.from(bytesFromBase64(object.publicKeyCredential))
        : Buffer.alloc(0),
      passkeyName: isSet(object.passkeyName) ? String(object.passkeyName) : "",
    };
  },

  toJSON(message: VerifyPasskeyRegistrationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.passkeyId !== undefined && (obj.passkeyId = message.passkeyId);
    message.publicKeyCredential !== undefined &&
      (obj.publicKeyCredential = base64FromBytes(
        message.publicKeyCredential !== undefined ? message.publicKeyCredential : Buffer.alloc(0),
      ));
    message.passkeyName !== undefined && (obj.passkeyName = message.passkeyName);
    return obj;
  },

  create(base?: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest {
    return VerifyPasskeyRegistrationRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VerifyPasskeyRegistrationRequest>): VerifyPasskeyRegistrationRequest {
    const message = createBaseVerifyPasskeyRegistrationRequest();
    message.userId = object.userId ?? "";
    message.passkeyId = object.passkeyId ?? "";
    message.publicKeyCredential = object.publicKeyCredential ?? Buffer.alloc(0);
    message.passkeyName = object.passkeyName ?? "";
    return message;
  },
};

function createBaseVerifyPasskeyRegistrationResponse(): VerifyPasskeyRegistrationResponse {
  return { details: undefined };
}

export const VerifyPasskeyRegistrationResponse = {
  encode(message: VerifyPasskeyRegistrationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerifyPasskeyRegistrationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerifyPasskeyRegistrationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerifyPasskeyRegistrationResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: VerifyPasskeyRegistrationResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    return obj;
  },

  create(base?: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse {
    return VerifyPasskeyRegistrationResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<VerifyPasskeyRegistrationResponse>): VerifyPasskeyRegistrationResponse {
    const message = createBaseVerifyPasskeyRegistrationResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

function createBaseCreatePasskeyRegistrationLinkRequest(): CreatePasskeyRegistrationLinkRequest {
  return { userId: "", sendLink: undefined, returnCode: undefined };
}

export const CreatePasskeyRegistrationLinkRequest = {
  encode(message: CreatePasskeyRegistrationLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.sendLink !== undefined) {
      SendPasskeyRegistrationLink.encode(message.sendLink, writer.uint32(18).fork()).ldelim();
    }
    if (message.returnCode !== undefined) {
      ReturnPasskeyRegistrationCode.encode(message.returnCode, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePasskeyRegistrationLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.sendLink = SendPasskeyRegistrationLink.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.returnCode = ReturnPasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePasskeyRegistrationLinkRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      sendLink: isSet(object.sendLink) ? SendPasskeyRegistrationLink.fromJSON(object.sendLink) : undefined,
      returnCode: isSet(object.returnCode) ? ReturnPasskeyRegistrationCode.fromJSON(object.returnCode) : undefined,
    };
  },

  toJSON(message: CreatePasskeyRegistrationLinkRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.sendLink !== undefined &&
      (obj.sendLink = message.sendLink ? SendPasskeyRegistrationLink.toJSON(message.sendLink) : undefined);
    message.returnCode !== undefined &&
      (obj.returnCode = message.returnCode ? ReturnPasskeyRegistrationCode.toJSON(message.returnCode) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest {
    return CreatePasskeyRegistrationLinkRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkRequest>): CreatePasskeyRegistrationLinkRequest {
    const message = createBaseCreatePasskeyRegistrationLinkRequest();
    message.userId = object.userId ?? "";
    message.sendLink = (object.sendLink !== undefined && object.sendLink !== null)
      ? SendPasskeyRegistrationLink.fromPartial(object.sendLink)
      : undefined;
    message.returnCode = (object.returnCode !== undefined && object.returnCode !== null)
      ? ReturnPasskeyRegistrationCode.fromPartial(object.returnCode)
      : undefined;
    return message;
  },
};

function createBaseCreatePasskeyRegistrationLinkResponse(): CreatePasskeyRegistrationLinkResponse {
  return { details: undefined, code: undefined };
}

export const CreatePasskeyRegistrationLinkResponse = {
  encode(message: CreatePasskeyRegistrationLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== undefined) {
      PasskeyRegistrationCode.encode(message.code, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePasskeyRegistrationLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePasskeyRegistrationLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.code = PasskeyRegistrationCode.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreatePasskeyRegistrationLinkResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      code: isSet(object.code) ? PasskeyRegistrationCode.fromJSON(object.code) : undefined,
    };
  },

  toJSON(message: CreatePasskeyRegistrationLinkResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.code !== undefined && (obj.code = message.code ? PasskeyRegistrationCode.toJSON(message.code) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse {
    return CreatePasskeyRegistrationLinkResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreatePasskeyRegistrationLinkResponse>): CreatePasskeyRegistrationLinkResponse {
    const message = createBaseCreatePasskeyRegistrationLinkResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.code = (object.code !== undefined && object.code !== null)
      ? PasskeyRegistrationCode.fromPartial(object.code)
      : undefined;
    return message;
  },
};

function createBaseStartIdentityProviderFlowRequest(): StartIdentityProviderFlowRequest {
  return { idpId: "", successUrl: "", failureUrl: "" };
}

export const StartIdentityProviderFlowRequest = {
  encode(message: StartIdentityProviderFlowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.idpId !== "") {
      writer.uint32(10).string(message.idpId);
    }
    if (message.successUrl !== "") {
      writer.uint32(18).string(message.successUrl);
    }
    if (message.failureUrl !== "") {
      writer.uint32(26).string(message.failureUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderFlowRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartIdentityProviderFlowRequest();
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

          message.successUrl = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.failureUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartIdentityProviderFlowRequest {
    return {
      idpId: isSet(object.idpId) ? String(object.idpId) : "",
      successUrl: isSet(object.successUrl) ? String(object.successUrl) : "",
      failureUrl: isSet(object.failureUrl) ? String(object.failureUrl) : "",
    };
  },

  toJSON(message: StartIdentityProviderFlowRequest): unknown {
    const obj: any = {};
    message.idpId !== undefined && (obj.idpId = message.idpId);
    message.successUrl !== undefined && (obj.successUrl = message.successUrl);
    message.failureUrl !== undefined && (obj.failureUrl = message.failureUrl);
    return obj;
  },

  create(base?: DeepPartial<StartIdentityProviderFlowRequest>): StartIdentityProviderFlowRequest {
    return StartIdentityProviderFlowRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StartIdentityProviderFlowRequest>): StartIdentityProviderFlowRequest {
    const message = createBaseStartIdentityProviderFlowRequest();
    message.idpId = object.idpId ?? "";
    message.successUrl = object.successUrl ?? "";
    message.failureUrl = object.failureUrl ?? "";
    return message;
  },
};

function createBaseStartIdentityProviderFlowResponse(): StartIdentityProviderFlowResponse {
  return { details: undefined, authUrl: undefined };
}

export const StartIdentityProviderFlowResponse = {
  encode(message: StartIdentityProviderFlowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.authUrl !== undefined) {
      writer.uint32(18).string(message.authUrl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartIdentityProviderFlowResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartIdentityProviderFlowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.authUrl = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StartIdentityProviderFlowResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      authUrl: isSet(object.authUrl) ? String(object.authUrl) : undefined,
    };
  },

  toJSON(message: StartIdentityProviderFlowResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.authUrl !== undefined && (obj.authUrl = message.authUrl);
    return obj;
  },

  create(base?: DeepPartial<StartIdentityProviderFlowResponse>): StartIdentityProviderFlowResponse {
    return StartIdentityProviderFlowResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<StartIdentityProviderFlowResponse>): StartIdentityProviderFlowResponse {
    const message = createBaseStartIdentityProviderFlowResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.authUrl = object.authUrl ?? undefined;
    return message;
  },
};

function createBaseRetrieveIdentityProviderInformationRequest(): RetrieveIdentityProviderInformationRequest {
  return { intentId: "", token: "" };
}

export const RetrieveIdentityProviderInformationRequest = {
  encode(message: RetrieveIdentityProviderInformationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intentId !== "") {
      writer.uint32(10).string(message.intentId);
    }
    if (message.token !== "") {
      writer.uint32(18).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderInformationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetrieveIdentityProviderInformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.intentId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.token = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetrieveIdentityProviderInformationRequest {
    return {
      intentId: isSet(object.intentId) ? String(object.intentId) : "",
      token: isSet(object.token) ? String(object.token) : "",
    };
  },

  toJSON(message: RetrieveIdentityProviderInformationRequest): unknown {
    const obj: any = {};
    message.intentId !== undefined && (obj.intentId = message.intentId);
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<RetrieveIdentityProviderInformationRequest>): RetrieveIdentityProviderInformationRequest {
    return RetrieveIdentityProviderInformationRequest.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<RetrieveIdentityProviderInformationRequest>,
  ): RetrieveIdentityProviderInformationRequest {
    const message = createBaseRetrieveIdentityProviderInformationRequest();
    message.intentId = object.intentId ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseRetrieveIdentityProviderInformationResponse(): RetrieveIdentityProviderInformationResponse {
  return { details: undefined, idpInformation: undefined };
}

export const RetrieveIdentityProviderInformationResponse = {
  encode(message: RetrieveIdentityProviderInformationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    if (message.idpInformation !== undefined) {
      IDPInformation.encode(message.idpInformation, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetrieveIdentityProviderInformationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetrieveIdentityProviderInformationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idpInformation = IDPInformation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetrieveIdentityProviderInformationResponse {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      idpInformation: isSet(object.idpInformation) ? IDPInformation.fromJSON(object.idpInformation) : undefined,
    };
  },

  toJSON(message: RetrieveIdentityProviderInformationResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    message.idpInformation !== undefined &&
      (obj.idpInformation = message.idpInformation ? IDPInformation.toJSON(message.idpInformation) : undefined);
    return obj;
  },

  create(base?: DeepPartial<RetrieveIdentityProviderInformationResponse>): RetrieveIdentityProviderInformationResponse {
    return RetrieveIdentityProviderInformationResponse.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<RetrieveIdentityProviderInformationResponse>,
  ): RetrieveIdentityProviderInformationResponse {
    const message = createBaseRetrieveIdentityProviderInformationResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.idpInformation = (object.idpInformation !== undefined && object.idpInformation !== null)
      ? IDPInformation.fromPartial(object.idpInformation)
      : undefined;
    return message;
  },
};

function createBaseAddIDPLinkRequest(): AddIDPLinkRequest {
  return { userId: "", idpLink: undefined };
}

export const AddIDPLinkRequest = {
  encode(message: AddIDPLinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.idpLink !== undefined) {
      IDPLink.encode(message.idpLink, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIDPLinkRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.idpLink = IDPLink.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddIDPLinkRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      idpLink: isSet(object.idpLink) ? IDPLink.fromJSON(object.idpLink) : undefined,
    };
  },

  toJSON(message: AddIDPLinkRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.idpLink !== undefined && (obj.idpLink = message.idpLink ? IDPLink.toJSON(message.idpLink) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest {
    return AddIDPLinkRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddIDPLinkRequest>): AddIDPLinkRequest {
    const message = createBaseAddIDPLinkRequest();
    message.userId = object.userId ?? "";
    message.idpLink = (object.idpLink !== undefined && object.idpLink !== null)
      ? IDPLink.fromPartial(object.idpLink)
      : undefined;
    return message;
  },
};

function createBaseAddIDPLinkResponse(): AddIDPLinkResponse {
  return { details: undefined };
}

export const AddIDPLinkResponse = {
  encode(message: AddIDPLinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddIDPLinkResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddIDPLinkResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddIDPLinkResponse {
    return { details: isSet(object.details) ? Details.fromJSON(object.details) : undefined };
  },

  toJSON(message: AddIDPLinkResponse): unknown {
    const obj: any = {};
    message.details !== undefined && (obj.details = message.details ? Details.toJSON(message.details) : undefined);
    return obj;
  },

  create(base?: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse {
    return AddIDPLinkResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<AddIDPLinkResponse>): AddIDPLinkResponse {
    const message = createBaseAddIDPLinkResponse();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    return message;
  },
};

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "zitadel.user.v2alpha.UserService",
  methods: {
    /** Create a new human user */
    addHumanUser: {
      name: "AddHumanUser",
      requestType: AddHumanUserRequest,
      requestStream: false,
      responseType: AddHumanUserResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              248,
              1,
              18,
              21,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              32,
              40,
              72,
              117,
              109,
              97,
              110,
              41,
              26,
              209,
              1,
              67,
              114,
              101,
              97,
              116,
              101,
              47,
              105,
              109,
              112,
              111,
              114,
              116,
              32,
              97,
              32,
              110,
              101,
              119,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              116,
              121,
              112,
              101,
              32,
              104,
              117,
              109,
              97,
              110,
              46,
              32,
              84,
              104,
              101,
              32,
              110,
              101,
              119,
              108,
              121,
              32,
              99,
              114,
              101,
              97,
              116,
              101,
              100,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              108,
              108,
              32,
              103,
              101,
              116,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              105,
              102,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              97,
              100,
              100,
              114,
              101,
              115,
              115,
              32,
              105,
              115,
              32,
              110,
              111,
              116,
              32,
              109,
              97,
              114,
              107,
              101,
              100,
              32,
              97,
              115,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              32,
              97,
              110,
              100,
              32,
              121,
              111,
              117,
              32,
              100,
              105,
              100,
              32,
              110,
              111,
              116,
              32,
              114,
              101,
              113,
              117,
              101,
              115,
              116,
              32,
              116,
              104,
              101,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              116,
              111,
              32,
              98,
              101,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [
            Buffer.from([
              33,
              10,
              26,
              10,
              10,
              117,
              115,
              101,
              114,
              46,
              119,
              114,
              105,
              116,
              101,
              26,
              12,
              111,
              114,
              103,
              97,
              110,
              105,
              115,
              97,
              116,
              105,
              111,
              110,
              18,
              3,
              8,
              201,
              1,
            ]),
          ],
          578365826: [
            Buffer.from([
              25,
              58,
              1,
              42,
              34,
              20,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              104,
              117,
              109,
              97,
              110,
            ]),
          ],
        },
      },
    },
    /** Change the email of a user */
    setEmail: {
      name: "SetEmail",
      requestType: SetEmailRequest,
      requestStream: false,
      responseType: SetEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              209,
              1,
              18,
              21,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              101,
              109,
              97,
              105,
              108,
              26,
              170,
              1,
              67,
              104,
              97,
              110,
              103,
              101,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              97,
              100,
              100,
              114,
              101,
              115,
              115,
              32,
              111,
              102,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              46,
              32,
              73,
              102,
              32,
              116,
              104,
              101,
              32,
              115,
              116,
              97,
              116,
              101,
              32,
              105,
              115,
              32,
              115,
              101,
              116,
              32,
              116,
              111,
              32,
              110,
              111,
              116,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              101,
              100,
              44,
              32,
              97,
              32,
              118,
              101,
              114,
              105,
              102,
              105,
              99,
              97,
              116,
              105,
              111,
              110,
              32,
              99,
              111,
              100,
              101,
              32,
              119,
              105,
              108,
              108,
              32,
              98,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              99,
              97,
              110,
              32,
              98,
              101,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              111,
              114,
              32,
              115,
              101,
              110,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              32,
              98,
              121,
              32,
              101,
              109,
              97,
              105,
              108,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              35,
              58,
              1,
              42,
              34,
              30,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              101,
              109,
              97,
              105,
              108,
            ]),
          ],
        },
      },
    },
    /** Verify the email with the provided code */
    verifyEmail: {
      name: "VerifyEmail",
      requestType: VerifyEmailRequest,
      requestStream: false,
      responseType: VerifyEmailResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              74,
              18,
              16,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              26,
              41,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              101,
              109,
              97,
              105,
              108,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              103,
              101,
              110,
              101,
              114,
              97,
              116,
              101,
              100,
              32,
              99,
              111,
              100,
              101,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              43,
              58,
              1,
              42,
              34,
              38,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              101,
              109,
              97,
              105,
              108,
              47,
              95,
              118,
              101,
              114,
              105,
              102,
              121,
            ]),
          ],
        },
      },
    },
    registerPasskey: {
      name: "RegisterPasskey",
      requestType: RegisterPasskeyRequest,
      requestStream: false,
      responseType: RegisterPasskeyResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              218,
              1,
              18,
              44,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              156,
              1,
              83,
              116,
              97,
              114,
              116,
              32,
              116,
              104,
              101,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              102,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              44,
              32,
              97,
              115,
              32,
              97,
              32,
              114,
              101,
              115,
              112,
              111,
              110,
              115,
              101,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              32,
              99,
              114,
              101,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              112,
              116,
              105,
              111,
              110,
              115,
              32,
              97,
              114,
              101,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              44,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              97,
              114,
              101,
              32,
              117,
              115,
              101,
              100,
              32,
              116,
              111,
              32,
              118,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              38,
              58,
              1,
              42,
              34,
              33,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
            ]),
          ],
        },
      },
    },
    verifyPasskeyRegistration: {
      name: "VerifyPasskeyRegistration",
      requestType: VerifyPasskeyRegistrationRequest,
      requestStream: false,
      responseType: VerifyPasskeyRegistrationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              107,
              18,
              27,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              63,
              86,
              101,
              114,
              105,
              102,
              121,
              32,
              116,
              104,
              101,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              119,
              105,
              116,
              104,
              32,
              116,
              104,
              101,
              32,
              112,
              117,
              98,
              108,
              105,
              99,
              32,
              107,
              101,
              121,
              32,
              99,
              114,
              101,
              100,
              101,
              110,
              116,
              105,
              97,
              108,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              51,
              58,
              1,
              42,
              34,
              46,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
              47,
              123,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              95,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    createPasskeyRegistrationLink: {
      name: "CreatePasskeyRegistrationLink",
      requestType: CreatePasskeyRegistrationLinkRequest,
      requestStream: false,
      responseType: CreatePasskeyRegistrationLinkResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              163,
              1,
              18,
              45,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              108,
              105,
              110,
              107,
              32,
              102,
              111,
              114,
              32,
              97,
              32,
              117,
              115,
              101,
              114,
              26,
              101,
              67,
              114,
              101,
              97,
              116,
              101,
              32,
              97,
              32,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              108,
              105,
              110,
              107,
              32,
              119,
              104,
              105,
              99,
              104,
              32,
              105,
              110,
              99,
              108,
              117,
              100,
              101,
              115,
              32,
              97,
              32,
              99,
              111,
              100,
              101,
              32,
              97,
              110,
              100,
              32,
              101,
              105,
              116,
              104,
              101,
              114,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              32,
              105,
              116,
              32,
              111,
              114,
              32,
              115,
              101,
              110,
              100,
              32,
              105,
              116,
              32,
              116,
              111,
              32,
              116,
              104,
              101,
              32,
              117,
              115,
              101,
              114,
              46,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [
            Buffer.from([
              22,
              10,
              20,
              10,
              18,
              117,
              115,
              101,
              114,
              46,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              46,
              119,
              114,
              105,
              116,
              101,
            ]),
          ],
          578365826: [
            Buffer.from([
              56,
              58,
              1,
              42,
              34,
              51,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              112,
              97,
              115,
              115,
              107,
              101,
              121,
              115,
              47,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              95,
              108,
              105,
              110,
              107,
            ]),
          ],
        },
      },
    },
    /** Start an IDP authentication (for external login, registration or linking) */
    startIdentityProviderFlow: {
      name: "StartIdentityProviderFlow",
      requestType: StartIdentityProviderFlowRequest,
      requestStream: false,
      responseType: StartIdentityProviderFlowResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              136,
              1,
              18,
              36,
              83,
              116,
              97,
              114,
              116,
              32,
              102,
              108,
              111,
              119,
              32,
              119,
              105,
              116,
              104,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              26,
              83,
              83,
              116,
              97,
              114,
              116,
              32,
              97,
              32,
              102,
              108,
              111,
              119,
              32,
              119,
              105,
              116,
              104,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              44,
              32,
              102,
              111,
              114,
              32,
              101,
              120,
              116,
              101,
              114,
              110,
              97,
              108,
              32,
              108,
              111,
              103,
              105,
              110,
              44,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              114,
              32,
              108,
              105,
              110,
              107,
              105,
              110,
              103,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              39,
              58,
              1,
              42,
              34,
              34,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              105,
              100,
              112,
              115,
              47,
              123,
              105,
              100,
              112,
              95,
              105,
              100,
              125,
              47,
              115,
              116,
              97,
              114,
              116,
            ]),
          ],
        },
      },
    },
    retrieveIdentityProviderInformation: {
      name: "RetrieveIdentityProviderInformation",
      requestType: RetrieveIdentityProviderInformationRequest,
      requestStream: false,
      responseType: RetrieveIdentityProviderInformationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              200,
              1,
              18,
              58,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              26,
              125,
              82,
              101,
              116,
              114,
              105,
              101,
              118,
              101,
              32,
              116,
              104,
              101,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              32,
              114,
              101,
              116,
              117,
              114,
              110,
              101,
              100,
              32,
              98,
              121,
              32,
              116,
              104,
              101,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              102,
              111,
              114,
              32,
              114,
              101,
              103,
              105,
              115,
              116,
              114,
              97,
              116,
              105,
              111,
              110,
              32,
              111,
              114,
              32,
              117,
              112,
              100,
              97,
              116,
              105,
              110,
              103,
              32,
              97,
              110,
              32,
              101,
              120,
              105,
              115,
              116,
              105,
              110,
              103,
              32,
              117,
              115,
              101,
              114,
              32,
              119,
              105,
              116,
              104,
              32,
              110,
              101,
              119,
              32,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              51,
              58,
              1,
              42,
              34,
              46,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              105,
              110,
              116,
              101,
              110,
              116,
              115,
              47,
              123,
              105,
              110,
              116,
              101,
              110,
              116,
              95,
              105,
              100,
              125,
              47,
              105,
              110,
              102,
              111,
              114,
              109,
              97,
              116,
              105,
              111,
              110,
            ]),
          ],
        },
      },
    },
    /** Link an IDP to an existing user */
    addIDPLink: {
      name: "AddIDPLink",
      requestType: AddIDPLinkRequest,
      requestStream: false,
      responseType: AddIDPLinkResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              103,
              18,
              43,
              65,
              100,
              100,
              32,
              108,
              105,
              110,
              107,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              117,
              115,
              101,
              114,
              26,
              43,
              65,
              100,
              100,
              32,
              108,
              105,
              110,
              107,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              105,
              100,
              101,
              110,
              116,
              105,
              116,
              121,
              32,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              114,
              32,
              116,
              111,
              32,
              97,
              110,
              32,
              117,
              115,
              101,
              114,
              74,
              11,
              10,
              3,
              50,
              48,
              48,
              18,
              4,
              10,
              2,
              79,
              75,
            ]),
          ],
          400010: [Buffer.from([17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 100])],
          578365826: [
            Buffer.from([
              41,
              58,
              1,
              42,
              34,
              36,
              47,
              118,
              50,
              97,
              108,
              112,
              104,
              97,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              123,
              117,
              115,
              101,
              114,
              95,
              105,
              100,
              125,
              47,
              108,
              105,
              110,
              107,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  /** Create a new human user */
  addHumanUser(
    request: AddHumanUserRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddHumanUserResponse>>;
  /** Change the email of a user */
  setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
  /** Verify the email with the provided code */
  verifyEmail(
    request: VerifyEmailRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyEmailResponse>>;
  registerPasskey(
    request: RegisterPasskeyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RegisterPasskeyResponse>>;
  verifyPasskeyRegistration(
    request: VerifyPasskeyRegistrationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
  createPasskeyRegistrationLink(
    request: CreatePasskeyRegistrationLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
  /** Start an IDP authentication (for external login, registration or linking) */
  startIdentityProviderFlow(
    request: StartIdentityProviderFlowRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<StartIdentityProviderFlowResponse>>;
  retrieveIdentityProviderInformation(
    request: RetrieveIdentityProviderInformationRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<RetrieveIdentityProviderInformationResponse>>;
  /** Link an IDP to an existing user */
  addIDPLink(
    request: AddIDPLinkRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<AddIDPLinkResponse>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  /** Create a new human user */
  addHumanUser(
    request: DeepPartial<AddHumanUserRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddHumanUserResponse>;
  /** Change the email of a user */
  setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
  /** Verify the email with the provided code */
  verifyEmail(
    request: DeepPartial<VerifyEmailRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyEmailResponse>;
  registerPasskey(
    request: DeepPartial<RegisterPasskeyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RegisterPasskeyResponse>;
  verifyPasskeyRegistration(
    request: DeepPartial<VerifyPasskeyRegistrationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<VerifyPasskeyRegistrationResponse>;
  createPasskeyRegistrationLink(
    request: DeepPartial<CreatePasskeyRegistrationLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreatePasskeyRegistrationLinkResponse>;
  /** Start an IDP authentication (for external login, registration or linking) */
  startIdentityProviderFlow(
    request: DeepPartial<StartIdentityProviderFlowRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<StartIdentityProviderFlowResponse>;
  retrieveIdentityProviderInformation(
    request: DeepPartial<RetrieveIdentityProviderInformationRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<RetrieveIdentityProviderInformationResponse>;
  /** Link an IDP to an existing user */
  addIDPLink(
    request: DeepPartial<AddIDPLinkRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<AddIDPLinkResponse>;
}

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
