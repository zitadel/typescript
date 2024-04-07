// @generated by protoc-gen-es v1.8.0
// @generated from file zitadel/feature/v2beta/user.proto (package zitadel.feature.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Details } from "../../object/v2beta/object_pb.js";

/**
 * @generated from message zitadel.feature.v2beta.SetUserFeatureRequest
 */
export const SetUserFeatureRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.SetUserFeatureRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.SetUserFeaturesResponse
 */
export const SetUserFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.SetUserFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.ResetUserFeaturesRequest
 */
export const ResetUserFeaturesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.ResetUserFeaturesRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.ResetUserFeaturesResponse
 */
export const ResetUserFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.ResetUserFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.GetUserFeaturesRequest
 */
export const GetUserFeaturesRequest = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.GetUserFeaturesRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "inheritance", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message zitadel.feature.v2beta.GetUserFeaturesResponse
 */
export const GetUserFeaturesResponse = /*@__PURE__*/ proto3.makeMessageType(
  "zitadel.feature.v2beta.GetUserFeaturesResponse",
  () => [
    { no: 1, name: "details", kind: "message", T: Details },
  ],
);

