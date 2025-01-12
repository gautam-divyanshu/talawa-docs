[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaSection/createdBy](../README.md) / createdBy

# Variable: createdBy

\> `const` **createdBy**: [`AgendaSectionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaSectionResolvers.md)\[`"createdBy"`\]

Defined in: [src/resolvers/AgendaSection/createdBy.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/AgendaSection/createdBy.ts#L16)

Resolver function for the `createdBy` field of an `AgendaSection`.

This function retrieves the user who created a specific agenda section.

## Param

The parent object representing the agenda section. It contains information about the agenda section, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the agenda section.

## See

 - User - The User model used to interact with the users collection in the database.
 - AgendaSectionResolvers - The type definition for the resolvers of the AgendaSection fields.
