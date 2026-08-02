[**talawa-api**](../../../../README.md)

***

# Variable: agendaItemsTableRelations

> `const` **agendaItemsTableRelations**: `Relations`\<`"agenda_items"`, \{ `attachmentsWhereAgendaItem`: `Many`\<`"agenda_item_attachments"`\>; `category`: `One`\<`"agenda_categories"`, `true`\>; `creator`: `One`\<`"users"`, `false`\>; `event`: `One`\<`"events"`, `true`\>; `folder`: `One`\<`"agenda_folders"`, `true`\>; `updater`: `One`\<`"users"`, `false`\>; `urlsWhereAgendaItem`: `Many`\<`"agenda_item_url"`\>; \}\>

Defined in: [src/drizzle/tables/agendaItems.ts:133](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/drizzle/tables/agendaItems.ts#L133)
