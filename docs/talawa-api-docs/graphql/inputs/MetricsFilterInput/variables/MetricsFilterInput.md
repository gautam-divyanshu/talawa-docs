[**talawa-api**](../../../../README.md)

***

# Variable: MetricsFilterInput

> **MetricsFilterInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `complexityRange?`: \{ `max`: `number`; `min`: `number`; \} \| `null`; `minCacheHitRate?`: `number` \| `null`; `operationNames?`: `string`[] \| `null`; `slowOperationsOnly`: `boolean`; \}\>

Defined in: [src/graphql/inputs/MetricsFilterInput.ts:70](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/MetricsFilterInput.ts#L70)

GraphQL input type for advanced metrics filtering.
Provides filtering by operation names, slow operations, cache hit rate, and complexity range.
