[**talawa-api**](../../../../../../README.md)

***

# Function: filterInviteOnlyEvents()

> **filterInviteOnlyEvents**(`input`): `Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:75](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L75)

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
