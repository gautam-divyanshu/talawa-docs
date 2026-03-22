[**talawa-api**](../../../../../../README.md)

***

# Function: getEventsByIds()

> **getEventsByIds**(`eventIds`, `drizzleClient`, `logger`): `Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:363](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L363)

Retrieves events by their specific IDs, supporting both standalone events and
generated instances in a single, unified query. This function is used by the
`eventsByIds` GraphQL query to fetch a mixed list of event types.

## Parameters

### eventIds

`string`[]

An array of event IDs to retrieve.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<[`EventWithAttachments`](../type-aliases/EventWithAttachments.md)[]\>

- A promise that resolves to an array of the requested event objects,
         unified into a common format.
