[**talawa-api**](../../../../README.md)

***

# Variable: chatMessageReadReceiptsTable

> `const` **chatMessageReadReceiptsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/chatMessageReadReceipts.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/drizzle/tables/chatMessageReadReceipts.ts#L17)

Drizzle orm postgres table definition for per-message read receipts.
Composite primary key ensures one receipt per (message, reader).
