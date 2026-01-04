[**talawa-api**](../../README.md)

***

# Variable: routes()

> `const` **routes**: (`fastify`) => `Promise`\<`void`\>

Defined in: [src/routes/index.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/routes/index.ts#L16)

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
