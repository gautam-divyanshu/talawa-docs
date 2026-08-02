[**talawa-api**](../../../../README.md)

***

# Variable: sendEventInvitationsInputSchema

> `const` **sendEventInvitationsInputSchema**: `ZodObject`\<\{ `emails`: `ZodOptional`\<`ZodArray`\<`ZodString`\>\>; `eventId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `expiresInDays`: `ZodOptional`\<`ZodNumber`\>; `message`: `ZodOptional`\<`ZodString`\>; `recipients`: `ZodOptional`\<`ZodArray`\<`ZodObject`\<\{ `email`: `ZodString`; `name`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>\>\>; `recurringEventInstanceId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `$strip`\>

Defined in: [src/graphql/inputs/MutationSendEventInvitationsInput.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/inputs/MutationSendEventInvitationsInput.ts#L13)
