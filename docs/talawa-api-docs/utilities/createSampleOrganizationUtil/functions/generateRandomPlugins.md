[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/createSampleOrganizationUtil](../README.md) / generateRandomPlugins

# Function: generateRandomPlugins()

\> **generateRandomPlugins**(`numberOfPlugins`, `users`): `Promise`\<`Promise`\<`any`\>[]\>

Defined in: [src/utilities/createSampleOrganizationUtil.ts:231](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/utilities/createSampleOrganizationUtil.ts#L231)

Generates random plugin data for a given number of plugins and list of users.

## Parameters

### numberOfPlugins

`number`

The number of plugins to create

### users

`string`[]

The list of users associated with the plugins

## Returns

`Promise`\<`Promise`\<`any`\>[]\>

A promise that resolves to an array of promises for created plugins
