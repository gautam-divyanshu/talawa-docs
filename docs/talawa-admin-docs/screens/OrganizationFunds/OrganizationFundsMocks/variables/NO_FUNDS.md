[**talawa-admin**](../../../../README.md)

***

# Variable: NO\_FUNDS

> `const` **NO\_FUNDS**: `object`[]

Defined in: [src/screens/OrganizationFunds/OrganizationFundsMocks.ts:173](https://github.com/PalisadoesFoundation/talawa-admin/blob/f8ee21cec8104cf917ede65f524307d1ff815e74/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L173)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `FUND_LIST`

#### request.variables

> **variables**: `object`

#### request.variables.filter

> **filter**: `string` = `''`

#### request.variables.orderBy

> **orderBy**: `string` = `'createdAt_DESC'`

#### request.variables.organizationId

> **organizationId**: `string` = `'orgId'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.fundsByOrganization

> **fundsByOrganization**: `any`[] = `[]`
