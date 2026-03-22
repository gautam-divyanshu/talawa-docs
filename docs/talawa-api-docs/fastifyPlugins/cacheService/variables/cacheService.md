[**talawa-api**](../../../README.md)

***

# Variable: cacheService

> `const` **cacheService**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/cacheService.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/fastifyPlugins/cacheService.ts#L24)

Fastify plugin that registers a Redis-backed CacheService on the FastifyInstance.
Uses the Redis client already registered by @fastify/redis.

## Parameters

### fastify

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

## Returns

`Promise`\<`void`\>

## Example

```typescript
// In a resolver
const org = await ctx.cache.get(`talawa:v1:organization:${id}`);
```
