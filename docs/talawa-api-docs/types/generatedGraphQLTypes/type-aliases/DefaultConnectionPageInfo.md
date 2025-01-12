[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DefaultConnectionPageInfo

# Type Alias: DefaultConnectionPageInfo

\> **DefaultConnectionPageInfo**: [`ConnectionPageInfo`](ConnectionPageInfo.md) & `object`

Defined in: [src/types/generatedGraphQLTypes.ts:656](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L656)

Default connection page info for containing the metadata for a connection
instance.

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"DefaultConnectionPageInfo"`

### endCursor?

\> `optional` **endCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### hasNextPage

\> **hasNextPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### hasPreviousPage

\> **hasPreviousPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### startCursor?

\> `optional` **startCursor**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>
