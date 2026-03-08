[**talawa-api**](../../../../../README.md)

***

# Function: VolunteerMembershipEventResolver()

> **VolunteerMembershipEventResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `allDay`: `boolean`; `attachments`: `never`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/graphql/types/EventVolunteerMembership/event.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/types/EventVolunteerMembership/event.ts#L10)

## Parameters

### parent

#### createdAt

`Date`

#### createdBy

`string` \| `null`

#### eventId

`string`

#### groupId

`string` \| `null`

#### id

`string`

#### status

`"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`

#### updatedAt

`Date` \| `null`

#### updatedBy

`string` \| `null`

#### volunteerId

`string`

### \_args

`Record`\<`string`, `never`\>

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `allDay`: `boolean`; `attachments`: `never`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>
