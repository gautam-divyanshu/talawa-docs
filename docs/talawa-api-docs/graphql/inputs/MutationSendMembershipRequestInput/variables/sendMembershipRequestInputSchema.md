[**talawa-api**](../../../../README.md)

***

# Variable: sendMembershipRequestInputSchema

> `const` **sendMembershipRequestInputSchema**: `ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `membershipRequestId`: `ZodOptional`\<`ZodString`\>; `organizationId`: `ZodString`; `status`: `ZodOptional`\<`ZodEnum`\<\[`"pending"`, `"approved"`, `"rejected"`\]\>\>; `userId`: `ZodString`; \}, `"organizationId"`\>, `"strip"`, `ZodTypeAny`, \{ `organizationId`: `string`; \}, \{ `organizationId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationSendMembershipRequestInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/MutationSendMembershipRequestInput.ts#L5)
