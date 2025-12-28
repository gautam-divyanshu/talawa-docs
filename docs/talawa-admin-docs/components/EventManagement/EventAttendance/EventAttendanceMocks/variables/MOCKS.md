[**talawa-admin**](../../../../../README.md)

***

# Variable: MOCKS

> `const` **MOCKS**: `object`[]

Defined in: [components/EventManagement/EventAttendance/EventAttendanceMocks.ts:48](https://github.com/PalisadoesFoundation/talawa-admin/blob/735c893b7cc6d606ec7a9a6509523dcad6e6ff19/src/components/EventManagement/EventAttendance/EventAttendanceMocks.ts#L48)

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
