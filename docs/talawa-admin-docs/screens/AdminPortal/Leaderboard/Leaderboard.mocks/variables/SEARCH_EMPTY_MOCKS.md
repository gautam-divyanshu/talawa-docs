[**talawa-admin**](../../../../../README.md)

***

# Variable: SEARCH\_EMPTY\_MOCKS

> `const` **SEARCH\_EMPTY\_MOCKS**: `object`[]

Defined in: [screens/AdminPortal/Leaderboard/Leaderboard.mocks.ts:208](https://github.com/PalisadoesFoundation/talawa-admin/blob/6445033f887df17fecf22e7ce251f7ab43ed5425/src/screens/AdminPortal/Leaderboard/Leaderboard.mocks.ts#L208)

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
