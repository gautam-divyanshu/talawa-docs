[**talawa-api**](../../../README.md)

***

# Interface: IExtensionRegistry

Defined in: [src/plugin/types.ts:82](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L82)

## Properties

### database

> **database**: `object`

Defined in: [src/plugin/types.ts:87](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L87)

#### enums

> **enums**: `Record`\<`string`, `unknown`\>

#### relations

> **relations**: `Record`\<`string`, `unknown`\>

#### tables

> **tables**: `Record`\<`string`, `unknown`\>

***

### graphql

> **graphql**: `object`

Defined in: [src/plugin/types.ts:83](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L83)

#### builderExtensions

> **builderExtensions**: [`IGraphQLBuilderExtension`](IGraphQLBuilderExtension.md)[]

***

### hooks

> **hooks**: `object`

Defined in: [src/plugin/types.ts:92](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L92)

#### post

> **post**: `Record`\<`string`, (...`args`) => `unknown`[]\>

#### pre

> **pre**: `Record`\<`string`, (...`args`) => `unknown`[]\>

***

### webhooks

> **webhooks**: `object`

Defined in: [src/plugin/types.ts:96](https://github.com/PalisadoesFoundation/talawa-api/blob/8d297f60dc1691c65743cbe7bf8fda727ed61654/src/plugin/types.ts#L96)

#### handlers

> **handlers**: `Record`\<`string`, (`request`, `reply`) => `Promise`\<`unknown`\>\>
