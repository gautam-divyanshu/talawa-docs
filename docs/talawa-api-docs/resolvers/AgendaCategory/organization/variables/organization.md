[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaCategory/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`AgendaCategoryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaCategoryResolvers.md)\[`"organization"`\]

Defined in: [src/resolvers/AgendaCategory/organization.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/AgendaCategory/organization.ts#L16)

Resolver function for the `organization` field of an `AgendaCategory`.

This function fetches the organization associated with a given agenda category.
It uses the `organizationId` field from the parent `AgendaCategory` object to find the corresponding organization in the database.
The organization details are then returned in a plain JavaScript object format.

## Param

The parent `AgendaCategory` object. This contains the `organizationId` field, which is used to find the organization.

## Returns

A promise that resolves to the organization object found in the database, or `null` if no organization is found.
