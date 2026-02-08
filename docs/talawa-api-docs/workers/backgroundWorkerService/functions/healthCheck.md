[**talawa-api**](../../../README.md)

***

# Function: healthCheck()

> **healthCheck**(`statusGetter?`): `Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

Defined in: [src/workers/backgroundWorkerService.ts:369](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/workers/backgroundWorkerService.ts#L369)

Performs a health check of the background worker service, suitable for use by monitoring systems.

## Parameters

### statusGetter?

() => `object`

## Returns

`Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

- A promise that resolves to an object indicating the health status and any relevant details.
