[**talawa-api**](../../../../../README.md)

***

# Function: resolveItems()

> **resolveItems**(`parent`, `args`, `ctx`): `Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/graphqlConnection/types/type-aliases/DefaultGraphQLConnection.md)\<\{ `categoryId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `duration`: `string` \| `null`; `eventId`: `string`; `folderId`: `string`; `id`: `string`; `key`: `string` \| `null`; `name`: `string`; `notes`: `string` \| `null`; `sequence`: `number`; `type`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>\>

Defined in: [src/graphql/types/AgendaFolder/items.ts:56](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/graphql/types/AgendaFolder/items.ts#L56)

## Parameters

### parent

#### createdAt

`Date`

#### creatorId

`string` \| `null`

#### description

`string` \| `null`

#### eventId

`string`

#### id

`string`

#### isDefaultFolder

`boolean`

#### name

`string`

#### organizationId

`string`

#### sequence

`number` \| `null`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

### args

#### after?

`string` \| `null` = `...`

#### before?

`string` \| `null` = `...`

#### first?

`number` \| `null` = `...`

#### last?

`number` \| `null` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/graphqlConnection/types/type-aliases/DefaultGraphQLConnection.md)\<\{ `categoryId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `duration`: `string` \| `null`; `eventId`: `string`; `folderId`: `string`; `id`: `string`; `key`: `string` \| `null`; `name`: `string`; `notes`: `string` \| `null`; `sequence`: `number`; `type`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>\>
