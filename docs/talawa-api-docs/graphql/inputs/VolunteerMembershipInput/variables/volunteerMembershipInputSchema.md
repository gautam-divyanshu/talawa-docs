[**talawa-api**](../../../../README.md)

***

# Variable: volunteerMembershipInputSchema

> `const` **volunteerMembershipInputSchema**: `ZodObject`\<\{ `event`: `ZodString`; `group`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\{ `ENTIRE_SERIES`: `"ENTIRE_SERIES"`; `THIS_INSTANCE_ONLY`: `"THIS_INSTANCE_ONLY"`; \}\>\>; `status`: `ZodEnum`\<\{ `accepted`: `"accepted"`; `invited`: `"invited"`; `rejected`: `"rejected"`; `requested`: `"requested"`; \}\>; `userId`: `ZodString`; \}, `$strip`\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/graphql/inputs/VolunteerMembershipInput.ts#L19)

Zod schema for VolunteerMembershipInput validation.
Based on the old Talawa API VolunteerMembershipInput structure.
