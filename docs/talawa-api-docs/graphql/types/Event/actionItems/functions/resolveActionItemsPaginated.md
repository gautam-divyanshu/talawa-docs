[**talawa-api**](../../../../../README.md)

***

# Function: resolveActionItemsPaginated()

> **resolveActionItemsPaginated**(`parent`, `args`, `ctx`): `Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/graphqlConnection/types/type-aliases/DefaultGraphQLConnection.md)\<\{ `assignedAt`: `Date`; `categoryId`: `string` \| `null`; `completionAt`: `Date` \| `null`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `eventId`: `string` \| `null`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean` \| `null`; `organizationId`: `string`; `postCompletionNotes`: `string` \| `null`; `preCompletionNotes`: `string` \| `null`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteerGroupId`: `string` \| `null`; `volunteerId`: `string` \| `null`; \}\>\>

Defined in: [src/graphql/types/Event/actionItems.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/types/Event/actionItems.ts#L59)

## Parameters

### parent

[`Event`](../../Event/type-aliases/Event.md)

### args

#### after?

`string` \| `null` = `...`

#### before?

`string` \| `null` = `...`

#### first?

`number` \| `null` = `...`

#### last?

`number` \| `null` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/graphqlConnection/types/type-aliases/DefaultGraphQLConnection.md)\<\{ `assignedAt`: `Date`; `categoryId`: `string` \| `null`; `completionAt`: `Date` \| `null`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `eventId`: `string` \| `null`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean` \| `null`; `organizationId`: `string`; `postCompletionNotes`: `string` \| `null`; `preCompletionNotes`: `string` \| `null`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteerGroupId`: `string` \| `null`; `volunteerId`: `string` \| `null`; \}\>\>
