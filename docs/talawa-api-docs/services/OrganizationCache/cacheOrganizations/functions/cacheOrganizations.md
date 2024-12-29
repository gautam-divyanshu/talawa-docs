[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/cacheOrganizations](../README.md) / cacheOrganizations

# Function: cacheOrganizations()

\> **cacheOrganizations**(`organizations`): `Promise`\<`void`\>

Stores organizations in Redis cache with a specified time-to-live (TTL).

## Parameters

### organizations

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)[]

Array of organizations to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/OrganizationCache/cacheOrganizations.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/services/OrganizationCache/cacheOrganizations.ts#L10)
