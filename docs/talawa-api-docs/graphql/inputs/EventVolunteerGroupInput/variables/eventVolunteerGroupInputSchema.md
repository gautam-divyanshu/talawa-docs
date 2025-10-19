[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerGroupInputSchema

> `const` **eventVolunteerGroupInputSchema**: `ZodObject`\<\{ `description`: `any`; `eventId`: `any`; `leaderId`: `any`; `name`: `any`; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\[`"ENTIRE_SERIES"`, `"THIS_INSTANCE_ONLY"`\]\>\>; `volunteersRequired`: `any`; `volunteerUserIds`: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>; \}, `"strip"`, `ZodTypeAny`, \{\[`key`: `string`\]: `any`; `description?`: `unknown`; `eventId?`: `unknown`; `leaderId?`: `unknown`; `name?`: `unknown`; `recurringEventInstanceId?`: `unknown`; `scope?`: `unknown`; `volunteersRequired?`: `unknown`; `volunteerUserIds?`: `unknown`; \}, \{\[`key`: `string`\]: `any`; `description?`: `unknown`; `eventId?`: `unknown`; `leaderId?`: `unknown`; `name?`: `unknown`; `recurringEventInstanceId?`: `unknown`; `scope?`: `unknown`; `volunteersRequired?`: `unknown`; `volunteerUserIds?`: `unknown`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerGroupInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/inputs/EventVolunteerGroupInput.ts#L19)

Zod schema for EventVolunteerGroupInput validation.
Based on the old Talawa API EventVolunteerGroupInput structure.
