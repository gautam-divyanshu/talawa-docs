[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/eventsByOrganization](../README.md) / eventsByOrganization

# Variable: eventsByOrganization

\> `const` **eventsByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"eventsByOrganization"`\]

Defined in: [src/resolvers/Query/eventsByOrganization.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Query/eventsByOrganization.ts#L10)

This query will fetch all the events for an organization from the database.

## Param

## Param

An object that contains `orderBy` to sort the object as specified and `id` of the Organization.

## Returns

An `events` object that holds all the events for the Organization.
