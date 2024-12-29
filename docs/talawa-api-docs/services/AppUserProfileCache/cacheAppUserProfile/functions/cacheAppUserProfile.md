[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/AppUserProfileCache/cacheAppUserProfile](../README.md) / cacheAppUserProfile

# Function: cacheAppUserProfile()

\> **cacheAppUserProfile**(`appUserProfiles`): `Promise`\<`void`\>

Stores app user profiles in Redis cache with a specified time-to-live (TTL).

## Parameters

### appUserProfiles

[`InterfaceAppUserProfile`](../../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)[]

Array of app user profiles to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/AppUserProfileCache/cacheAppUserProfile.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/services/AppUserProfileCache/cacheAppUserProfile.ts#L10)
