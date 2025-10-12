[**talawa-api**](../../../../../README.md)

***

# Function: resolveActionItemsPaginated()

> **resolveActionItemsPaginated**(`parent`, `args`, `ctx`): `Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/defaultGraphQLConnection/type-aliases/DefaultGraphQLConnection.md)\<\{ `assignedAt`: `Date`; `assigneeId`: `string`; `categoryId`: `string`; `completionAt`: `Date`; `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean`; `organizationId`: `string`; `postCompletionNotes`: `string`; `preCompletionNotes`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>\>

Defined in: [src/graphql/types/Event/actionItems.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/graphql/types/Event/actionItems.ts#L59)

## Parameters

### parent

[`Event`](../../Event/type-aliases/Event.md)

### args

#### after?

`string` = `...`

#### before?

`string` = `...`

#### first?

`number` = `...`

#### last?

`number` = `...`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

## Returns

`Promise`\<[`DefaultGraphQLConnection`](../../../../../utilities/defaultGraphQLConnection/type-aliases/DefaultGraphQLConnection.md)\<\{ `assignedAt`: `Date`; `assigneeId`: `string`; `categoryId`: `string`; `completionAt`: `Date`; `createdAt`: `Date`; `creatorId`: `string`; `eventId`: `string`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean`; `organizationId`: `string`; `postCompletionNotes`: `string`; `preCompletionNotes`: `string`; `recurringEventInstanceId`: `string`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>\>
