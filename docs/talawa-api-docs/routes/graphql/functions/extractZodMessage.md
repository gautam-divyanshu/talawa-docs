[**talawa-api**](../../../README.md)

***

# Function: extractZodMessage()

> **extractZodMessage**(`normalizedDetails`, `error`, `fallbackMessage`): `string`

Defined in: [src/routes/graphql.ts:284](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/routes/graphql.ts#L284)

Helper to extract meaningful messages from Zod error details.
Encapsulates logic for parsing JSON/treeified details and handling specific validation messages like UUID errors.

## Parameters

### normalizedDetails

`unknown`

### error

`unknown`

### fallbackMessage

`string`

## Returns

`string`
