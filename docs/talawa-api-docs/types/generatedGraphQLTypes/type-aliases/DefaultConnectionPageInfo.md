[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DefaultConnectionPageInfo

# Type Alias: DefaultConnectionPageInfo

\> **DefaultConnectionPageInfo**: [`ConnectionPageInfo`](ConnectionPageInfo.md) & `object`

Defined in: [src/types/generatedGraphQLTypes.ts:656](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/types/generatedGraphQLTypes.ts#L656)

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
