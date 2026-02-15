[**talawa-api**](../../../../README.md)

***

# Function: shutdownTracing()

> **shutdownTracing**(): `Promise`\<`void`\>

Defined in: [src/observability/tracing/bootstrap.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/observability/tracing/bootstrap.ts#L118)

Shutdown OpenTelemetry tracing gracefully.
This function should be called from the graceful shutdown handler.
Throws an error if shutdown fails or times out.

## Returns

`Promise`\<`void`\>
