[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / TranslationResolvers

# Type Alias: TranslationResolvers\<ContextType, ParentType\>

\> **TranslationResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4944](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L4944)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Translation"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Translation"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### en\_value?

\> `optional` **en\_value**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

### lang\_code?

\> `optional` **lang\_code**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

### translation?

\> `optional` **translation**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\]\>, `ParentType`, `ContextType`\>

### verified?

\> `optional` **verified**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Boolean"`\]\>, `ParentType`, `ContextType`\>
