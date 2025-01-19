[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Incremental

# Type Alias: Incremental\<T\>

\> **Incremental**\<`T`\>: `T` \| \{ \[P in keyof T\]?: P extends " $fragmentName" \| "\_\_typename" ? T\[P\] : never \}

Defined in: [src/types/generatedGraphQLTypes.ts:44](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L44)

## Type Parameters

• **T**
