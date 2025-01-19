[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/imageExtensionCheck](../README.md) / imageExtensionCheck

# Function: imageExtensionCheck()

\> **imageExtensionCheck**(`filename`): `Promise`\<`void`\>

Defined in: [src/utilities/imageExtensionCheck.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/33412350fcbc7b376cab529f8a291f46d0165828/src/utilities/imageExtensionCheck.ts#L11)

Checks the file extension of the given filename.
If the extension is not 'png', 'jpg', or 'jpeg', deletes the file and throws a validation error.

## Parameters

### filename

`string`

The name of the file to check

## Returns

`Promise`\<`void`\>
