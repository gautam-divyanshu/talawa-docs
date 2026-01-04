[**talawa-admin**](../../../../README.md)

***

# Variable: SEARCH\_EMPTY\_MOCKS

> `const` **SEARCH\_EMPTY\_MOCKS**: `object`[]

Defined in: [screens/Leaderboard/Leaderboard.mocks.ts:208](https://github.com/PalisadoesFoundation/talawa-admin/blob/fc3abee3ec7208447f84a5286dfe9cc9bbdaa02a/src/screens/Leaderboard/Leaderboard.mocks.ts#L208)

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
