[**talawa-api**](../../../../README.md)

***

# Function: createExceptionLookupMap()

> **createExceptionLookupMap**(`exceptions`): `Map`\<`string`, \{ `baseRecurringEventId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `eventInstanceId`: `string`; `exceptionData`: `unknown`; `exceptionType`: `"SINGLE_INSTANCE"` \| `"THIS_AND_FUTURE"`; `id`: `string`; `instanceStartTime`: `Date`; `organizationId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:207](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/instanceResolver.ts#L207)

Creates a lookup map for event exceptions to enable efficient batch processing.
The map is keyed by a composite key of the recurring event ID and instance start time.

## Parameters

### exceptions

`object`[]

An array of event exceptions.

## Returns

`Map`\<`string`, \{ `baseRecurringEventId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `eventInstanceId`: `string`; `exceptionData`: `unknown`; `exceptionType`: `"SINGLE_INSTANCE"` \| `"THIS_AND_FUTURE"`; `id`: `string`; `instanceStartTime`: `Date`; `organizationId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of exceptions, keyed for quick lookup.
