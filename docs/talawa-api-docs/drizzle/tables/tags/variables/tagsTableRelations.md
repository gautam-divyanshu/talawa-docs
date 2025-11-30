[**talawa-api**](../../../../README.md)

***

# Variable: tagsTableRelations

> `const` **tagsTableRelations**: `Relations`\<`"tags"`, \{ `creator`: `One`\<`"users"`, `false`\>; `folder`: `One`\<`"tag_folders"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `tagAssignmentsWhereTag`: `Many`\<`"tag_assignments"`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/tags.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/drizzle/tables/tags.ts#L90)
