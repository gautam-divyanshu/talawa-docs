[**talawa-api**](../../../../README.md)

***

# Variable: pagination

> `const` **pagination**: `ZodObject`\<\{ `cursor`: `ZodPipe`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>, `ZodTransform`\<`string` \| `null`, `string` \| `null` \| `undefined`\>\>; `limit`: `ZodDefault`\<`ZodCoercedNumber`\<`unknown`\>\>; \}, `$strip`\>

Defined in: [src/graphql/validators/core.ts:143](https://github.com/PalisadoesFoundation/talawa-api/blob/5246239edff12106460ef2c69cc54e98da4dedcf/src/graphql/validators/core.ts#L143)

Unified pagination schema with sensible defaults and bounds.

Defaults:
- limit: 20
- cursor: null

Constraints:
- limit must be between 1 and 100 (inclusive)
- cursor is optional and nullable
