[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / EventVolunteerGroup

# Type Alias: EventVolunteerGroup

\> **EventVolunteerGroup**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"EventVolunteerGroup"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### assignments?

\> `optional` **assignments**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ActionItem`](ActionItem.md)\>[]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### description?

\> `optional` **description**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### event?

\> `optional` **event**: [`Maybe`](Maybe.md)\<[`Event`](Event.md)\>

### leader

\> **leader**: [`User`](User.md)

### name?

\> `optional` **name**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### volunteers?

\> `optional` **volunteers**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`EventVolunteer`](EventVolunteer.md)\>[]\>

### volunteersRequired?

\> `optional` **volunteersRequired**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

## Defined in

[src/types/generatedGraphQLTypes.ts:850](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/types/generatedGraphQLTypes.ts#L850)
