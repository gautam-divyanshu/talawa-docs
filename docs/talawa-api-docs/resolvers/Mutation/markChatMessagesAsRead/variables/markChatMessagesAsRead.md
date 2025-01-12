[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/markChatMessagesAsRead](../README.md) / markChatMessagesAsRead

# Variable: markChatMessagesAsRead

\> `const` **markChatMessagesAsRead**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"markChatMessagesAsRead"`\]

Defined in: [src/resolvers/Mutation/markChatMessagesAsRead.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/markChatMessagesAsRead.ts#L20)

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
