[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/eventsAttendedByUser](../README.md) / eventsAttendedByUser

# Variable: eventsAttendedByUser

\> `const` **eventsAttendedByUser**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"eventsAttendedByUser"`\]

This query will fetch all the events for which user attended from the database.

## Param

## Param

An object that contains `id` of the user and `orderBy`.

## Returns

An object that contains the Event data.

## Remarks

The query function uses `getSort()` function to sort the data in specified.

## Defined in

[src/resolvers/Query/eventsAttendedByUser.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Query/eventsAttendedByUser.ts#L12)
