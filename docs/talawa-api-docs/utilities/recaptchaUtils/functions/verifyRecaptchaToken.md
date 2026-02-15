[**talawa-api**](../../../README.md)

***

# Function: verifyRecaptchaToken()

> **verifyRecaptchaToken**(`token`, `secretKey`, `expectedAction?`, `scoreThreshold?`): `Promise`\<\{ `action?`: `string`; `score?`: `number`; `success`: `boolean`; \}\>

Defined in: [src/utilities/recaptchaUtils.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/recaptchaUtils.ts#L22)

Verifies a Google reCAPTCHA v3 token by making a request to Google's verification API.

## Parameters

### token

`string`

The reCAPTCHA token to verify

### secretKey

`string`

The secret key for verification

### expectedAction?

`string`

The expected action name (optional, for additional validation)

### scoreThreshold?

`number` = `0.5`

Minimum score threshold (0.0-1.0, default 0.5)

## Returns

`Promise`\<\{ `action?`: `string`; `score?`: `number`; `success`: `boolean`; \}\>

A promise resolving to an object with success status, and optional score and action fields
