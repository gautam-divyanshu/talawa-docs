[**talawa-api**](../../../README.md)

***

# Type Alias: SanitizedInputString

> **SanitizedInputString** = `string` & `object`

Defined in: [src/utilities/sanitizer.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/utilities/sanitizer.ts#L22)

Branded type for strings that have been sanitized (trimmed, normalized) for input.
Use `sanitizeInput()` to create instances of this type.
This is for INPUT normalization, not OUTPUT escaping.

## Type Declaration

### \_\_brand

> `readonly` **\_\_brand**: `"SanitizedInputString"`
