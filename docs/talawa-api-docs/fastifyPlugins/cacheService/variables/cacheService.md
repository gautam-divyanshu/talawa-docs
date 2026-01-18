[**talawa-api**](../../../README.md)

***

# Variable: cacheService()

> `const` **cacheService**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/cacheService.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/fastifyPlugins/cacheService.ts#L24)

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
