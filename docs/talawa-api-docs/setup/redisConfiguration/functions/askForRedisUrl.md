[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [setup/redisConfiguration](../README.md) / askForRedisUrl

# Function: askForRedisUrl()

\> **askForRedisUrl**(): `Promise`\<\{ `host`: `string`; `password`: `string`; `port`: `number`; \}\>

Defined in: [src/setup/redisConfiguration.ts:36](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/setup/redisConfiguration.ts#L36)

The function `askForRedisUrl` prompts the user to enter the Redis hostname, port, and password, and
returns an object with these values.

## Returns

`Promise`\<\{ `host`: `string`; `password`: `string`; `port`: `number`; \}\>

The function `askForRedisUrl` returns a promise that resolves to an object with the
properties `host`, `port`, and `password`.
