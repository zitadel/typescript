import { ProviderSlug } from "@/lib/demos";
import {
  createUser,
  getBrandingSettings,
  retrieveIDPIntent,
  userService,
} from "@/lib/zitadel";
import Alert, { AlertType } from "@/ui/Alert";
import DynamicTheme from "@/ui/DynamicTheme";
import IdpSignin from "@/ui/IdpSignin";
import { AddHumanUserRequest } from "@zitadel/proto/zitadel/user/v2/user_service_pb";
import { IDPInformation, IDPLink } from "@zitadel/proto/zitadel/user/v2/idp_pb";
import { PartialMessage } from "@zitadel/client";
import { headers } from "next/headers";

export const PROVIDER_MAPPING: {
  [provider: string]: (
    rI: IDPInformation,
  ) => PartialMessage<AddHumanUserRequest>;
} = {
  [ProviderSlug.GOOGLE]: (idp: IDPInformation) => {
    const rawInfo = idp.rawInformation?.toJson() as {
      User: {
        email: string;
        name?: string;
        given_name?: string;
        family_name?: string;
      };
    };

    const idpLink: PartialMessage<IDPLink> = {
      idpId: idp.idpId,
      userId: idp.userId,
      userName: idp.userName,
    };

    const req: PartialMessage<AddHumanUserRequest> = {
      username: idp.userName,
      email: {
        email: rawInfo.User?.email,
        verification: { case: "isVerified", value: true },
      },
      // organisation: Organisation | undefined;
      profile: {
        displayName: rawInfo.User?.name ?? "",
        givenName: rawInfo.User?.given_name ?? "",
        familyName: rawInfo.User?.family_name ?? "",
      },
      idpLinks: [idpLink],
    };
    return req;
  },
  [ProviderSlug.AZURE]: (idp: IDPInformation) => {
    const rawInfo = idp.rawInformation?.toJson() as {
      mail: string;
      displayName?: string;
      givenName?: string;
      surname?: string;
    };

    const idpLink: PartialMessage<IDPLink> = {
      idpId: idp.idpId,
      userId: idp.userId,
      userName: idp.userName,
    };

    const req: PartialMessage<AddHumanUserRequest> = {
      username: idp.userName,
      email: {
        email: rawInfo?.mail,
        verification: { case: "isVerified", value: true },
      },
      // organisation: Organisation | undefined;
      profile: {
        displayName: rawInfo?.displayName ?? "",
        givenName: rawInfo?.givenName ?? "",
        familyName: rawInfo?.surname ?? "",
      },
      idpLinks: [idpLink],
    };
    return req;
  },
  [ProviderSlug.GITHUB]: (idp: IDPInformation) => {
    const rawInfo = idp.rawInformation?.toJson() as {
      email: string;
      name: string;
    };
    const idpLink: PartialMessage<IDPLink> = {
      idpId: idp.idpId,
      userId: idp.userId,
      userName: idp.userName,
    };
    const req: PartialMessage<AddHumanUserRequest> = {
      username: idp.userName,
      email: {
        email: rawInfo?.email,
        verification: { case: "isVerified", value: true },
      },
      // organisation: Organisation | undefined;
      profile: {
        displayName: rawInfo?.name ?? "",
        givenName: rawInfo?.name ?? "",
        familyName: rawInfo?.name ?? "",
      },
      idpLinks: [idpLink],
    };
    return req;
  },
};

export default async function Page({
  searchParams,
  params,
}: {
  searchParams: Record<string | number | symbol, string | undefined>;
  params: { provider: ProviderSlug };
}) {
  const host = headers().get("X-Forwarded-Host");
  if (!host) {
    throw new Error("No host header found!");
  }

  const { id, token, authRequestId, organization } = searchParams;
  const { provider } = params;

  const branding = await getBrandingSettings(host, organization);

  if (provider && id && token) {
    return retrieveIDPIntent(host, id, token)
      .then((resp: any) => {
        const { idpInformation, userId } = resp;

        if (idpInformation) {
          // handle login
          if (userId) {
            return (
              <DynamicTheme branding={branding}>
                <div className="flex flex-col items-center space-y-4">
                  <h1>Login successful</h1>
                  <div>You have successfully been loggedIn!</div>

                  <IdpSignin
                    userId={userId}
                    idpIntent={{ idpIntentId: id, idpIntentToken: token }}
                    authRequestId={authRequestId}
                  />
                </div>
              </DynamicTheme>
            );
          } else {
            // handle register
            return createUser(host, provider, idpInformation)
              .then((userId: string) => {
                return (
                  <DynamicTheme branding={branding}>
                    <div className="flex flex-col items-center space-y-4">
                      <h1>Register successful</h1>
                      <div>You have successfully been registered!</div>
                    </div>
                  </DynamicTheme>
                );
              })
              .catch((error) => {
                return (
                  <DynamicTheme branding={branding}>
                    <div className="flex flex-col items-center space-y-4">
                      <h1>Register failed</h1>
                      <div className="w-full">
                        {
                          <Alert type={AlertType.ALERT}>
                            {JSON.stringify(error.message)}
                          </Alert>
                        }
                      </div>
                    </div>
                  </DynamicTheme>
                );
              });
          }
        } else {
          throw new Error("Could not get user information.");
        }
      })
      .catch((error: any) => {
        return (
          <DynamicTheme branding={branding}>
            <div className="flex flex-col items-center space-y-4">
              <h1>An error occurred</h1>
              <div className="w-full">
                {
                  <Alert type={AlertType.ALERT}>
                    {JSON.stringify(error.message)}
                  </Alert>
                }
              </div>
            </div>
          </DynamicTheme>
        );
      });
  } else {
    return (
      <DynamicTheme branding={branding}>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <h1>Register</h1>
            <p className="ztdl-p">No id and token received!</p>
          </div>
        </div>
      </DynamicTheme>
    );
  }
}
