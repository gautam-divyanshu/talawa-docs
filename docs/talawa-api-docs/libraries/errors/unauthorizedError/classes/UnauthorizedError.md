[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/errors/unauthorizedError](../README.md) / UnauthorizedError

# Class: UnauthorizedError

Defined in: [src/libraries/errors/unauthorizedError.ts:7](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/unauthorizedError.ts#L7)

Represents an unauthorized error. It extends the ApplicationError class
and is used to handle situations where access to a resource is unauthorized.

## Extends

- [`ApplicationError`](../../applicationError/classes/ApplicationError.md)

## Constructors

### new UnauthorizedError()

\> **new UnauthorizedError**(`message`, `code`, `param`, `metadata`): [`UnauthorizedError`](UnauthorizedError.md)

Defined in: [src/libraries/errors/unauthorizedError.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/unauthorizedError.ts#L15)

Creates an instance of UnauthorizedError.

#### Parameters

##### message

`string` = `"UnauthorizedError"`

The error message. Defaults to "UnauthorizedError".

##### code

The error code. Can be null. Defaults to null.

`null` | `string`

##### param

The parameter related to the error. Can be null. Defaults to null.

`null` | `string`

##### metadata

`Record`\<`any`, `any`\> = `\{\}`

Additional metadata related to the error. Defaults to an empty object.

#### Returns

[`UnauthorizedError`](UnauthorizedError.md)

#### Overrides

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`constructor`](../../applicationError/classes/ApplicationError.md#constructors)

## Properties

### errors

\> **errors**: [`InterfaceError`](../../applicationError/interfaces/InterfaceError.md)[]

Defined in: [src/libraries/errors/applicationError.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/applicationError.ts#L21)

An array of errors conforming to the InterfaceError interface

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`errors`](../../applicationError/classes/ApplicationError.md#errors-1)

***

### httpCode

\> **httpCode**: `number`

Defined in: [src/libraries/errors/applicationError.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/applicationError.ts#L23)

The HTTP status code associated with the error

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`httpCode`](../../applicationError/classes/ApplicationError.md#httpcode-1)

***

### message

\> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`message`](../../applicationError/classes/ApplicationError.md#message-1)

***

### name

\> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`name`](../../applicationError/classes/ApplicationError.md#name)

***

### stack?

\> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`stack`](../../applicationError/classes/ApplicationError.md#stack)

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

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`prepareStackTrace`](../../applicationError/classes/ApplicationError.md#preparestacktrace)

***

### stackTraceLimit

\> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`stackTraceLimit`](../../applicationError/classes/ApplicationError.md#stacktracelimit)

## Methods

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

[`ApplicationError`](../../applicationError/classes/ApplicationError.md).[`captureStackTrace`](../../applicationError/classes/ApplicationError.md#capturestacktrace)
