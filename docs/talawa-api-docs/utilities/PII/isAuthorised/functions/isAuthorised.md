[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/PII/isAuthorised](../README.md) / isAuthorised

# Function: isAuthorised()

\> **isAuthorised**(`requestingUser`, `requestedUser`): `boolean`

Checks if the requesting user is authorized to access or modify the requested user's data.

## Parameters

### requestingUser

[`User`](../../../../types/generatedGraphQLTypes/type-aliases/User.md)

The user making the request.

### requestedUser

[`User`](../../../../types/generatedGraphQLTypes/type-aliases/User.md)

The user whose data is being requested or modified.

## Returns

`boolean`

`true` if the requesting user is authorized, `false` otherwise.

## Defined in

[src/utilities/PII/isAuthorised.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/PII/isAuthorised.ts#L9)
