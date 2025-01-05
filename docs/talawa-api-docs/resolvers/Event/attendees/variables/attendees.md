[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/attendees](../README.md) / attendees

# Variable: attendees

\> `const` **attendees**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"attendees"`\]

Defined in: [src/resolvers/Event/attendees.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Event/attendees.ts#L16)

Resolver function for the `attendees` field of an `Event`.

This function retrieves the attendees of an event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the event.

## Returns

A promise that resolves to the user documents found in the database. These documents represent the attendees of the event.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.
