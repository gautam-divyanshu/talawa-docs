[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [libraries/errors/applicationError](../README.md) / InterfaceError

# Interface: InterfaceError

Defined in: [src/libraries/errors/applicationError.ts:4](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L4)

Interface representing the structure of an error.

## Properties

### code

\> **code**: `null` \| `string`

Defined in: [src/libraries/errors/applicationError.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L8)

The error code, can be null

***

### message

\> **message**: `string`

Defined in: [src/libraries/errors/applicationError.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L6)

The error message

***

### metadata?

\> `optional` **metadata**: `Record`\<`string`, `string`\>

Defined in: [src/libraries/errors/applicationError.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L12)

Optional additional metadata associated with the error

***

### param

\> **param**: `null` \| `string`

Defined in: [src/libraries/errors/applicationError.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/errors/applicationError.ts#L10)

The parameter associated with the error, can be null
