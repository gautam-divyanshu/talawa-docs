[**talawa-api**](../../../../../README.md)

***

# Function: resolveGetMyPledgesForCampaign()

> **resolveGetMyPledgesForCampaign**(`_parent`, `args`, `ctx`): `Promise`\<`object`[]\>

Defined in: [src/graphql/types/Query/getUserPledgesByCampaignID.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/0377c9a8043a9da5396efd550b28f87bf54a723a/src/graphql/types/Query/getUserPledgesByCampaignID.ts#L13)

Resolver function to get pledges for the current user in a specific campaign.

## Parameters

### \_parent

`Record`\<`string`, `unknown`\>

Parent object (unused)

### args

Arguments containing campaignId

#### campaignId

`string`

### ctx

[`GraphQLContext`](../../../../context/type-aliases/GraphQLContext.md)

GraphQL context

## Returns

`Promise`\<`object`[]\>

Array of fund campaign pledges
