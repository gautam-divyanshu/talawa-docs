[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/getRecurringEvents](../README.md) / getRecurringEvents

# Variable: getRecurringEvents

\> `const` **getRecurringEvents**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"getRecurringEvents"`\]

This query will fetch all the events with the same BaseRecurringEventId from the database.

## Param

## Param

An object that contains `baseRecurringEventId` of the base recurring event.

## Returns

An array of `Event` objects that are instances of the base recurring event.

## Defined in

[src/resolvers/Query/getRecurringEvents.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Query/getRecurringEvents.ts#L11)
