[**talawa-api**](../../../../README.md)

***

# Variable: postsTableRelations

> `const` **postsTableRelations**: `Relations`\<`"posts"`, \{ `attachmentsWherePost`: `Many`\<`"post_attachments"`\>; `commentsWherePost`: `Many`\<`"comments"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; `votesWherePost`: `Many`\<`"post_votes"`\>; \}\>

Defined in: [src/drizzle/tables/posts.ts:89](https://github.com/PalisadoesFoundation/talawa-api/blob/b24a30943e90218609bbe2cec77af89181bb6c56/src/drizzle/tables/posts.ts#L89)
