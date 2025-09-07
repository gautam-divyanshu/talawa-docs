[**talawa-admin**](../../../../README.md)

***

# Variable: checkInMutationSuccess

> `const` **checkInMutationSuccess**: `object`[]

Defined in: [components/CheckIn/CheckInMocks.ts:46](https://github.com/PalisadoesFoundation/talawa-admin/blob/c78a011397a8e6969bc75c2dd694ad055de3f1a7/src/components/CheckIn/CheckInMocks.ts#L46)

## Type declaration

### request

> **request**: `object`

#### request.query

> **query**: `DocumentNode` = `MARK_CHECKIN`

#### request.variables

> **variables**: `object`

#### request.variables.eventId

> **eventId**: `string` = `'event123'`

#### request.variables.userId

> **userId**: `string` = `'user123'`

### result

> **result**: `object`

#### result.data

> **data**: `object`

#### result.data.checkIn

> **checkIn**: `object`

#### result.data.checkIn.\_id

> **\_id**: `string` = `'123'`
