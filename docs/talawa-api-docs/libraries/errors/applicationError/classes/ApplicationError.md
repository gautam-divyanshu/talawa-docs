[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/errors/applicationError](../README.md) / ApplicationError

# Class: ApplicationError

Defined in: [src/libraries/errors/applicationError.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L19)

This class is responsible for handling application errors.
It extends the built-in Error class to include additional properties and methods.

## Extends

- `Error`

## Extended by

- [`ImageSizeLimitExceeded`](../../ImageSizeLimitExceeded/classes/ImageSizeLimitExceeded.md)
- [`ConflictError`](../../conflictError/classes/ConflictError.md)
- [`InputValidationError`](../../inputValidationError/classes/InputValidationError.md)
- [`InternalServerError`](../../internalServerError/classes/InternalServerError.md)
- [`InvalidFileTypeError`](../../invalidFileTypeError/classes/InvalidFileTypeError.md)
- [`NotFoundError`](../../notFoundError/classes/NotFoundError.md)
- [`UnauthenticatedError`](../../unauthenticatedError/classes/UnauthenticatedError.md)
- [`UnauthorizedError`](../../unauthorizedError/classes/UnauthorizedError.md)
- [`ValidationError`](../../validationError/classes/ValidationError.md)

## Constructors

### new ApplicationError()

\> **new ApplicationError**(`errors`, `httpCode`, `message`): [`ApplicationError`](ApplicationError.md)

Defined in: [src/libraries/errors/applicationError.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L32)

Creates an instance of ApplicationError.

#### Parameters

##### errors

[`InterfaceError`](../interfaces/InterfaceError.md)[]

An array of errors conforming to the InterfaceError interface.

##### httpCode

`number` = `422`

The HTTP status code associated with the error (default is 422).

##### message

`string` = `"Error"`

The error message (default is "Error").

#### Returns

[`ApplicationError`](ApplicationError.md)

#### Overrides

`Error.constructor`

## Properties

### errors

\> **errors**: [`InterfaceError`](../interfaces/InterfaceError.md)[]

Defined in: [src/libraries/errors/applicationError.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L21)

An array of errors conforming to the InterfaceError interface

***

### httpCode

\> **httpCode**: `number`

Defined in: [src/libraries/errors/applicationError.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L23)

The HTTP status code associated with the error

***

### message

\> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

\> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

\> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

\> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`
