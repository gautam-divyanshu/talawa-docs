[**talawa-api**](../../../../README.md)

***

# Variable: ComplexityRangeInput

> `const` **ComplexityRangeInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `max`: `number`; `min`: `number`; \}\>

Defined in: [src/graphql/inputs/MetricsFilterInput.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/graphql/inputs/MetricsFilterInput.ts#L28)

GraphQL input type for complexity range.
Defines min and max complexity values for filtering.
Must be defined before MetricsFilterInput to be used as a field type.
