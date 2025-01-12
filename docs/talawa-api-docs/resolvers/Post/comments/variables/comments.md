[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Post/comments](../README.md) / comments

# Variable: comments

\> `const` **comments**: [`PostResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/PostResolvers.md)\[`"comments"`\]

Defined in: [src/resolvers/Post/comments.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Post/comments.ts#L18)

Resolver function for the `comments` field of a `Post`.

This function retrieves the comments associated with a specific post.

## Param

The parent object representing the post. It contains information about the post, including the ID of the comments associated with it.

## Returns

A promise that resolves to an array of comment documents found in the database. These documents represent the comments associated with the post.

## See

 - Comment - The Comment model used to interact with the comments collection in the database.
 - PostResolvers - The type definition for the resolvers of the Post fields.
