[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Post/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`PostResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/PostResolvers.md)\[`"creator"`\]

Defined in: [src/resolvers/Post/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Post/creator.ts#L16)

Resolver function for the `creator` field of a `Post`.

This function retrieves the user who created a specific post.

## Param

The parent object representing the post. It contains information about the post, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the post.

## See

 - User - The User model used to interact with the users collection in the database.
 - PostResolvers - The type definition for the resolvers of the Post fields.
