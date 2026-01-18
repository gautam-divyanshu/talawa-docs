[**talawa-api**](../../../README.md)

***

# Function: runMaterializationWorkerSafely()

> **runMaterializationWorkerSafely**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:178](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/workers/backgroundWorkerService.ts#L178)

Executes the materialization worker with robust error handling to prevent crashes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
