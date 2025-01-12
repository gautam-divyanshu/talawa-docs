[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getUnreadChatsByUserId](../README.md) / getUnreadChatsByUserId

# Variable: getUnreadChatsByUserId

\> `const` **getUnreadChatsByUserId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getUnreadChatsByUserId"`\]

Defined in: [src/resolvers/Query/getUnreadChatsByUserId.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Query/getUnreadChatsByUserId.ts#L13)

This query will fetch all the Chats for the current user from the database.

## Param

## Param

An object that contains `id` of the user.

## Returns

An object `directChats` that contains all direct chats of the current user.
If the `directChats` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).
