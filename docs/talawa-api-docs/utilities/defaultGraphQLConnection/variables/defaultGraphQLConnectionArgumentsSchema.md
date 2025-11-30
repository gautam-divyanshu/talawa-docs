[**talawa-api**](../../../README.md)

***

# Variable: defaultGraphQLConnectionArgumentsSchema

> `const` **defaultGraphQLConnectionArgumentsSchema**: `ZodObject`\<\{ `after`: `ZodEffects`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>, `string` \| `undefined`, `string` \| `null` \| `undefined`\>; `before`: `ZodEffects`\<`ZodOptional`\<`ZodNullable`\<`ZodString`\>\>, `string` \| `undefined`, `string` \| `null` \| `undefined`\>; `first`: `ZodEffects`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>, `number` \| `undefined`, `number` \| `null` \| `undefined`\>; `last`: `ZodEffects`\<`ZodOptional`\<`ZodNullable`\<`ZodNumber`\>\>, `number` \| `undefined`, `number` \| `null` \| `undefined`\>; \}, `"strip"`, `ZodTypeAny`, \{ `after?`: `string`; `before?`: `string`; `first?`: `number`; `last?`: `number`; \}, \{ `after?`: `string` \| `null`; `before?`: `string` \| `null`; `first?`: `number` \| `null`; `last?`: `number` \| `null`; \}\>

Defined in: [src/utilities/defaultGraphQLConnection.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/23e0bb700f97fadee92f29a65e8b272e5b164152/src/utilities/defaultGraphQLConnection.ts#L41)

Zod schema to parse the default graphql connection arguments and transform them to make them easier to work with.
