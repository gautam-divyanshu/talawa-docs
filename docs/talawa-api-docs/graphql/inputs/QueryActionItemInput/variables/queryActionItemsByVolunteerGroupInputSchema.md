[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerGroupInputSchema

> `const` **queryActionItemsByVolunteerGroupInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerGroupId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/graphql/inputs/QueryActionItemInput.ts#L61)

Defines the Zod validation schema for querying ActionItems by volunteerGroupId.
