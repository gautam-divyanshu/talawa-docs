[**talawa-api**](../../../../README.md)

***

# Variable: volunteerMembershipInputSchema

> `const` **volunteerMembershipInputSchema**: `ZodObject`\<\{ `event`: `ZodString`; `group`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodString`\>; `scope`: `ZodOptional`\<`ZodEnum`\<\{ `ENTIRE_SERIES`: `"ENTIRE_SERIES"`; `THIS_INSTANCE_ONLY`: `"THIS_INSTANCE_ONLY"`; \}\>\>; `status`: `ZodEnum`\<\{ `accepted`: `"accepted"`; `invited`: `"invited"`; `rejected`: `"rejected"`; `requested`: `"requested"`; \}\>; `userId`: `ZodString`; \}, `$strip`\>

Defined in: [src/graphql/inputs/VolunteerMembershipInput.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/VolunteerMembershipInput.ts#L19)

Zod schema for VolunteerMembershipInput validation.
Based on the old Talawa API VolunteerMembershipInput structure.
