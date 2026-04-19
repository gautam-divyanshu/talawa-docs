[**talawa-api**](../../../../../../README.md)

***

# Function: getRecurringEventInstancesByBaseIds()

> **getRecurringEventInstancesByBaseIds**(`baseRecurringEventIds`, `drizzleClient`, `logger`, `options?`): `Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts:326](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts#L326)

Retrieves all recurring event instances for multiple base recurring event templates.
This is a batch version of getRecurringEventInstancesByBaseId to avoid N+1 queries.

## Parameters

### baseRecurringEventIds

`string`[]

Array of base recurring event template IDs.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client.

### logger

`FastifyBaseLogger`

The logger.

### options?

#### excludeInstanceIds?

`string`[]

#### includeCancelled?

`boolean`

#### limit?

`number`

#### offset?

`number`

## Returns

`Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

- Promise resolving to array of resolved instances.
