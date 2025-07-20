[**talawa-api**](../../../../../README.md)

***

# Function: getQueryPluginInput()

> **getQueryPluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:94](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/graphql/types/Plugin/inputs.ts#L94)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `id`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `id?`: `string`; \}, \{ `id?`: `string`; \}\> = `queryPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `id?`: `string`; \}\> = `QueryPluginInput`
