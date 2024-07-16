// @generated by protoc-gen-es v1.9.0
// @generated from file zitadel/action.proto (package zitadel.action.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3 } from "@bufbuild/protobuf";
import { ObjectDetails, TextQueryMethod } from "./object_pb.js";
import { LocalizedMessage } from "./message_pb.js";

/**
 * @generated from enum zitadel.action.v1.ActionState
 */
export const ActionState = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.action.v1.ActionState",
  [
    {no: 0, name: "ACTION_STATE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ACTION_STATE_INACTIVE", localName: "INACTIVE"},
    {no: 2, name: "ACTION_STATE_ACTIVE", localName: "ACTIVE"},
  ],
);

/**
 * @generated from enum zitadel.action.v1.ActionFieldName
 */
export const ActionFieldName = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.action.v1.ActionFieldName",
  [
    {no: 0, name: "ACTION_FIELD_NAME_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "ACTION_FIELD_NAME_NAME", localName: "NAME"},
    {no: 2, name: "ACTION_FIELD_NAME_ID", localName: "ID"},
    {no: 3, name: "ACTION_FIELD_NAME_STATE", localName: "STATE"},
  ],
);

/**
 * @generated from enum zitadel.action.v1.FlowState
 */
export const FlowState = /*@__PURE__*/ proto3.makeEnum(
  "zitadel.action.v1.FlowState",
  [
    {no: 0, name: "FLOW_STATE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "FLOW_STATE_INACTIVE", localName: "INACTIVE"},
    {no: 2, name: "FLOW_STATE_ACTIVE", localName: "ACTIVE"},
  ],
);

/**
 * @generated from message zitadel.action.v1.Action
 */
export const Action = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.Action",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "details", kind: "message", T: ObjectDetails },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(ActionState) },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "script", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "timeout", kind: "message", T: Duration },
    { no: 7, name: "allowed_to_fail", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.action.v1.ActionIDQuery
 */
export const ActionIDQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.ActionIDQuery",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.action.v1.ActionNameQuery
 */
export const ActionNameQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.ActionNameQuery",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "method", kind: "enum", T: proto3.getEnumType(TextQueryMethod) },
  ],
);

/**
 * ActionStateQuery always equals
 *
 * @generated from message zitadel.action.v1.ActionStateQuery
 */
export const ActionStateQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.ActionStateQuery",
  () => [
    { no: 1, name: "state", kind: "enum", T: proto3.getEnumType(ActionState) },
  ],
);

/**
 * @generated from message zitadel.action.v1.Flow
 */
export const Flow = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.Flow",
  () => [
    { no: 1, name: "type", kind: "message", T: FlowType },
    { no: 2, name: "details", kind: "message", T: ObjectDetails },
    { no: 3, name: "state", kind: "enum", T: proto3.getEnumType(FlowState) },
    { no: 4, name: "trigger_actions", kind: "message", T: TriggerAction, repeated: true },
  ],
);

/**
 * @generated from message zitadel.action.v1.FlowType
 */
export const FlowType = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.FlowType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "message", T: LocalizedMessage },
  ],
);

/**
 * @generated from message zitadel.action.v1.TriggerType
 */
export const TriggerType = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.TriggerType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "message", T: LocalizedMessage },
  ],
);

/**
 * @generated from message zitadel.action.v1.TriggerAction
 */
export const TriggerAction = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.action.v1.TriggerAction",
  () => [
    { no: 1, name: "trigger_type", kind: "message", T: TriggerType },
    { no: 2, name: "actions", kind: "message", T: Action, repeated: true },
  ],
);
