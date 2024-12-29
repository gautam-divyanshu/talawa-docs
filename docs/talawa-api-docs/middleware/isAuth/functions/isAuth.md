[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/isAuth](../README.md) / isAuth

# Function: isAuth()

\> **isAuth**(`request`): [`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

This function determines whether the user is authorised and whether the access token has expired.

## Parameters

### request

`Request`

User Request object from Express.

## Returns

[`InterfaceAuthData`](../interfaces/InterfaceAuthData.md)

Returns `authData` object with `isAuth`, `expired` and `userId` properties.

## Defined in

[src/middleware/isAuth.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/middleware/isAuth.ts#L18)
