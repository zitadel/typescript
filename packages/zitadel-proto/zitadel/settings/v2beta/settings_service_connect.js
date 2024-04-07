// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/settings/v2beta/settings_service.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetActiveIdentityProvidersRequest, GetActiveIdentityProvidersResponse, GetBrandingSettingsRequest, GetBrandingSettingsResponse, GetDomainSettingsRequest, GetDomainSettingsResponse, GetGeneralSettingsRequest, GetGeneralSettingsResponse, GetLegalAndSupportSettingsRequest, GetLegalAndSupportSettingsResponse, GetLockoutSettingsRequest, GetLockoutSettingsResponse, GetLoginSettingsRequest, GetLoginSettingsResponse, GetPasswordComplexitySettingsRequest, GetPasswordComplexitySettingsResponse, GetSecuritySettingsRequest, GetSecuritySettingsResponse, SetSecuritySettingsRequest, SetSecuritySettingsResponse } from "./settings_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.settings.v2beta.SettingsService
 */
export const SettingsService = {
  typeName: "zitadel.settings.v2beta.SettingsService",
  methods: {
    /**
     * Get basic information over the instance
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetGeneralSettings
     */
    getGeneralSettings: {
      name: "GetGeneralSettings",
      I: GetGeneralSettingsRequest,
      O: GetGeneralSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the login settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLoginSettings
     */
    getLoginSettings: {
      name: "GetLoginSettings",
      I: GetLoginSettingsRequest,
      O: GetLoginSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the current active identity providers
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetActiveIdentityProviders
     */
    getActiveIdentityProviders: {
      name: "GetActiveIdentityProviders",
      I: GetActiveIdentityProvidersRequest,
      O: GetActiveIdentityProvidersResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the password complexity settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetPasswordComplexitySettings
     */
    getPasswordComplexitySettings: {
      name: "GetPasswordComplexitySettings",
      I: GetPasswordComplexitySettingsRequest,
      O: GetPasswordComplexitySettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the current active branding settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetBrandingSettings
     */
    getBrandingSettings: {
      name: "GetBrandingSettings",
      I: GetBrandingSettingsRequest,
      O: GetBrandingSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the domain settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetDomainSettings
     */
    getDomainSettings: {
      name: "GetDomainSettings",
      I: GetDomainSettingsRequest,
      O: GetDomainSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the legal and support settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLegalAndSupportSettings
     */
    getLegalAndSupportSettings: {
      name: "GetLegalAndSupportSettings",
      I: GetLegalAndSupportSettingsRequest,
      O: GetLegalAndSupportSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the lockout settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLockoutSettings
     */
    getLockoutSettings: {
      name: "GetLockoutSettings",
      I: GetLockoutSettingsRequest,
      O: GetLockoutSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Get the security settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetSecuritySettings
     */
    getSecuritySettings: {
      name: "GetSecuritySettings",
      I: GetSecuritySettingsRequest,
      O: GetSecuritySettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Set the security settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.SetSecuritySettings
     */
    setSecuritySettings: {
      name: "SetSecuritySettings",
      I: SetSecuritySettingsRequest,
      O: SetSecuritySettingsResponse,
      kind: MethodKind.Unary,
    },
  }
};

