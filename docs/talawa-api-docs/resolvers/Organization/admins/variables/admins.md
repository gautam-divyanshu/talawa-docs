[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/admins](../README.md) / admins

# Variable: admins

\> `const` **admins**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"admins"`\]

Defined in: [src/resolvers/Organization/admins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Organization/admins.ts#L16)

Resolver function for the `admins` field of an `Organization`.

This function retrieves the users who are admins of a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are admins.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are admins of the organization.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.
