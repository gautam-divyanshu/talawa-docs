[**talawa-api**](../../../README.md)

***

# Function: runCleanupWorkerSafely()

> **runCleanupWorkerSafely**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:151](https://github.com/PalisadoesFoundation/talawa-api/blob/aa036083713a382be03ddad8b72207946e5ffeb4/src/workers/backgroundWorkerService.ts#L151)

Executes the cleanup worker with robust error handling to ensure stability.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
