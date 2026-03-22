[**talawa-api**](../../../../../README.md)

***

# Function: getQueryPluginInput()

> **getQueryPluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:120](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/types/Plugin/inputs.ts#L120)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `id`: `ZodString`; \}, `$strip`\> = `queryPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `id`: `string`; \}\> = `QueryPluginInput`
