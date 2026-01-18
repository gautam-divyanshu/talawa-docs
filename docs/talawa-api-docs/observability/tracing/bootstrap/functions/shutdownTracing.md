[**talawa-api**](../../../../README.md)

***

# Function: shutdownTracing()

> **shutdownTracing**(): `Promise`\<`void`\>

Defined in: [src/observability/tracing/bootstrap.ts:80](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/observability/tracing/bootstrap.ts#L80)

Shutdown OpenTelemetry tracing gracefully.
This function should be called from the graceful shutdown handler.
Throws an error if shutdown fails or times out.

## Returns

`Promise`\<`void`\>
