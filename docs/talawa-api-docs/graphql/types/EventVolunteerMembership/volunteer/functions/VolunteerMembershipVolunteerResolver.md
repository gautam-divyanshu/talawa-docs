[**talawa-api**](../../../../../README.md)

***

# Function: VolunteerMembershipVolunteerResolver()

> **VolunteerMembershipVolunteerResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `hasAccepted`: `boolean`; `hoursVolunteered`: `string`; `id`: `string`; `isPublic`: `boolean`; `isTemplate`: `boolean`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; `userId`: `string`; \}\>

Defined in: [src/graphql/types/EventVolunteerMembership/volunteer.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/types/EventVolunteerMembership/volunteer.ts#L10)

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

`Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `hasAccepted`: `boolean`; `hoursVolunteered`: `string`; `id`: `string`; `isPublic`: `boolean`; `isTemplate`: `boolean`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; `userId`: `string`; \}\>
