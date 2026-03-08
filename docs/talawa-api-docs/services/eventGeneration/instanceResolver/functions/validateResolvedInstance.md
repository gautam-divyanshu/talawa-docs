[**talawa-api**](../../../../README.md)

***

# Function: validateResolvedInstance()

> **validateResolvedInstance**(`resolvedInstance`, `logger`): `boolean`

Defined in: [src/services/eventGeneration/instanceResolver.ts:270](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/services/eventGeneration/instanceResolver.ts#L270)

Validates that a resolved generated instance contains all required fields.
This function helps ensure data integrity before the instance is used elsewhere.

## Parameters

### resolvedInstance

[`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)

The resolved instance to validate.

### logger

`FastifyBaseLogger`

The logger for reporting any missing fields.

## Returns

`boolean`

`true` if the instance is valid, otherwise `false`.
