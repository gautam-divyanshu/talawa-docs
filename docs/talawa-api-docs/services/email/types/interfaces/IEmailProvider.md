[**talawa-api**](../../../../README.md)

***

# Interface: IEmailProvider

Defined in: [src/services/email/types.ts:31](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/email/types.ts#L31)

Email provider interface

## Methods

### sendBulkEmails()

> **sendBulkEmails**(`jobs`): `Promise`\<[`EmailResult`](EmailResult.md)[]\>

Defined in: [src/services/email/types.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/email/types.ts#L33)

#### Parameters

##### jobs

[`EmailJob`](EmailJob.md)[]

#### Returns

`Promise`\<[`EmailResult`](EmailResult.md)[]\>

***

### sendEmail()

> **sendEmail**(`job`): `Promise`\<[`EmailResult`](EmailResult.md)\>

Defined in: [src/services/email/types.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/services/email/types.ts#L32)

#### Parameters

##### job

[`EmailJob`](EmailJob.md)

#### Returns

`Promise`\<[`EmailResult`](EmailResult.md)\>
