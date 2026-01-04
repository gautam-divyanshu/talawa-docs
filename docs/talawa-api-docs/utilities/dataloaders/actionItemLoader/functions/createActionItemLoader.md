[**talawa-api**](../../../../README.md)

***

# Function: createActionItemLoader()

> **createActionItemLoader**(`db`): `DataLoader`\<`string`, \{ `assignedAt`: `Date`; `categoryId`: `string` \| `null`; `completionAt`: `Date` \| `null`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `eventId`: `string` \| `null`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean` \| `null`; `organizationId`: `string`; `postCompletionNotes`: `string` \| `null`; `preCompletionNotes`: `string` \| `null`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteerGroupId`: `string` \| `null`; `volunteerId`: `string` \| `null`; \} \| `null`, `string`\>

Defined in: [src/utilities/dataloaders/actionItemLoader.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/utilities/dataloaders/actionItemLoader.ts#L23)

Creates a DataLoader for batching action item lookups by ID.

## Parameters

### db

[`DrizzleClient`](../../../../fastifyPlugins/drizzleClient/type-aliases/DrizzleClient.md)

The Drizzle client instance for database operations.

## Returns

`DataLoader`\<`string`, \{ `assignedAt`: `Date`; `categoryId`: `string` \| `null`; `completionAt`: `Date` \| `null`; `createdAt`: `Date`; `creatorId`: `string` \| `null`; `eventId`: `string` \| `null`; `id`: `string`; `isCompleted`: `boolean`; `isTemplate`: `boolean` \| `null`; `organizationId`: `string`; `postCompletionNotes`: `string` \| `null`; `preCompletionNotes`: `string` \| `null`; `recurringEventInstanceId`: `string` \| `null`; `updatedAt`: `Date` \| `null`; `updaterId`: `string` \| `null`; `volunteerGroupId`: `string` \| `null`; `volunteerId`: `string` \| `null`; \} \| `null`, `string`\>

A DataLoader that batches and caches action item lookups within a single request.

## Example

```typescript
const actionItemLoader = createActionItemLoader(drizzleClient);
const actionItem = await actionItemLoader.load(actionItemId);
```
