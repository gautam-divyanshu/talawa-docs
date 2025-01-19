[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / checkExistingRedis

# Function: checkExistingRedis()

\> **checkExistingRedis**(): `Promise`\<`string` \| `null`\>

Defined in: [src/setup/redisConfiguration.ts:71](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/setup/redisConfiguration.ts#L71)

The function `checkExistingRedis` checks if there is an existing Redis connection by iterating
through a list of Redis URLs and testing the connection.

## Returns

`Promise`\<`string` \| `null`\>

The function `checkExistingRedis` returns a Promise that resolves to a string or null.
