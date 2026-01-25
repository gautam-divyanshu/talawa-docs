[**talawa-api**](../../../../../README.md)

***

# Variable: userNotificationSchema

> `const` **userNotificationSchema**: `ZodObject`\<\{ `createdAt`: `ZodDate`; `eventType`: `ZodString`; `id`: `ZodString`; `isRead`: `ZodBoolean`; `navigation`: `ZodNullable`\<`ZodString`\>; `readAt`: `ZodNullable`\<`ZodDate`\>; `renderedContent`: `ZodObject`\<\{ `body`: `ZodOptional`\<`ZodString`\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `$loose`\>; \}, `$strip`\>

Defined in: [src/graphql/types/Notification/NotificationResponse.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/graphql/types/Notification/NotificationResponse.ts#L5)
