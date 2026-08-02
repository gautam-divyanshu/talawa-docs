[**talawa-api**](../../../../README.md)

***

# Function: signAccessToken()

> **signAccessToken**(`user`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:98](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/services/auth/tokens.ts#L98)

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
