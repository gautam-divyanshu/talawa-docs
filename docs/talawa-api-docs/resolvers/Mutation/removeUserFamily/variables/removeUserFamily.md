[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserFamily](../README.md) / removeUserFamily

# Variable: removeUserFamily

\> `const` **removeUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserFamily"`\]

Defined in: [src/resolvers/Mutation/removeUserFamily.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Mutation/removeUserFamily.ts#L26)

This function enables to remove a user family.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application.

## Remarks

- The following checks are done:
1. If the user family exists.
2. If the user is super admin.

## Returns

Deleted user family.
