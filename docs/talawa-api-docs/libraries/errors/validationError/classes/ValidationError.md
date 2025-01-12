[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/errors/validationError](../README.md) / ValidationError

# Class: ValidationError

Defined in: [src/libraries/errors/validationError.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/validationError.ts#L8)

This class represents an error indicating validation errors.
It extends the ApplicationError class to handle and format the error information.

## Extends

- [`ApplicationError`](../../applicationError/classes/ApplicationError.md)

## Constructors

### new ValidationError()

\> **new ValidationError**(`errors`, `message`): [`ValidationError`](ValidationError.md)

Defined in: [src/libraries/errors/validationError.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/libraries/errors/validationError.ts#L15)

Creates an instance of ValidationError.

#### Parameters

##### errors

[`InterfaceError`](../../applicationError/interfaces/InterfaceError.md)[] = `[]`

An array of errors conforming to the InterfaceError interface (default is an empty array).

##### message

`string` = `"Validation error"`

The error message (default is "Validation error").

#### Returns

[`ValidationError`](ValidationError.md)

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
