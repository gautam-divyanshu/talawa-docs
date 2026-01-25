[**talawa-api**](../../../../README.md)

***

# Variable: metricsFilterInputSchema

> `const` **metricsFilterInputSchema**: `ZodObject`\<\{ `complexityRange`: `ZodOptional`\<`ZodObject`\<\{ `max`: `ZodNumber`; `min`: `ZodNumber`; \}, `$strip`\>\>; `minCacheHitRate`: `ZodOptional`\<`ZodNumber`\>; `operationNames`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `slowOperationsOnly`: `ZodDefault`\<`ZodBoolean`\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/MetricsFilterInput.ts:51](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/graphql/inputs/MetricsFilterInput.ts#L51)

Zod schema for MetricsFilterInput validation.
Defines advanced filtering options for metrics queries.
