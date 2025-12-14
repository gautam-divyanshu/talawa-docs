[**talawa-api**](../../../../README.md)

***

# Variable: mutationDeleteOrganizationMembershipInputSchema

> `const` **mutationDeleteOrganizationMembershipInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `memberId`: `ZodString`; `organizationId`: `ZodString`; `role`: `ZodEnum`\<\[`"administrator"`, `"regular"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"organizationId"` \| `"memberId"`\>, `"strip"`, `ZodTypeAny`, \{ `memberId`: `string`; `organizationId`: `string`; \}, \{ `memberId`: `string`; `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationDeleteOrganizationMembershipInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/graphql/inputs/MutationDeleteOrganizationMembershipInput.ts#L5)
