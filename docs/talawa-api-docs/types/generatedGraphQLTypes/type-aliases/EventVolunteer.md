[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / EventVolunteer

# Type Alias: EventVolunteer

\> **EventVolunteer**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"EventVolunteer"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### assignments?

\> `optional` **assignments**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ActionItem`](ActionItem.md)\>[]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### event?

\> `optional` **event**: [`Maybe`](Maybe.md)\<[`Event`](Event.md)\>

### groups?

\> `optional` **groups**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`EventVolunteerGroup`](EventVolunteerGroup.md)\>[]\>

### hasAccepted

\> **hasAccepted**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### hoursHistory?

\> `optional` **hoursHistory**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`HoursHistory`](HoursHistory.md)\>[]\>

### hoursVolunteered

\> **hoursVolunteered**: [`Scalars`](Scalars.md)\[`"Float"`\]\[`"output"`\]

### isPublic

\> **isPublic**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### user

\> **user**: [`User`](User.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:834](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/types/generatedGraphQLTypes.ts#L834)
