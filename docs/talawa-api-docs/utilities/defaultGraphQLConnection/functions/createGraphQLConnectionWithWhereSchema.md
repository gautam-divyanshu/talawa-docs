[**talawa-api**](../../../README.md)

***

# Function: createGraphQLConnectionWithWhereSchema()

> **createGraphQLConnectionWithWhereSchema**\<`T`\>(`whereSchema`): `ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ \[k in "first" \| "last" \| "before" \| "after" \| "where"\]: addQuestionMarks\<baseObjectOutputType\<\{ after: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; before: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; first: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\>; last: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\> \} & \{ where: ZodNullable\<ZodDefault\<T\>\> \}\>, any\>\[k\] \}, \{ \[k in "first" \| "last" \| "before" \| "after" \| "where"\]: baseObjectInputType\<\{ after: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; before: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; first: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\>; last: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\> \} & \{ where: ZodNullable\<ZodDefault\<T\>\> \}\>\[k\] \}\>

Defined in: [src/utilities/defaultGraphQLConnection.ts:147](https://github.com/PalisadoesFoundation/talawa-api/blob/050ed2813122ca02570a32383d1ba852ab349e4e/src/utilities/defaultGraphQLConnection.ts#L147)

Helper function to create a schema for connection arguments with a where clause.
Extends the default connection arguments schema with a custom where schema.

## Type Parameters

### T

`T` *extends* `ZodType`\<`any`, `ZodTypeDef`, `any`\>

## Parameters

### whereSchema

`T`

The Zod schema for the where clause

## Returns

`ZodObject`\<`object` & `object`, `"strip"`, `ZodTypeAny`, \{ \[k in "first" \| "last" \| "before" \| "after" \| "where"\]: addQuestionMarks\<baseObjectOutputType\<\{ after: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; before: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; first: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\>; last: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\> \} & \{ where: ZodNullable\<ZodDefault\<T\>\> \}\>, any\>\[k\] \}, \{ \[k in "first" \| "last" \| "before" \| "after" \| "where"\]: baseObjectInputType\<\{ after: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; before: ZodEffects\<ZodOptional\<ZodNullable\<ZodString\>\>, string, string\>; first: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\>; last: ZodEffects\<ZodOptional\<ZodNullable\<ZodNumber\>\>, number, number\> \} & \{ where: ZodNullable\<ZodDefault\<T\>\> \}\>\[k\] \}\>

A Zod schema for connection arguments with the where clause
