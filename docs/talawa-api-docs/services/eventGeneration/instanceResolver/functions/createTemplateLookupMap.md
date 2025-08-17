[**talawa-api**](../../../../README.md)

***

# Function: createTemplateLookupMap()

> **createTemplateLookupMap**(`templates`): `Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:233](https://github.com/PalisadoesFoundation/talawa-api/blob/3e735f62cd978db04c1ff58ca33667aba6f9eeef/src/services/eventGeneration/instanceResolver.ts#L233)

Creates a lookup map for event templates to enable efficient batch processing.
The map is keyed by the event template ID.

## Parameters

### templates

`object`[]

An array of event templates.

## Returns

`Map`\<`string`, \{ `allDay`: `boolean`; `createdAt`: `Date`; `creatorId`: `string`; `description`: `string`; `endAt`: `Date`; `id`: `string`; `isPublic`: `boolean`; `isRecurringEventTemplate`: `boolean`; `isRegisterable`: `boolean`; `location`: `string`; `name`: `string`; `organizationId`: `string`; `startAt`: `Date`; `updatedAt`: `Date`; `updaterId`: `string`; \}\>

A map of templates, keyed by their IDs.
