[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ChatMessage

# Type Alias: ChatMessage

\> **ChatMessage**: `object`

Defined in: [src/types/generatedGraphQLTypes.ts:295](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/types/generatedGraphQLTypes.ts#L295)

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"ChatMessage"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### chatMessageBelongsTo

\> **chatMessageBelongsTo**: [`Chat`](Chat.md)

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### deletedBy?

\> `optional` **deletedBy**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

### media?

\> `optional` **media**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### messageContent

\> **messageContent**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### replyTo?

\> `optional` **replyTo**: [`Maybe`](Maybe.md)\<[`ChatMessage`](ChatMessage.md)\>

### sender

\> **sender**: [`User`](User.md)

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]
