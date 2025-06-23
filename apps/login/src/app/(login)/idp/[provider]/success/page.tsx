import { DynamicTheme } from "@/components/dynamic-theme";
import { IdpSignin } from "@/components/idp-signin";
import { completeIDP } from "@/components/idps/pages/complete-idp";
import { linkingFailed } from "@/components/idps/pages/linking-failed";
import { linkingSuccess } from "@/components/idps/pages/linking-success";
import { loginFailed } from "@/components/idps/pages/login-failed";
import { loginSuccess } from "@/components/idps/pages/login-success";
import { getServiceUrlFromHeaders } from "@/lib/service-url";
import {
  addHuman,
  addIDPLink,
  getBrandingSettings,
  getDefaultOrg,
  getIDPByID,
  getLoginSettings,
  getOrgsByDomain,
  listUsers,
  retrieveIDPIntent,
  updateHuman,
} from "@/lib/zitadel";
import { ConnectError, create } from "@zitadel/client";
import { AutoLinkingOption } from "@zitadel/proto/zitadel/idp/v2/idp_pb";
import { OrganizationSchema } from "@zitadel/proto/zitadel/object/v2/object_pb";
import { Organization } from "@zitadel/proto/zitadel/org/v2/org_pb";
import { IDPInformation } from "@zitadel/proto/zitadel/user/v2/idp_pb";
import {
  AddHumanUserRequest,
  AddHumanUserRequestSchema,
  UpdateHumanUserRequestSchema,
} from "@zitadel/proto/zitadel/user/v2/user_service_pb";
import { getLocale, getTranslations } from "next-intl/server";
import { headers } from "next/headers";

const ORG_SUFFIX_REGEX = /(?<=@)(.+)/;

/**
 * A type representing the user data structure commonly found in the `rawInformation`
 * from an OIDC provider like Google.
 */
interface RawIdpUser {
  sub: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  email_verified?: boolean;
}

/**
 * Maps the raw information from an Identity Provider (IdP) to a well-formed
 * ZITADEL AddHumanUserRequest object.
 * 
 * This function provides robust fallbacks for missing profile data to ensure
 * the resulting object is always valid for the ZITADEL API.
 *
 * @param idpInformation - The IDPInformation object received from the ZITADEL intent.
 * @returns A valid AddHumanUserRequest object, or null if essential information (like email) is missing.
 */
export function mapIdpUserToAddHumanUserRequest(
  idpInformation: IDPInformation,
): AddHumanUserRequest | undefined {
  // Use a type guard for safety, though we expect `User` to be there.
  const rawUser = (idpInformation.rawInformation as any)?.User as RawIdpUser | undefined;

  // CRITICAL CHECK: We cannot create a user without a valid email.
  if (!rawUser?.email) {
    console.error("IDP did not provide user email in rawInformation. Cannot construct user request.");
    return undefined;
  }
  
  // Construct the profile with safe fallbacks.
  const profile = {
    givenName: rawUser.given_name || rawUser.name || rawUser.email.split('@')[0],
    familyName: rawUser.family_name || ' ', // A space is a safe, non-empty value.
    displayName: rawUser.name,
    preferredLanguage: 'en', // Set a sensible default.
  };

  // Construct the email object.
  const email = {
    email: rawUser.email,
    verification: {
      case: 'isVerified' as const, // Use 'as const' for strict typing
      value: rawUser.email_verified === true,
    },
  };

  // Construct the IDP link.
  const idpLinks = [{
    idpId: idpInformation.idpId,
    userId: idpInformation.userId, // This is the user's ID *at the IDP*, not in Zitadel yet.
    userName: idpInformation.userName,
  }];
  
  // Use the official `create` function from protobuf to build the final, valid object.
  const addHumanUser = create(AddHumanUserRequestSchema, {
    profile,
    email,
    idpLinks,
  });

  return addHumanUser;
}
async function resolveOrganizationForUser({
  organization,
  addHumanUser,
  serviceUrl,
}: {
  organization?: string;
  addHumanUser?: { username?: string };
  serviceUrl: string;
}): Promise<string | undefined> {
  if (organization) return organization;

  if (addHumanUser?.username && ORG_SUFFIX_REGEX.test(addHumanUser.username)) {
    const matched = ORG_SUFFIX_REGEX.exec(addHumanUser.username);
    const suffix = matched?.[1] ?? "";

    const orgs = await getOrgsByDomain({
      serviceUrl,
      domain: suffix,
    });
    const orgToCheckForDiscovery =
      orgs.result && orgs.result.length === 1 ? orgs.result[0].id : undefined;

    if (orgToCheckForDiscovery) {
      const orgLoginSettings = await getLoginSettings({
        serviceUrl,
        organization: orgToCheckForDiscovery,
      });
      if (orgLoginSettings?.allowDomainDiscovery) {
        return orgToCheckForDiscovery;
      }
    }
  }
  return undefined;
}

export default async function Page(props: {
  searchParams: Promise<Record<string | number | symbol, string | undefined>>;
  params: Promise<{ provider: string }>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const locale = getLocale();
  const t = await getTranslations({ locale, namespace: "idp" });
  let { id, token, requestId, organization, link } = searchParams;
  const { provider } = params;

  const _headers = await headers();
  const { serviceUrl } = getServiceUrlFromHeaders(_headers);

  let branding = await getBrandingSettings({
    serviceUrl,
    organization,
  });

  if (!organization) {
    const org: Organization | null = await getDefaultOrg({
      serviceUrl,
    });
    if (org) {
      organization = org.id;
    }
  }

  if (!provider || !id || !token) {
    return loginFailed(branding, "IDP context missing");
  }

  const intent = await retrieveIDPIntent({
    serviceUrl,
    id,
    token,
  });

  const { idpInformation, userId } = intent;

  if (!idpInformation) {
    return loginFailed(branding, "IDP information missing");
  }
  const addHumanUser = mapIdpUserToAddHumanUserRequest(idpInformation);

  const idp = await getIDPByID({
    serviceUrl,
    id: idpInformation.idpId,
  });

  const options = idp?.config?.options;

  if (!idp) {
    throw new Error("IDP not found");
  }

  // sign in user. If user should be linked continue
  if (userId && !link) {
    // if auto update is enabled, we will update the user with the new information
    if (options?.isAutoUpdate && addHumanUser) {
      try {
        await updateHuman({
          serviceUrl,
          request: create(UpdateHumanUserRequestSchema, {
            userId: userId,
            profile: addHumanUser.profile,
            email: addHumanUser.email,
            phone: addHumanUser.phone,
          }),
        });
      } catch (error: unknown) {
        // Log the error and continue with the login process
        console.warn("An error occurred while updating the user:", error);
      }
    }

    return loginSuccess(
      userId,
      { idpIntentId: id, idpIntentToken: token },
      requestId,
      branding,
    );
  }

  if (link) {
    if (!options?.isLinkingAllowed) {
      // linking was probably disallowed since the invitation was created
      return linkingFailed(branding, "Linking is no longer allowed");
    }

    let idpLink;
    try {
      idpLink = await addIDPLink({
        serviceUrl,
        idp: {
          id: idpInformation.idpId,
          userId: idpInformation.userId,
          userName: idpInformation.userName,
        },
        userId,
      });
    } catch (error) {
      console.error(error);
      return linkingFailed(branding);
    }

    if (!idpLink) {
      return linkingFailed(branding);
    } else {
      return linkingSuccess(
        userId,
        { idpIntentId: id, idpIntentToken: token },
        requestId,
        branding,
      );
    }
  }

  // search for potential user via username, then link
  if (options?.autoLinking) {
    let foundUser;
    const email = addHumanUser?.email?.email;

    if (options.autoLinking === AutoLinkingOption.EMAIL && email) {
      foundUser = await listUsers({ serviceUrl, email }).then((response) => {
        return response.result ? response.result[0] : null;
      });
    } else if (options.autoLinking === AutoLinkingOption.USERNAME) {
      foundUser = await listUsers(
        options.autoLinking === AutoLinkingOption.USERNAME
          ? { serviceUrl, userName: idpInformation.userName }
          : { serviceUrl, email },
      ).then((response) => {
        return response.result ? response.result[0] : null;
      });
    } else {
      foundUser = await listUsers({
        serviceUrl,
        userName: idpInformation.userName,
        email,
      }).then((response) => {
        return response.result ? response.result[0] : null;
      });
    }

    if (foundUser) {
      let idpLink;
      try {
        idpLink = await addIDPLink({
          serviceUrl,
          idp: {
            id: idpInformation.idpId,
            userId: idpInformation.userId,
            userName: idpInformation.userName,
          },
          userId: foundUser.userId,
        });
      } catch (error) {
        console.error(error);
        return linkingFailed(branding);
      }

      if (!idpLink) {
        return linkingFailed(branding);
      } else {
        return linkingSuccess(
          foundUser.userId,
          { idpIntentId: id, idpIntentToken: token },
          requestId,
          branding,
        );
      }
    }
  }



  let newUser;
  // automatic creation of a user is allowed and data is complete
  if (options?.isAutoCreation && addHumanUser) {
    const orgToRegisterOn = await resolveOrganizationForUser({
      organization,
      addHumanUser,
      serviceUrl,
    });

    let addHumanUserWithOrganization: AddHumanUserRequest;
    if (orgToRegisterOn) {
      const organizationSchema = create(OrganizationSchema, {
        org: { case: "orgId", value: orgToRegisterOn },
      });

      addHumanUserWithOrganization = create(AddHumanUserRequestSchema, {
        ...addHumanUser,
        organization: organizationSchema,
      });
    } else {
      addHumanUserWithOrganization = create(
        AddHumanUserRequestSchema,
        addHumanUser,
      );
    }

    try {
      newUser = await addHuman({
        serviceUrl,
        request: addHumanUserWithOrganization,
      });
    } catch (error: unknown) {
      console.error(
        "An error occurred while creating the user:",
        error,
        addHumanUser,
      );
      return loginFailed(
        branding,
        (error as ConnectError).message
          ? (error as ConnectError).message
          : "Could not create user",
      );
    }
  } else if (options?.isCreationAllowed) {
    // if no user was found, we will create a new user manually / redirect to the registration page
    const orgToRegisterOn = await resolveOrganizationForUser({
      organization,
      addHumanUser,
      serviceUrl,
    });

    if (orgToRegisterOn) {
      branding = await getBrandingSettings({
        serviceUrl,
        organization: orgToRegisterOn,
      });
    }

    if (!orgToRegisterOn) {
      return loginFailed(branding, "No organization found for registration");
    }

    return completeIDP({
      branding,
      idpIntent: { idpIntentId: id, idpIntentToken: token },
      addHumanUser,
      organization: orgToRegisterOn,
      requestId,
      idpUserId: idpInformation?.userId,
      idpId: idpInformation?.idpId,
      idpUserName: idpInformation?.userName,
    });
  }

  if (newUser) {
    return (
      <DynamicTheme branding={branding}>
        <div className="flex flex-col items-center space-y-4">
          <h1>{t("registerSuccess.title")}</h1>
          <p className="ztdl-p">{t("registerSuccess.description")}</p>
          <IdpSignin
            userId={newUser.userId}
            idpIntent={{ idpIntentId: id, idpIntentToken: token }}
            requestId={requestId}
          />
        </div>
      </DynamicTheme>
    );
  }

  // return login failed if no linking or creation is allowed and no user was found
  return loginFailed(branding, "No user found");
}



