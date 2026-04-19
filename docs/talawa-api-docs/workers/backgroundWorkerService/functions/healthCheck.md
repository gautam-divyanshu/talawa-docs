[**talawa-api**](../../../README.md)

***

# Function: healthCheck()

> **healthCheck**(`statusGetter?`): `Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

Defined in: [src/workers/backgroundWorkerService.ts:387](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/workers/backgroundWorkerService.ts#L387)

Performs a health check of the background worker service, suitable for use by monitoring systems.

## Parameters

### statusGetter?

() => `object`

## Returns

`Promise`\<\{ `details`: `Record`\<`string`, `unknown`\>; `status`: `"healthy"` \| `"unhealthy"`; \}\>

- A promise that resolves to an object indicating the health status and any relevant details.
