[**talawa-api**](../../../../README.md)

***

# Variable: MutationCreateEventInput

> `const` **MutationCreateEventInput**: `InputObjectRef`\<`ExtendDefaultTypes`\<\{ `Context`: [`GraphQLContext`](../../../context/type-aliases/GraphQLContext.md); `Scalars`: [`CustomScalars`](../../../scalars/type-aliases/CustomScalars.md); \}\>, \{ `allDay?`: `boolean`; `attachments?`: `Promise`\<`FileUpload`\>[]; `description?`: `object`[]; `isPublic?`: `boolean`; `isRecurringEventTemplate?`: `boolean`; `isRegisterable?`: `boolean`; `location?`: `string`; `name?`: `object`[]; `recurrence?`: \{ `byDay?`: `string`[]; `byMonth?`: `number`[]; `byMonthDay?`: `number`[]; `count?`: `number`; `endDate?`: `Date`; `frequency?`: `NonNullable`\<`"DAILY"` \| `"WEEKLY"` \| `"MONTHLY"` \| `"YEARLY"`\>; `interval?`: `number`; `never?`: `boolean`; \}; \}\>

Defined in: [src/graphql/inputs/MutationCreateEventInput.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/b1cda9d27e687af9cb4781360219969632134078/src/graphql/inputs/MutationCreateEventInput.ts#L38)
