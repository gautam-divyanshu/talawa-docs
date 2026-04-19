[**talawa-api**](../../../../README.md)

***

# Function: warmOrganizations()

> **warmOrganizations**(`server`): `Promise`\<`void`\>

Defined in: [src/services/caching/warming.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/services/caching/warming.ts#L12)

Warms the organization cache by loading top N organizations by member count.

## Parameters

### server

`FastifyInstance`

The Fastify server instance.

## Returns

`Promise`\<`void`\>

Resolves when the organization cache warming has completed.
