[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArguments](../README.md) / ParseGraphQLConnectionCursorResult

# Type Alias: ParseGraphQLConnectionCursorResult\<T0\>

\> **ParseGraphQLConnectionCursorResult**\<`T0`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](../../type-aliases/DefaultGraphQLArgumentError.md)[]; `isSuccessful`: `false`; \} \| \{ `isSuccessful`: `true`; `parsedCursor`: `T0`; \}\>

Defined in: [src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L25)

This is typescript type of object returned from the callback function `parseCursor` passed
as an argument to `parseGraphQLConnectionArguments`, `parseGraphQLConnectionArgumentsWithSortedBy`,
`parseGraphQLConnectionArgumentsWithWhere` and `parseGraphQLConnectionArgumentsWithSortedByAndWhere`
functions.

## Type Parameters

• **T0**
