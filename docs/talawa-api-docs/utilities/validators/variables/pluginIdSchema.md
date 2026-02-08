[**talawa-api**](../../../README.md)

***

# Variable: pluginIdSchema

> `const` **pluginIdSchema**: `ZodString`

Defined in: [src/utilities/validators.ts:9](https://github.com/PalisadoesFoundation/talawa-api/blob/36d1ea832b10d1e9883eff7a03104362b71079bd/src/utilities/validators.ts#L9)

Shared Zod schema for validating Plugin IDs.
Ensures that the ID is alphanumeric (plus underscores and hyphens), starts with a letter,
and is of reasonable length. This prevents directory traversal and shell injection
when the ID is used in file paths or shell commands.
