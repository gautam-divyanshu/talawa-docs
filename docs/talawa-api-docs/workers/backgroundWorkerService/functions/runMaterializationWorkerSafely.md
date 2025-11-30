[**talawa-api**](../../../README.md)

***

# Function: runMaterializationWorkerSafely()

> **runMaterializationWorkerSafely**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:110](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/workers/backgroundWorkerService.ts#L110)

Executes the materialization worker with robust error handling to prevent crashes.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
