[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateChatMessage](../README.md) / updateChatMessage

# Variable: updateChatMessage

\> `const` **updateChatMessage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateChatMessage"`\]

Defined in: [src/resolvers/Mutation/updateChatMessage.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/updateChatMessage.ts#L28)

This function enables to update a chat message.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the chat message exists.
2. If the chat exists.
3. If the user exists.
4. If the user is a member of the chat.
5. If the user is the sender of the message.

## Returns

Updated chat message.
