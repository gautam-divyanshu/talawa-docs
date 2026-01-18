[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreatePostInputSchema

> `const` **mutationCreatePostInputSchema**: `ZodEffects`\<`ZodObject`\<`Pick`\<\{ `body`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `caption`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `organizationId`: `ZodString`; `pinnedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"organizationId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `attachment?`: `any`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}, \{ `attachment?`: `any`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}\>, \{ `attachment`: `FileUpload` & `object` \| `null` \| `undefined`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}, \{ `attachment?`: `any`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreatePostInput.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/MutationCreatePostInput.ts#L12)
