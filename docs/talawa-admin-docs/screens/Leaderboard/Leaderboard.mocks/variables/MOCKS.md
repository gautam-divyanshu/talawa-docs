[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS

> `const` **MOCKS**: `object`[]

Defined in: [screens/Leaderboard/Leaderboard.mocks.ts:51](https://github.com/PalisadoesFoundation/talawa-admin/blob/c6f1c371a45e435dc0f50fb56d4b67087d1ceed2/src/screens/Leaderboard/Leaderboard.mocks.ts#L51)

## Type declaration

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
