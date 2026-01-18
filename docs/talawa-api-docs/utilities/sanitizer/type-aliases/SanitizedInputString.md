[**talawa-api**](../../../README.md)

***

# Type Alias: SanitizedInputString

> **SanitizedInputString** = `string` & `object`

Defined in: [src/utilities/sanitizer.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/sanitizer.ts#L22)

Branded type for strings that have been sanitized (trimmed, normalized) for input.
Use `sanitizeInput()` to create instances of this type.
This is for INPUT normalization, not OUTPUT escaping.

## Type Declaration

### \_\_brand

> `readonly` **\_\_brand**: `"SanitizedInputString"`
