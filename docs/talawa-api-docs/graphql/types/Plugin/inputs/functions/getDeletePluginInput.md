[**talawa-api**](../../../../../README.md)

***

# Function: getDeletePluginInput()

> **getDeletePluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/graphql/types/Plugin/inputs.ts#L114)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `id`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `id?`: `string`; \}, \{ `id?`: `string`; \}\> = `deletePluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `id?`: `string`; \}\> = `DeletePluginInput`
