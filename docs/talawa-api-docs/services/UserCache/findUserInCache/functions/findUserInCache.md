[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/UserCache/findUserInCache](../README.md) / findUserInCache

# Function: findUserInCache()

\> **findUserInCache**(`ids`): `Promise`\<([`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md) \| `null`)[]\>

Defined in: [src/services/UserCache/findUserInCache.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/services/UserCache/findUserInCache.ts#L12)

Retrieves user data from cache based on provided IDs.

## Parameters

### ids

`string`[]

An array of user IDs to retrieve from cache.

## Returns

`Promise`\<([`InterfaceUser`](../../../../models/User/interfaces/InterfaceUser.md) \| `null`)[]\>

A promise resolving to an array of InterfaceUser objects or null if not found in cache.
