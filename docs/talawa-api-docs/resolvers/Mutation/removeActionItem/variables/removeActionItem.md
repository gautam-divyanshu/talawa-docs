[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeActionItem](../README.md) / removeActionItem

# Variable: removeActionItem

\> `const` **removeActionItem**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeActionItem"`\]

This function enables to remove an action item.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the action item exists.
3. If the user is authorized.
4. If the user has appUserProfile.

## Returns

deleted action item.

## Defined in

[src/resolvers/Mutation/removeActionItem.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Mutation/removeActionItem.ts#L35)
