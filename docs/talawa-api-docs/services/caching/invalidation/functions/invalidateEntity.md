[**talawa-api**](../../../../README.md)

***

# Function: invalidateEntity()

> **invalidateEntity**(`cache`, `entity`, `id`): `Promise`\<`void`\>

Defined in: [src/services/caching/invalidation.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/services/caching/invalidation.ts#L16)

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
