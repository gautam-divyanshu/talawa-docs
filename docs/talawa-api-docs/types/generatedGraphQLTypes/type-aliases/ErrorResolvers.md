[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ErrorResolvers

# Type Alias: ErrorResolvers\<ContextType, ParentType\>

\> **ErrorResolvers**\<`ContextType`, `ParentType`\>: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:4285](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L4285)

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Error"`\]

## Type declaration

### \_\_resolveType

\> **\_\_resolveType**: [`TypeResolveFn`](TypeResolveFn.md)\<`"MemberNotFoundError"` \| `"OrganizationMemberNotFoundError"` \| `"OrganizationNotFoundError"` \| `"PostNotFoundError"` \| `"UnauthenticatedError"` \| `"UnauthorizedError"` \| `"UserNotAuthorizedAdminError"` \| `"UserNotAuthorizedError"` \| `"UserNotFoundError"`, `ParentType`, `ContextType`\>

### message?

\> `optional` **message**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>
