[**talawa-api**](../../../../README.md)

***

# Variable: metricsInputSchema

> `const` **metricsInputSchema**: `ZodObject`\<\{ `endTime`: `ZodDate`; `includeCacheMetrics`: `ZodDefault`\<`ZodBoolean`\>; `maxDuration`: `ZodOptional`\<`ZodNumber`\>; `minDuration`: `ZodOptional`\<`ZodNumber`\>; `operationType`: `ZodOptional`\<`ZodString`\>; `startTime`: `ZodDate`; \}, `$strip`\>

Defined in: [src/graphql/inputs/MetricsInput.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/graphql/inputs/MetricsInput.ts#L9)

Zod schema for MetricsInput validation.
Defines the input structure for querying metrics data.
