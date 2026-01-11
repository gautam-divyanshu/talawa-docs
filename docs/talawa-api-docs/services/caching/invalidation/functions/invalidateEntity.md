[**talawa-api**](../../../../README.md)

***

# Function: invalidateEntity()

> **invalidateEntity**(`cache`, `entity`, `id`): `Promise`\<`void`\>

Defined in: [src/services/caching/invalidation.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/services/caching/invalidation.ts#L16)

Invalidate a specific entity from the cache.

## Parameters

### cache

[`CacheService`](../../CacheService/interfaces/CacheService.md)

The cache service instance.

### entity

`string`

The entity type (e.g., "user", "organization").

### id

The entity ID.

`string` | `number`

## Returns

`Promise`\<`void`\>

## Example

```typescript
await invalidateEntity(ctx.cache, "organization", args.id);
```
