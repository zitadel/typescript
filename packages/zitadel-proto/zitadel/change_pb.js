// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/change.proto (package zitadel.change.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { LocalizedMessage } from "./message_pb.js";

/**
 * @generated from message zitadel.change.v1.Change
 */
export const Change = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.change.v1.Change",
  () => [
    { no: 1, name: "change_date", kind: "message", T: Timestamp },
    { no: 2, name: "event_type", kind: "message", T: LocalizedMessage },
    { no: 3, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "editor_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "editor_display_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "resource_owner_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "editor_preferred_login_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "editor_avatar_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.change.v1.ChangeQuery
 */
export const ChangeQuery = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.change.v1.ChangeQuery",
  () => [
    { no: 1, name: "sequence", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "asc", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

