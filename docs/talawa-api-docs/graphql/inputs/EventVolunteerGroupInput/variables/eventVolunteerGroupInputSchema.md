[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerGroupInputSchema

> `const` **eventVolunteerGroupInputSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `eventId`: `ZodUUID`; `leaderId`: `ZodUUID`; `name`: `ZodString`; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\{ `ENTIRE_SERIES`: `"ENTIRE_SERIES"`; `THIS_INSTANCE_ONLY`: `"THIS_INSTANCE_ONLY"`; \}\>\>; `volunteersRequired`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodInt`\>\>\>; `volunteerUserIds`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/EventVolunteerGroupInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/graphql/inputs/EventVolunteerGroupInput.ts#L19)

Zod schema for EventVolunteerGroupInput validation.
Based on the old Talawa API EventVolunteerGroupInput structure.
