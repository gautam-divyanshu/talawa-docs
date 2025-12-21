[**talawa-api**](../../../../../README.md)

***

# Function: getInstallPluginInput()

> **getInstallPluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:135](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/graphql/types/Plugin/inputs.ts#L135)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `pluginId`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `pluginId`: `string`; \}, \{ `pluginId`: `string`; \}\> = `installPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `pluginId`: `string`; \}\> = `InstallPluginInput`
