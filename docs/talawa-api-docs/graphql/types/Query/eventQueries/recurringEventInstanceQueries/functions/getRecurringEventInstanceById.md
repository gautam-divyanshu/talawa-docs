[**talawa-api**](../../../../../../README.md)

***

# Function: getRecurringEventInstanceById()

> **getRecurringEventInstanceById**(`instanceId`, `organizationId`, `drizzleClient`, `logger`): `Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)\>

Defined in: [src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts:158](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/graphql/types/Query/eventQueries/recurringEventInstanceQueries.ts#L158)

Retrieves a single resolved recurring event instance by its ID and organization ID.

## Parameters

### instanceId

`string`

The ID of the recurring event instance to retrieve.

### organizationId

`string`

The ID of the organization to which the instance belongs.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<[`ResolvedRecurringEventInstance`](../../../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)\>

A promise that resolves to the resolved recurring event event instance, or null if not found.
