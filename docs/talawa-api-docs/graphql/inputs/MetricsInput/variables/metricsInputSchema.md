[**talawa-api**](../../../../README.md)

***

# Variable: metricsInputSchema

> `const` **metricsInputSchema**: `ZodObject`\<\{ `endTime`: `ZodDate`; `includeCacheMetrics`: `ZodDefault`\<`ZodBoolean`\>; `maxDuration`: `ZodOptional`\<`ZodNumber`\>; `minDuration`: `ZodOptional`\<`ZodNumber`\>; `operationType`: `ZodOptional`\<`ZodString`\>; `startTime`: `ZodDate`; \}, `$strip`\>

Defined in: [src/graphql/inputs/MetricsInput.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/inputs/MetricsInput.ts#L9)

Zod schema for MetricsInput validation.
Defines the input structure for querying metrics data.
