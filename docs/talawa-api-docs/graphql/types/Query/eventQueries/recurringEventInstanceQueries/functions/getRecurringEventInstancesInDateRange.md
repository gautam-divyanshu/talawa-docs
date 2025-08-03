[**talawa-api**](../../../../../../README.md)

***

# Function: getRecurringEventInstancesInDateRange()

> **getRecurringEventInstancesInDateRange**(`input`, `drizzleClient`, `logger`): `Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/1b4a5964fc61cbcbec1a297ce4f71a2a2c39b04f/src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts#L38)

Retrieves recurring event event instances for a given organization within a specified date range.
This function resolves each instance by combining data from the base event template
with any applicable exceptions, providing a complete and accurate representation of each event instance.

## Parameters

### input

[`GetRecurringEventInstancesInput`](../interfaces/GetRecurringEventInstancesInput.md)

The input object containing organizationId, date range, and optional filters.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)[]\>

A promise that resolves to an array of fully resolved recurring event event instances.
