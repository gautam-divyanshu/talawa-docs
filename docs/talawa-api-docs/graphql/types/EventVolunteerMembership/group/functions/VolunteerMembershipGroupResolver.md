[**talawa-api**](../../../../../README.md)

***

# Function: VolunteerMembershipGroupResolver()

> **VolunteerMembershipGroupResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `eventId`: `string`; `id`: `string`; `isTemplate`: `boolean`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; `volunteersRequired`: `number`; \}\>

Defined in: [src/graphql/types/EventVolunteerMembership/group.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/graphql/types/EventVolunteerMembership/group.ts#L10)

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

`Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `eventId`: `string`; `id`: `string`; `isTemplate`: `boolean`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; `volunteersRequired`: `number`; \}\>
