[**talawa-api**](../../../../README.md)

***

# Variable: fundCampaignPledgesTableInsertSchema

> `const` **fundCampaignPledgesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `amount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `campaignId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `note`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `pledgerId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `amount`: () => `ZodNumber`; `creatorId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `note`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `updaterId`: () => `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `undefined`\>

Defined in: [src/drizzle/tables/fundCampaignPledges.ts:137](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/drizzle/tables/fundCampaignPledges.ts#L137)
