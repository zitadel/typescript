// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/object/v2beta/object.proto (package zitadel.object.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.object.v2beta.TextQueryMethod
 */
export const TextQueryMethod = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.object.v2beta.TextQueryMethod",
  [
    {no: 0, name: "TEXT_QUERY_METHOD_EQUALS", localName: "EQUALS"},
    {no: 1, name: "TEXT_QUERY_METHOD_EQUALS_IGNORE_CASE", localName: "EQUALS_IGNORE_CASE"},
    {no: 2, name: "TEXT_QUERY_METHOD_STARTS_WITH", localName: "STARTS_WITH"},
    {no: 3, name: "TEXT_QUERY_METHOD_STARTS_WITH_IGNORE_CASE", localName: "STARTS_WITH_IGNORE_CASE"},
    {no: 4, name: "TEXT_QUERY_METHOD_CONTAINS", localName: "CONTAINS"},
    {no: 5, name: "TEXT_QUERY_METHOD_CONTAINS_IGNORE_CASE", localName: "CONTAINS_IGNORE_CASE"},
    {no: 6, name: "TEXT_QUERY_METHOD_ENDS_WITH", localName: "ENDS_WITH"},
    {no: 7, name: "TEXT_QUERY_METHOD_ENDS_WITH_IGNORE_CASE", localName: "ENDS_WITH_IGNORE_CASE"},
  ],
);

/**
 * @generated from enum zitadel.object.v2beta.ListQueryMethod
 */
export const ListQueryMethod = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.object.v2beta.ListQueryMethod",
  [
    {no: 0, name: "LIST_QUERY_METHOD_IN", localName: "IN"},
  ],
);

/**
 * @generated from enum zitadel.object.v2beta.TimestampQueryMethod
 */
export const TimestampQueryMethod = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.object.v2beta.TimestampQueryMethod",
  [
    {no: 0, name: "TIMESTAMP_QUERY_METHOD_EQUALS", localName: "EQUALS"},
    {no: 1, name: "TIMESTAMP_QUERY_METHOD_GREATER", localName: "GREATER"},
    {no: 2, name: "TIMESTAMP_QUERY_METHOD_GREATER_OR_EQUALS", localName: "GREATER_OR_EQUALS"},
    {no: 3, name: "TIMESTAMP_QUERY_METHOD_LESS", localName: "LESS"},
    {no: 4, name: "TIMESTAMP_QUERY_METHOD_LESS_OR_EQUALS", localName: "LESS_OR_EQUALS"},
  ],
);

/**
 * Deprecated: use Organization
 *
 * @generated from message zitadel.object.v2beta.Organisation
 */
export const Organisation = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.Organisation",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
    { no: 2, name: "org_domain", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
  ],
);

/**
 * @generated from message zitadel.object.v2beta.Organization
 */
export const Organization = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.Organization",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
    { no: 2, name: "org_domain", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "org" },
  ],
);

/**
 * @generated from message zitadel.object.v2beta.RequestContext
 */
export const RequestContext = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.RequestContext",
  () => [
    { no: 1, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "resource_owner" },
    { no: 2, name: "instance", kind: "scalar", T: 8 /* ScalarType.BOOL */, oneof: "resource_owner" },
  ],
);

/**
 * @generated from message zitadel.object.v2beta.ListQuery
 */
export const ListQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.ListQuery",
  () => [
    { no: 1, name: "offset", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "asc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.object.v2beta.Details
 */
export const Details = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.Details",
  () => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "change_date", kind: "message", T: Timestamp },
    { no: 3, name: "resource_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.object.v2beta.ListDetails
 */
export const ListDetails = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.object.v2beta.ListDetails",
  () => [
    { no: 1, name: "total_result", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "processed_sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
  ],
);

