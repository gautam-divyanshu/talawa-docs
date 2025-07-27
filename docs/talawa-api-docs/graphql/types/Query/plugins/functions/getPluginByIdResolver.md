[**talawa-api**](../../../../../README.md)

***

# Function: getPluginByIdResolver()

> **getPluginByIdResolver**(`_`, `args`, `ctx`): `Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [src/graphql/types/Query/plugins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/graphql/types/Query/plugins.ts#L16)

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
