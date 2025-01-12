[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / EventVolunteer

# Type Alias: EventVolunteer

\> **EventVolunteer**: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:838](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/types/generatedGraphQLTypes.ts#L838)

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
