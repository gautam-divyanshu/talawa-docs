[**talawa-api**](../../../../README.md)

***

# Variable: chatMessageReadReceiptsTable

> `const` **chatMessageReadReceiptsTable**: `PgTableWithColumns`\<\{ \}\>

Defined in: [src/drizzle/tables/chatMessageReadReceipts.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3cff0028f235a062c461ef9b6aa80f244182c2ef/src/drizzle/tables/chatMessageReadReceipts.ts#L17)

Drizzle orm postgres table definition for per-message read receipts.
Composite primary key ensures one receipt per (message, reader).
