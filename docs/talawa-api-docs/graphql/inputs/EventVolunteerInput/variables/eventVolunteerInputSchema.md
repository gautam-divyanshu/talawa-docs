[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerInputSchema

> `const` **eventVolunteerInputSchema**: `ZodObject`\<\{ `eventId`: `any`; `groupId`: `ZodOptional`\<`ZodString`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\[`"ENTIRE_SERIES"`, `"THIS_INSTANCE_ONLY"`\]\>\>; `userId`: `any`; \}, `"strip"`, `ZodTypeAny`, \{\[`key`: `string`\]: `any`; `eventId?`: `unknown`; `groupId?`: `unknown`; `recurringEventInstanceId?`: `unknown`; `scope?`: `unknown`; `userId?`: `unknown`; \}, \{\[`key`: `string`\]: `any`; `eventId?`: `unknown`; `groupId?`: `unknown`; `recurringEventInstanceId?`: `unknown`; `scope?`: `unknown`; `userId?`: `unknown`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/inputs/EventVolunteerInput.ts#L19)

Zod schema for EventVolunteerInput validation.
Based on the old Talawa API EventVolunteerInput structure.
