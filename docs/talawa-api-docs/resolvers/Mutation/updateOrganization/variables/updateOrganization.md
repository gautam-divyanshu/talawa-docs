[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateOrganization](../README.md) / updateOrganization

# Variable: updateOrganization

\> `const` **updateOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateOrganization"`\]

Defined in: [src/resolvers/Mutation/updateOrganization.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Mutation/updateOrganization.ts#L22)

This function enables to update an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists.
2. The the user is an admin of the organization.

## Returns

Updated organization.
