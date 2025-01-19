[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/OrgListCard/useDebounce](../README.md) / default

# Function: default()

> **default**\<`T`\>(`callback`, `delay`): `object`

A custom React hook for debouncing a callback function.
It delays the execution of the callback until after a specified delay has elapsed
since the last time the debounced function was invoked.

## Type Parameters

• **T** *extends* (...`args`) => `void`

## Parameters

• **callback**: `T`

The function to debounce.

• **delay**: `number`

The delay in milliseconds to wait before invoking the callback.

## Returns

`object`

An object with the `debouncedCallback` function and a `cancel` method to clear the timeout.

### cancel()

> **cancel**: () => `void`

#### Returns

`void`

### debouncedCallback()

> **debouncedCallback**: (...`args`) => `void`

#### Parameters

• ...**args**: `Parameters`\<`T`\>

#### Returns

`void`

## Defined in

[src/components/OrgListCard/useDebounce.tsx:12](https://github.com/PalisadoesFoundation/talawa-admin/blob/5fdeaf265049cd61a7a0968a965ecbd0606a176a/src/components/OrgListCard/useDebounce.tsx#L12)
