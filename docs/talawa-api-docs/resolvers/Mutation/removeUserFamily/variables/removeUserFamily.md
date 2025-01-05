[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserFamily](../README.md) / removeUserFamily

# Variable: removeUserFamily

\> `const` **removeUserFamily**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserFamily"`\]

Defined in: [src/resolvers/Mutation/removeUserFamily.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/removeUserFamily.ts#L26)

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
