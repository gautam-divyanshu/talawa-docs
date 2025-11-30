[**talawa-admin**](../../../../README.md)

***

# Variable: MOCKS\_SUCCESS\_UNASSIGN\_USER\_TAG

> `const` **MOCKS\_SUCCESS\_UNASSIGN\_USER\_TAG**: (\{ `request`: \{ `query`: `DocumentNode`; `variables`: \{ `first`: `number`; `id`: `string`; `sortedBy`: \{ `id`: `string`; \}; `tagId?`: `undefined`; `userId?`: `undefined`; `where`: \{ `firstName`: \{ `starts_with`: `string`; \}; `lastName`: \{ `starts_with`: `string`; \}; \}; \}; \}; `result`: \{ `data`: \{ `getAssignedUsers`: \{ `__typename`: `string`; `ancestorTags`: `object`[]; `name`: `string`; `usersAssignedTo`: \{ `__typename`: `string`; `edges`: `object`[]; `pageInfo`: \{ `__typename`: `string`; `endCursor`: `string`; `hasNextPage`: `boolean`; `hasPreviousPage`: `boolean`; `startCursor`: `string`; \}; `totalCount`: `number`; \}; \}; `unassignUserTag?`: `undefined`; \}; \}; \} \| \{ `request`: \{ `query`: `DocumentNode`; `variables`: \{ `first?`: `undefined`; `id?`: `undefined`; `sortedBy?`: `undefined`; `tagId`: `string`; `userId`: `string`; `where?`: `undefined`; \}; \}; `result`: \{ `data`: \{ `getAssignedUsers?`: `undefined`; `unassignUserTag`: \{ `__typename`: `string`; `_id`: `string`; \}; \}; \}; \})[]

Defined in: [screens/ManageTag/ManageTagNonErrorMocks.ts:10](https://github.com/PalisadoesFoundation/talawa-admin/blob/5e2c1fcdf6d126e8b534527cdf2ce6281a7d5d7d/src/screens/ManageTag/ManageTagNonErrorMocks.ts#L10)
