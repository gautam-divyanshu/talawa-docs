[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/customFieldsByOrganization](../README.md) / customFieldsByOrganization

# Variable: customFieldsByOrganization

\> `const` **customFieldsByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"customFieldsByOrganization"`\]

Defined in: [src/resolvers/Query/customFieldsByOrganization.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Query/customFieldsByOrganization.ts#L15)

This query will fetch all the custom Fields for the organization in the database.

## Param

## Param

An object that contains `id` of the organization.

## Returns

An object `CustomFields` that contains all the custom fields of the specified organization.
The following checks are made:
 1. if the organization exists
