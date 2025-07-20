[**talawa-api**](../../../README.md)

***

# Interface: IPluginLifecycle

Defined in: [src/plugin/types.ts:121](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L121)

## Methods

### onActivate()?

> `optional` **onActivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:123](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L123)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onDeactivate()?

> `optional` **onDeactivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:124](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L124)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onLoad()?

> `optional` **onLoad**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:122](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L122)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onUnload()?

> `optional` **onUnload**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:125](https://github.com/PalisadoesFoundation/talawa-api/blob/85295bc0a41036287eacb0bf29a66d8022826bb4/src/plugin/types.ts#L125)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>
