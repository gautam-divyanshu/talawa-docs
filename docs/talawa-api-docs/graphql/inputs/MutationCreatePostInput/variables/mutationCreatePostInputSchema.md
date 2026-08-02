[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreatePostInputSchema

> `const` **mutationCreatePostInputSchema**: `ZodPipe`\<`ZodObject`\<\{ `attachment`: `ZodOptional`\<`ZodAny`\>; `body`: `ZodOptional`\<`ZodString`\>; `caption`: `ZodString`; `isPinned`: `ZodOptional`\<`ZodBoolean`\>; `organizationId`: `ZodUUID`; \}, \{ \}\>, `ZodTransform`\<\{ `attachment`: `FileUpload` & `object` \| `null` \| `undefined`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}, \{ `attachment?`: `any`; `body?`: `string`; `caption`: `string`; `isPinned?`: `boolean`; `organizationId`: `string`; \}\>\>

Defined in: [src/graphql/inputs/MutationCreatePostInput.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/inputs/MutationCreatePostInput.ts#L12)
