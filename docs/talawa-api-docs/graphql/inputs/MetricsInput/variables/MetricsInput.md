[**talawa-api**](../../../../README.md)

***

# Variable: MetricsInput

> **MetricsInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `endTime`: `Date`; `includeCacheMetrics`: `boolean`; `maxDuration?`: `number` \| `null`; `minDuration?`: `number` \| `null`; `operationType?`: `string` \| `null`; `startTime`: `Date`; \}\>

Defined in: [src/graphql/inputs/MetricsInput.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/inputs/MetricsInput.ts#L61)

GraphQL input type for querying metrics data.
Provides time range filtering and optional operation type and duration filtering.
