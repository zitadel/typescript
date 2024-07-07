// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/milestone/v1/milestone.proto (package zitadel.milestone.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum zitadel.milestone.v1.MilestoneType
 */
export const MilestoneType = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.milestone.v1.MilestoneType",
  [
    {no: 0, name: "MILESTONE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MILESTONE_TYPE_INSTANCE_CREATED", localName: "INSTANCE_CREATED"},
    {no: 2, name: "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_INSTANCE", localName: "AUTHENTICATION_SUCCEEDED_ON_INSTANCE"},
    {no: 3, name: "MILESTONE_TYPE_PROJECT_CREATED", localName: "PROJECT_CREATED"},
    {no: 4, name: "MILESTONE_TYPE_APPLICATION_CREATED", localName: "APPLICATION_CREATED"},
    {no: 5, name: "MILESTONE_TYPE_AUTHENTICATION_SUCCEEDED_ON_APPLICATION", localName: "AUTHENTICATION_SUCCEEDED_ON_APPLICATION"},
    {no: 6, name: "MILESTONE_TYPE_INSTANCE_DELETED", localName: "INSTANCE_DELETED"},
  ],
);

/**
 * @generated from enum zitadel.milestone.v1.MilestoneFieldName
 */
export const MilestoneFieldName = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.milestone.v1.MilestoneFieldName",
  [
    {no: 0, name: "MILESTONE_FIELD_NAME_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "MILESTONE_FIELD_NAME_TYPE", localName: "TYPE"},
    {no: 2, name: "MILESTONE_FIELD_NAME_REACHED_DATE", localName: "REACHED_DATE"},
  ],
);

/**
 * @generated from message zitadel.milestone.v1.Milestone
 */
export const Milestone = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.milestone.v1.Milestone",
  () => [
    { no: 2, name: "type", kind: "enum", T: proto3.getEnumType(MilestoneType) },
    { no: 3, name: "reached_date", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message zitadel.milestone.v1.MilestoneQuery
 */
export const MilestoneQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.milestone.v1.MilestoneQuery",
  () => [
    { no: 1, name: "is_reached_query", kind: "message", T: IsReachedQuery, oneof: "query" },
  ],
);

/**
 * @generated from message zitadel.milestone.v1.IsReachedQuery
 */
export const IsReachedQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.milestone.v1.IsReachedQuery",
  () => [
    { no: 1, name: "reached", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);
