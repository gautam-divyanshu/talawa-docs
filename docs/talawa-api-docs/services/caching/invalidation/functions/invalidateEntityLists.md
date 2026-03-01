[**talawa-api**](../../../../README.md)

***

# Function: invalidateEntityLists()

> **invalidateEntityLists**(`cache`, `entity`): `Promise`\<`void`\>

Defined in: [src/services/caching/invalidation.ts:37](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/services/caching/invalidation.ts#L37)

Invalidate all list caches for a specific entity type.
Use this after mutations that affect list queries (create, delete, bulk update).

## Parameters

### cache

An object with a `clearByPattern` method (e.g., CacheService or metrics proxy).

#### clearByPattern

### entity

`string`

The entity type.

## Returns

`Promise`\<`void`\>

## Example

```typescript
await invalidateEntityLists(ctx.cache, "organization");
```
