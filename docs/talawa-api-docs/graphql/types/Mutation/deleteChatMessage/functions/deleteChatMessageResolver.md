[**talawa-api**](../../../../../README.md)

***

# Function: deleteChatMessageResolver()

> **deleteChatMessageResolver**(`_parent`, `args`, `ctx`): `Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `id`: `string`; `parentMessageId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [src/graphql/types/Mutation/deleteChatMessage.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/050ed2813122ca02570a32383d1ba852ab349e4e/src/graphql/types/Mutation/deleteChatMessage.ts#L17)

## Parameters

### \_parent

`unknown`

### args

#### input?

\{[`key`: `string`]: `any`; `id?`: `unknown`; \} = `mutationDeleteChatMessageInputSchema`

#### input.id?

`unknown` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `id`: `string`; `parentMessageId`: `string`; `updatedAt`: `Date`; \}\>
