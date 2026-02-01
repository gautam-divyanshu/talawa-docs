[**talawa-api**](../../../../../README.md)

***

# Variable: mutationCreateAdvertisementArgumentsSchema

> `const` **mutationCreateAdvertisementArgumentsSchema**: `ZodObject`\<\{ `input`: `ZodPipe`\<`ZodObject`\<\{ `attachments`: `ZodOptional`\<`ZodArray`\<`ZodCustom`\<`Promise`\<`FileUpload`\>, `Promise`\<`FileUpload`\>\>\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `endAt`: `ZodDate`; `name`: `ZodString`; `organizationId`: `ZodUUID`; `startAt`: `ZodDate`; `type`: `ZodString`; \}, \{ \}\>, `ZodTransform`\<\{ `attachments`: `FileUpload` & `object`[] \| `undefined`; `description?`: `string` \| `null`; `endAt`: `Date`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `type`: `string`; \}, \{ `attachments?`: `Promise`\<`FileUpload`\>[]; `description?`: `string` \| `null`; `endAt`: `Date`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `type`: `string`; \}\>\>; \}, `$strip`\>

Defined in: [src/graphql/types/Mutation/createAdvertisement.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/graphql/types/Mutation/createAdvertisement.ts#L16)
