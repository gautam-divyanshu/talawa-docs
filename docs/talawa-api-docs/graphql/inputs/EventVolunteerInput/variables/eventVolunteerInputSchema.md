[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerInputSchema

> `const` **eventVolunteerInputSchema**: `ZodObject`\<\{ `eventId`: `ZodUUID`; `groupId`: `ZodOptional`\<`ZodString`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\{ `ENTIRE_SERIES`: `"ENTIRE_SERIES"`; `THIS_INSTANCE_ONLY`: `"THIS_INSTANCE_ONLY"`; \}\>\>; `userId`: `ZodUUID`; \}, `$strip`\>

Defined in: [src/graphql/inputs/EventVolunteerInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/inputs/EventVolunteerInput.ts#L19)

Zod schema for EventVolunteerInput validation.
Based on the old Talawa API EventVolunteerInput structure.
