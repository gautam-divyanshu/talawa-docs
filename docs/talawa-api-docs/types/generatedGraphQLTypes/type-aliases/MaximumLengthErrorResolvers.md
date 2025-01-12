[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MaximumLengthErrorResolvers

# Type Alias: MaximumLengthErrorResolvers\<ContextType, ParentType\>

\> **MaximumLengthErrorResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4518](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L4518)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"MaximumLengthError"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"MaximumLengthError"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### message?

\> `optional` **message**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### path?

\> `optional` **path**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\][], `ParentType`, `ContextType`\>
