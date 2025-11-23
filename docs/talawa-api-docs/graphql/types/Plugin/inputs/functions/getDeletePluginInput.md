[**talawa-api**](../../../../../README.md)

***

# Function: getDeletePluginInput()

> **getDeletePluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:145](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/types/Plugin/inputs.ts#L145)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `id`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `id`: `string`; \}, \{ `id`: `string`; \}\> = `deletePluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `id`: `string`; \}\> = `DeletePluginInput`
