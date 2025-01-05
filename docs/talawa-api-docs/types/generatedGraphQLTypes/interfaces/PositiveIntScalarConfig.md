[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / PositiveIntScalarConfig

# Interface: PositiveIntScalarConfig

Defined in: [src/types/generatedGraphQLTypes.ts:4802](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/types/generatedGraphQLTypes.ts#L4802)

## Extends

- `GraphQLScalarTypeConfig`\<[`ResolversTypes`](../type-aliases/ResolversTypes.md)\[`"PositiveInt"`\], `any`\>

## Properties

### astNode?

\> `optional` **astNode**: `Maybe`\<`ScalarTypeDefinitionNode`\>

Defined in: node\_modules/graphql/type/definition.d.ts:369

#### Inherited from

`GraphQLScalarTypeConfig.astNode`

***

### description?

\> `optional` **description**: `Maybe`\<`string`\>

Defined in: node\_modules/graphql/type/definition.d.ts:360

#### Inherited from

`GraphQLScalarTypeConfig.description`

***

### extensionASTNodes?

\> `optional` **extensionASTNodes**: `Maybe`\<readonly `ScalarTypeExtensionNode`[]\>

Defined in: node\_modules/graphql/type/definition.d.ts:370

#### Inherited from

`GraphQLScalarTypeConfig.extensionASTNodes`

***

### extensions?

\> `optional` **extensions**: `Maybe`\<`Readonly`\<`GraphQLScalarTypeExtensions`\>\>

Defined in: node\_modules/graphql/type/definition.d.ts:368

#### Inherited from

`GraphQLScalarTypeConfig.extensions`

***

### name

\> **name**: `"PositiveInt"`

Defined in: [src/types/generatedGraphQLTypes.ts:4803](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/types/generatedGraphQLTypes.ts#L4803)

#### Overrides

`GraphQLScalarTypeConfig.name`

***

### parseLiteral?

\> `optional` **parseLiteral**: `GraphQLScalarLiteralParser`\<`any`\>

Defined in: node\_modules/graphql/type/definition.d.ts:367

Parses an externally provided literal value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseLiteral`

***

### parseValue?

\> `optional` **parseValue**: `GraphQLScalarValueParser`\<`any`\>

Defined in: node\_modules/graphql/type/definition.d.ts:365

Parses an externally provided value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseValue`

***

### serialize?

\> `optional` **serialize**: `GraphQLScalarSerializer`\<`any`\>

Defined in: node\_modules/graphql/type/definition.d.ts:363

Serializes an internal value to include in a response.

#### Inherited from

`GraphQLScalarTypeConfig.serialize`

***

### specifiedByURL?

\> `optional` **specifiedByURL**: `Maybe`\<`string`\>

Defined in: node\_modules/graphql/type/definition.d.ts:361

#### Inherited from

`GraphQLScalarTypeConfig.specifiedByURL`
