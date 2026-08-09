[**talawa-api**](../../../README.md)

***

# Variable: observabilityConfig

> `const` **observabilityConfig**: `object`

Defined in: [src/config/observability.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/config/observability.ts#L5)

## Type Declaration

### enabled

> **enabled**: `boolean`

### exporterEnabled

> **exporterEnabled**: `boolean`

### exporterType

> **exporterType**: `string`

### otlpMetricEndpoint

> **otlpMetricEndpoint**: `string` \| `undefined` = `process.env.API_OTEL_METRIC_EXPORTER_ENDPOINT`

### otlpTraceEndpoint

> **otlpTraceEndpoint**: `string` \| `undefined` = `process.env.API_OTEL_TRACE_EXPORTER_ENDPOINT`

### samplingRatio

> **samplingRatio**: `number`

### serviceName

> **serviceName**: `string`
