[**talawa-api**](../../../../README.md)

***

# Variable: ComplexityRangeInput

> `const` **ComplexityRangeInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `max`: `number`; `min`: `number`; \}\>

Defined in: [src/graphql/inputs/MetricsFilterInput.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/graphql/inputs/MetricsFilterInput.ts#L28)

GraphQL input type for complexity range.
Defines min and max complexity values for filtering.
Must be defined before MetricsFilterInput to be used as a field type.
