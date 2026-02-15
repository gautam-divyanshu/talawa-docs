[**talawa-api**](../../../../README.md)

***

# Function: signUp()

> **signUp**(`db`, `log`, `input`): `Promise`\<[`SignUpResult`](../type-aliases/SignUpResult.md)\>

Defined in: [src/services/auth/authService.ts:65](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/services/auth/authService.ts#L65)

Registers a new user.

## Parameters

### db

[`DrizzleClient`](../../../../fastifyPlugins/drizzleClient/type-aliases/DrizzleClient.md)

Drizzle client for database access.

### log

`FastifyBaseLogger`

Logger for error reporting (e.g. registration failures).

### input

[`SignUpInput`](../interfaces/SignUpInput.md)

SignUpInput (email, password, firstName, lastName).

## Returns

`Promise`\<[`SignUpResult`](../type-aliases/SignUpResult.md)\>

Promise resolving to SignUpResult: either `{ user }` with the created user row, or `{ error: "already_exists" }` if the email is already registered. Throws TalawaRestError (INTERNAL_SERVER_ERROR) if insert returns no row.
