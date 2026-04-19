[**talawa-api**](../../../README.md)

***

# Type Alias: Paths\<T\>

> **Paths**\<`T`\> = `T` *extends* `object` ? \{ \[K in keyof T\]: \[K, ...Paths\<T\[K\]\>\] \| \[K\] \}\[keyof `T`\] : `never`

Defined in: [src/utilities/getKeyPathsWithNonUndefinedValues.ts:1](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/utilities/getKeyPathsWithNonUndefinedValues.ts#L1)

## Type Parameters

### T

`T`
