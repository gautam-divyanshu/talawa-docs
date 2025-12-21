[**talawa-api**](../../../README.md)

***

# Function: triggerCleanupWorker()

> **triggerCleanupWorker**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:202](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/workers/backgroundWorkerService.ts#L202)

Manually triggers a run of the cleanup worker, useful for testing or administrative purposes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
