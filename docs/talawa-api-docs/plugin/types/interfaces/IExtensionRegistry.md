[**talawa-api**](../../../README.md)

***

# Interface: IExtensionRegistry

Defined in: [src/plugin/types.ts:65](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L65)

## Properties

### database

> **database**: `object`

Defined in: [src/plugin/types.ts:72](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L72)

#### enums

> **enums**: `Record`\<`string`, `unknown`\>

#### relations

> **relations**: `Record`\<`string`, `unknown`\>

#### tables

> **tables**: `Record`\<`string`, `unknown`\>

***

### graphql

> **graphql**: `object`

Defined in: [src/plugin/types.ts:66](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L66)

#### mutations

> **mutations**: `Record`\<`string`, [`IGraphQLExtensionResolver`](IGraphQLExtensionResolver.md)\>

#### queries

> **queries**: `Record`\<`string`, [`IGraphQLExtensionResolver`](IGraphQLExtensionResolver.md)\>

#### subscriptions

> **subscriptions**: `Record`\<`string`, [`IGraphQLExtensionResolver`](IGraphQLExtensionResolver.md)\>

#### types

> **types**: `Record`\<`string`, `unknown`\>

***

### hooks

> **hooks**: `object`

Defined in: [src/plugin/types.ts:77](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L77)

#### post

> **post**: `Record`\<`string`, (...`args`) => `unknown`[]\>

#### pre

> **pre**: `Record`\<`string`, (...`args`) => `unknown`[]\>
