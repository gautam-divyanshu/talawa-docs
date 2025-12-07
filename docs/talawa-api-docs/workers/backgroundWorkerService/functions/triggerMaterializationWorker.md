[**talawa-api**](../../../README.md)

***

# Function: triggerMaterializationWorker()

> **triggerMaterializationWorker**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:187](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/workers/backgroundWorkerService.ts#L187)

Manually triggers a run of the materialization worker, useful for testing or administrative purposes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
