[**talawa-api**](../../../../README.md)

***

# Function: shutdownTracing()

> **shutdownTracing**(): `Promise`\<`void`\>

Defined in: [src/observability/tracing/bootstrap.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/observability/tracing/bootstrap.ts#L118)

Shutdown OpenTelemetry tracing gracefully.
This function should be called from the graceful shutdown handler.
Throws an error if shutdown fails or times out.

## Returns

`Promise`\<`void`\>
