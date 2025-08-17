[**talawa-api**](../../../../../../README.md)

***

# Type Alias: EventWithAttachments

> **EventWithAttachments** = `InferSelectModel`\<*typeof* [`eventsTable`](../../../../../../drizzle/tables/events/variables/eventsTable.md)\> & `object`

Defined in: [src/graphql/types/Query/eventQueries/unifiedEventQueries.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/graphql/types/Query/eventQueries/unifiedEventQueries.ts#L20)

## Type declaration

### attachments

> **attachments**: *typeof* `eventAttachmentsTable.$inferSelect`[]

### baseRecurringEventId?

> `optional` **baseRecurringEventId**: `string`

### eventType

> **eventType**: `"standalone"` \| `"generated"`

### hasExceptions?

> `optional` **hasExceptions**: `boolean`

### isGenerated?

> `optional` **isGenerated**: `boolean`

### sequenceNumber?

> `optional` **sequenceNumber**: `number`

### totalCount?

> `optional` **totalCount**: `number` \| `null`

## Description

Represents a unified event object that includes attachments and metadata
to distinguish between standalone and generated events.
