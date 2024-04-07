// @generated by protoc-gen-connect-es v1.4.0
// @generated from file zitadel/settings/v2beta/settings_service.proto (package zitadel.settings.v2beta, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetActiveIdentityProvidersRequest, GetActiveIdentityProvidersResponse, GetBrandingSettingsRequest, GetBrandingSettingsResponse, GetDomainSettingsRequest, GetDomainSettingsResponse, GetGeneralSettingsRequest, GetGeneralSettingsResponse, GetLegalAndSupportSettingsRequest, GetLegalAndSupportSettingsResponse, GetLockoutSettingsRequest, GetLockoutSettingsResponse, GetLoginSettingsRequest, GetLoginSettingsResponse, GetPasswordComplexitySettingsRequest, GetPasswordComplexitySettingsResponse, GetSecuritySettingsRequest, GetSecuritySettingsResponse, SetSecuritySettingsRequest, SetSecuritySettingsResponse } from "./settings_service_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service zitadel.settings.v2beta.SettingsService
 */
export declare const SettingsService: {
  readonly typeName: "zitadel.settings.v2beta.SettingsService",
  readonly methods: {
    /**
     * Get basic information over the instance
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetGeneralSettings
     */
    readonly getGeneralSettings: {
      readonly name: "GetGeneralSettings",
      readonly I: typeof GetGeneralSettingsRequest,
      readonly O: typeof GetGeneralSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the login settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLoginSettings
     */
    readonly getLoginSettings: {
      readonly name: "GetLoginSettings",
      readonly I: typeof GetLoginSettingsRequest,
      readonly O: typeof GetLoginSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the current active identity providers
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetActiveIdentityProviders
     */
    readonly getActiveIdentityProviders: {
      readonly name: "GetActiveIdentityProviders",
      readonly I: typeof GetActiveIdentityProvidersRequest,
      readonly O: typeof GetActiveIdentityProvidersResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the password complexity settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetPasswordComplexitySettings
     */
    readonly getPasswordComplexitySettings: {
      readonly name: "GetPasswordComplexitySettings",
      readonly I: typeof GetPasswordComplexitySettingsRequest,
      readonly O: typeof GetPasswordComplexitySettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the current active branding settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetBrandingSettings
     */
    readonly getBrandingSettings: {
      readonly name: "GetBrandingSettings",
      readonly I: typeof GetBrandingSettingsRequest,
      readonly O: typeof GetBrandingSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the domain settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetDomainSettings
     */
    readonly getDomainSettings: {
      readonly name: "GetDomainSettings",
      readonly I: typeof GetDomainSettingsRequest,
      readonly O: typeof GetDomainSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the legal and support settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLegalAndSupportSettings
     */
    readonly getLegalAndSupportSettings: {
      readonly name: "GetLegalAndSupportSettings",
      readonly I: typeof GetLegalAndSupportSettingsRequest,
      readonly O: typeof GetLegalAndSupportSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the lockout settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetLockoutSettings
     */
    readonly getLockoutSettings: {
      readonly name: "GetLockoutSettings",
      readonly I: typeof GetLockoutSettingsRequest,
      readonly O: typeof GetLockoutSettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Get the security settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.GetSecuritySettings
     */
    readonly getSecuritySettings: {
      readonly name: "GetSecuritySettings",
      readonly I: typeof GetSecuritySettingsRequest,
      readonly O: typeof GetSecuritySettingsResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * Set the security settings
     *
     * @generated from rpc zitadel.settings.v2beta.SettingsService.SetSecuritySettings
     */
    readonly setSecuritySettings: {
      readonly name: "SetSecuritySettings",
      readonly I: typeof SetSecuritySettingsRequest,
      readonly O: typeof SetSecuritySettingsResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

