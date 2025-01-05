[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/deleteEventHelpers/deleteSingleEvent](../README.md) / deleteSingleEvent

# Function: deleteSingleEvent()

\> **deleteSingleEvent**(`eventId`, `session`, `recurrenceRule`?, `baseRecurringEvent`?): `Promise`\<`void`\>

Defined in: [src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/helpers/event/deleteEventHelpers/deleteSingleEvent.ts#L25)

Deletes a single event.

## Parameters

### eventId

`string`

The ID of the event to be deleted.

### session

`ClientSession`

The MongoDB client session for transactional operations.

### recurrenceRule?

`string`

Optional ID of the recurrence rule associated with the event (for recurring events).

### baseRecurringEvent?

`string`

Optional ID of the base recurring event (for recurring events).

## Returns

`Promise`\<`void`\>

## Remarks

This function performs the following steps:
1. Removes all associations (attendees, users, profiles, action items) related to the event.
2. Deletes the event document itself.
3. If provided, removes any dangling documents related to the recurrence rule and base recurring event.
