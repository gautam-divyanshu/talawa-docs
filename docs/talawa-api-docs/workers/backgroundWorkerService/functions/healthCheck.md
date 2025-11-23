[**talawa-api**](../../../README.md)

***

# Function: healthCheck()

> **healthCheck**(): `Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

Defined in: [src/workers/backgroundWorkerService.ts:239](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/workers/backgroundWorkerService.ts#L239)

Performs a health check of the background worker service, suitable for use by monitoring systems.

## Returns

`Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

A promise that resolves to an object indicating the health status and any relevant details.
