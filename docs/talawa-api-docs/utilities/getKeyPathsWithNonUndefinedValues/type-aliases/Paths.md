[**talawa-api**](../../../README.md)

***

# Type Alias: Paths\<T\>

> **Paths**\<`T`\> = `T` *extends* `object` ? \{ \[K in keyof T\]: \[K, ...Paths\<T\[K\]\>\] \| \[K\] \}\[keyof `T`\] : `never`

Defined in: [src/utilities/getKeyPathsWithNonUndefinedValues.ts:1](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/utilities/getKeyPathsWithNonUndefinedValues.ts#L1)

## Type Parameters

### T

`T`
