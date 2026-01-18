[**talawa-api**](../../../../../README.md)

***

# Function: VolunteerMembershipGroupResolver()

> **VolunteerMembershipGroupResolver**(`parent`, `_args`, `ctx`): `Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `eventId`: `string`; `id`: `string`; `isTemplate`: `boolean`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteersRequired`: `number` \| `null`; \} \| `null`\>

Defined in: [src/graphql/types/EventVolunteerMembership/group.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/types/EventVolunteerMembership/group.ts#L10)

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

`Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `eventId`: `string`; `id`: `string`; `isTemplate`: `boolean`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteersRequired`: `number` \| `null`; \} \| `null`\>
