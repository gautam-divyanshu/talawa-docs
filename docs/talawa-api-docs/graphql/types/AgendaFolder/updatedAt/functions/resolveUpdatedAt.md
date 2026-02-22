[**talawa-api**](../../../../../README.md)

***

# Function: resolveUpdatedAt()

> **resolveUpdatedAt**(`parent`, `_args`, `ctx`): `Promise`\<`Date` \| `null`\>

Defined in: [src/graphql/types/AgendaFolder/updatedAt.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/graphql/types/AgendaFolder/updatedAt.ts#L17)

Resolver function for the AgendaFolder.updatedAt field.
Exported for testing purposes.

## Parameters

### parent

The parent AgendaFolder object

#### createdAt

`Date`

#### creatorId

`string` \| `null`

#### description

`string` \| `null`

#### eventId

`string`

#### id

`string`

#### isDefaultFolder

`boolean`

#### name

`string`

#### organizationId

`string`

#### sequence

`number` \| `null`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

### \_args

`unknown`

GraphQL arguments (unused)

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

GraphQL context with authentication and database access

## Returns

`Promise`\<`Date` \| `null`\>

- The updatedAt timestamp of the agenda folder

## Throws

TalawaGraphQLError When user is not authenticated or unauthorized
