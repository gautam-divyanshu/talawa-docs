[**talawa-api**](../../../../README.md)

***

# Type Alias: RefreshClaims

> **RefreshClaims** = `JWTPayload` & `object`

Defined in: [src/services/auth/tokens.ts:86](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/services/auth/tokens.ts#L86)

Payload shape for refresh tokens. Extends jose JWTPayload so callers see iss, iat, exp, jti.

## Type Declaration

### jti

> **jti**: `string`

### sub

> **sub**: `string`

### typ

> **typ**: `"refresh"`

### ver

> **ver**: `1`
