[**talawa-api**](../../../../README.md)

***

# Variable: volunteerMembershipWhereInputSchema

> `const` **volunteerMembershipWhereInputSchema**: `ZodObject`\<\{ `eventId`: `ZodOptional`\<`ZodString`\>; `eventTitle`: `ZodOptional`\<`ZodString`\>; `filter`: `ZodOptional`\<`ZodEnum`\<\{ `group`: `"group"`; `individual`: `"individual"`; \}\>\>; `groupId`: `ZodOptional`\<`ZodString`\>; `status`: `ZodOptional`\<`ZodEnum`\<\{ `accepted`: `"accepted"`; `invited`: `"invited"`; `rejected`: `"rejected"`; `requested`: `"requested"`; \}\>\>; `userId`: `ZodOptional`\<`ZodString`\>; `userName`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/VolunteerMembershipWhereInput.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/VolunteerMembershipWhereInput.ts#L10)

Zod schema for VolunteerMembershipWhereInput validation.
Based on the old Talawa API VolunteerMembershipWhereInput structure.
