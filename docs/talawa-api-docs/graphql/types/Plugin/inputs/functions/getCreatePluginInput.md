[**talawa-api**](../../../../../README.md)

***

# Function: getCreatePluginInput()

> **getCreatePluginInput**(): `object`

Defined in: [src/graphql/types/Plugin/inputs.ts:104](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/graphql/types/Plugin/inputs.ts#L104)

## Returns

`object`

### schema

> **schema**: `ZodObject`\<\{ `backup`: `ZodOptional`\<`ZodBoolean`\>; `isActivated`: `ZodOptional`\<`ZodBoolean`\>; `isInstalled`: `ZodOptional`\<`ZodBoolean`\>; `pluginId`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `backup?`: `boolean`; `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}, \{ `backup?`: `boolean`; `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}\> = `createPluginInputSchema`

### type

> **type**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `backup?`: `boolean`; `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}\> = `CreatePluginInput`
