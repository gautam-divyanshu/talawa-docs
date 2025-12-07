[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateChatInputSchema

> `const` **mutationCreateChatInputSchema**: `ZodObject`\<`Pick`\<\{ `avatarMimeType`: `ZodOptional`\<`ZodNullable`\<`ZodEnum`\<\[`"image/avif"`, `"image/jpeg"`, `"image/png"`, `"image/webp"`\]\>\>\>; `avatarName`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"name"` \| `"description"` \| `"organizationId"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}, \{ `avatar?`: `Promise`\<`FileUpload`\> \| `null`; `description?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateChatInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationCreateChatInput.ts#L6)
