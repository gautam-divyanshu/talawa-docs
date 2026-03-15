[**talawa-api**](../../../../README.md)

***

# Variable: signUpBody

> `const` **signUpBody**: `ZodObject`\<\{ `email`: `ZodPipe`\<`ZodString`, `ZodTransform`\<`string`, `string`\>\>; `firstName`: `ZodString`; `lastName`: `ZodString`; `password`: `ZodString`; \}, `$strip`\>

Defined in: [src/routes/auth/validators.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/e5257a859e980c4157b048d478eb38a347def32f/src/routes/auth/validators.ts#L11)

Zod schema for REST sign-up request body. Aligns with MutationSignUpInput password length.
