[**talawa-api**](../../../../README.md)

***

# Function: signRefreshToken()

> **signRefreshToken**(`userId`, `jti`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/services/auth/tokens.ts#L121)

Signs a refresh JWT for a user with a unique token id.

## Parameters

### userId

`string`

User id (sub claim).

### jti

`string`

Unique token id (e.g. for revocation).

## Returns

`Promise`\<`string`\>

Signed JWT string.
