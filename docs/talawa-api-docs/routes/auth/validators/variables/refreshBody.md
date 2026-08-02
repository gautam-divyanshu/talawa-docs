[**talawa-api**](../../../../README.md)

***

# Variable: refreshBody

> `const` **refreshBody**: `ZodObject`\<\{ `refreshToken`: `ZodOptional`\<`ZodString`\>; \}, `$strip`\>

Defined in: [src/routes/auth/validators.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/5786ae4f6a720dac990dcd3c8ac65cc65d4a7aa7/src/routes/auth/validators.ts#L42)

Zod schema for REST refresh-token request body.
In refreshBody, `refreshToken` is intentionally optional because the token may be
supplied either in the JSON body or via the HttpOnly cookie (e.g. `talawa_refresh_token`).
This is deliberate; do not tighten the schema so that both sources remain supported.
