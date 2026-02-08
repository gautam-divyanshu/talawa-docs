[**talawa-api**](../../../../../README.md)

***

# Function: getQueryPluginsInput()

> **getQueryPluginsInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:125](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/graphql/types/Plugin/inputs.ts#L125)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `isActivated`: `ZodOptional`\<`ZodBoolean`\>; `isInstalled`: `ZodOptional`\<`ZodBoolean`\>; `pluginId`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\> = `queryPluginsInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `isActivated?`: `boolean` \| `null`; `isInstalled?`: `boolean` \| `null`; `pluginId?`: `string` \| `null`; \}\> = `QueryPluginsInput`
