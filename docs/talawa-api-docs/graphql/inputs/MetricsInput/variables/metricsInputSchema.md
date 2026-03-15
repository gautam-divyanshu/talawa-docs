[**talawa-api**](../../../../README.md)

***

# Variable: metricsInputSchema

> `const` **metricsInputSchema**: `ZodObject`\<\{ `endTime`: `ZodDate`; `includeCacheMetrics`: `ZodDefault`\<`ZodBoolean`\>; `maxDuration`: `ZodOptional`\<`ZodNumber`\>; `minDuration`: `ZodOptional`\<`ZodNumber`\>; `operationType`: `ZodOptional`\<`ZodString`\>; `startTime`: `ZodDate`; \}, `$strip`\>

Defined in: [src/graphql/inputs/MetricsInput.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/graphql/inputs/MetricsInput.ts#L9)

Zod schema for MetricsInput validation.
Defines the input structure for querying metrics data.
