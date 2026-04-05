[**talawa-api**](../../README.md)

***

# Variable: routes

> `const` **routes**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/routes/index.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/routes/index.ts#L17)

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
