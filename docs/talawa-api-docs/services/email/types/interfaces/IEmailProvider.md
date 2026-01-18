[**talawa-api**](../../../../README.md)

***

# Interface: IEmailProvider

Defined in: [src/services/email/types.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/email/types.ts#L31)

Email provider interface

## Methods

### sendBulkEmails()

> **sendBulkEmails**(`jobs`): `Promise`\<[`EmailResult`](EmailResult.md)[]\>

Defined in: [src/services/email/types.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/email/types.ts#L33)

#### Parameters

##### jobs

[`EmailJob`](EmailJob.md)[]

#### Returns

`Promise`\<[`EmailResult`](EmailResult.md)[]\>

***

### sendEmail()

> **sendEmail**(`job`): `Promise`\<[`EmailResult`](EmailResult.md)\>

Defined in: [src/services/email/types.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/86c684402120721d2151d1e28feb0b6d2f345849/src/services/email/types.ts#L32)

#### Parameters

##### job

[`EmailJob`](EmailJob.md)

#### Returns

`Promise`\<[`EmailResult`](EmailResult.md)\>
