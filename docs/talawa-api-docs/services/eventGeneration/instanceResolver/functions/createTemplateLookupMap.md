[**talawa-api**](../../../../README.md)

***

# Function: createTemplateLookupMap()

> **createTemplateLookupMap**(`templates`): `Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:237](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/services/eventGeneration/instanceResolver.ts#L237)

Creates a lookup map for event templates to enable efficient batch processing.
The map is keyed by the event template ID.

## Parameters

### templates

`object`[]

An array of event templates.

## Returns

`Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of templates, keyed by their IDs.
