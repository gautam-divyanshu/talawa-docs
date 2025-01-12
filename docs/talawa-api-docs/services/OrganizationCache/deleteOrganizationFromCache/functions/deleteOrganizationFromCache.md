[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/deleteOrganizationFromCache](../README.md) / deleteOrganizationFromCache

# Function: deleteOrganizationFromCache()

\> **deleteOrganizationFromCache**(`organization`): `Promise`\<`void`\>

Defined in: [src/services/OrganizationCache/deleteOrganizationFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/services/OrganizationCache/deleteOrganizationFromCache.ts#L10)

Deletes the specified organization from Redis cache.

## Parameters

### organization

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)

The InterfaceOrganization object representing the organization to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.
