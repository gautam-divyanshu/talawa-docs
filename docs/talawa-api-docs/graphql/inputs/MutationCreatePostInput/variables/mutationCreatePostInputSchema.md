[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreatePostInputSchema

> `const` **mutationCreatePostInputSchema**: `ZodObject`\<`Pick`\<\{ `caption`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `organizationId`: `ZodString`; `pinnedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"organizationId"` \| `"caption"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `attachments?`: `object`[]; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}, \{ `attachments?`: `object`[]; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreatePostInput.ts:49](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/graphql/inputs/MutationCreatePostInput.ts#L49)
