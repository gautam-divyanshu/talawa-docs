[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unlikeComment](../README.md) / unlikeComment

# Variable: unlikeComment

\> `const` **unlikeComment**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unlikeComment"`\]

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

## Defined in

[src/resolvers/Mutation/unlikeComment.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Mutation/unlikeComment.ts#L17)
