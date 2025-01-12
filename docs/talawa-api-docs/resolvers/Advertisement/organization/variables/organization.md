[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Advertisement/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`AdvertisementResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AdvertisementResolvers.md)\[`"organization"`\]

Defined in: [src/resolvers/Advertisement/organization.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Advertisement/organization.ts#L15)

Resolver function for the `organization` field of an `Advertisement`.

This function fetches the organization associated with a given advertisement.
It uses the `organizationId` field from the parent `Advertisement` object to find the corresponding organization in the database.
The organization details are then returned in a plain JavaScript object format.

## Param

The parent `Advertisement` object. This contains the `organizationId` field, which is used to find the organization.

## Returns

A promise that resolves to the organization object found in the database, or `null` if no organization is found.
