[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaCategory/createdBy](../README.md) / createdBy

# Variable: createdBy

\> `const` **createdBy**: [`AgendaCategoryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaCategoryResolvers.md)\[`"createdBy"`\]

Defined in: [src/resolvers/AgendaCategory/createdBy.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/AgendaCategory/createdBy.ts#L17)

Resolver function for the `createdBy` field of an `AgendaCategory`.

This function retrieves the user who created a specific agenda category.

## Param

The parent object representing the agenda category. It contains information about the agenda category, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the agenda category.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaCategoryResolvers - The type definition for the resolvers of the AgendaCategory fields.
