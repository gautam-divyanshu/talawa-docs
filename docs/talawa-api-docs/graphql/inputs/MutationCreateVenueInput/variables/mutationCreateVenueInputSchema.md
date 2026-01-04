[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateVenueInputSchema

> `const` **mutationCreateVenueInputSchema**: `ZodObject`\<`Pick`\<\{ `capacity`: `ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"name"` \| `"description"` \| `"organizationId"` \| `"capacity"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `attachments?`: `Promise`\<`FileUpload`\>[]; `capacity?`: `number` \| `null`; `description?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}, \{ `attachments?`: `Promise`\<`FileUpload`\>[]; `capacity?`: `number` \| `null`; `description?`: `string` \| `null`; `name`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateVenueInput.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/MutationCreateVenueInput.ts#L6)
