[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/myLanguage](../README.md) / myLanguage

# Variable: myLanguage

\> `const` **myLanguage**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"myLanguage"`\]

This query fetch the current user language from the database.

## Param

## Param

## Param

An object that contains `userId`.

## Returns

A string `appLanguageCode` that contains language code.
If the `appLanguageCode` field not found then it throws a `NotFoundError` error.

## Defined in

[src/resolvers/Query/myLanguage.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Query/myLanguage.ts#L13)
