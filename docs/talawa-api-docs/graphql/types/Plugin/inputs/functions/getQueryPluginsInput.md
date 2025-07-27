[**talawa-api**](../../../../../README.md)

***

# Function: getQueryPluginsInput()

> **getQueryPluginsInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/graphql/types/Plugin/inputs.ts#L114)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `isActivated`: `ZodOptional`\<`ZodBoolean`\>; `isInstalled`: `ZodOptional`\<`ZodBoolean`\>; `pluginId`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}, \{ `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}\> = `queryPluginsInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}\> = `QueryPluginsInput`
