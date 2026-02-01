[**talawa-api**](../../../README.md)

***

# Variable: pluginSystem()

> `const` **pluginSystem**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/pluginSystem.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/fastifyPlugins/pluginSystem.ts#L18)

Integrates the plugin system into the Fastify application.
This plugin initializes the plugin manager and makes it available
throughout the application lifecycle.

## Parameters

### fastify

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

## Returns

`Promise`\<`void`\>
