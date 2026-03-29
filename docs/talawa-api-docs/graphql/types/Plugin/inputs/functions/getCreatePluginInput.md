[**talawa-api**](../../../../../README.md)

***

# Function: getCreatePluginInput()

> **getCreatePluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:130](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/graphql/types/Plugin/inputs.ts#L130)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `pluginId`: `ZodString`; \}, `$strip`\> = `createPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `pluginId`: `string`; \}\> = `CreatePluginInput`
