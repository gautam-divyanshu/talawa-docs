[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unlikeComment](../README.md) / unlikeComment

# Variable: unlikeComment

\> `const` **unlikeComment**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unlikeComment"`\]

Defined in: [src/resolvers/Mutation/unlikeComment.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Mutation/unlikeComment.ts#L17)

This function enables to unlike a comment.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the comment exists

## Returns

Comment.
