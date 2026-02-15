[**talawa-api**](../../../README.md)

***

# Type Alias: Paths\<T\>

> **Paths**\<`T`\> = `T` *extends* `object` ? \{ \[K in keyof T\]: \[K, ...Paths\<T\[K\]\>\] \| \[K\] \}\[keyof `T`\] : `never`

Defined in: [src/utilities/getKeyPathsWithNonUndefinedValues.ts:1](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/getKeyPathsWithNonUndefinedValues.ts#L1)

## Type Parameters

### T

`T`
