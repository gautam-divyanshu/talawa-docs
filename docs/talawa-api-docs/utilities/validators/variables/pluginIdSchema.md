[**talawa-api**](../../../README.md)

***

# Variable: pluginIdSchema

> `const` **pluginIdSchema**: `ZodString`

Defined in: [src/utilities/validators.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/utilities/validators.ts#L9)

Shared Zod schema for validating Plugin IDs.
Ensures that the ID is alphanumeric (plus underscores and hyphens), starts with a letter,
and is of reasonable length. This prevents directory traversal and shell injection
when the ID is used in file paths or shell commands.
