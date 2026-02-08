[**talawa-api**](../../../README.md)

***

# Variable: default()

> **default**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/backgroundWorkers.ts:53](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/fastifyPlugins/backgroundWorkers.ts#L53)

Background worker plugin for event materialization.

This plugin:
- Initializes the background worker service
- Starts the materialization and cleanup workers
- Starts metrics aggregation worker if enabled (requires performance plugin)
- Handles graceful shutdown of workers
- Provides worker status endpoints

**Dependencies:** The performance plugin must be registered before this plugin.
This is enforced via the `dependencies` array in the plugin configuration.

## Parameters

### fastify

`FastifyInstance`

## Returns

`Promise`\<`void`\>
