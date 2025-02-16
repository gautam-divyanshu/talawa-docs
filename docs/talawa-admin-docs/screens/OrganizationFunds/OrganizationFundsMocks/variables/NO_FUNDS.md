[**talawa-admin**](../../../../README.md)

***

# Variable: NO\_FUNDS

> `const` **NO\_FUNDS**: `object`[]

Defined in: [src/screens/OrganizationFunds/OrganizationFundsMocks.ts:173](https://github.com/PalisadoesFoundation/talawa-admin/blob/1cf8e39ca2930eb303ad9ea666b2d90033e35c94/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L173)

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
