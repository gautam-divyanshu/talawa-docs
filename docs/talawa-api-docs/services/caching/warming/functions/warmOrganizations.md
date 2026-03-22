[**talawa-api**](../../../../README.md)

***

# Function: warmOrganizations()

> **warmOrganizations**(`server`): `Promise`\<`void`\>

Defined in: [src/services/caching/warming.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/caching/warming.ts#L12)

Warms the organization cache by loading top N organizations by member count.

## Parameters

### server

`FastifyInstance`

The Fastify server instance.

## Returns

`Promise`\<`void`\>

Resolves when the organization cache warming has completed.
