[**talawa-api**](../../../../README.md)

***

# Variable: queryActionItemsByVolunteerInputSchema

> `const` **queryActionItemsByVolunteerInputSchema**: `ZodObject`\<\{ `organizationId`: `ZodOptional`\<`ZodString`\>; `volunteerId`: `ZodNullable`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}, \{ `organizationId?`: `string`; `volunteerId`: `string` \| `null`; \}\>

Defined in: [src/graphql/inputs/QueryActionItemInput.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/graphql/inputs/QueryActionItemInput.ts#L32)

Defines the Zod validation schema for querying ActionItems by volunteerId.
