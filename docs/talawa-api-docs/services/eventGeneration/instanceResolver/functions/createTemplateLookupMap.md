[**talawa-api**](../../../../README.md)

***

# Function: createTemplateLookupMap()

> **createTemplateLookupMap**(`templates`): `Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `instanceStartTime`: `Date`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `recurringEventId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:233](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/services/eventGeneration/instanceResolver.ts#L233)

Creates a lookup map for event templates to enable efficient batch processing.
The map is keyed by the event template ID.

## Parameters

### templates

`object`[]

An array of event templates.

## Returns

`Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `instanceStartTime`: `Date`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `recurringEventId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of templates, keyed by their IDs.
