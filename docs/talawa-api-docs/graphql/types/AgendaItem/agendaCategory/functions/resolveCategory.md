[**talawa-api**](../../../../../README.md)

***

# Function: resolveCategory()

> **resolveCategory**(`parent`, `_args`, `ctx`): `Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `eventId`: `string`; `id`: `string`; `isDefaultCategory`: `boolean`; `name`: `string`; `organizationId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/graphql/types/AgendaItem/agendaCategory.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/graphql/types/AgendaItem/agendaCategory.ts#L9)

## Parameters

### parent

#### categoryId

`string`

#### createdAt

`Date`

#### creatorId

`string` \| `null`

#### description

`string` \| `null`

#### duration

`string` \| `null`

#### eventId

`string`

#### folderId

`string`

#### id

`string`

#### key

`string` \| `null`

#### name

`string`

#### notes

`string` \| `null`

#### sequence

`number`

#### type

`string`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

### \_args

`Record`\<`string`, `never`\>

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `eventId`: `string`; `id`: `string`; `isDefaultCategory`: `boolean`; `name`: `string`; `organizationId`: `string`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>
