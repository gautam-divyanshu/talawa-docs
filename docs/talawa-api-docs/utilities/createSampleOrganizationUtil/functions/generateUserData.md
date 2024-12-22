[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/createSampleOrganizationUtil](../README.md) / generateUserData

# Function: generateUserData()

\> **generateUserData**(`organizationId`, `userType`): `Promise`\<\{ `appUserProfile`: `Document`\<`unknown`, \{\}, [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)\> & [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md) & `Required`\<\{ `_id`: `ObjectId`; \}\>; `user`: `Document`\<`unknown`, \{\}, [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)\> & [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md) & `Required`\<\{ `_id`: `ObjectId`; \}\>; \}\>

Generates user data for a given organization and user type.

## Parameters

### organizationId

`string`

The ID of the organization the user belongs to

### userType

`string`

The type of the user ('ADMIN' or 'USER')

## Returns

`Promise`\<\{ `appUserProfile`: `Document`\<`unknown`, \{\}, [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)\> & [`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md) & `Required`\<\{ `_id`: `ObjectId`; \}\>; `user`: `Document`\<`unknown`, \{\}, [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)\> & [`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md) & `Required`\<\{ `_id`: `ObjectId`; \}\>; \}\>

A promise that resolves to an object containing the created user and their application profile

## Defined in

[src/utilities/createSampleOrganizationUtil.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/createSampleOrganizationUtil.ts#L24)
