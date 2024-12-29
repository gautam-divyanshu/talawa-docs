[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/deleteOrganizationFromCache](../README.md) / deleteOrganizationFromCache

# Function: deleteOrganizationFromCache()

\> **deleteOrganizationFromCache**(`organization`): `Promise`\<`void`\>

Deletes the specified organization from Redis cache.

## Parameters

### organization

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)

The InterfaceOrganization object representing the organization to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.

## Defined in

[src/services/OrganizationCache/deleteOrganizationFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/services/OrganizationCache/deleteOrganizationFromCache.ts#L10)
