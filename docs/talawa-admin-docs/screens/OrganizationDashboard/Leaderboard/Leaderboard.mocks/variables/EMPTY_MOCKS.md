[**talawa-admin**](../../../../../README.md)

***

# Variable: EMPTY\_MOCKS

> `const` **EMPTY\_MOCKS**: `object`[]

Defined in: [screens/OrganizationDashboard/Leaderboard/Leaderboard.mocks.ts:162](https://github.com/PalisadoesFoundation/talawa-admin/blob/a6a14220f0b45328ddf1ab781d27ae47e9bbead4/src/screens/OrganizationDashboard/Leaderboard/Leaderboard.mocks.ts#L162)

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

> **getVolunteerRanks**: `any`[] = `[]`
