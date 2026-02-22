[**talawa-api**](../../../../README.md)

***

# Function: mapRecurringInstanceToEvent()

> **mapRecurringInstanceToEvent**(`instance`): [`EventWithAttachments`](../../../types/Query/eventQueries/unifiedEventQueries/type-aliases/EventWithAttachments.md)

Defined in: [src/graphql/utils/mapRecurringInstanceToEvent.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/utils/mapRecurringInstanceToEvent.ts#L11)

Maps a recurring event instance to the internal unified EventWithAttachments format.
This is used to treat materialized instances like regular events in queries.

## Parameters

### instance

[`ResolvedRecurringEventInstance`](../../../../drizzle/tables/recurringEventInstances/type-aliases/ResolvedRecurringEventInstance.md)

The raw recurring event instance

## Returns

[`EventWithAttachments`](../../../types/Query/eventQueries/unifiedEventQueries/type-aliases/EventWithAttachments.md)

The instance mapped to an EventWithAttachments structure
