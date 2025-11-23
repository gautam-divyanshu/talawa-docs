[**talawa-api**](../../../../../README.md)

***

# Variable: userNotificationSchema

> `const` **userNotificationSchema**: `ZodObject`\<\{ `createdAt`: `ZodDate`; `eventType`: `ZodString`; `id`: `ZodString`; `isRead`: `ZodBoolean`; `navigation`: `ZodNullable`\<`ZodString`\>; `readAt`: `ZodNullable`\<`ZodDate`\>; `renderedContent`: `ZodObject`\<\{ `body`: `ZodOptional`\<`ZodString`\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `"passthrough"`, `ZodTypeAny`, `objectOutputType`\<\{ `body`: `ZodOptional`\<`ZodString`\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>, `objectInputType`\<\{ `body`: `ZodOptional`\<`ZodString`\>; `title`: `ZodOptional`\<`ZodString`\>; \}, `ZodTypeAny`, `"passthrough"`\>\>; \}, `"strip"`, `ZodTypeAny`, \{ `createdAt`: `Date`; `eventType`: `string`; `id`: `string`; `isRead`: `boolean`; `navigation`: `string` \| `null`; `readAt`: `Date` \| `null`; `renderedContent`: `object` & `object`; \}, \{ `createdAt`: `Date`; `eventType`: `string`; `id`: `string`; `isRead`: `boolean`; `navigation`: `string` \| `null`; `readAt`: `Date` \| `null`; `renderedContent`: `object` & `object`; \}\>

Defined in: [src/graphql/types/Notification/NotificationResponse.ts:4](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/graphql/types/Notification/NotificationResponse.ts#L4)
