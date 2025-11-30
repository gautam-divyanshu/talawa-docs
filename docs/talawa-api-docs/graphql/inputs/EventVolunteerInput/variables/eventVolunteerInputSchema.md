[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerInputSchema

> `const` **eventVolunteerInputSchema**: `ZodObject`\<\{ `eventId`: `ZodString`; `groupId`: `ZodOptional`\<`ZodString`\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\[`"ENTIRE_SERIES"`, `"THIS_INSTANCE_ONLY"`\]\>\>; `userId`: `ZodString`; \}, `"strip"`, `ZodTypeAny`, \{ `eventId`: `string`; `groupId?`: `string`; `recurringEventInstanceId?`: `string`; `scope?`: `"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"`; `userId`: `string`; \}, \{ `eventId`: `string`; `groupId?`: `string`; `recurringEventInstanceId?`: `string`; `scope?`: `"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"`; `userId`: `string`; \}\>

Defined in: [src/graphql/inputs/EventVolunteerInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/graphql/inputs/EventVolunteerInput.ts#L19)

Zod schema for EventVolunteerInput validation.
Based on the old Talawa API EventVolunteerInput structure.
