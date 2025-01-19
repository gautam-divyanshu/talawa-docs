[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / UserPhoneResolvers

# Type Alias: UserPhoneResolvers\<ContextType, ParentType\>

\> **UserPhoneResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:5050](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L5050)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserPhone"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"UserPhone"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### home?

\> `optional` **home**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PhoneNumber"`\]\>, `ParentType`, `ContextType`\>

### mobile?

\> `optional` **mobile**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PhoneNumber"`\]\>, `ParentType`, `ContextType`\>

### work?

\> `optional` **work**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"PhoneNumber"`\]\>, `ParentType`, `ContextType`\>
