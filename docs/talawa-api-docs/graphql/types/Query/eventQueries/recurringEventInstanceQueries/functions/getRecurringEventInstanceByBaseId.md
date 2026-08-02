[**talawa-api**](../../../../../../README.md)

***

# Function: getRecurringEventInstanceByBaseId()

> **getRecurringEventInstanceByBaseId**(`baseRecurringEventId`, `drizzleClient`, `logger`, `options?`): `Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts:289](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts#L289)

Retrieves recurring event instances for a base template, subject to the optional limit.

## Parameters

### baseRecurringEventId

`string`

The ID of the base recurring event template.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

### options?

Optional parameters: limit (default 1000), offset, includeCancelled, excludeInstanceIds.

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

- A promise that resolves to an array of fully resolved recurring event instances.
