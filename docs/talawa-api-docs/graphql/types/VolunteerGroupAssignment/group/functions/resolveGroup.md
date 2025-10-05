[**talawa-api**](../../../../../README.md)

***

# Function: resolveGroup()

> **resolveGroup**(`parent`, `_args`, `ctx`): `Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `id`: `string`; `leaderId`: `string`; `maxVolunteerCount`: `number`; `name`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/graphql/types/VolunteerGroupAssignment/group.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/graphql/types/VolunteerGroupAssignment/group.ts#L15)

## Parameters

### parent

#### assigneeId

`string`

#### createdAt

`Date`

#### creatorId

`string`

#### groupId

`string`

#### inviteStatus

`"accepted"` \| `"declined"` \| `"no_response"`

#### updatedAt

`Date`

#### updaterId

`string`

### \_args

`Record`\<`string`, `never`\>

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `id`: `string`; `leaderId`: `string`; `maxVolunteerCount`: `number`; `name`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>
