[**talawa-api**](../../../../README.md)

***

# Function: wrapWithCache()

> **wrapWithCache**\<`K`, `V`\>(`batchFn`, `opts`): (`keys`) => `Promise`\<(`V` \| `null`)[]\>

Defined in: [src/services/caching/wrappers.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/services/caching/wrappers.ts#L47)

Wraps a batch function with caching support.
Ideal for integrating with DataLoader to add a cache layer.

## Type Parameters

### K

`K`

### V

`V`

## Parameters

### batchFn

(`keys`) => `Promise`\<(`V` \| `null`)[]\>

The original batch function that fetches data.

### opts

[`WrapWithCacheOptions`](../interfaces/WrapWithCacheOptions.md)\<`K`, `V`\>

Caching options.

## Returns

A wrapped batch function that checks cache first.

> (`keys`): `Promise`\<(`V` \| `null`)[]\>

### Parameters

#### keys

readonly `K`[]

### Returns

`Promise`\<(`V` \| `null`)[]\>

## Example

```typescript
const cachedBatch = wrapWithCache(batchFn, {
  cache: ctx.cache,
  entity: "user",
  keyFn: (id) => id,
  ttlSeconds: 300,
});
return new DataLoader(cachedBatch);
```
