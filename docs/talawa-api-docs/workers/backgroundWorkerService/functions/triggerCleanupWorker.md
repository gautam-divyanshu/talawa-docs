[**talawa-api**](../../../README.md)

***

# Function: triggerCleanupWorker()

> **triggerCleanupWorker**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:187](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/workers/backgroundWorkerService.ts#L187)

Manually triggers a run of the cleanup worker, useful for testing or administrative purposes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
