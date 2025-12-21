[**talawa-api**](../../../../README.md)

***

# Variable: volunteerMembershipWhereInputSchema

> `const` **volunteerMembershipWhereInputSchema**: `ZodObject`\<\{ `eventId`: `ZodOptional`\<`ZodString`\>; `eventTitle`: `ZodOptional`\<`ZodString`\>; `filter`: `ZodOptional`\<`ZodEnum`\<\[`"group"`, `"individual"`\]\>\>; `groupId`: `ZodOptional`\<`ZodString`\>; `status`: `ZodOptional`\<`ZodEnum`\<\[`"invited"`, `"requested"`, `"accepted"`, `"rejected"`\]\>\>; `userId`: `ZodOptional`\<`ZodString`\>; `userName`: `ZodOptional`\<`ZodString`\>; \}, `"strip"`, `ZodTypeAny`, \{ `eventId?`: `string`; `eventTitle?`: `string`; `filter?`: `"group"` \| `"individual"`; `groupId?`: `string`; `status?`: `"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`; `userId?`: `string`; `userName?`: `string`; \}, \{ `eventId?`: `string`; `eventTitle?`: `string`; `filter?`: `"group"` \| `"individual"`; `groupId?`: `string`; `status?`: `"rejected"` \| `"invited"` \| `"requested"` \| `"accepted"`; `userId?`: `string`; `userName?`: `string`; \}\>

Defined in: [src/graphql/inputs/VolunteerMembershipWhereInput.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/graphql/inputs/VolunteerMembershipWhereInput.ts#L10)

Zod schema for VolunteerMembershipWhereInput validation.
Based on the old Talawa API VolunteerMembershipWhereInput structure.
