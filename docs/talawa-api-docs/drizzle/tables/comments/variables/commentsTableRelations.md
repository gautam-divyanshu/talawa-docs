[**talawa-api**](../../../../README.md)

***

# Variable: commentsTableRelations

> `const` **commentsTableRelations**: `Relations`\<`"comments"`, \{ `creator`: `One`\<`"users"`, `false`\>; `post`: `One`\<`"posts"`, `true`\>; `votesWhereComment`: `Many`\<`"comment_votes"`\>; \}\>

Defined in: [src/drizzle/tables/comments.ts:67](https://github.com/PalisadoesFoundation/talawa-api/blob/d13be3cb0cfe1a6d40c90655bd50eb2eae8eb9fc/src/drizzle/tables/comments.ts#L67)
