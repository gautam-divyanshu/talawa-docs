[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerInputSchema

> `const` **queryActionItemsByVolunteerInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/QueryActionItemInput.ts#L32)

Defines the Zod validation schema for querying ActionItems by volunteerId.
