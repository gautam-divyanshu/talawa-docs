[**talawa-api**](../../../../README.md)

***

# Function: warmOrganizations()

> **warmOrganizations**(`server`): `Promise`\<`void`\>

Defined in: [src/services/caching/warming.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/services/caching/warming.ts#L12)

Warms the organization cache by loading top N organizations by member count.

## Parameters

### server

`FastifyInstance`

The Fastify server instance.

## Returns

`Promise`\<`void`\>

Resolves when the organization cache warming has completed.
