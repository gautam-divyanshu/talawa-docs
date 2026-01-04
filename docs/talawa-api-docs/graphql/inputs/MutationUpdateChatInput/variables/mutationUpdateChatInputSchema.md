[**talawa-api**](../../../../README.md)

***

# Variable: mutationUpdateChatInputSchema

> `const` **mutationUpdateChatInputSchema**: `ZodEffects`\<`ZodObject`\<`Pick`\<\{ `avatarMimeType`: `ZodOptional`\<`ZodNullable`\<`ZodEnum`\<\[`"image/avif"`, `"image/jpeg"`, `"image/png"`, `"image/webp"`\]\>\>\>; `avatarName`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"description"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `id`: `string`; `name?`: `string`; \}, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `id`: `string`; `name?`: `string`; \}\>, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `id`: `string`; `name?`: `string`; \}, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `id`: `string`; `name?`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationUpdateChatInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/MutationUpdateChatInput.ts#L6)
