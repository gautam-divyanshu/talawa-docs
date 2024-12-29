[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [models/AgendaSection](../README.md) / AgendaSectionSchema

# Variable: AgendaSectionSchema

\> `const` **AgendaSectionSchema**: `Schema`\<`Model`, \{ `createdAt`: `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `string`; `items`: `ObjectId`[]; `relatedEvent`: `null` \| `ObjectId`; `sequence`: `number`; `updatedAt`: `Date`; \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `createdAt`: `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `string`; `items`: `ObjectId`[]; `relatedEvent`: `null` \| `ObjectId`; `sequence`: `number`; `updatedAt`: `Date`; \}\>\> & `FlatRecord`\<\{ `createdAt`: `Date`; `createdBy`: `null` \| `ObjectId`; `description`: `string`; `items`: `ObjectId`[]; `relatedEvent`: `null` \| `ObjectId`; `sequence`: `number`; `updatedAt`: `Date`; \}\> & `object`\>

This is the Mongoose schema for an agenda section.

## Param

Reference to the event associated with the agenda section.

## Param

Description of the agenda section.

## Param

Array of agenda items associated with the agenda section.

## Param

Sequence number of the agenda section.

## Param

Reference to the user who created the agenda section.

## Param

Date when the agenda section was created.

## Param

Date when the agenda section was last updated.

## Defined in

[src/models/AgendaSection.ts:34](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/models/AgendaSection.ts#L34)
