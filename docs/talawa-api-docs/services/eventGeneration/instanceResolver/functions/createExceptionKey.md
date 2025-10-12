[**talawa-api**](../../../../README.md)

***

# Function: createExceptionKey()

> **createExceptionKey**(`recurringEventId`, `instanceStartTime`): `string`

Defined in: [src/services/eventGeneration/instanceResolver.ts:199](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/services/eventGeneration/instanceResolver.ts#L199)

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

A string representing the composite key.
