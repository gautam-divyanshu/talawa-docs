[**talawa-api**](../../../README.md)

***

# Function: healthCheck()

> **healthCheck**(): `Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

Defined in: [src/workers/backgroundWorkerService.ts:239](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/workers/backgroundWorkerService.ts#L239)

Performs a health check of the background worker service, suitable for use by monitoring systems.

## Returns

`Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

A promise that resolves to an object indicating the health status and any relevant details.
