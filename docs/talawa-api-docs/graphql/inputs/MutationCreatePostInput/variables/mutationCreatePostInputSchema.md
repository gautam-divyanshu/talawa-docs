[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreatePostInputSchema

> `const` **mutationCreatePostInputSchema**: `ZodObject`\<`Pick`\<\{ `caption`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `organizationId`: `ZodString`; `pinnedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"organizationId"` \| `"caption"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `attachments?`: `object`[]; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}, \{ `attachments?`: `object`[]; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreatePostInput.ts:49](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationCreatePostInput.ts#L49)
