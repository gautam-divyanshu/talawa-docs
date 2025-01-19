[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaSection/items](../README.md) / items

# Variable: items

\> `const` **items**: [`AgendaSectionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaSectionResolvers.md)\[`"items"`\]

Defined in: [src/resolvers/AgendaSection/items.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/AgendaSection/items.ts#L17)

Resolver function for the `items` field of an `AgendaSection`.

This function retrieves the agenda items associated with a specific agenda section.

## Param

The parent object representing the agenda section. It contains information about the agenda section, including the IDs of the agenda items associated with it.

## Returns

A promise that resolves to the agenda item documents found in the database. These documents represent the agenda items associated with the agenda section.

## See

 - AgendaItemModel - The AgendaItem model used to interact with the agenda items collection in the database.
 - AgendaSectionResolvers - The type definition for the resolvers of the AgendaSection fields.
