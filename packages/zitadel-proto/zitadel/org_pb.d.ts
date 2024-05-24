// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/org.proto (package zitadel.org.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { ObjectDetails, TextQueryMethod } from "./object_pb.js";

/**
 * @generated from enum zitadel.org.v1.OrgState
 */
export declare enum OrgState {
  /**
   * @generated from enum value: ORG_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORG_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: ORG_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,

  /**
   * @generated from enum value: ORG_STATE_REMOVED = 3;
   */
  REMOVED = 3,
}

/**
 * @generated from enum zitadel.org.v1.DomainValidationType
 */
export declare enum DomainValidationType {
  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_HTTP = 1;
   */
  HTTP = 1,

  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_DNS = 2;
   */
  DNS = 2,
}

/**
 * @generated from enum zitadel.org.v1.OrgFieldName
 */
export declare enum OrgFieldName {
  /**
   * @generated from enum value: ORG_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORG_FIELD_NAME_NAME = 1;
   */
  NAME = 1,
}

/**
 * @generated from message zitadel.org.v1.Org
 */
export declare class Org extends Message<Org> {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: zitadel.org.v1.OrgState state = 3;
   */
  state: OrgState;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string primary_domain = 5;
   */
  primaryDomain: string;

  constructor(data?: PartialMessage<Org>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.Org";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Org;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Org;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Org;

  static equals(a: Org | PlainMessage<Org> | undefined, b: Org | PlainMessage<Org> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.Domain
 */
export declare class Domain extends Message<Domain> {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string domain_name = 3;
   */
  domainName: string;

  /**
   * @generated from field: bool is_verified = 4;
   */
  isVerified: boolean;

  /**
   * @generated from field: bool is_primary = 5;
   */
  isPrimary: boolean;

  /**
   * @generated from field: zitadel.org.v1.DomainValidationType validation_type = 6;
   */
  validationType: DomainValidationType;

  constructor(data?: PartialMessage<Domain>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.Domain";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Domain;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Domain;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Domain;

  static equals(a: Domain | PlainMessage<Domain> | undefined, b: Domain | PlainMessage<Domain> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.OrgQuery
 */
export declare class OrgQuery extends Message<OrgQuery> {
  /**
   * @generated from oneof zitadel.org.v1.OrgQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.org.v1.OrgNameQuery name_query = 1;
     */
    value: OrgNameQuery;
    case: "nameQuery";
  } | {
    /**
     * @generated from field: zitadel.org.v1.OrgDomainQuery domain_query = 2;
     */
    value: OrgDomainQuery;
    case: "domainQuery";
  } | {
    /**
     * @generated from field: zitadel.org.v1.OrgStateQuery state_query = 3;
     */
    value: OrgStateQuery;
    case: "stateQuery";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<OrgQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.OrgQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgQuery;

  static equals(a: OrgQuery | PlainMessage<OrgQuery> | undefined, b: OrgQuery | PlainMessage<OrgQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.OrgNameQuery
 */
export declare class OrgNameQuery extends Message<OrgNameQuery> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<OrgNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.OrgNameQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgNameQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgNameQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgNameQuery;

  static equals(a: OrgNameQuery | PlainMessage<OrgNameQuery> | undefined, b: OrgNameQuery | PlainMessage<OrgNameQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.OrgDomainQuery
 */
export declare class OrgDomainQuery extends Message<OrgDomainQuery> {
  /**
   * @generated from field: string domain = 1;
   */
  domain: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<OrgDomainQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.OrgDomainQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgDomainQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgDomainQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgDomainQuery;

  static equals(a: OrgDomainQuery | PlainMessage<OrgDomainQuery> | undefined, b: OrgDomainQuery | PlainMessage<OrgDomainQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.OrgStateQuery
 */
export declare class OrgStateQuery extends Message<OrgStateQuery> {
  /**
   * @generated from field: zitadel.org.v1.OrgState state = 1;
   */
  state: OrgState;

  constructor(data?: PartialMessage<OrgStateQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.OrgStateQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrgStateQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrgStateQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrgStateQuery;

  static equals(a: OrgStateQuery | PlainMessage<OrgStateQuery> | undefined, b: OrgStateQuery | PlainMessage<OrgStateQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.DomainSearchQuery
 */
export declare class DomainSearchQuery extends Message<DomainSearchQuery> {
  /**
   * @generated from oneof zitadel.org.v1.DomainSearchQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.org.v1.DomainNameQuery domain_name_query = 1;
     */
    value: DomainNameQuery;
    case: "domainNameQuery";
  } | { case: undefined; value?: undefined };

  constructor(data?: PartialMessage<DomainSearchQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.DomainSearchQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainSearchQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainSearchQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainSearchQuery;

  static equals(a: DomainSearchQuery | PlainMessage<DomainSearchQuery> | undefined, b: DomainSearchQuery | PlainMessage<DomainSearchQuery> | undefined): boolean;
}

/**
 * @generated from message zitadel.org.v1.DomainNameQuery
 */
export declare class DomainNameQuery extends Message<DomainNameQuery> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;

  constructor(data?: PartialMessage<DomainNameQuery>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "zitadel.org.v1.DomainNameQuery";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DomainNameQuery;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DomainNameQuery;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DomainNameQuery;

  static equals(a: DomainNameQuery | PlainMessage<DomainNameQuery> | undefined, b: DomainNameQuery | PlainMessage<DomainNameQuery> | undefined): boolean;
}

