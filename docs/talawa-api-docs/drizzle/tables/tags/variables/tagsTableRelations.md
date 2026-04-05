[**talawa-api**](../../../../README.md)

***

# Variable: tagsTableRelations

> `const` **tagsTableRelations**: `Relations`\<`"tags"`, \{ `creator`: `One`\<`"users"`, `false`\>; `folder`: `One`\<`"tag_folders"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `tagAssignmentsWhereTag`: `Many`\<`"tag_assignments"`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/tags.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/ba020be1455b363dacbc8141230aeacb45671626/src/drizzle/tables/tags.ts#L90)
