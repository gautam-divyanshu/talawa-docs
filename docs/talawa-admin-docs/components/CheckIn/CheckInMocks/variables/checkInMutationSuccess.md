[**talawa-admin**](../../../../README.md)

***

# Variable: checkInMutationSuccess

> `const` **checkInMutationSuccess**: `object`[]

Defined in: [components/CheckIn/CheckInMocks.ts:46](https://github.com/PalisadoesFoundation/talawa-admin/blob/c6f1c371a45e435dc0f50fb56d4b67087d1ceed2/src/components/CheckIn/CheckInMocks.ts#L46)

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
