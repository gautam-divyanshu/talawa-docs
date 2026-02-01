[**talawa-api**](../../../../README.md)

***

# Variable: sendEventInvitationsInputSchema

> `const` **sendEventInvitationsInputSchema**: `ZodObject`\<\{ `emails`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `eventId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `expiresInDays`: `ZodOptional`\<`ZodNumber`\>; `message`: `ZodOptional`\<`ZodString`\>; `recipients`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `email`: `ZodString`; `name`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>\>\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/MutationSendEventInvitationsInput.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/inputs/MutationSendEventInvitationsInput.ts#L12)
