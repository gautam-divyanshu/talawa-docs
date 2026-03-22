[**talawa-api**](../../../../README.md)

***

# Variable: signUpBody

> `const` **signUpBody**: `ZodObject`\<\{ `email`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`string`, `string`\>\>; `firstName`: `ZodString`; `lastName`: `ZodString`; `password`: `ZodString`; \}, `$strip`\>

Defined in: [src/routes/auth/validators.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/4192946e517a94b573c8f323a0a5b2837aeccf3f/src/routes/auth/validators.ts#L11)

Zod schema for REST sign-up request body. Aligns with MutationSignUpInput password length.
