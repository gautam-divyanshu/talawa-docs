[**talawa-api**](../../../../README.md)

***

# Variable: fundCampaignPledgesTableInsertSchema

> `const` **fundCampaignPledgesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `amount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `campaignId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `note`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `pledgerId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `amount`: () => `ZodNumber`; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `note`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updaterId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/fundCampaignPledges.ts:137](https://github.com/PalisadoesFoundation/talawa-api/blob/bac950e699f25975d58faf99422a1af81bd3b461/src/drizzle/tables/fundCampaignPledges.ts#L137)
