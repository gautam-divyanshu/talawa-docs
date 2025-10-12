[**talawa-api**](../../../../../README.md)

***

# Function: VolunteerMembershipEventResolver()

> **VolunteerMembershipEventResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `allDay`: `boolean`; `attachments`: `any`[]; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/graphql/types/EventVolunteerMembership/event.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/graphql/types/EventVolunteerMembership/event.ts#L10)

## Parameters

### parent

#### createdAt

`Date`

#### createdBy

`string`

#### eventId

`string`

#### groupId

`string`

#### id

`string`

#### status

`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`

#### updatedAt

`Date`

#### updatedBy

`string`

#### volunteerId

`string`

### \_args

`Record`\<`string`, `never`\>

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `allDay`: `boolean`; `attachments`: `any`[]; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>
