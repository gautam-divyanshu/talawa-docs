[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/user](../README.md) / user

# Variable: user

\> `const` **user**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"user"`\]

Defined in: [src/resolvers/Query/user.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/resolvers/Query/user.ts#L17)

This query fetch the user from the database.

This function ensure that users can only query their own data and not access details of other users , protecting sensitive data.

## Param

## Param

An object that contains `id` for the user.

## Param

## Returns

An object that contains user data. If the user is not found then it throws a `NotFoundError` error.
