[**talawa-api**](../../../../../README.md)

***

# Function: deleteChatMessageResolver()

> **deleteChatMessageResolver**(`_parent`, `args`, `ctx`): `Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `id`: `string`; `parentMessageId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; \}\>

Defined in: [src/graphql/types/Mutation/deleteChatMessage.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/graphql/types/Mutation/deleteChatMessage.ts#L24)

## Parameters

### \_parent

`unknown`

### args

#### input

\{ `id`: `string`; \} = `mutationDeleteChatMessageInputSchema`

#### input.id

`string` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `id`: `string`; `parentMessageId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; \}\>
