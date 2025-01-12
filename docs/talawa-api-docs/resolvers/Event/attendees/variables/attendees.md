[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/attendees](../README.md) / attendees

# Variable: attendees

\> `const` **attendees**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"attendees"`\]

Defined in: [src/resolvers/Event/attendees.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Event/attendees.ts#L16)

Resolver function for the `attendees` field of an `Event`.

This function retrieves the attendees of an event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the event.

## Returns

A promise that resolves to the user documents found in the database. These documents represent the attendees of the event.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.
