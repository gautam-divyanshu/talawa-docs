[**talawa-admin**](../../../../../README.md)

***

# Variable: ORGANIZATION\_MEMBERS

> `const` **ORGANIZATION\_MEMBERS**: `DocumentNode`

Defined in: [GraphQl/Queries/OrganizationQueries.ts:368](https://github.com/PalisadoesFoundation/talawa-admin/blob/a180e1fe530008895c63552aaba88fc299591b72/src/GraphQl/Queries/OrganizationQueries.ts#L368)

GraphQL query to fetch organization members with pagination and filtering.
This query uses the new connection-based schema with input objects.

## Param

QueryOrganizationInput containing the organization ID

## Param

Number of members to fetch

## Param

Cursor for pagination

## Param

MembersWhereInput for filtering (e.g., name_contains)

## Returns

Organization members with connection structure
