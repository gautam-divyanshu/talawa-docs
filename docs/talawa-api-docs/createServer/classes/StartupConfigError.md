[**talawa-api**](../../README.md)

***

# Class: StartupConfigError

Defined in: [src/createServer.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/createServer.ts#L38)

Error thrown during process startup when critical configuration is missing or
still set to the placeholder sentinel (`PLACEHOLDER_SENTINEL`).

## Extends

- `Error`

## Constructors

### Constructor

> **new StartupConfigError**(`message`): `StartupConfigError`

Defined in: [src/createServer.ts:39](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/createServer.ts#L39)

#### Parameters

##### message

`string`

#### Returns

`StartupConfigError`

#### Overrides

`Error.constructor`
