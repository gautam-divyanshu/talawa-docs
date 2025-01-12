[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / checkExistingRedis

# Function: checkExistingRedis()

\> **checkExistingRedis**(): `Promise`\<`string` \| `null`\>

Defined in: [src/setup/redisConfiguration.ts:71](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/setup/redisConfiguration.ts#L71)

The function `checkExistingRedis` checks if there is an existing Redis connection by iterating
through a list of Redis URLs and testing the connection.

## Returns

`Promise`\<`string` \| `null`\>

The function `checkExistingRedis` returns a Promise that resolves to a string or null.
