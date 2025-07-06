[**talawa-api**](../../../../README.md)

***

# Variable: tagsTableRelations

> `const` **tagsTableRelations**: `Relations`\<`"tags"`, \{ `creator`: `One`\<`"users"`, `false`\>; `folder`: `One`\<`"tag_folders"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `tagAssignmentsWhereTag`: `Many`\<`"tag_assignments"`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/tags.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/5ea9b61d087fd885d263126674716e202dd020a5/src/drizzle/tables/tags.ts#L90)
