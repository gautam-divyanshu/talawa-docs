[**talawa-admin**](../../../../../README.md)

***

# Variable: MOCKS

> `const` **MOCKS**: `object`[]

Defined in: [screens/AdminPortal/Leaderboard/Leaderboard.mocks.ts:59](https://github.com/PalisadoesFoundation/talawa-admin/blob/a3aff34c5338b675e61260486f2477e6f97319b3/src/screens/AdminPortal/Leaderboard/Leaderboard.mocks.ts#L59)

## Type Declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `VOLUNTEER_RANKING`

#### request.variables

> **variables**: `object`

#### request.variables.orgId

> **orgId**: `string` = `'orgId'`

#### request.variables.where

> **where**: `object`

#### request.variables.where.nameContains

> **nameContains**: `string` = `''`

#### request.variables.where.orderBy

> **orderBy**: `string` = `'hours_DESC'`

#### request.variables.where.timeFrame

> **timeFrame**: `string` = `'allTime'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.getVolunteerRanks

> **getVolunteerRanks**: `object`[]
