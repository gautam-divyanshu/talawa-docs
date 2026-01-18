[**talawa-api**](../../../../../README.md)

***

# Class: TokenExchangeError

Defined in: [src/utilities/auth/oauth/errors.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/auth/oauth/errors.ts#L30)

Error thrown when token exchange fails

## Extends

- [`OAuthError`](OAuthError.md)

## Constructors

### Constructor

> **new TokenExchangeError**(`message`, `details?`): `TokenExchangeError`

Defined in: [src/utilities/auth/oauth/errors.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/auth/oauth/errors.ts#L31)

#### Parameters

##### message

`string` = `"Token exchange failed"`

##### details?

`string`

#### Returns

`TokenExchangeError`

#### Overrides

[`OAuthError`](OAuthError.md).[`constructor`](OAuthError.md#constructor)

## Properties

### code

> **code**: `string`

Defined in: [src/utilities/auth/oauth/errors.ts:7](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/auth/oauth/errors.ts#L7)

#### Inherited from

[`OAuthError`](OAuthError.md).[`code`](OAuthError.md#code)

***

### statusCode?

> `optional` **statusCode**: `number`

Defined in: [src/utilities/auth/oauth/errors.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/auth/oauth/errors.ts#L8)

#### Inherited from

[`OAuthError`](OAuthError.md).[`statusCode`](OAuthError.md#statuscode)
