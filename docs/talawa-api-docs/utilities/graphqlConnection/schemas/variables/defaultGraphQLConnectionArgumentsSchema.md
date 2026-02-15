[**talawa-api**](../../../../README.md)

***

# Variable: defaultGraphQLConnectionArgumentsSchema

> `const` **defaultGraphQLConnectionArgumentsSchema**: `ZodObject`\<\{ `after`: `ZodPipe`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>, `ZodTransform`\<`string` \| `undefined`, `string` \| `null` \| `undefined`\>\>; `before`: `ZodPipe`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>, `ZodTransform`\<`string` \| `undefined`, `string` \| `null` \| `undefined`\>\>; `first`: `ZodPipe`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>, `ZodTransform`\<`number` \| `undefined`, `number` \| `null` \| `undefined`\>\>; `last`: `ZodPipe`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>, `ZodTransform`\<`number` \| `undefined`, `number` \| `null` \| `undefined`\>\>; \}, `$strip`\>

Defined in: [src/utilities/graphqlConnection/schemas.ts:6](https://github.com/PalisadoesFoundation/talawa-api/blob/39075e3ba8206f4ccaf60cdb809b4cedd12c8a45/src/utilities/graphqlConnection/schemas.ts#L6)

Zod schema to parse the default graphql connection arguments and transform them to make them easier to work with.
