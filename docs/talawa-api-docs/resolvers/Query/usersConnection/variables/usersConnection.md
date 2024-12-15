[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/usersConnection](../README.md) / usersConnection

# Variable: usersConnection

\> `const` **usersConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"usersConnection"`\]

This query will fetch all the users in a specified order to paginate from the database.

## Param

## Param

An object that contains relevant data to execute the query.

## Returns

An object that contains list of the users.

## Remarks

Connection in graphQL means pagination,
learn more about Connection [here](https://relay.dev/graphql/connections.htm).

## Defined in

[src/resolvers/Query/usersConnection.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Query/usersConnection.ts#L16)
