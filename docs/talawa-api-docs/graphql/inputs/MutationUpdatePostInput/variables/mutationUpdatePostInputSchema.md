[**talawa-api**](../../../../README.md)

***

# Variable: mutationUpdatePostInputSchema

> `const` **mutationUpdatePostInputSchema**: `ZodPipe`\<`ZodObject`\<\{ `attachment`: `ZodOptional`\<`ZodAny`\>; `body`: `ZodOptional`\<`ZodString`\>; `caption`: `ZodOptional`\<`ZodString`\>; `id`: `ZodString`; `isPinned`: `ZodOptional`\<`ZodBoolean`\>; \}, `$strip`\>, `ZodTransform`\<\{ `attachment`: `FileUpload` & `object` \| `null` \| `undefined`; `body?`: `string`; `caption?`: `string`; `id`: `string`; `isPinned?`: `boolean`; \}, \{ `attachment?`: `any`; `body?`: `string`; `caption?`: `string`; `id`: `string`; `isPinned?`: `boolean`; \}\>\>

Defined in: [src/graphql/inputs/MutationUpdatePostInput.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/b9e6fcc765ae0106e0dfd5d4f4612eef0522df38/src/graphql/inputs/MutationUpdatePostInput.ts#L11)
