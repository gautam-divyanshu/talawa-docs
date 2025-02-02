[**talawa-admin**](../../../../README.md)

***

# Variable: NO\_FUNDS

> `const` **NO\_FUNDS**: `object`[]

Defined in: [src/screens/OrganizationFunds/OrganizationFundsMocks.ts:173](https://github.com/PalisadoesFoundation/talawa-admin/blob/3104525a1c66b9686a5ac0b80c45c43369f312bb/src/screens/OrganizationFunds/OrganizationFundsMocks.ts#L173)

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
