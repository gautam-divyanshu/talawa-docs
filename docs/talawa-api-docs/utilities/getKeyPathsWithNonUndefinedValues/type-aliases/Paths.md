[**talawa-api**](../../../README.md)

***

# Type Alias: Paths\<T\>

> **Paths**\<`T`\> = `T` *extends* `object` ? \{ \[K in keyof T\]: \[K, ...Paths\<T\[K\]\>\] \| \[K\] \}\[keyof `T`\] : `never`

Defined in: [src/utilities/getKeyPathsWithNonUndefinedValues.ts:1](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/utilities/getKeyPathsWithNonUndefinedValues.ts#L1)

## Type Parameters

### T

`T`
