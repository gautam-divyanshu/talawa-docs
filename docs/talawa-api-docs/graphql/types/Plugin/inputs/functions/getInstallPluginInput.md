[**talawa-api**](../../../../../README.md)

***

# Function: getInstallPluginInput()

> **getInstallPluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:135](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/graphql/types/Plugin/inputs.ts#L135)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `pluginId`: `ZodString`; \}, `$strip`\> = `installPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `pluginId`: `string`; \}\> = `InstallPluginInput`
