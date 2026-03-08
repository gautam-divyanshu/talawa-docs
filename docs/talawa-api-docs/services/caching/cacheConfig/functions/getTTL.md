[**talawa-api**](../../../../README.md)

***

# Function: getTTL()

> **getTTL**(`entity`): `number`

Defined in: [src/services/caching/cacheConfig.ts:75](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/services/caching/cacheConfig.ts#L75)

Get the TTL for a specific entity type.
Respects environment variable overrides via CACHE_ENTITY_TTLS.

## Parameters

### entity

keyof [`EntityTTL`](../type-aliases/EntityTTL.md)

The entity type.

## Returns

`number`

TTL in seconds.
