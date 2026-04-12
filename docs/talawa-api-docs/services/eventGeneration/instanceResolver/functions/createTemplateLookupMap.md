[**talawa-api**](../../../../README.md)

***

# Function: createTemplateLookupMap()

> **createTemplateLookupMap**(`templates`): `Map`\<`string`, [`EventTemplateWithAttachments`](../../types/type-aliases/EventTemplateWithAttachments.md)\>

Defined in: [src/services/eventGeneration/instanceResolver.ts:280](https://github.com/PalisadoesFoundation/talawa-api/blob/164e192ab45bfadc8f9212fcf7495afd6ad24351/src/services/eventGeneration/instanceResolver.ts#L280)

Creates a lookup map for event templates to enable efficient batch processing.
The map is keyed by the event template ID.

## Parameters

### templates

[`EventTemplateWithAttachments`](../../types/type-aliases/EventTemplateWithAttachments.md)[]

An array of event templates.

## Returns

`Map`\<`string`, [`EventTemplateWithAttachments`](../../types/type-aliases/EventTemplateWithAttachments.md)\>

- A map of templates, keyed by their IDs.
