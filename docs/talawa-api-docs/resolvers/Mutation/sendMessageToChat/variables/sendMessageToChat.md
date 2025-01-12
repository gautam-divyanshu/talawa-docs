[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMessageToChat](../README.md) / sendMessageToChat

# Variable: sendMessageToChat

\> `const` **sendMessageToChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMessageToChat"`\]

Defined in: [src/resolvers/Mutation/sendMessageToChat.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/sendMessageToChat.ts#L17)

This function enables to send message to chat.

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

Chat message.
