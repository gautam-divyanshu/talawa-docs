[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MembershipRequestResolvers

# Type Alias: MembershipRequestResolvers\<ContextType, ParentType\>

\> **MembershipRequestResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4536](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L4536)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"MembershipRequest"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"MembershipRequest"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### organization?

\> `optional` **organization**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Organization"`\], `ParentType`, `ContextType`\>

### user?

\> `optional` **user**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\], `ParentType`, `ContextType`\>
