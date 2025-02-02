[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**\<`T`\>(`callback`, `delay`): `object`

Defined in: [src/components/OrgListCard/useDebounce.tsx:12](https://github.com/PalisadoesFoundation/talawa-admin/blob/3104525a1c66b9686a5ac0b80c45c43369f312bb/src/components/OrgListCard/useDebounce.tsx#L12)

A custom React hook for debouncing a callback function.
It delays the execution of the callback until after a specified delay has elapsed
since the last time the debounced function was invoked.

## Type Parameters

• **T** *extends* (...`args`) => `void`

## Parameters

### callback

`T`

The function to debounce.

### delay

`number`

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

##### args

...`Parameters`\<`T`\>

#### Returns

`void`
