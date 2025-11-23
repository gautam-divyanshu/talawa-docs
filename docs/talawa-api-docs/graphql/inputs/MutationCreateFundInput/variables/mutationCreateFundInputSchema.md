[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateFundInputSchema

> `const` **mutationCreateFundInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `isTaxDeductible`: `ZodBoolean`; `name`: `ZodString`; `organizationId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"name"` \| `"organizationId"` \| `"isTaxDeductible"`\>, `"strip"`, `ZodTypeAny`, \{ `isTaxDeductible`: `boolean`; `name`: `string`; `organizationId`: `string`; \}, \{ `isTaxDeductible`: `boolean`; `name`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateFundInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/inputs/MutationCreateFundInput.ts#L5)
