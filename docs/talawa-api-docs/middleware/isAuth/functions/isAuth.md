[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/isAuth](../README.md) / isAuth

# Function: isAuth()

\> **isAuth**(`request`): [`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

Defined in: [src/middleware/isAuth.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/middleware/isAuth.ts#L18)

This function determines whether the user is authorised and whether the access token has expired.

## Parameters

### request

`Request`

User Request object from Express.

## Returns

[`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

Returns `authData` object with `isAuth`, `expired` and `userId` properties.
