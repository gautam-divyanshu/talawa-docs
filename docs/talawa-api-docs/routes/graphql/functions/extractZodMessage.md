[**talawa-api**](../../../README.md)

***

# Function: extractZodMessage()

> **extractZodMessage**(`normalizedDetails`, `error`, `fallbackMessage`): `string`

Defined in: [src/routes/graphql.ts:283](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/routes/graphql.ts#L283)

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
