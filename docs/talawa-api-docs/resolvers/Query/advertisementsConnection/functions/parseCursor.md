[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/advertisementsConnection](../README.md) / parseCursor

# Function: parseCursor()

\> **parseCursor**(`__namedParameters`): [`ParseGraphQLConnectionCursorResult`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorResult.md)\<`string`\>

Defined in: [src/resolvers/Query/advertisementsConnection.ts:105](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Query/advertisementsConnection.ts#L105)

Validates and transforms the cursor passed to the connection resolver.

This function checks if the provided cursor value corresponds to a valid advertisement in the database. If the cursor is valid, it is returned as-is. Otherwise, an error is recorded.

## Parameters

### \_\_namedParameters

[`ParseGraphQLConnectionCursorArguments`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorArguments.md)

## Returns

[`ParseGraphQLConnectionCursorResult`](../../../../utilities/graphQLConnection/parseGraphQLConnectionArguments/type-aliases/ParseGraphQLConnectionCursorResult.md)\<`string`\>

An object containing a flag indicating success or failure, the parsed cursor, and any errors encountered during validation.
