[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteOrganizationMembershipInputSchema

> `const` **mutationDeleteOrganizationMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `memberId`: `ZodString`; `organizationId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"organizationId"` \| `"memberId"`\>, `"strip"`, `ZodTypeAny`, \{ `memberId`: `string`; `organizationId`: `string`; \}, \{ `memberId`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteOrganizationMembershipInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/MutationDeleteOrganizationMembershipInput.ts#L5)
