[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/markChatMessagesAsRead](../README.md) / markChatMessagesAsRead

# Variable: markChatMessagesAsRead

\> `const` **markChatMessagesAsRead**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"markChatMessagesAsRead"`\]

Defined in: [src/resolvers/Mutation/markChatMessagesAsRead.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/markChatMessagesAsRead.ts#L20)

This function enables to send message to direct chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the direct chat exists.
2. If the user exists

## Returns

Direct chat message.
