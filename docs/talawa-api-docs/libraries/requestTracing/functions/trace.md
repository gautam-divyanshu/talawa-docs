[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/requestTracing](../README.md) / trace

# Function: trace()

\> **trace**\<`T`\>(`tracingId`, `method`): `Promise`\<`void`\>

Defined in: [src/libraries/requestTracing.ts:81](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/libraries/requestTracing.ts#L81)

Runs a method within the context of a tracing ID. If a tracing ID is provided, it uses that ID;
otherwise, it generates a new one.

## Type Parameters

• **T**

## Parameters

### tracingId

`string`

The tracing ID to use.

### method

() =\> `T`

The method to run within the context of the tracing ID.

## Returns

`Promise`\<`void`\>

A promise that resolves when the method completes.
