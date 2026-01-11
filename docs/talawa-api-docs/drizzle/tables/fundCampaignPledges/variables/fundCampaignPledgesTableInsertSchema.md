[**talawa-api**](../../../../README.md)

***

# Variable: fundCampaignPledgesTableInsertSchema

> `const` **fundCampaignPledgesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `amount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `campaignId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `note`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `pledgerId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `amount`: (`schema`) => `ZodNumber`; `note`: (`schema`) => `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/fundCampaignPledges.ts:134](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/fundCampaignPledges.ts#L134)
