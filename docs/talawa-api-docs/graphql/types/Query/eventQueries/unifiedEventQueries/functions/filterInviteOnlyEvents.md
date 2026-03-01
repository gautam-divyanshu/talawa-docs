[**talawa-api**](../../../../../../README.md)

***

# Function: filterInviteOnlyEvents()

> **filterInviteOnlyEvents**(`input`): `Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:74](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L74)

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
