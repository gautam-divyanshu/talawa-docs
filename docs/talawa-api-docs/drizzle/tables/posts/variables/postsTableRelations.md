[**talawa-api**](../../../../README.md)

***

# Variable: postsTableRelations

> `const` **postsTableRelations**: `Relations`\<`"posts"`, \{ `attachmentsWherePost`: `Many`\<`"post_attachments"`\>; `commentsWherePost`: `Many`\<`"comments"`\>; `creator`: `One`\<`"users"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; `votesWherePost`: `Many`\<`"post_votes"`\>; \}\>

Defined in: [src/drizzle/tables/posts.ts:89](https://github.com/PalisadoesFoundation/talawa-api/blob/1ed05dfbd5f8b040258a6172cdf4d8be325f6225/src/drizzle/tables/posts.ts#L89)
