[**talawa-api**](../../../README.md)

***

# Function: extractZodMessage()

> **extractZodMessage**(`normalizedDetails`, `error`, `fallbackMessage`): `string`

Defined in: [src/routes/graphql.ts:284](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/routes/graphql.ts#L284)

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
