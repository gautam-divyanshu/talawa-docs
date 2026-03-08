[**talawa-api**](../../../../README.md)

***

# Variable: sendEventInvitationsInputSchema

> `const` **sendEventInvitationsInputSchema**: `ZodObject`\<\{ `emails`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `eventId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `expiresInDays`: `ZodOptional`\<`ZodNumber`\>; `message`: `ZodOptional`\<`ZodString`\>; `recipients`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `email`: `ZodString`; `name`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>\>\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/MutationSendEventInvitationsInput.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/graphql/inputs/MutationSendEventInvitationsInput.ts#L13)
