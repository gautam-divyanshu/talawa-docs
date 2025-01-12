[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createChat](../README.md) / createChat

# Variable: createChat

\> `const` **createChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createChat"`\]

Defined in: [src/resolvers/Mutation/createChat.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/createChat.ts#L19)

This function enables to create a chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists

## Returns

Created chat
