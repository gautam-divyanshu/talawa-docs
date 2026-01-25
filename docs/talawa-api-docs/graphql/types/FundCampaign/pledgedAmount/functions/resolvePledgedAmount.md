[**talawa-api**](../../../../../README.md)

***

# Function: resolvePledgedAmount()

> **resolvePledgedAmount**(`parent`, `_args`, `ctx`): `Promise`\<`bigint`\>

Defined in: [src/graphql/types/FundCampaign/pledgedAmount.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f55b9babb4ee32c06104383cf8760b84f8143482/src/graphql/types/FundCampaign/pledgedAmount.ts#L16)

Resolves the total pledged amount for a fund campaign.

## Parameters

### parent

The parent FundCampaign object.

#### amountRaised

`number`

#### createdAt

`Date`

#### creatorId

`string` \| `null`

#### currencyCode

`string`

#### endAt

`Date`

#### fundId

`string`

#### goalAmount

`number`

#### id

`string`

#### name

`string`

#### startAt

`Date`

#### updatedAt

`Date` \| `null`

#### updaterId

`string` \| `null`

### \_args

`Record`\<`string`, `never`\>

Arguments (unused).

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

The GraphQL context.

## Returns

`Promise`\<`bigint`\>

- The total pledged amount as a BigInt.
