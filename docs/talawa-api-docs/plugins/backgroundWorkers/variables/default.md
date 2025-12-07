[**talawa-api**](../../../README.md)

***

# Variable: default()

> **default**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/plugins/backgroundWorkers.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/plugins/backgroundWorkers.ts#L31)

Background worker plugin for event materialization.

This plugin:
- Initializes the background worker service
- Starts the materialization and cleanup workers
- Handles graceful shutdown of workers
- Provides worker status endpoints

## Parameters

### fastify

`FastifyInstance`

## Returns

`Promise`\<`void`\>
