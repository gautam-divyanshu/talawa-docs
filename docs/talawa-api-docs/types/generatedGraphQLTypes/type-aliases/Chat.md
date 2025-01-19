[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Chat

# Type Alias: Chat

\> **Chat**: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:278](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L278)

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"Chat"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### admins?

\> `optional` **admins**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### image?

\> `optional` **image**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### isGroup

\> **isGroup**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### lastMessageId?

\> `optional` **lastMessageId**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### messages?

\> `optional` **messages**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`ChatMessage`](ChatMessage.md)\>[]\>

### name?

\> `optional` **name**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### organization?

\> `optional` **organization**: [`Maybe`](Maybe.md)\<[`Organization`](Organization.md)\>

### unseenMessagesByUsers?

\> `optional` **unseenMessagesByUsers**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"JSON"`\]\[`"output"`\]\>

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### users

\> **users**: [`User`](User.md)[]
