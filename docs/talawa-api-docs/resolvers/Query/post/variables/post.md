[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/post](../README.md) / post

# Variable: post

\> `const` **post**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"post"`\]

This query will fetch the specified Post from the database.

## Param

## Param

An object that contains `id` of the Post.

## Returns

An object `post`. If the `appLanguageCode` field not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/post.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Query/post.ts#L11)
