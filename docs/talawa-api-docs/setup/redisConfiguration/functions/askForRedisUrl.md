[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / askForRedisUrl

# Function: askForRedisUrl()

\> **askForRedisUrl**(): `Promise`\<\{ `host`: `string`; `password`: `string`; `port`: `number`; \}\>

The function `askForRedisUrl` prompts the user to enter the Redis hostname, port, and password, and
returns an object with these values.

## Returns

`Promise`\<\{ `host`: `string`; `password`: `string`; `port`: `number`; \}\>

The function `askForRedisUrl` returns a promise that resolves to an object with the
properties `host`, `port`, and `password`.

## Defined in

[src/setup/redisConfiguration.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/setup/redisConfiguration.ts#L36)
