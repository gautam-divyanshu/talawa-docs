[**talawa-api**](../../../README.md)

***

# Function: triggerMaterializationWorker()

> **triggerMaterializationWorker**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:306](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/workers/backgroundWorkerService.ts#L306)

Manually triggers a run of the materialization worker, useful for testing or administrative purposes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
