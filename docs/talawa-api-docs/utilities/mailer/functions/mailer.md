[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/mailer](../README.md) / mailer

# Function: mailer()

\> **mailer**(`mailFields`): `Promise`\<`string` \| `SentMessageInfo`\>

Defined in: [src/utilities/mailer.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/mailer.ts#L27)

Sends an email using Nodemailer.

## Parameters

### mailFields

[`InterfaceMailFields`](../interfaces/InterfaceMailFields.md)

An object containing emailTo, subject, and body fields.

## Returns

`Promise`\<`string` \| `SentMessageInfo`\>

A promise resolving to `SMTPTransport.SentMessageInfo` on success, or an error string on failure.

## Remarks

This is a utility method for sending emails.
