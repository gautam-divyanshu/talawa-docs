[**talawa-api**](../../../README.md)

***

# Function: extractZodMessage()

> **extractZodMessage**(`normalizedDetails`, `error`, `fallbackMessage`): `string`

Defined in: [src/routes/graphql.ts:301](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/routes/graphql.ts#L301)

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
