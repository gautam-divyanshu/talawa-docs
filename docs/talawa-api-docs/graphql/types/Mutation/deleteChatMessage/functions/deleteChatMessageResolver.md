[**talawa-api**](../../../../../README.md)

***

# Function: deleteChatMessageResolver()

> **deleteChatMessageResolver**(`_parent`, `args`, `ctx`): `Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `id`: `string`; `parentMessageId`: `string`; `updatedAt`: `Date`; \}\>

Defined in: [src/graphql/types/Mutation/deleteChatMessage.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/types/Mutation/deleteChatMessage.ts#L23)

## Parameters

### \_parent

`unknown`

### args

#### input?

\{\[`key`: `string`\]: `any`; `id?`: `unknown`; \} = `mutationDeleteChatMessageInputSchema`

#### input.id?

`unknown` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string`; `id`: `string`; `parentMessageId`: `string`; `updatedAt`: `Date`; \}\>
