[**talawa-api**](../../../../README.md)

***

# Variable: chatMessageReadReceiptsTable

> `const` **chatMessageReadReceiptsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/chatMessageReadReceipts.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/drizzle/tables/chatMessageReadReceipts.ts#L17)

Drizzle orm postgres table definition for per-message read receipts.
Composite primary key ensures one receipt per (message, reader).
