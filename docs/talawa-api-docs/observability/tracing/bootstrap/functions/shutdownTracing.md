[**talawa-api**](../../../../README.md)

***

# Function: shutdownTracing()

> **shutdownTracing**(): `Promise`\<`void`\>

Defined in: [src/observability/tracing/bootstrap.ts:80](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/observability/tracing/bootstrap.ts#L80)

Shutdown OpenTelemetry tracing gracefully.
This function should be called from the graceful shutdown handler.
Throws an error if shutdown fails or times out.

## Returns

`Promise`\<`void`\>
