[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserImage](../README.md) / removeUserImage

# Variable: removeUserImage

\> `const` **removeUserImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserImage"`\]

Defined in: [src/resolvers/Mutation/removeUserImage.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/removeUserImage.ts#L22)

This function enables to remove user image.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the image exists

## Returns

Updated user.
