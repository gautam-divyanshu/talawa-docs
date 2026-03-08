[**talawa-api**](../../../../../../README.md)

***

# Function: filterInviteOnlyEvents()

> **filterInviteOnlyEvents**(`input`): `Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:74](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L74)

Filters invite-only events based on visibility rules.
An invite-only event is only visible to:
1. The event creator
2. Organization admins
3. Users explicitly invited to the event

## Parameters

### input

[`FilterInviteOnlyEventsInput`](../interfaces/FilterInviteOnlyEventsInput.md)

The input object containing events and user context.

## Returns

`Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

- A filtered array of events that the user can view.
