[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / createAccessToken

# Function: createAccessToken()

\> **createAccessToken**(`user`, `appUserProfile`): `Promise`\<`string`\>

Defined in: [src/utilities/auth.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/auth.ts#L25)

Creates an access token (JWT) for a user that expires in 40 minutes.
The token contains user data and is signed with the access token secret.

## Parameters

### user

[`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)

User data

### appUserProfile

[`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)

Application user profile data

## Returns

`Promise`\<`string`\>

JSON Web Token string payload
