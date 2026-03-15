[**talawa-api**](../../../../../README.md)

***

# Function: EventVolunteerEventResolver()

> **EventVolunteerEventResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `allDay`: `boolean`; `attachments`: `never`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date` \| `null`; `endDate`: `string` \| `null`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date` \| `null`; `startDate`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/graphql/types/EventVolunteer/event.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/graphql/types/EventVolunteer/event.ts#L18)

Resolves the event that an event volunteer is associated with.

## Parameters

### parent

[`EventVolunteer`](../../EventVolunteer/type-aliases/EventVolunteer.md)

The parent EventVolunteer object containing the eventId.

### \_args

`Record`\<`string`, `never`\>

GraphQL arguments (unused).

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

The GraphQL context containing dataloaders and logging utilities.

## Returns

`Promise`\<\{ `allDay`: `boolean`; `attachments`: `never`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date` \| `null`; `endDate`: `string` \| `null`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date` \| `null`; `startDate`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

The event the volunteer is associated with.

## Throws

TalawaGraphQLError with code "unauthenticated" if user is not authenticated.

## Throws

TalawaGraphQLError with code "unexpected" if event is not found (indicates data corruption).
