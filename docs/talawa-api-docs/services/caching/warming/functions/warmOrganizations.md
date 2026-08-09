[**talawa-api**](../../../../README.md)

***

# Function: warmOrganizations()

> **warmOrganizations**(`server`): `Promise`\<`void`\>

Defined in: [src/services/caching/warming.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/services/caching/warming.ts#L12)

Warms the organization cache by loading top N organizations by member count.

## Parameters

### server

`FastifyInstance`

The Fastify server instance.

## Returns

`Promise`\<`void`\>

Resolves when the organization cache warming has completed.
