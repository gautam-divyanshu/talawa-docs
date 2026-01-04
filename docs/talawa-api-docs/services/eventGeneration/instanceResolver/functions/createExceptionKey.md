[**talawa-api**](../../../../README.md)

***

# Function: createExceptionKey()

> **createExceptionKey**(`recurringEventId`, `instanceStartTime`): `string`

Defined in: [src/services/eventGeneration/instanceResolver.ts:206](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/services/eventGeneration/instanceResolver.ts#L206)

Creates a composite key for the exception lookup map.
This key is used to uniquely identify an exception based on the recurring event ID
and the original start time of the instance.

## Parameters

### recurringEventId

`string`

The ID of the recurring event.

### instanceStartTime

`Date`

The original start time of the instance.

## Returns

`string`

- A string representing the composite key.
