[**talawa-api**](../../../README.md)

***

# Function: startBackgroundWorkers()

> **startBackgroundWorkers**(`drizzleClient`, `logger`): `Promise`\<`void`\>

Defined in: [src/workers/backgroundWorkerService.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/workers/backgroundWorkerService.ts#L21)

Initializes and starts all background workers, scheduling them to run at their configured intervals.

## Parameters

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../drizzle/schema/README.md)\>

### logger

`FastifyBaseLogger`

## Returns

`Promise`\<`void`\>
