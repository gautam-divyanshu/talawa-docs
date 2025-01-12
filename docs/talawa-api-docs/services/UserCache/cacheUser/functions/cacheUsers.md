[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/UserCache/cacheUser](../README.md) / cacheUsers

# Function: cacheUsers()

\> **cacheUsers**(`users`): `Promise`\<`void`\>

Defined in: [src/services/UserCache/cacheUser.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/services/UserCache/cacheUser.ts#L11)

Caches the provided array of InterfaceUser objects in Redis.

## Parameters

### users

[`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md)[]

An array of InterfaceUser objects to be cached.

## Returns

`Promise`\<`void`\>

A promise resolving to void.
