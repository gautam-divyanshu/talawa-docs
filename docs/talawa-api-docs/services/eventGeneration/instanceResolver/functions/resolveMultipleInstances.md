[**talawa-api**](../../../../README.md)

***

# Function: resolveMultipleInstances()

> **resolveMultipleInstances**(`instances`, `templatesMap`, `exceptionsMap`, `logger`): [`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]

Defined in: [src/services/eventGeneration/instanceResolver.ts:151](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/services/eventGeneration/instanceResolver.ts#L151)

Resolves multiple generated instances in a batch operation to improve performance.
This function iterates through a list of instances and applies the inheritance and
exception logic to each one.

## Parameters

### instances

`object`[]

An array of generated instances to resolve.

### templatesMap

`Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of base event templates, keyed by their IDs.

### exceptionsMap

`Map`\<`string`, \{ `createdAt`: `Date`; `creatorId`: `string`; `exceptionData`: `unknown`; `id`: `string`; `organizationId`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of event exceptions, keyed by a composite key.

### logger

`FastifyBaseLogger`

The logger for logging warnings or errors.

## Returns

[`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]

An array of fully resolved generated event instances.
