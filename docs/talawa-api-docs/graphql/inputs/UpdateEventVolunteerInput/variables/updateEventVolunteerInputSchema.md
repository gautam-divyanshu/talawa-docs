[**talawa-api**](../../../../README.md)

***

# Variable: updateEventVolunteerInputSchema

> `const` **updateEventVolunteerInputSchema**: `ZodObject`\<\{ `assignments`: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>; `hasAccepted`: `ZodOptional`\<`ZodBoolean`\>; `isPublic`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, `ZodTypeAny`, \{ `assignments?`: `string`[]; `hasAccepted?`: `boolean`; `isPublic?`: `boolean`; \}, \{ `assignments?`: `string`[]; `hasAccepted?`: `boolean`; `isPublic?`: `boolean`; \}\>

Defined in: [src/graphql/inputs/UpdateEventVolunteerInput.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/graphql/inputs/UpdateEventVolunteerInput.ts#L8)

Zod schema for UpdateEventVolunteerInput validation.
Based on the old Talawa API UpdateEventVolunteerInput structure.
