[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS

> `const` **MOCKS**: `object`[]

Defined in: [screens/Leaderboard/Leaderboard.mocks.ts:59](https://github.com/PalisadoesFoundation/talawa-admin/blob/5e2c1fcdf6d126e8b534527cdf2ce6281a7d5d7d/src/screens/Leaderboard/Leaderboard.mocks.ts#L59)

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
