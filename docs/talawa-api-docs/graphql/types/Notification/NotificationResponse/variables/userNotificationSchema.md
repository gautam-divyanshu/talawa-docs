[**talawa-api**](../../../../../README.md)

***

# Variable: userNotificationSchema

> `const` **userNotificationSchema**: `ZodObject`\<\{ `createdAt`: `ZodDate`; `eventType`: `ZodString`; `id`: `ZodString`; `isRead`: `ZodBoolean`; `navigation`: `ZodNullable`\<`ZodString`\>; `readAt`: `ZodNullable`\<`ZodDate`\>; `renderedContent`: `ZodObject`\<\{ `body`: `ZodOptional`\<`ZodString`\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `$loose`\>; \}, `$strip`\>

Defined in: [src/graphql/types/Notification/NotificationResponse.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/types/Notification/NotificationResponse.ts#L5)
