[**talawa-api**](../../../README.md)

***

# Function: extractZodMessage()

> **extractZodMessage**(`normalizedDetails`, `error`, `fallbackMessage`): `string`

Defined in: [src/routes/graphql.ts:301](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/routes/graphql.ts#L301)

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
