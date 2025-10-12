[**talawa-api**](../../../../README.md)

***

# Variable: updateEventVolunteerInputSchema

> `const` **updateEventVolunteerInputSchema**: `ZodObject`\<\{ `assignments`: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>; `hasAccepted`: `ZodOptional`\<`ZodBoolean`\>; `isPublic`: `ZodOptional`\<`ZodBoolean`\>; \}, `"strip"`, `ZodTypeAny`, \{ `assignments?`: `string`[]; `hasAccepted?`: `boolean`; `isPublic?`: `boolean`; \}, \{ `assignments?`: `string`[]; `hasAccepted?`: `boolean`; `isPublic?`: `boolean`; \}\>

Defined in: [src/graphql/inputs/UpdateEventVolunteerInput.ts:8](https://github.com/PalisadoesFoundation/talawa-api/blob/e96fa5edb6be6453765d6ab160fe5a845f75f0e8/src/graphql/inputs/UpdateEventVolunteerInput.ts#L8)

Zod schema for UpdateEventVolunteerInput validation.
Based on the old Talawa API UpdateEventVolunteerInput structure.
