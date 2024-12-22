[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getVolunteerRanks](../README.md) / getVolunteerRanks

# Variable: getVolunteerRanks

\> `const` **getVolunteerRanks**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getVolunteerRanks"`\]

This query will fetch volunteer ranks based on the provided time frame (allTime, weekly, monthly, yearly),
and it will filter the results based on an array of volunteer IDs.

## Param

parent of the current request

## Param

An object that contains where object for volunteer ranks.

## Returns

An array of `VolunteerRank` object.

## Defined in

[src/resolvers/Query/getVolunteerRanks.ts:14](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Query/getVolunteerRanks.ts#L14)
