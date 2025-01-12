[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArguments](../README.md) / ParsedGraphQLConnectionArguments

# Type Alias: ParsedGraphQLConnectionArguments\<T0\>

\> **ParsedGraphQLConnectionArguments**\<`T0`\>: `object`

Defined in: [src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:47](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L47)

This is typescript type of the object containing the validated and transformed connection
arguments passed to `parseGraphQLConnectionArguments` function.

## Type Parameters

• **T0**

## Type declaration

### cursor

\> **cursor**: `T0` \| `null`

### direction

\> **direction**: [`GraphQLConnectionTraversalDirection`](../../type-aliases/GraphQLConnectionTraversalDirection.md)

### limit

\> **limit**: `number`
