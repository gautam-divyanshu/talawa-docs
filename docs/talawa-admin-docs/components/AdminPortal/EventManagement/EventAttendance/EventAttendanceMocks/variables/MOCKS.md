[**talawa-admin**](../../../../../../README.md)

***

# Variable: MOCKS

> `const` **MOCKS**: `object`[]

Defined in: [components/AdminPortal/EventManagement/EventAttendance/EventAttendanceMocks.ts:48](https://github.com/PalisadoesFoundation/talawa-admin/blob/9325ac63b1aa0de5c188b3108fe5b032999b90ee/src/components/AdminPortal/EventManagement/EventAttendance/EventAttendanceMocks.ts#L48)

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `EVENT_ATTENDEES`

#### request.variables

> **variables**: `object`

#### request.variables.eventId

> **eventId**: `string` = `'event123'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.event

> **event**: `object`

#### result.data.event.attendees

> **attendees**: (\{ `avatarURL`: `any`; `birthDate`: `any`; `createdAt`: `string`; `emailAddress`: `string`; `eventsAttended`: `object`[]; `id`: `string`; `name`: `string`; `natalSex`: `any`; `role`: `string`; `tagsAssignedWith?`: `undefined`; \} \| \{ `avatarURL`: `any`; `birthDate`: `any`; `createdAt`: `string`; `emailAddress`: `string`; `eventsAttended`: `any`; `id`: `string`; `name`: `string`; `natalSex`: `any`; `role`: `string`; `tagsAssignedWith`: \{ `edges`: `object`[]; \}; \})[]
