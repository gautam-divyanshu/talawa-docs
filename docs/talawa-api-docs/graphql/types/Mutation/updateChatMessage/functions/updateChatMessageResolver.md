[**talawa-api**](../../../../../README.md)

***

# Function: updateChatMessageResolver()

> **updateChatMessageResolver**(`_parent`, `args`, `ctx`): `Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `id`: `string`; `parentMessageId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; \}\>

Defined in: [src/graphql/types/Mutation/updateChatMessage.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/graphql/types/Mutation/updateChatMessage.ts#L20)

## Parameters

### \_parent

`unknown`

### args

#### input

\{ `body`: `string`; `id`: `string`; \}

#### input.body

`string`

#### input.id

`string`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `id`: `string`; `parentMessageId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; \}\>
