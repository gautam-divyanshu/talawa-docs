[**talawa-api**](../../../../../README.md)

***

# Function: getPluginByIdResolver()

> **getPluginByIdResolver**(`_`, `args`, `ctx`): `Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [src/graphql/types/Query/plugins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/graphql/types/Query/plugins.ts#L16)

Resolver for getPluginById

## Parameters

### \_

`unknown`

### args

#### input

\{ `id`: `string`; \}

#### input.id

`string`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date`; \}\>
