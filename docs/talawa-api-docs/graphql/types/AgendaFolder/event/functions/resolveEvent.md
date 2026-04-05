[**talawa-api**](../../../../../README.md)

***

# Function: resolveEvent()

> **resolveEvent**(`parent`, `_args`, `ctx`): `Promise`\<\{ `allDay`: `boolean`; `attachments`: `object`[]; `attachmentsWhereEvent`: `object`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date` \| `null`; `endDate`: `string` \| `null`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date` \| `null`; `startDate`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>

Defined in: [src/graphql/types/AgendaFolder/event.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/graphql/types/AgendaFolder/event.ts#L9)

## Parameters

### parent

#### createdAt

`Date`

#### creatorId

`string` \| `null`

#### description

`string` \| `null`

#### eventId

`string`

#### id

`string`

#### isDefaultFolder

`boolean`

#### name

`string`

#### organizationId

`string`

#### sequence

`number` \| `null`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

### \_args

`Record`\<`string`, `never`\>

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<\{ `allDay`: `boolean`; `attachments`: `object`[]; `attachmentsWhereEvent`: `object`[]; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `description`: `string` \| `null`; `endAt`: `Date` \| `null`; `endDate`: `string` \| `null`; `id`: `string`; `isInviteOnly`: `boolean`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date` \| `null`; `startDate`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; \}\>
