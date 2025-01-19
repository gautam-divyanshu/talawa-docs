[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateUserRoleInOrganization](../README.md) / updateUserRoleInOrganization

# Variable: updateUserRoleInOrganization

\> `const` **updateUserRoleInOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateUserRoleInOrganization"`\]

Defined in: [src/resolvers/Mutation/updateUserRoleInOrganization.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Mutation/updateUserRoleInOrganization.ts#L24)

This function enables a SUPERADMIN to change the role of a user in an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Returns

Updated organization.
Only SUPERADMIN & ADMIN of a organization can update the role of a user in an organization.
