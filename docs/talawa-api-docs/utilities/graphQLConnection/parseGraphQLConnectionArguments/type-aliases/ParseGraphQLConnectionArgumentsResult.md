[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArguments](../README.md) / ParseGraphQLConnectionArgumentsResult

# Type Alias: ParseGraphQLConnectionArgumentsResult\<T0\>

\> **ParseGraphQLConnectionArgumentsResult**\<`T0`\>: \{ `errors`: [`DefaultGraphQLArgumentError`](../../type-aliases/DefaultGraphQLArgumentError.md)[]; `isSuccessful`: `false`; \} \| \{ `isSuccessful`: `true`; `parsedArgs`: [`ParsedGraphQLConnectionArguments`](ParsedGraphQLConnectionArguments.md)\<`T0`\>; \}

This is typescript type of the object returned from `parseGraphQLConnectionArguments`
function.

## Type Parameters

• **T0**

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L57)
