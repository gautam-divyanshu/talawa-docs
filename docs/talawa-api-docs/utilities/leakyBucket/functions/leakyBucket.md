[**talawa-api**](../../../README.md)

***

# Function: leakyBucket()

> **leakyBucket**(`redis`, `key`, `max`, `windowMs`, `logger?`): `Promise`\<[`LeakyBucketResult`](../type-aliases/LeakyBucketResult.md)\>

Defined in: [src/utilities/leakyBucket.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/utilities/leakyBucket.ts#L41)

Implements a leaky bucket rate limiter using Redis ZSETs (sliding window).

## Parameters

### redis

`RedisZ`

The Redis client interface.

### key

`string`

The key to identify the bucket in Redis.

### max

`number`

The maximum number of requests allowed in the window.

### windowMs

`number`

The time window in milliseconds.

### logger?

`FastifyBaseLogger`

Optional logger instance.

## Returns

`Promise`\<[`LeakyBucketResult`](../type-aliases/LeakyBucketResult.md)\>

- A promise that resolves to the rate limit result.
