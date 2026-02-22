[**talawa-api**](../../../../../README.md)

***

# Class: OAuthError

Defined in: [src/utilities/auth/oauth/errors.ts:4](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/auth/oauth/errors.ts#L4)

Base error class for OAuth-related errors

## Extends

- `Error`

## Extended by

- [`InvalidAuthorizationCodeError`](InvalidAuthorizationCodeError.md)
- [`TokenExchangeError`](TokenExchangeError.md)
- [`ProfileFetchError`](ProfileFetchError.md)

## Constructors

### Constructor

> **new OAuthError**(`message`, `code`, `statusCode?`): `OAuthError`

Defined in: [src/utilities/auth/oauth/errors.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/auth/oauth/errors.ts#L5)

#### Parameters

##### message

`string`

##### code

`string`

##### statusCode?

`number`

#### Returns

`OAuthError`

#### Overrides

`Error.constructor`

## Properties

### code

> **code**: `string`

Defined in: [src/utilities/auth/oauth/errors.ts:7](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/auth/oauth/errors.ts#L7)

***

### statusCode?

> `optional` **statusCode**: `number`

Defined in: [src/utilities/auth/oauth/errors.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/auth/oauth/errors.ts#L8)
