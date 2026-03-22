[**talawa-api**](../../../../README.md)

***

# Function: signRefreshToken()

> **signRefreshToken**(`userId`, `jti`): `Promise`\<`string`\>

Defined in: [src/services/auth/tokens.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/auth/tokens.ts#L121)

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
