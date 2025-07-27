[**talawa-api**](../../../README.md)

***

# Interface: IPluginLifecycle

Defined in: [src/plugin/types.ts:114](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L114)

## Methods

### onActivate()?

> `optional` **onActivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:116](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L116)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onDeactivate()?

> `optional` **onDeactivate**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:117](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L117)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onLoad()?

> `optional` **onLoad**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:115](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L115)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>

***

### onUnload()?

> `optional` **onUnload**(`context`): `Promise`\<`void`\>

Defined in: [src/plugin/types.ts:118](https://github.com/PalisadoesFoundation/talawa-api/blob/683c972995b645053f41c76c01368003402b250c/src/plugin/types.ts#L118)

#### Parameters

##### context

[`IPluginContext`](IPluginContext.md)

#### Returns

`Promise`\<`void`\>
