[**talawa-api**](../../../../README.md)

***

# Function: invalidateEntityLists()

> **invalidateEntityLists**(`cache`, `entity`): `Promise`\<`void`\>

Defined in: [src/services/caching/invalidation.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/services/caching/invalidation.ts#L36)

Invalidate all list caches for a specific entity type.
Use this after mutations that affect list queries (create, delete, bulk update).

## Parameters

### cache

[`CacheService`](../../CacheService/interfaces/CacheService.md)

The cache service instance.

### entity

`string`

The entity type.

## Returns

`Promise`\<`void`\>

## Example

```typescript
await invalidateEntityLists(ctx.cache, "organization");
```
