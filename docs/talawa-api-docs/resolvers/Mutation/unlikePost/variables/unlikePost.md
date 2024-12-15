[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unlikePost](../README.md) / unlikePost

# Variable: unlikePost

\> `const` **unlikePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unlikePost"`\]

This function enables to unlike a post.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the post exists

## Returns

Post.

## Defined in

[src/resolvers/Mutation/unlikePost.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Mutation/unlikePost.ts#L18)
