[**talawa-api**](../../../README.md)

***

# Function: default()

> **default**(`fastify`, `key`, `capacity`, `refillRate`, `cost`, `logger`): `Promise`\<`boolean`\>

Defined in: [src/utilities/leakyBucket.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/leakyBucket.ts#L15)

Implements a leaky bucket rate limiter.

## Parameters

### fastify

`FastifyInstance`

The Fastify instance.

### key

`string`

The key to identify the bucket in Redis.

### capacity

`number`

The maximum capacity of the bucket.

### refillRate

`number`

The rate at which tokens are added to the bucket.

### cost

`number`

The cost in tokens for each request.

### logger

[`AppLogger`](../../logging/logger/type-aliases/AppLogger.md)

The logger instance.

## Returns

`Promise`\<`boolean`\>

- A promise that resolves to a boolean indicating if the request is allowed.
