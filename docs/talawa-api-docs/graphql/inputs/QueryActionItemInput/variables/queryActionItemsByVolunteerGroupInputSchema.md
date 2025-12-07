[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerGroupInputSchema

> `const` **queryActionItemsByVolunteerGroupInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerGroupId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerGroupId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:61](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/QueryActionItemInput.ts#L61)

Defines the Zod validation schema for querying ActionItems by volunteerGroupId.
