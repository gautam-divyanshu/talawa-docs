[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/UserFamily/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`UserFamilyResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserFamilyResolvers.md)\[`"creator"`\]

Defined in: [src/resolvers/UserFamily/creator.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/UserFamily/creator.ts#L18)

Resolver function for the `creator` field of a `UserFamily`.

This function retrieves the user who created a specific user family.

## Param

The parent object representing the user family. It contains information about the user family, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the user family.

## See

 - User - The User model used to interact with the users collection in the database.
 - UserFamilyResolvers - The type definition for the resolvers of the UserFamily fields.
