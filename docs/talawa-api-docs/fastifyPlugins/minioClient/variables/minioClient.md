[**talawa-api**](../../../README.md)

***

# Variable: minioClient()

> `const` **minioClient**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/fastifyPlugins/minioClient.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/fastifyPlugins/minioClient.ts#L26)

Integrates the talawa minio bucket name and a minio client instance on the namespaces `minio.bucketName` and `minio.client` respectively on the global fastify instance.

## Parameters

### fastify

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

## Returns

`Promise`\<`void`\>

## Example

```ts
import minioClientPlugin from "~src/plugins/minioClient";

fastify.register(minioClientPlugin, {});
const buckets = await fastify.minio.client.listBuckets();
```
