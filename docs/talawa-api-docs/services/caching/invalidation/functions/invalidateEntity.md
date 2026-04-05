[**talawa-api**](../../../../README.md)

***

# Function: invalidateEntity()

> **invalidateEntity**(`cache`, `entity`, `id`): `Promise`\<`void`\>

Defined in: [src/services/caching/invalidation.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/services/caching/invalidation.ts#L16)

Invalidate a specific entity from the cache.

## Parameters

### cache

An object with a `del` method (e.g., CacheService or metrics proxy).

#### del

### entity

`string`

The entity type (e.g., "user", "organization").

### id

`string` \| `number`

The entity ID.

## Returns

`Promise`\<`void`\>

## Example

```typescript
await invalidateEntity(ctx.cache, "organization", args.id);
```
