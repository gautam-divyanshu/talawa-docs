[**talawa-api**](../../../../../README.md)

***

# Function: getDeletePluginInput()

> **getDeletePluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:145](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/graphql/types/Plugin/inputs.ts#L145)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `id`: `ZodString`; \}, `$strip`\> = `deletePluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `id`: `string`; \}\> = `DeletePluginInput`
