[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/post](../README.md) / post

# Variable: post

\> `const` **post**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"post"`\]

Defined in: [src/resolvers/Query/post.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Query/post.ts#L11)

This query will fetch the specified Post from the database.

## Param

## Param

An object that contains `id` of the Post.

## Returns

An object `post`. If the `appLanguageCode` field not found then it throws a `NotFoundError` error.
