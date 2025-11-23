[**talawa-api**](../../../../README.md)

***

# Variable: sendMembershipRequestInputSchema

> `const` **sendMembershipRequestInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `membershipRequestId`: `ZodOptional`\<`ZodString`\>; `organizationId`: `ZodString`; `status`: `ZodOptional`\<`ZodEnum`\<\[`"pending"`, `"approved"`, `"rejected"`\]\>\>; `userId`: `ZodString`; \}, `"organizationId"`\>, `"strip"`, `ZodTypeAny`, \{ `organizationId`: `string`; \}, \{ `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationSendMembershipRequestInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/inputs/MutationSendMembershipRequestInput.ts#L5)
