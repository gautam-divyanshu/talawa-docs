[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateChat](../README.md) / updateChat

# Variable: updateChat

\> `const` **updateChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateChat"`\]

Defined in: [src/resolvers/Mutation/updateChat.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/updateChat.ts#L24)

This function enables to update a chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the chat exists
2. If the user is a member of the chat

## Returns

Updated chat
