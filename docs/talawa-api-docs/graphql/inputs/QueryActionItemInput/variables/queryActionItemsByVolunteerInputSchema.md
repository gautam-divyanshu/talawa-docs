[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerInputSchema

> `const` **queryActionItemsByVolunteerInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/4fc4e12ad9f960600b3078451d438c08033538a9/src/graphql/inputs/QueryActionItemInput.ts#L32)

Defines the Zod validation schema for querying ActionItems by volunteerId.
