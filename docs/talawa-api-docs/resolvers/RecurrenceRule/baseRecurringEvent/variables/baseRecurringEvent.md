[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/RecurrenceRule/baseRecurringEvent](../README.md) / baseRecurringEvent

# Variable: baseRecurringEvent

\> `const` **baseRecurringEvent**: [`RecurrenceRuleResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/RecurrenceRuleResolvers.md)\[`"baseRecurringEvent"`\]

Defined in: [src/resolvers/RecurrenceRule/baseRecurringEvent.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/RecurrenceRule/baseRecurringEvent.ts#L16)

Resolver function for the `baseRecurringEvent` field of a `RecurrenceRule`.

This function retrieves the base recurring event associated with a specific recurrence rule.

## Param

The parent object representing the recurrence rule. It contains information about the recurrence rule, including the ID of the base recurring event associated with it.

## Returns

A promise that resolves to the event document found in the database. This document represents the base recurring event associated with the recurrence rule.

## See

 - Event - The Event model used to interact with the events collection in the database.
 - RecurrenceRuleResolvers - The type definition for the resolvers of the RecurrenceRule fields.
