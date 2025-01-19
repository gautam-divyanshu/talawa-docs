[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/usersConnection](../README.md) / usersConnection

# Variable: usersConnection

\> `const` **usersConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"usersConnection"`\]

Defined in: [src/resolvers/Query/usersConnection.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Query/usersConnection.ts#L16)

This query will fetch all the users in a specified order to paginate from the database.

## Param

## Param

An object that contains relevant data to execute the query.

## Returns

An object that contains list of the users.

## Remarks

Connection in graphQL means pagination,
learn more about Connection [here](https://relay.dev/graphql/connections.htm).
