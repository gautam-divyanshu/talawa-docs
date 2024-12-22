[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/graphQLConnection](../README.md) / DefaultGraphQLConnectionArguments

# Type Alias: DefaultGraphQLConnectionArguments

\> **DefaultGraphQLConnectionArguments**: `object`

This is typescript type of the standard arguments object received by a graphQL connection
following the relay cursor connection specification, more info here:- [https://relay.dev/graphql/connections.htm](https://relay.dev/graphql/connections.htm)

## Type declaration

### after?

\> `optional` **after**: `string` \| `null`

### before?

\> `optional` **before**: `string` \| `null`

### first?

\> `optional` **first**: `number` \| `null`

### last?

\> `optional` **last**: `number` \| `null`

## Defined in

[src/utilities/graphQLConnection/index.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/graphQLConnection/index.ts#L33)
