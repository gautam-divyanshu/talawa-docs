[**talawa-api**](../../../README.md)

***

# Interface: IPluginLifecycle

Defined in: [src/plugin/types.ts:135](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L135)

## Methods

### onActivate()?

> `optional` **onActivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:138](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L138)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onDeactivate()?

> `optional` **onDeactivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:139](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L139)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onInstall()?

> `optional` **onInstall**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:136](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L136)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onLoad()?

> `optional` **onLoad**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:137](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L137)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onUninstall()?

> `optional` **onUninstall**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:140](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L140)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onUnload()?

> `optional` **onUnload**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:141](https://github.com/PalisadoesFoundation/talawa-api/blob/76aaea1c502a129ba6c2cc20461d1a226e7b8cf3/src/plugin/types.ts#L141)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>
