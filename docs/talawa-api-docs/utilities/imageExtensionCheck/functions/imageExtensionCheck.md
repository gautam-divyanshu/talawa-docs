[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/imageExtensionCheck](../README.md) / imageExtensionCheck

# Function: imageExtensionCheck()

\> **imageExtensionCheck**(`filename`): `Promise`\<`void`\>

Defined in: [src/utilities/imageExtensionCheck.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/3600eaaf2193496324ea8e78d75780839e27cae4/src/utilities/imageExtensionCheck.ts#L11)

Checks the file extension of the given filename.
If the extension is not 'png', 'jpg', or 'jpeg', deletes the file and throws a validation error.

## Parameters

### filename

`string`

The name of the file to check

## Returns

`Promise`\<`void`\>
