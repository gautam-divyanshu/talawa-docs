[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/organizationsConnection](../README.md) / organizationsConnection

# Variable: organizationsConnection

\> `const` **organizationsConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"organizationsConnection"`\]

Defined in: [src/resolvers/Query/organizationsConnection.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/resolvers/Query/organizationsConnection.ts#L18)

This query will retrieve from the database a list of
organisation under the specified limit for the specified page in the pagination.

## Param

## Param

An object holds the data required to execute the query.
`args.first` specifies the number of members to retrieve, and `args.after` specifies
the unique identification for each item in the returned list.

## Returns

An object containing the list of organization and pagination information.

## Remarks

Connection in graphQL means pagination,
learn more about Connection [here](https://relay.dev/graphql/connections.htm).
