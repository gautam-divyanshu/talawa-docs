[**talawa-api**](../../../../README.md)

***

# Variable: fundCampaignPledgesTableInsertSchema

> `const` **fundCampaignPledgesTableInsertSchema**: `BuildSchema`\<`"insert"`, \{ `amount`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `campaignId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `createdAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `creatorId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `id`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `note`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `pledgerId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updatedAt`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; `updaterId`: `PgColumn`\<\{ \}, \{ \}, \{ \}\>; \}, \{ `amount`: (`schema`) => `ZodNumber`; `note`: (`schema`) => `ZodOptional`\<`ZodString`\>; \}\>

Defined in: [src/drizzle/tables/fundCampaignPledges.ts:134](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/drizzle/tables/fundCampaignPledges.ts#L134)
