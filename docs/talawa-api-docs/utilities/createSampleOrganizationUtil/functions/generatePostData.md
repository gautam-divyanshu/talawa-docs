[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/createSampleOrganizationUtil](../README.md) / generatePostData

# Function: generatePostData()

\> **generatePostData**(`users`, `organizationId`): `Promise`\<[`InterfacePost`](../../../models/Post/interfaces/InterfacePost.md) & `Document`\<[`InterfacePost`](../../../models/Post/interfaces/InterfacePost.md)\>\>

Defined in: [src/utilities/createSampleOrganizationUtil.ts:151](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/createSampleOrganizationUtil.ts#L151)

Generates post data for a given list of users and organization.

## Parameters

### users

[`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)[]

The list of users associated with the post

### organizationId

`string`

The ID of the organization the post belongs to

## Returns

`Promise`\<[`InterfacePost`](../../../models/Post/interfaces/InterfacePost.md) & `Document`\<[`InterfacePost`](../../../models/Post/interfaces/InterfacePost.md)\>\>

A promise that resolves to the created post
