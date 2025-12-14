[**talawa-api**](../../../../README.md)

***

# Variable: MutationUpdateAgendaItemInputSchema

> `const` **MutationUpdateAgendaItemInputSchema**: `ZodEffects`\<`ZodObject`\<`Pick`\<\{ `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `description`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `duration`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `folderId`: `ZodString`; `id`: `ZodOptional`\<`ZodString`\>; `key`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `name`: `ZodString`; `type`: `ZodEnum`\<\[`"general"`, `"note"`, `"scripture"`, `"song"`\]\>; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"duration"` \| `"description"` \| `"key"`\> & `object`, `"strip"`, `ZodTypeAny`, \{ `description?`: `string` \| `null`; `duration?`: `string` \| `null`; `folderId?`: `string`; `id`: `string`; `key?`: `string` \| `null`; `name?`: `string`; \}, \{ `description?`: `string` \| `null`; `duration?`: `string` \| `null`; `folderId?`: `string`; `id`: `string`; `key?`: `string` \| `null`; `name?`: `string`; \}\>, \{ `description?`: `string` \| `null`; `duration?`: `string` \| `null`; `folderId?`: `string`; `id`: `string`; `key?`: `string` \| `null`; `name?`: `string`; \}, \{ `description?`: `string` \| `null`; `duration?`: `string` \| `null`; `folderId?`: `string`; `id`: `string`; `key?`: `string` \| `null`; `name?`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationUpdateAgendaItemInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/67117a2ce201913e54d3898319485470853d3074/src/graphql/inputs/MutationUpdateAgendaItemInput.ts#L5)
