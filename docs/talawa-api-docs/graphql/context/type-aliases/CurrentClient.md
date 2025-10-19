[**talawa-api**](../../../README.md)

***

# Type Alias: CurrentClient

> **CurrentClient** = `object` & `{ [K in keyof ExplicitAuthenticationTokenPayload]?: never }` \| `object` & [`ExplicitAuthenticationTokenPayload`](ExplicitAuthenticationTokenPayload.md)

Defined in: [src/graphql/context.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/context.ts#L22)

Type of the client-specific context for a grahphql operation client.
