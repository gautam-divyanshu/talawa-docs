[**talawa-api**](../../../../README.md)

***

# Function: resolveMultipleInstances()

> **resolveMultipleInstances**(`instances`, `templatesMap`, `exceptionsMap`, `logger`): [`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]

Defined in: [src/services/eventGeneration/instanceResolver.ts:161](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/services/eventGeneration/instanceResolver.ts#L161)

Resolves multiple generated instances in a batch operation to improve performance.
This function iterates through a list of instances and applies the inheritance and
exception logic to each one.

## Parameters

### instances

`object`[]

An array of generated instances to resolve.

### templatesMap

`Map`\<`string`, [`EventTemplateWithAttachments`](../../types/type-aliases/EventTemplateWithAttachments.md)\>

A map of base event templates, keyed by their IDs.

### exceptionsMap

`Map`\<`string`, \{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `exceptionData`: `unknown`; `id`: `string`; `organizationId`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

A map of event exceptions, keyed by a composite key.

### logger

`FastifyBaseLogger`

The logger for logging warnings or errors.

## Returns

[`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]

- An array of fully resolved generated event instances.
