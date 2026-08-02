[**talawa-api**](../../../../README.md)

***

# Variable: MetricsInput

> **MetricsInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `endTime`: `Date`; `includeCacheMetrics`: `boolean`; `maxDuration?`: `number` \| `null`; `minDuration?`: `number` \| `null`; `operationType?`: `string` \| `null`; `startTime`: `Date`; \}\>

Defined in: [src/graphql/inputs/MetricsInput.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/inputs/MetricsInput.ts#L61)

GraphQL input type for querying metrics data.
Provides time range filtering and optional operation type and duration filtering.
