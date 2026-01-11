[**talawa-api**](../../../README.md)

***

# Variable: sanitizedStringSchema

> `const` **sanitizedStringSchema**: `ZodString`

Defined in: [src/utilities/sanitizer.ts:91](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/utilities/sanitizer.ts#L91)

Zod schema for a string that is automatically sanitized (trimmed).
Note: This returns a plain string to allow chaining with .min()/.max().
Use `sanitizeInput()` if you need the branded SanitizedInputString type.
Note: This does NOT escape HTML. HTML escaping should be done at output time.
