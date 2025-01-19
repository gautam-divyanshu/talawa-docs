[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/deleteOrganizationFromCache](../README.md) / deleteOrganizationFromCache

# Function: deleteOrganizationFromCache()

\> **deleteOrganizationFromCache**(`organization`): `Promise`\<`void`\>

Defined in: [src/services/OrganizationCache/deleteOrganizationFromCache.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/services/OrganizationCache/deleteOrganizationFromCache.ts#L10)

Deletes the specified organization from Redis cache.

## Parameters

### organization

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)

The InterfaceOrganization object representing the organization to delete.

## Returns

`Promise`\<`void`\>

A promise resolving to void.
