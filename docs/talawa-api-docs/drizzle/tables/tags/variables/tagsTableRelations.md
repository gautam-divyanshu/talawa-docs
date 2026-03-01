[**talawa-api**](../../../../README.md)

***

# Variable: tagsTableRelations

> `const` **tagsTableRelations**: `Relations`\<`"tags"`, \{ `creator`: `One`\<`"users"`, `false`\>; `folder`: `One`\<`"tag_folders"`, `false`\>; `organization`: `One`\<`"organizations"`, `true`\>; `tagAssignmentsWhereTag`: `Many`\<`"tag_assignments"`\>; `updater`: `One`\<`"users"`, `false`\>; \}\>

Defined in: [src/drizzle/tables/tags.ts:90](https://github.com/PalisadoesFoundation/talawa-api/blob/29f85325b75d0f277ef992b07c6afd8761e3db6a/src/drizzle/tables/tags.ts#L90)
