[**talawa-admin**](../../../../../README.md)

***

# Variable: ORGANIZATION\_MEMBERS

> `const` **ORGANIZATION\_MEMBERS**: `DocumentNode`

Defined in: [GraphQl/Queries/OrganizationQueries.ts:368](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/GraphQl/Queries/OrganizationQueries.ts#L368)

GraphQL query to fetch organization members with pagination and filtering.
This query uses the new connection-based schema with input objects.

## Param

**input**

QueryOrganizationInput containing the organization ID

## Param

**first**

Number of members to fetch

## Param

**after**

Cursor for pagination

## Param

**where**

MembersWhereInput for filtering (e.g., name_contains)

## Returns

Organization members with connection structure
