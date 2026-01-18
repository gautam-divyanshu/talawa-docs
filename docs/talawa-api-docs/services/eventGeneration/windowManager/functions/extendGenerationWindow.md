[**talawa-api**](../../../../README.md)

***

# Function: extendGenerationWindow()

> **extendGenerationWindow**(`organizationId`, `additionalMonths`, `drizzleClient`, `logger`): `Promise`\<`Date`\>

Defined in: [src/services/eventGeneration/windowManager.ts:101](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/eventGeneration/windowManager.ts#L101)

Extends the Generation window for an organization by a specified number of months,
allowing for the generation of future event instances.

## Parameters

### organizationId

`string`

The ID of the organization whose window is to be extended.

### additionalMonths

`number`

The number of months to extend the window by.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging debug and error messages.

## Returns

`Promise`\<`Date`\>

- A promise that resolves to the new end date of the Generation window.
