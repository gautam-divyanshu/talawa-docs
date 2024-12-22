[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / VolunteerMembership

# Type Alias: VolunteerMembership

\> **VolunteerMembership**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"VolunteerMembership"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### createdBy?

\> `optional` **createdBy**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### event

\> **event**: [`Event`](Event.md)

### group?

\> `optional` **group**: [`Maybe`](Maybe.md)\<[`EventVolunteerGroup`](EventVolunteerGroup.md)\>

### status

\> **status**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### updatedBy?

\> `optional` **updatedBy**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### volunteer

\> **volunteer**: [`EventVolunteer`](EventVolunteer.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:3293](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/types/generatedGraphQLTypes.ts#L3293)
