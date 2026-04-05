[**talawa-api**](../../../README.md)

***

# Function: runMaterializationWorkerSafely()

> **runMaterializationWorkerSafely**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:191](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/workers/backgroundWorkerService.ts#L191)

Executes the materialization worker with robust error handling to prevent crashes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
