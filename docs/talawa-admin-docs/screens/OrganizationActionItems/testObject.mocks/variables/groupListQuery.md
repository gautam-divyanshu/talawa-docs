[**talawa-admin**](../../../../README.md)

***

# Variable: groupListQuery

> `const` **groupListQuery**: `object`[]

Defined in: [src/screens/OrganizationActionItems/testObject.mocks.ts:301](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/screens/OrganizationActionItems/testObject.mocks.ts#L301)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `EVENT_VOLUNTEER_GROUP_LIST`

#### request.variables

> **variables**: `object`

#### request.variables.where

> **where**: `object`

#### request.variables.where.eventId

> **eventId**: `string` = `'eventId'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.getEventVolunteerGroups

> **getEventVolunteerGroups**: (\{ `_id`: `string`; `assignments`: `any`[]; `createdAt`: `string`; `creator`: \{ `_id`: `string`; `firstName`: `string`; `image`: `any`; `lastName`: `string`; \}; `description`: `string`; `event`: \{ `_id`: `string`; \}; `leader`: \{ `_id`: `string`; `firstName`: `string`; `image`: `any`; `lastName`: `string`; \}; `name`: `string`; `volunteers`: `object`[]; `volunteersRequired`: `number`; \} \| \{ `_id`: `undefined`; `assignments`: `any`[]; `createdAt`: `string`; `creator`: \{ `_id`: `string`; `firstName`: `string`; `image`: `any`; `lastName`: `string`; \}; `description`: `string`; `event`: \{ `_id`: `string`; \}; `leader`: \{ `_id`: `string`; `firstName`: `string`; `image`: `any`; `lastName`: `string`; \}; `name`: `string`; `volunteers`: `any`[]; `volunteersRequired`: `number`; \})[]
