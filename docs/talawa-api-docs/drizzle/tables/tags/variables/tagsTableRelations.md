[**talawa-api**](../../../../README.md)

***

# Variable: tagsTableRelations

> `const` **tagsTableRelations**: `Relations`\<`"tags"`, \{ `creator`: `One`\<`"users"`, `false`\>; `folder`: `One`\<`"tag_folders"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `tagAssignmentsWhereTag`: `Many`\<`"tag_assignments"`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/tags.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/38f66e7bf6477f824ec6304308f4c8fdc8e4e79b/src/drizzle/tables/tags.ts#L90)
