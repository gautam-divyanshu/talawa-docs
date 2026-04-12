[**talawa-api**](../../../README.md)

***

# Variable: observabilityConfig

> `const` **observabilityConfig**: `object`

Defined in: [src/config/observability.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/config/observability.ts#L5)

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
