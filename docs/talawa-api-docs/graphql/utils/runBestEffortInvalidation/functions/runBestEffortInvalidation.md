[**talawa-api**](../../../../README.md)

***

# Function: runBestEffortInvalidation()

> **runBestEffortInvalidation**(`promises`, `entity`, `logger`): `Promise`\<`void`\>

Defined in: [src/graphql/utils/runBestEffortInvalidation.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/utils/runBestEffortInvalidation.ts#L12)

Executes a list of cache invalidation promises and logs any failures using the provided logger.
This is a "best-effort" operation: it waits for all promises to settle and does not throw if any fail.

## Parameters

### promises

`Promise`\<`unknown`\>[]

An array of promises returned by cache invalidation functions (e.g. invalidateEntity).

### entity

`string`

The name of the entity being invalidated (e.g. "organization", "post").

### logger

`FastifyBaseLogger`

The logger instance (e.g. ctx.log) to record errors.

## Returns

`Promise`\<`void`\>

Resolves after all invalidation promises have settled.
