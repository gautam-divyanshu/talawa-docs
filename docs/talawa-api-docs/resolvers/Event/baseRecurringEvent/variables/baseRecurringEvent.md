[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/baseRecurringEvent](../README.md) / baseRecurringEvent

# Variable: baseRecurringEvent

\> `const` **baseRecurringEvent**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"baseRecurringEvent"`\]

Defined in: [src/resolvers/Event/baseRecurringEvent.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Event/baseRecurringEvent.ts#L16)

Resolver function for the `baseRecurringEvent` field of an `Event`.

This function retrieves the base recurring event of a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the base recurring event.

## Returns

A promise that resolves to the event document found in the database. This document represents the base recurring event of the event.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.
