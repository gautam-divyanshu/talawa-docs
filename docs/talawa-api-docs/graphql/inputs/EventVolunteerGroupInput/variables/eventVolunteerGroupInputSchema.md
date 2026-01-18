[**talawa-api**](../../../../README.md)

***

# Variable: eventVolunteerGroupInputSchema

> `const` **eventVolunteerGroupInputSchema**: `ZodObject`\<\{ `description`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>\>; `eventId`: `ZodString`; `leaderId`: `ZodString`; `name`: `ZodString`; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\[`"ENTIRE_SERIES"`, `"THIS_INSTANCE_ONLY"`\]\>\>; `volunteersRequired`: `ZodOptional`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>\>; `volunteerUserIds`: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>; \}, `"strip"`, `ZodTypeAny`, \{ `description?`: `string` \| `null`; `eventId`: `string`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId?`: `string`; `scope?`: `"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"`; `volunteersRequired?`: `number` \| `null`; `volunteerUserIds?`: `string`[]; \}, \{ `description?`: `string` \| `null`; `eventId`: `string`; `leaderId`: `string`; `name`: `string`; `recurringEventInstanceId?`: `string`; `scope?`: `"ENTIRE_SERIES"` \| `"THIS_INSTANCE_ONLY"`; `volunteersRequired?`: `number` \| `null`; `volunteerUserIds?`: `string`[]; \}\>

Defined in: [src/graphql/inputs/EventVolunteerGroupInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/graphql/inputs/EventVolunteerGroupInput.ts#L19)

Zod schema for EventVolunteerGroupInput validation.
Based on the old Talawa API EventVolunteerGroupInput structure.
