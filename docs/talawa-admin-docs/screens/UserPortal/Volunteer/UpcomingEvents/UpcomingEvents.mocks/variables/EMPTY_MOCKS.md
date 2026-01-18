[**talawa-admin**](../../../../../../README.md)

***

# Variable: EMPTY\_MOCKS

> `const` **EMPTY\_MOCKS**: `object`[]

Defined in: [screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.mocks.ts:104](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.mocks.ts#L104)

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `USER_EVENTS_VOLUNTEER`

#### request.variables

> **variables**: `object`

#### request.variables.first

> **first**: `number` = `30`

#### request.variables.organizationId

> **organizationId**: `string` = `'orgId'`

#### request.variables.upcomingOnly

> **upcomingOnly**: `boolean` = `true`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.organization

> **organization**: `object`

#### result.data.organization.events

> **events**: `object`

#### result.data.organization.events.edges

> **edges**: `any`[] = `[]`

#### result.data.organization.id

> **id**: `string` = `'orgId'`
