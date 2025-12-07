[**talawa-api**](../../../../README.md)

***

# Variable: mutationCreateFundCampaignPledgeInputSchema

> `const` **mutationCreateFundCampaignPledgeInputSchema**: `ZodObject`\<`Pick`\<\{ `amount`: `ZodNumber`; `campaignId`: `ZodString`; `createdAt`: `ZodOptional`\<`ZodDate`\>; `creatorId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `id`: `ZodOptional`\<`ZodString`\>; `note`: `ZodNullable`\<`ZodOptional`\<`ZodString`\>\>; `pledgerId`: `ZodString`; `updatedAt`: `ZodOptional`\<`ZodNullable`\<`ZodDate`\>\>; `updaterId`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `"note"` \| `"amount"` \| `"campaignId"` \| `"pledgerId"`\>, `"strip"`, `ZodTypeAny`, \{ `amount`: `number`; `campaignId`: `string`; `note?`: `string` \| `null`; `pledgerId`: `string`; \}, \{ `amount`: `number`; `campaignId`: `string`; `note?`: `string` \| `null`; `pledgerId`: `string`; \}\>

Defined in: [src/graphql/inputs/MutationCreateFundCampaignPledgeInput.ts:5](https://github.com/PalisadoesFoundation/talawa-api/blob/d40e84d157d4bee564e5a066ea403df80b2fb3be/src/graphql/inputs/MutationCreateFundCampaignPledgeInput.ts#L5)
