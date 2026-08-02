[**talawa-api**](../../../../../../README.md)

***

# Type Alias: EventWithAttachments

> **EventWithAttachments** = `InferSelectModel`\<*typeof* [`eventsTable`](../../../../../../drizzle/tables/events/variables/eventsTable.md)\> & `object`

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L24)

Represents a unified event object that includes attachments and metadata
to distinguish between standalone and generated events.

## Type Declaration

### attachments

> **attachments**: *typeof* `eventAttachmentsTable.$inferSelect`[]

### baseRecurringEventId?

> `optional` **baseRecurringEventId?**: `string`

### eventType

> **eventType**: `"standalone"` \| `"generated"`

### hasExceptions?

> `optional` **hasExceptions?**: `boolean`

### isGenerated?

> `optional` **isGenerated?**: `boolean`

### sequenceNumber?

> `optional` **sequenceNumber?**: `number`

### totalCount?

> `optional` **totalCount?**: `number` \| `null`
