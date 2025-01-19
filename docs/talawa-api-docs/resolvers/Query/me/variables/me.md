[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/me](../README.md) / me

# Variable: me

\> `const` **me**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"me"`\]

Defined in: [src/resolvers/Query/me.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/resolvers/Query/me.ts#L20)

This query fetch the current user from the database.

## Param

## Param

## Param

An object that contains `userId`.

## Returns

An object `currentUser` for the current user. If the user not found then it throws a `NotFoundError` error.
