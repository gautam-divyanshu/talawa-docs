[**talawa-api**](../../../../README.md)

***

# Function: validateResolvedInstance()

> **validateResolvedInstance**(`resolvedInstance`, `logger`): `boolean`

Defined in: [src/services/eventGeneration/instanceResolver.ts:264](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/services/eventGeneration/instanceResolver.ts#L264)

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
