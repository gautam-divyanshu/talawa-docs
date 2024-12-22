[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/UserCache/cacheUser](../README.md) / cacheUsers

# Function: cacheUsers()

\> **cacheUsers**(`users`): `Promise`\<`void`\>

Caches the provided array of InterfaceUser objects in Redis.

## Parameters

### users

[`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md)[]

An array of InterfaceUser objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/UserCache/cacheUser.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/services/UserCache/cacheUser.ts#L11)
