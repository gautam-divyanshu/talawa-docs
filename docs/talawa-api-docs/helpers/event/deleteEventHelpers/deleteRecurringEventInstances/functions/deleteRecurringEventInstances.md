[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/deleteEventHelpers/deleteRecurringEventInstances](../README.md) / deleteRecurringEventInstances

# Function: deleteRecurringEventInstances()

\> **deleteRecurringEventInstances**(`event`, `recurrenceRule`, `baseRecurringEvent`, `session`): `Promise`\<`void`\>

Defined in: [src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/helpers/event/deleteEventHelpers/deleteRecurringEventInstances.ts#L32)

Deletes all instances or thisAndFollowingInstances of a recurring event.

## Parameters

### event

The event instance to be deleted:
  - For thisAndFollowingInstances, represents the starting instance.
  - For allInstances, should be null.

`null` | [`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

### recurrenceRule

[`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)

The recurrence rule associated with the instances.

### baseRecurringEvent

[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The base recurring event from which instances are derived.

### session

`ClientSession`

## Returns

`Promise`\<`void`\>

## Remarks

This function performs the following steps:
1. Constructs a query object to fetch instances based on the delete type.
2. Retrieves and deletes all associated documents (attendees, users, profiles, action items).
3. Deletes the instances themselves.
4. Updates the recurrence rule and base recurring event as needed.
5. Removes any dangling documents related to the recurrence rule and base recurring event.
