[**talawa-api**](../../../../README.md)

***

# Variable: postsTableRelations

> `const` **postsTableRelations**: `Relations`\<`"posts"`, \{ `attachmentsWherePost`: `Many`\<`"post_attachments"`\>; `commentsWherePost`: `Many`\<`"comments"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; `votesWherePost`: `Many`\<`"post_votes"`\>; \}\>

Defined in: [src/drizzle/tables/posts.ts:89](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/drizzle/tables/posts.ts#L89)
