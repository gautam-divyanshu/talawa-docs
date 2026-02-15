[**talawa-api**](../../../../README.md)

***

# Variable: signUpBody

> `const` **signUpBody**: `ZodObject`\<\{ `email`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`string`, `string`\>\>; `firstName`: `ZodString`; `lastName`: `ZodString`; `password`: `ZodString`; \}, `$strip`\>

Defined in: [src/routes/auth/validators.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/routes/auth/validators.ts#L11)

Zod schema for REST sign-up request body. Aligns with MutationSignUpInput password length.
