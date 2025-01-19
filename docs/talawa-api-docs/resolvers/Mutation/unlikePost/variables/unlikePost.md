[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unlikePost](../README.md) / unlikePost

# Variable: unlikePost

\> `const` **unlikePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unlikePost"`\]

Defined in: [src/resolvers/Mutation/unlikePost.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Mutation/unlikePost.ts#L18)

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
