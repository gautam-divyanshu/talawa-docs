[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/PII/decryption](../README.md) / decrypt

# Function: decrypt()

\> **decrypt**(`encryptedText`, `key`, `iv`): `string`

Defined in: [src/utilities/PII/decryption.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/25207c53554ba20e613226862dea483f0b67a696/src/utilities/PII/decryption.ts#L11)

Decrypts the given encrypted text using AES-256-CBC decryption.

## Parameters

### encryptedText

`string`

The encrypted text to decrypt, encoded as a hexadecimal string.

### key

`string`

The encryption key used for decryption.

### iv

`string`

The initialization vector (IV), used to ensure different ciphertexts encrypt to different ciphertexts even if the plaintexts are identical.

## Returns

`string`

The decrypted plaintext string.
