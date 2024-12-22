[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateUserRoleInOrganization](../README.md) / updateUserRoleInOrganization

# Variable: updateUserRoleInOrganization

\> `const` **updateUserRoleInOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateUserRoleInOrganization"`\]

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

## Defined in

[src/resolvers/Mutation/updateUserRoleInOrganization.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Mutation/updateUserRoleInOrganization.ts#L24)
