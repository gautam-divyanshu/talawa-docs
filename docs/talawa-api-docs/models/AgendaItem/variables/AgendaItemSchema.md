[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [models/AgendaItem](../README.md) / AgendaItemSchema

# Variable: AgendaItemSchema

\> `const` **AgendaItemSchema**: `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, \{\}, \{\}, \{\}, \{\}, `DefaultSchemaOptions`, \{ `attachments`: `string`[]; `categories`: `ObjectId`[]; `createdAt`: `null` \| `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `null` \| `string`; `duration`: `string`; `itemType`: `null` \| [`Regular`](../enumerations/ItemType.md#regular) \| [`Note`](../enumerations/ItemType.md#note); `notes`: `ObjectId`[]; `organizationId`: `null` \| `ObjectId`; `relatedEventId`: `null` \| `ObjectId`; `sequence`: `null` \| `number`; `title`: `string`; `updatedAt`: `null` \| `Date`; `updatedBy`: `null` \| `ObjectId`; `urls`: `string`[]; `users`: `ObjectId`[]; \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `attachments`: `string`[]; `categories`: `ObjectId`[]; `createdAt`: `null` \| `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `null` \| `string`; `duration`: `string`; `itemType`: `null` \| [`Regular`](../enumerations/ItemType.md#regular) \| [`Note`](../enumerations/ItemType.md#note); `notes`: `ObjectId`[]; `organizationId`: `null` \| `ObjectId`; `relatedEventId`: `null` \| `ObjectId`; `sequence`: `null` \| `number`; `title`: `string`; `updatedAt`: `null` \| `Date`; `updatedBy`: `null` \| `ObjectId`; `urls`: `string`[]; `users`: `ObjectId`[]; \}\>\> & `FlatRecord`\<\{ `attachments`: `string`[]; `categories`: `ObjectId`[]; `createdAt`: `null` \| `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `null` \| `string`; `duration`: `string`; `itemType`: `null` \| [`Regular`](../enumerations/ItemType.md#regular) \| [`Note`](../enumerations/ItemType.md#note); `notes`: `ObjectId`[]; `organizationId`: `null` \| `ObjectId`; `relatedEventId`: `null` \| `ObjectId`; `sequence`: `null` \| `number`; `title`: `string`; `updatedAt`: `null` \| `Date`; `updatedBy`: `null` \| `ObjectId`; `urls`: `string`[]; `users`: `ObjectId`[]; \}\> & `object`\>

Mongoose schema definition for an agenda item document.

## Param

Title of the agenda item.

## Param

Optional description of the agenda item.

## Param

Reference to the event associated with the agenda item.

## Param

Duration of the agenda item.

## Param

Optional array of attachment URLs.

## Param

Reference to the user who created the agenda item.

## Param

Reference to the user who last updated the agenda item.

## Param

Optional array of URLs related to the agenda item.

## Param

Optional array of users associated with the agenda item.

## Param

Optional array of agenda categories associated with the agenda item.

## Param

Sequence number of the agenda item.

## Param

Type of the agenda item (Regular or Note).

## Param

Date when the agenda item was created.

## Param

Date when the agenda item was last updated.

## Param

Reference to the organization associated with the agenda item.

## Param

Array of notes associated with the agenda item.

## Defined in

[src/models/AgendaItem.ts:59](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/models/AgendaItem.ts#L59)
