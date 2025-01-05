[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeOptional

# Type Alias: MakeOptional\<T, K\>

\> **MakeOptional**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [SubKey in K]?: Maybe\<T[SubKey]\> \}`

Defined in: [src/types/generatedGraphQLTypes.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/types/generatedGraphQLTypes.ts#L41)

## Type Parameters

• **T**

• **K** *extends* keyof `T`
