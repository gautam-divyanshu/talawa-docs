[**talawa-api**](../../../README.md)

***

# Type Alias: CurrentClient

> **CurrentClient** = `object` & `{ [K in keyof ExplicitAuthenticationTokenPayload]?: never }` \| `object` & [`ExplicitAuthenticationTokenPayload`](ExplicitAuthenticationTokenPayload.md)

Defined in: [src/graphql/context.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/context.ts#L25)

Type of the client-specific context for a grahphql operation client.
