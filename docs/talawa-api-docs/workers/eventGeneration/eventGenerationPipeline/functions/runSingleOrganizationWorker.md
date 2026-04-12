[**talawa-api**](../../../../README.md)

***

# Function: runSingleOrganizationWorker()

> **runSingleOrganizationWorker**(`organizationId`, `drizzleClient`, `logger`): `Promise`\<[`WorkerResult`](../interfaces/WorkerResult.md)\>

Defined in: [src/workers/eventGeneration/eventGenerationPipeline.ts:139](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/workers/eventGeneration/eventGenerationPipeline.ts#L139)

Manually triggers the materialization process for a single, specific organization.

## Parameters

### organizationId

`string`

The ID of the organization to process.

### drizzleClient

`NodePgDatabase`\<[`drizzle/schema`](../../../../drizzle/schema/README.md)\>

The Drizzle ORM client for database access.

### logger

`FastifyBaseLogger`

The logger for logging the process.

## Returns

`Promise`\<[`WorkerResult`](../interfaces/WorkerResult.md)\>

- A promise that resolves to the result of the processing for the specified organization.
