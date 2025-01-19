[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/TalawaGraphQLError](../README.md) / TalawaGraphQLError

# Class: TalawaGraphQLError

Defined in: [src/utilities/TalawaGraphQLError.ts:188](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/TalawaGraphQLError.ts#L188)

A custom class extended from the GraphQLError class to standardize the errors returned from talawa-api's
graphQL resolvers. This standardization prevents the talawa-api contributers from returning undocumented,
arbitrary errors to the client applications in the graphQL query responses. This standardization also helps
the client developers to know beforehand what kind of errors they can expect from talawa-api's graphQL
responses, helping them design better UI experiences for user feedback.

If necessary, the localization of the error messages(i18n) can be done within the graphQL resolvers where the
TalawaGraphQLError class is used.

This is the definition of a graphQL resolver for resolving the user record of the best friend of a user:-

## Example

```ts
export const bestFriend = async (parent) =\> \{
 const user = await dbClient.query.user.findFirst(\{
     where(fields, operators) \{
         return operators.eq(fields.id, parent.bestFriendId);
     \}
 \});

 if (user === undefined) \{
     throw new TalawaGraphQLError("Best friend not found", \{
         code: "RESOURCE_NOT_FOUND"
     \})
 \}

 return user;
\}
```

## Extends

- `GraphQLError`

## Constructors

### new TalawaGraphQLError()

\> **new TalawaGraphQLError**(`message`, `options`): [`TalawaGraphQLError`](TalawaGraphQLError.md)

Defined in: [src/utilities/TalawaGraphQLError.ts:189](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/TalawaGraphQLError.ts#L189)

#### Parameters

##### message

`string`

##### options

`GraphQLErrorOptions` & `object`

#### Returns

[`TalawaGraphQLError`](TalawaGraphQLError.md)

#### Overrides

`GraphQLError.constructor`

## Properties

### extensions

\> `readonly` **extensions**: `GraphQLErrorExtensions`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:89

Extension fields to add to the formatted error.

#### Inherited from

`GraphQLError.extensions`

***

### locations

\> `readonly` **locations**: `undefined` \| readonly `SourceLocation`[]

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:58

An array of `\{ line, column \}` locations within the source GraphQL document
which correspond to this error.

Errors during validation often contain multiple locations, for example to
point out two things with the same name. Errors during execution include a
single location, the field which produced the error.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

`GraphQLError.locations`

***

### message

\> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`GraphQLError.message`

***

### name

\> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`GraphQLError.name`

***

### nodes

\> `readonly` **nodes**: `undefined` \| readonly `ASTNode`[]

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:69

An array of GraphQL AST Nodes corresponding to this error.

#### Inherited from

`GraphQLError.nodes`

***

### originalError

\> `readonly` **originalError**: `undefined` \| `Error`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:85

The original error thrown from a field resolver during execution.

#### Inherited from

`GraphQLError.originalError`

***

### path

\> `readonly` **path**: `undefined` \| readonly (`string` \| `number`)[]

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:65

An array describing the JSON-path into the execution response which
corresponds to this error. Only included for errors during execution.

Enumerable, and appears in the result of JSON.stringify().

#### Inherited from

`GraphQLError.path`

***

### positions

\> `readonly` **positions**: `undefined` \| readonly `number`[]

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:81

An array of character offsets within the source GraphQL document
which correspond to this error.

#### Inherited from

`GraphQLError.positions`

***

### source

\> `readonly` **source**: `undefined` \| `Source`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:76

The source GraphQL document for the first location of this error.

Note that if this Error represents more than one node, the source may not
represent nodes after the first node.

#### Inherited from

`GraphQLError.source`

***

### stack?

\> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`GraphQLError.stack`

***

### prepareStackTrace()?

\> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) =\> `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`GraphQLError.prepareStackTrace`

***

### stackTraceLimit

\> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`GraphQLError.stackTraceLimit`

## Accessors

### \[toStringTag\]

#### Get Signature

\> **get** **\[toStringTag\]**(): `string`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:107

##### Returns

`string`

#### Inherited from

`GraphQLError.[toStringTag]`

## Methods

### toJSON()

\> **toJSON**(): `GraphQLFormattedError`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:109

#### Returns

`GraphQLFormattedError`

#### Inherited from

`GraphQLError.toJSON`

***

### toString()

\> **toString**(): `string`

Defined in: node\_modules/graphql/error/GraphQLError.d.ts:108

Returns a string representation of an object.

#### Returns

`string`

#### Inherited from

`GraphQLError.toString`

***

### captureStackTrace()

\> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`GraphQLError.captureStackTrace`
