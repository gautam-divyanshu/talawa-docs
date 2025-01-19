[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/averageFeedbackScore](../README.md) / averageFeedbackScore

# Variable: averageFeedbackScore

\> `const` **averageFeedbackScore**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"averageFeedbackScore"`\]

Defined in: [src/resolvers/Event/averageFeedbackScore.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Event/averageFeedbackScore.ts#L16)

Resolver function for the `averageFeedbackScore` field of an `Event`.

This function calculates the average feedback score for a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the feedback associated with it.

## Returns

A promise that resolves to the average feedback score for the event.

## See

 - Feedback - The Feedback model used to interact with the feedback collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.
