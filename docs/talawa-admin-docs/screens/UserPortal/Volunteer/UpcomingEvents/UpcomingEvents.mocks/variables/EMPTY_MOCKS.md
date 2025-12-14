[**talawa-admin**](../../../../../../README.md)

***

# Variable: EMPTY\_MOCKS

> `const` **EMPTY\_MOCKS**: `object`[]

Defined in: [screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.mocks.ts:374](https://github.com/PalisadoesFoundation/talawa-admin/blob/4904c80770b24e891d3d562046de5cf015682ad0/src/screens/UserPortal/Volunteer/UpcomingEvents/UpcomingEvents.mocks.ts#L374)

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
