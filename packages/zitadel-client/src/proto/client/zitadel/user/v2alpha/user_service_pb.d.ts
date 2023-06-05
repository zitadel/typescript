import * as jspb from 'google-protobuf'

import * as zitadel_object_v2alpha_object_pb from '../../../zitadel/object/v2alpha/object_pb';
import * as zitadel_protoc_gen_zitadel_v2_options_pb from '../../../zitadel/protoc_gen_zitadel/v2/options_pb';
import * as zitadel_user_v2alpha_auth_pb from '../../../zitadel/user/v2alpha/auth_pb';
import * as zitadel_user_v2alpha_email_pb from '../../../zitadel/user/v2alpha/email_pb';
import * as zitadel_user_v2alpha_idp_pb from '../../../zitadel/user/v2alpha/idp_pb';
import * as zitadel_user_v2alpha_password_pb from '../../../zitadel/user/v2alpha/password_pb';
import * as zitadel_user_v2alpha_user_pb from '../../../zitadel/user/v2alpha/user_pb';
import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as protoc$gen$openapiv2_options_annotations_pb from '../../../protoc-gen-openapiv2/options/annotations_pb';
import * as validate_validate_pb from '../../../validate/validate_pb';


export class AddHumanUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AddHumanUserRequest;
  hasUserId(): boolean;
  clearUserId(): AddHumanUserRequest;

  getUsername(): string;
  setUsername(value: string): AddHumanUserRequest;
  hasUsername(): boolean;
  clearUsername(): AddHumanUserRequest;

  getOrganisation(): zitadel_object_v2alpha_object_pb.Organisation | undefined;
  setOrganisation(value?: zitadel_object_v2alpha_object_pb.Organisation): AddHumanUserRequest;
  hasOrganisation(): boolean;
  clearOrganisation(): AddHumanUserRequest;

  getProfile(): zitadel_user_v2alpha_user_pb.SetHumanProfile | undefined;
  setProfile(value?: zitadel_user_v2alpha_user_pb.SetHumanProfile): AddHumanUserRequest;
  hasProfile(): boolean;
  clearProfile(): AddHumanUserRequest;

  getEmail(): zitadel_user_v2alpha_email_pb.SetHumanEmail | undefined;
  setEmail(value?: zitadel_user_v2alpha_email_pb.SetHumanEmail): AddHumanUserRequest;
  hasEmail(): boolean;
  clearEmail(): AddHumanUserRequest;

  getMetadataList(): Array<zitadel_user_v2alpha_user_pb.SetMetadataEntry>;
  setMetadataList(value: Array<zitadel_user_v2alpha_user_pb.SetMetadataEntry>): AddHumanUserRequest;
  clearMetadataList(): AddHumanUserRequest;
  addMetadata(value?: zitadel_user_v2alpha_user_pb.SetMetadataEntry, index?: number): zitadel_user_v2alpha_user_pb.SetMetadataEntry;

  getPassword(): zitadel_user_v2alpha_password_pb.Password | undefined;
  setPassword(value?: zitadel_user_v2alpha_password_pb.Password): AddHumanUserRequest;
  hasPassword(): boolean;
  clearPassword(): AddHumanUserRequest;

  getHashedPassword(): zitadel_user_v2alpha_password_pb.HashedPassword | undefined;
  setHashedPassword(value?: zitadel_user_v2alpha_password_pb.HashedPassword): AddHumanUserRequest;
  hasHashedPassword(): boolean;
  clearHashedPassword(): AddHumanUserRequest;

  getIdpLinksList(): Array<zitadel_user_v2alpha_idp_pb.IDPLink>;
  setIdpLinksList(value: Array<zitadel_user_v2alpha_idp_pb.IDPLink>): AddHumanUserRequest;
  clearIdpLinksList(): AddHumanUserRequest;
  addIdpLinks(value?: zitadel_user_v2alpha_idp_pb.IDPLink, index?: number): zitadel_user_v2alpha_idp_pb.IDPLink;

  getPasswordTypeCase(): AddHumanUserRequest.PasswordTypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHumanUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddHumanUserRequest): AddHumanUserRequest.AsObject;
  static serializeBinaryToWriter(message: AddHumanUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHumanUserRequest;
  static deserializeBinaryFromReader(message: AddHumanUserRequest, reader: jspb.BinaryReader): AddHumanUserRequest;
}

export namespace AddHumanUserRequest {
  export type AsObject = {
    userId?: string,
    username?: string,
    organisation?: zitadel_object_v2alpha_object_pb.Organisation.AsObject,
    profile?: zitadel_user_v2alpha_user_pb.SetHumanProfile.AsObject,
    email?: zitadel_user_v2alpha_email_pb.SetHumanEmail.AsObject,
    metadataList: Array<zitadel_user_v2alpha_user_pb.SetMetadataEntry.AsObject>,
    password?: zitadel_user_v2alpha_password_pb.Password.AsObject,
    hashedPassword?: zitadel_user_v2alpha_password_pb.HashedPassword.AsObject,
    idpLinksList: Array<zitadel_user_v2alpha_idp_pb.IDPLink.AsObject>,
  }

  export enum PasswordTypeCase { 
    PASSWORD_TYPE_NOT_SET = 0,
    PASSWORD = 7,
    HASHED_PASSWORD = 8,
  }

  export enum UserIdCase { 
    _USER_ID_NOT_SET = 0,
    USER_ID = 1,
  }

  export enum UsernameCase { 
    _USERNAME_NOT_SET = 0,
    USERNAME = 2,
  }
}

export class AddHumanUserResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AddHumanUserResponse;

  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): AddHumanUserResponse;
  hasDetails(): boolean;
  clearDetails(): AddHumanUserResponse;

  getEmailCode(): string;
  setEmailCode(value: string): AddHumanUserResponse;
  hasEmailCode(): boolean;
  clearEmailCode(): AddHumanUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHumanUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddHumanUserResponse): AddHumanUserResponse.AsObject;
  static serializeBinaryToWriter(message: AddHumanUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHumanUserResponse;
  static deserializeBinaryFromReader(message: AddHumanUserResponse, reader: jspb.BinaryReader): AddHumanUserResponse;
}

export namespace AddHumanUserResponse {
  export type AsObject = {
    userId: string,
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    emailCode?: string,
  }

  export enum EmailCodeCase { 
    _EMAIL_CODE_NOT_SET = 0,
    EMAIL_CODE = 3,
  }
}

export class SetEmailRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): SetEmailRequest;

  getEmail(): string;
  setEmail(value: string): SetEmailRequest;

  getSendCode(): zitadel_user_v2alpha_email_pb.SendEmailVerificationCode | undefined;
  setSendCode(value?: zitadel_user_v2alpha_email_pb.SendEmailVerificationCode): SetEmailRequest;
  hasSendCode(): boolean;
  clearSendCode(): SetEmailRequest;

  getReturnCode(): zitadel_user_v2alpha_email_pb.ReturnEmailVerificationCode | undefined;
  setReturnCode(value?: zitadel_user_v2alpha_email_pb.ReturnEmailVerificationCode): SetEmailRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): SetEmailRequest;

  getIsVerified(): boolean;
  setIsVerified(value: boolean): SetEmailRequest;

  getVerificationCase(): SetEmailRequest.VerificationCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetEmailRequest): SetEmailRequest.AsObject;
  static serializeBinaryToWriter(message: SetEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetEmailRequest;
  static deserializeBinaryFromReader(message: SetEmailRequest, reader: jspb.BinaryReader): SetEmailRequest;
}

export namespace SetEmailRequest {
  export type AsObject = {
    userId: string,
    email: string,
    sendCode?: zitadel_user_v2alpha_email_pb.SendEmailVerificationCode.AsObject,
    returnCode?: zitadel_user_v2alpha_email_pb.ReturnEmailVerificationCode.AsObject,
    isVerified: boolean,
  }

  export enum VerificationCase { 
    VERIFICATION_NOT_SET = 0,
    SEND_CODE = 3,
    RETURN_CODE = 4,
    IS_VERIFIED = 5,
  }
}

export class SetEmailResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): SetEmailResponse;
  hasDetails(): boolean;
  clearDetails(): SetEmailResponse;

  getVerificationCode(): string;
  setVerificationCode(value: string): SetEmailResponse;
  hasVerificationCode(): boolean;
  clearVerificationCode(): SetEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetEmailResponse): SetEmailResponse.AsObject;
  static serializeBinaryToWriter(message: SetEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetEmailResponse;
  static deserializeBinaryFromReader(message: SetEmailResponse, reader: jspb.BinaryReader): SetEmailResponse;
}

export namespace SetEmailResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    verificationCode?: string,
  }

  export enum VerificationCodeCase { 
    _VERIFICATION_CODE_NOT_SET = 0,
    VERIFICATION_CODE = 2,
  }
}

export class VerifyEmailRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): VerifyEmailRequest;

  getVerificationCode(): string;
  setVerificationCode(value: string): VerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    userId: string,
    verificationCode: string,
  }
}

export class VerifyEmailResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): VerifyEmailResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
  static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
  }
}

export class RegisterPasskeyRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): RegisterPasskeyRequest;

  getCode(): zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode | undefined;
  setCode(value?: zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode): RegisterPasskeyRequest;
  hasCode(): boolean;
  clearCode(): RegisterPasskeyRequest;

  getAuthenticator(): zitadel_user_v2alpha_auth_pb.PasskeyAuthenticator;
  setAuthenticator(value: zitadel_user_v2alpha_auth_pb.PasskeyAuthenticator): RegisterPasskeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterPasskeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterPasskeyRequest): RegisterPasskeyRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterPasskeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterPasskeyRequest;
  static deserializeBinaryFromReader(message: RegisterPasskeyRequest, reader: jspb.BinaryReader): RegisterPasskeyRequest;
}

export namespace RegisterPasskeyRequest {
  export type AsObject = {
    userId: string,
    code?: zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode.AsObject,
    authenticator: zitadel_user_v2alpha_auth_pb.PasskeyAuthenticator,
  }

  export enum CodeCase { 
    _CODE_NOT_SET = 0,
    CODE = 2,
  }
}

export class RegisterPasskeyResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): RegisterPasskeyResponse;
  hasDetails(): boolean;
  clearDetails(): RegisterPasskeyResponse;

  getPasskeyId(): string;
  setPasskeyId(value: string): RegisterPasskeyResponse;

  getPublicKeyCredentialCreationOptions(): Uint8Array | string;
  getPublicKeyCredentialCreationOptions_asU8(): Uint8Array;
  getPublicKeyCredentialCreationOptions_asB64(): string;
  setPublicKeyCredentialCreationOptions(value: Uint8Array | string): RegisterPasskeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterPasskeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterPasskeyResponse): RegisterPasskeyResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterPasskeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterPasskeyResponse;
  static deserializeBinaryFromReader(message: RegisterPasskeyResponse, reader: jspb.BinaryReader): RegisterPasskeyResponse;
}

export namespace RegisterPasskeyResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    passkeyId: string,
    publicKeyCredentialCreationOptions: Uint8Array | string,
  }
}

export class VerifyPasskeyRegistrationRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): VerifyPasskeyRegistrationRequest;

  getPasskeyId(): string;
  setPasskeyId(value: string): VerifyPasskeyRegistrationRequest;

  getPublicKeyCredential(): Uint8Array | string;
  getPublicKeyCredential_asU8(): Uint8Array;
  getPublicKeyCredential_asB64(): string;
  setPublicKeyCredential(value: Uint8Array | string): VerifyPasskeyRegistrationRequest;

  getPasskeyName(): string;
  setPasskeyName(value: string): VerifyPasskeyRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPasskeyRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPasskeyRegistrationRequest): VerifyPasskeyRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyPasskeyRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPasskeyRegistrationRequest;
  static deserializeBinaryFromReader(message: VerifyPasskeyRegistrationRequest, reader: jspb.BinaryReader): VerifyPasskeyRegistrationRequest;
}

export namespace VerifyPasskeyRegistrationRequest {
  export type AsObject = {
    userId: string,
    passkeyId: string,
    publicKeyCredential: Uint8Array | string,
    passkeyName: string,
  }
}

export class VerifyPasskeyRegistrationResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): VerifyPasskeyRegistrationResponse;
  hasDetails(): boolean;
  clearDetails(): VerifyPasskeyRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyPasskeyRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyPasskeyRegistrationResponse): VerifyPasskeyRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyPasskeyRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyPasskeyRegistrationResponse;
  static deserializeBinaryFromReader(message: VerifyPasskeyRegistrationResponse, reader: jspb.BinaryReader): VerifyPasskeyRegistrationResponse;
}

export namespace VerifyPasskeyRegistrationResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
  }
}

export class CreatePasskeyRegistrationLinkRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): CreatePasskeyRegistrationLinkRequest;

  getSendLink(): zitadel_user_v2alpha_auth_pb.SendPasskeyRegistrationLink | undefined;
  setSendLink(value?: zitadel_user_v2alpha_auth_pb.SendPasskeyRegistrationLink): CreatePasskeyRegistrationLinkRequest;
  hasSendLink(): boolean;
  clearSendLink(): CreatePasskeyRegistrationLinkRequest;

  getReturnCode(): zitadel_user_v2alpha_auth_pb.ReturnPasskeyRegistrationCode | undefined;
  setReturnCode(value?: zitadel_user_v2alpha_auth_pb.ReturnPasskeyRegistrationCode): CreatePasskeyRegistrationLinkRequest;
  hasReturnCode(): boolean;
  clearReturnCode(): CreatePasskeyRegistrationLinkRequest;

  getMediumCase(): CreatePasskeyRegistrationLinkRequest.MediumCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasskeyRegistrationLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasskeyRegistrationLinkRequest): CreatePasskeyRegistrationLinkRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePasskeyRegistrationLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasskeyRegistrationLinkRequest;
  static deserializeBinaryFromReader(message: CreatePasskeyRegistrationLinkRequest, reader: jspb.BinaryReader): CreatePasskeyRegistrationLinkRequest;
}

export namespace CreatePasskeyRegistrationLinkRequest {
  export type AsObject = {
    userId: string,
    sendLink?: zitadel_user_v2alpha_auth_pb.SendPasskeyRegistrationLink.AsObject,
    returnCode?: zitadel_user_v2alpha_auth_pb.ReturnPasskeyRegistrationCode.AsObject,
  }

  export enum MediumCase { 
    MEDIUM_NOT_SET = 0,
    SEND_LINK = 2,
    RETURN_CODE = 3,
  }
}

export class CreatePasskeyRegistrationLinkResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): CreatePasskeyRegistrationLinkResponse;
  hasDetails(): boolean;
  clearDetails(): CreatePasskeyRegistrationLinkResponse;

  getCode(): zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode | undefined;
  setCode(value?: zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode): CreatePasskeyRegistrationLinkResponse;
  hasCode(): boolean;
  clearCode(): CreatePasskeyRegistrationLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePasskeyRegistrationLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePasskeyRegistrationLinkResponse): CreatePasskeyRegistrationLinkResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePasskeyRegistrationLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePasskeyRegistrationLinkResponse;
  static deserializeBinaryFromReader(message: CreatePasskeyRegistrationLinkResponse, reader: jspb.BinaryReader): CreatePasskeyRegistrationLinkResponse;
}

export namespace CreatePasskeyRegistrationLinkResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    code?: zitadel_user_v2alpha_auth_pb.PasskeyRegistrationCode.AsObject,
  }

  export enum CodeCase { 
    _CODE_NOT_SET = 0,
    CODE = 2,
  }
}

export class StartIdentityProviderFlowRequest extends jspb.Message {
  getIdpId(): string;
  setIdpId(value: string): StartIdentityProviderFlowRequest;

  getSuccessUrl(): string;
  setSuccessUrl(value: string): StartIdentityProviderFlowRequest;

  getFailureUrl(): string;
  setFailureUrl(value: string): StartIdentityProviderFlowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIdentityProviderFlowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StartIdentityProviderFlowRequest): StartIdentityProviderFlowRequest.AsObject;
  static serializeBinaryToWriter(message: StartIdentityProviderFlowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIdentityProviderFlowRequest;
  static deserializeBinaryFromReader(message: StartIdentityProviderFlowRequest, reader: jspb.BinaryReader): StartIdentityProviderFlowRequest;
}

export namespace StartIdentityProviderFlowRequest {
  export type AsObject = {
    idpId: string,
    successUrl: string,
    failureUrl: string,
  }
}

export class StartIdentityProviderFlowResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): StartIdentityProviderFlowResponse;
  hasDetails(): boolean;
  clearDetails(): StartIdentityProviderFlowResponse;

  getAuthUrl(): string;
  setAuthUrl(value: string): StartIdentityProviderFlowResponse;

  getNextStepCase(): StartIdentityProviderFlowResponse.NextStepCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StartIdentityProviderFlowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StartIdentityProviderFlowResponse): StartIdentityProviderFlowResponse.AsObject;
  static serializeBinaryToWriter(message: StartIdentityProviderFlowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StartIdentityProviderFlowResponse;
  static deserializeBinaryFromReader(message: StartIdentityProviderFlowResponse, reader: jspb.BinaryReader): StartIdentityProviderFlowResponse;
}

export namespace StartIdentityProviderFlowResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    authUrl: string,
  }

  export enum NextStepCase { 
    NEXT_STEP_NOT_SET = 0,
    AUTH_URL = 2,
  }
}

export class RetrieveIdentityProviderInformationRequest extends jspb.Message {
  getIntentId(): string;
  setIntentId(value: string): RetrieveIdentityProviderInformationRequest;

  getToken(): string;
  setToken(value: string): RetrieveIdentityProviderInformationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveIdentityProviderInformationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveIdentityProviderInformationRequest): RetrieveIdentityProviderInformationRequest.AsObject;
  static serializeBinaryToWriter(message: RetrieveIdentityProviderInformationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveIdentityProviderInformationRequest;
  static deserializeBinaryFromReader(message: RetrieveIdentityProviderInformationRequest, reader: jspb.BinaryReader): RetrieveIdentityProviderInformationRequest;
}

export namespace RetrieveIdentityProviderInformationRequest {
  export type AsObject = {
    intentId: string,
    token: string,
  }
}

export class RetrieveIdentityProviderInformationResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): RetrieveIdentityProviderInformationResponse;
  hasDetails(): boolean;
  clearDetails(): RetrieveIdentityProviderInformationResponse;

  getIdpInformation(): zitadel_user_v2alpha_idp_pb.IDPInformation | undefined;
  setIdpInformation(value?: zitadel_user_v2alpha_idp_pb.IDPInformation): RetrieveIdentityProviderInformationResponse;
  hasIdpInformation(): boolean;
  clearIdpInformation(): RetrieveIdentityProviderInformationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetrieveIdentityProviderInformationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetrieveIdentityProviderInformationResponse): RetrieveIdentityProviderInformationResponse.AsObject;
  static serializeBinaryToWriter(message: RetrieveIdentityProviderInformationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetrieveIdentityProviderInformationResponse;
  static deserializeBinaryFromReader(message: RetrieveIdentityProviderInformationResponse, reader: jspb.BinaryReader): RetrieveIdentityProviderInformationResponse;
}

export namespace RetrieveIdentityProviderInformationResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
    idpInformation?: zitadel_user_v2alpha_idp_pb.IDPInformation.AsObject,
  }
}

export class AddIDPLinkRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): AddIDPLinkRequest;

  getIdpLink(): zitadel_user_v2alpha_idp_pb.IDPLink | undefined;
  setIdpLink(value?: zitadel_user_v2alpha_idp_pb.IDPLink): AddIDPLinkRequest;
  hasIdpLink(): boolean;
  clearIdpLink(): AddIDPLinkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIDPLinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddIDPLinkRequest): AddIDPLinkRequest.AsObject;
  static serializeBinaryToWriter(message: AddIDPLinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIDPLinkRequest;
  static deserializeBinaryFromReader(message: AddIDPLinkRequest, reader: jspb.BinaryReader): AddIDPLinkRequest;
}

export namespace AddIDPLinkRequest {
  export type AsObject = {
    userId: string,
    idpLink?: zitadel_user_v2alpha_idp_pb.IDPLink.AsObject,
  }
}

export class AddIDPLinkResponse extends jspb.Message {
  getDetails(): zitadel_object_v2alpha_object_pb.Details | undefined;
  setDetails(value?: zitadel_object_v2alpha_object_pb.Details): AddIDPLinkResponse;
  hasDetails(): boolean;
  clearDetails(): AddIDPLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddIDPLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddIDPLinkResponse): AddIDPLinkResponse.AsObject;
  static serializeBinaryToWriter(message: AddIDPLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddIDPLinkResponse;
  static deserializeBinaryFromReader(message: AddIDPLinkResponse, reader: jspb.BinaryReader): AddIDPLinkResponse;
}

export namespace AddIDPLinkResponse {
  export type AsObject = {
    details?: zitadel_object_v2alpha_object_pb.Details.AsObject,
  }
}

