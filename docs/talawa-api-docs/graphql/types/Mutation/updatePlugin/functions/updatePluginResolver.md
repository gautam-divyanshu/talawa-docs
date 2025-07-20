[**talawa-api**](../../../../../README.md)

***

# Function: updatePluginResolver()

> **updatePluginResolver**(`_`, `args`, `ctx`): `Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [src/graphql/types/Mutation/updatePlugin.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/graphql/types/Mutation/updatePlugin.ts#L13)

Resolver for updatePlugin mutation

## Parameters

### \_

`unknown`

### args

#### input

\{ `backup?`: `boolean`; `id`: `string`; `isActivated?`: `boolean`; `isInstalled?`: `boolean`; `pluginId?`: `string`; \}

#### input.backup?

`boolean`

#### input.id

`string`

#### input.isActivated?

`boolean`

#### input.isInstalled?

`boolean`

#### input.pluginId?

`string`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `backup`: `boolean`; `createdAt`: `Date`; `id`: `string`; `isActivated`: `boolean`; `isInstalled`: `boolean`; `pluginId`: `string`; `updatedAt`: `Date`; \}\>
