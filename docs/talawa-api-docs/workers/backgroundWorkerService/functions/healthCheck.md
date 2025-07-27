[**talawa-api**](../../../README.md)

***

# Function: healthCheck()

> **healthCheck**(): `Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

Defined in: [src/workers/backgroundWorkerService.ts:224](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/workers/backgroundWorkerService.ts#L224)

Performs a health check of the background worker service, suitable for use by monitoring systems.

## Returns

`Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

A promise that resolves to an object indicating the health status and any relevant details.
