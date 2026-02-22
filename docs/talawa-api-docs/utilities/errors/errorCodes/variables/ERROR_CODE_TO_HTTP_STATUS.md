[**talawa-api**](../../../../README.md)

***

# Variable: ERROR\_CODE\_TO\_HTTP\_STATUS

> `const` **ERROR\_CODE\_TO\_HTTP\_STATUS**: `Record`\<[`ErrorCode`](../enumerations/ErrorCode.md), `number`\>

Defined in: [src/utilities/errors/errorCodes.ts:86](https://github.com/PalisadoesFoundation/talawa-api/blob/e0c5d64d62f9cbd7e709b63db8cf19f32f235f61/src/utilities/errors/errorCodes.ts#L86)

Maps ErrorCode enum values to their corresponding HTTP status codes.

This mapping ensures consistent HTTP status codes are returned for each
error type across both REST and GraphQL endpoints.

## Example

```ts
const statusCode = ERROR_CODE_TO_HTTP_STATUS[ErrorCode.NOT_FOUND]; // 404
const authStatus = ERROR_CODE_TO_HTTP_STATUS[ErrorCode.UNAUTHENTICATED]; // 401
```
