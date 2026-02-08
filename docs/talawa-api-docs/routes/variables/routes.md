[**talawa-api**](../../README.md)

***

# Variable: routes()

> `const` **routes**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/routes/index.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/routes/index.ts#L16)

This fastify plugin function contains all talawa api routes within it.

## Parameters

### fastify

`FastifyInstance`\<`RawServerDefault`, `IncomingMessage`, `ServerResponse`\<`IncomingMessage`\>, `FastifyBaseLogger`, `FastifyTypeProviderDefault`\>

## Returns

`Promise`\<`void`\>

## Example

```typescript
import routes from "./routes/index";
fastify.register(routes, {});
```
