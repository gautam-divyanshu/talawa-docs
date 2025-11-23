[**talawa-api**](../../../../../README.md)

***

# Function: updateChatMessageResolver()

> **updateChatMessageResolver**(`_parent`, `args`, `ctx`): `Promise`\<\{ `body`: `string`; `chatId`: `string`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `id`: `string`; `parentMessageId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; \}\>

Defined in: [src/graphql/types/Mutation/updateChatMessage.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/types/Mutation/updateChatMessage.ts#L19)

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
