[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/cacheOrganizations](../README.md) / cacheOrganizations

# Function: cacheOrganizations()

\> **cacheOrganizations**(`organizations`): `Promise`\<`void`\>

Defined in: [src/services/OrganizationCache/cacheOrganizations.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/services/OrganizationCache/cacheOrganizations.ts#L10)

Stores organizations in Redis cache with a specified time-to-live (TTL).

## Parameters

### organizations

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)[]

Array of organizations to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>
