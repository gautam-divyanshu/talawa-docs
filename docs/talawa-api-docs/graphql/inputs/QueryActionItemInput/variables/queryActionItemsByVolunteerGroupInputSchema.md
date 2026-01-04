[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerGroupInputSchema

> `const` **queryActionItemsByVolunteerGroupInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerGroupId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/QueryActionItemInput.ts#L61)

Defines the Zod validation schema for querying ActionItems by volunteerGroupId.
