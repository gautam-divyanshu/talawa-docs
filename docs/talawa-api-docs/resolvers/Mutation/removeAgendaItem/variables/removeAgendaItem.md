[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeAgendaItem](../README.md) / removeAgendaItem

# Variable: removeAgendaItem

\> `const` **removeAgendaItem**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeAgendaItem"`\]

This function removes an agenda item.

## Param

parent of the current request

## Param

payload provided with the request

## Param

context of the entire application

## Returns

ID of the removed agenda item

## Throws

NotFoundError if the user or agenda item is not found

## Throws

UnauthorizedError if the user is not the creator of the agenda item

## Defined in

[src/resolvers/Mutation/removeAgendaItem.ts:28](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Mutation/removeAgendaItem.ts#L28)
