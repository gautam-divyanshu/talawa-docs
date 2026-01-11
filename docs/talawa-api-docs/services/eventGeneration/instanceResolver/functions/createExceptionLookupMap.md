[**talawa-api**](../../../../README.md)

***

# Function: createExceptionLookupMap()

> **createExceptionLookupMap**(`exceptions`): `Map`\<`string`, \{ `createdAt`: `Date`; `creatorId`: `string`; `exceptionData`: `unknown`; `id`: `string`; `organizationId`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:220](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/services/eventGeneration/instanceResolver.ts#L220)

Creates a lookup map for event exceptions to enable efficient batch processing.
The map is keyed by a composite key of the recurring event ID and instance start time.

## Parameters

### exceptions

`object`[]

An array of event exceptions.

## Returns

`Map`\<`string`, \{ `createdAt`: `Date`; `creatorId`: `string`; `exceptionData`: `unknown`; `id`: `string`; `organizationId`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

- A map of exceptions, keyed for quick lookup.
