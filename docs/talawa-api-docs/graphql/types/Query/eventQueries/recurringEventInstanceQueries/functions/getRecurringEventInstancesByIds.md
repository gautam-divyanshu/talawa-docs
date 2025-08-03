[**talawa-api**](../../../../../../README.md)

***

# Function: getRecurringEventInstancesByIds()

> **getRecurringEventInstancesByIds**(`instanceIds`, `drizzleClient`, `logger`): `Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts:96](https://github.com/PalisadoesFoundation/talawa-api/blob/1b4a5964fc61cbcbec1a297ce4f71a2a2c39b04f/src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts#L96)

Retrieves multiple resolved recurring event instances by their specific IDs.
This function performs a batch operation to efficiently fetch and resolve instances,
avoiding the N+1 query problem.

## Parameters

### instanceIds

`string`[]

An array of recurring event instance IDs to retrieve.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

A promise that resolves to an array of the requested resolved recurring event event instances.
