[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getGroupChatsByUserId](../README.md) / getGroupChatsByUserId

# Variable: getGroupChatsByUserId

\> `const` **getGroupChatsByUserId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getGroupChatsByUserId"`\]

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

## Defined in

[src/resolvers/Query/getGroupChatsByUserId.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Query/getGroupChatsByUserId.ts#L13)
