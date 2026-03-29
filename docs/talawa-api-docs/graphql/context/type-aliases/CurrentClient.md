[**talawa-api**](../../../README.md)

***

# Type Alias: CurrentClient

> **CurrentClient** = `object` & `{ [K in keyof ExplicitAuthenticationTokenPayload]?: never }` \| `object` & [`ExplicitAuthenticationTokenPayload`](ExplicitAuthenticationTokenPayload.md)

Defined in: [src/graphql/context.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/6cce37874af73f999b252e26ed745146024ad44c/src/graphql/context.ts#L28)

Type of the client-specific context for a grahphql operation client.
