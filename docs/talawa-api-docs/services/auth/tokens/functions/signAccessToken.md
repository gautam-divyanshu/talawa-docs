[**talawa-api**](../../../../README.md)

***

# Function: signAccessToken()

> **signAccessToken**(`user`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:98](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/services/auth/tokens.ts#L98)

Signs an access JWT for a user.

## Parameters

### user

Object with id and email.

#### email

`string`

#### id

`string`

## Returns

`Promise`\<`string`\>

Signed JWT string.
