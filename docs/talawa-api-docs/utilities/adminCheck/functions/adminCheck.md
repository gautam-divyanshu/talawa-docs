[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/adminCheck](../README.md) / adminCheck

# Function: adminCheck()

\> **adminCheck**(`userId`, `organization`, `throwError`): `Promise`\<`boolean`\>

Defined in: [src/utilities/adminCheck.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/adminCheck.ts#L18)

Checks if the current user is an admin of the organization.
If the user is an admin, the function completes successfully. Otherwise, it throws an UnauthorizedError.

## Parameters

### userId

The ID of the current user. It can be a string or a Types.ObjectId.

`string` | `ObjectId`

### organization

[`InterfaceOrganization`](../../../models/Organization/interfaces/InterfaceOrganization.md)

The organization data of `InterfaceOrganization` type.

### throwError

`boolean` = `true`

A boolean value to determine if the function should throw an error. Default is `true`.

## Returns

`Promise`\<`boolean`\>

`True` or `False`.

## Remarks

This is a utility method.
