[**talawa-admin**](../../../../../../README.md)

***

# Function: usePluginActions()

> **usePluginActions**(`__namedParameters`): `object`

Defined in: [screens/AdminPortal/PluginStore/hooks/usePluginActions.ts:21](https://github.com/PalisadoesFoundation/talawa-admin/blob/7de9fc83b19d9a7e4f0c39bbb159d7e24e276afa/src/screens/AdminPortal/PluginStore/hooks/usePluginActions.ts#L21)

## Parameters

### \_\_namedParameters

`IUsePluginActionsProps`

## Returns

`object`

### closeUninstallModal()

> **closeUninstallModal**: () => `void`

#### Returns

`void`

### handleInstallPlugin()

> **handleInstallPlugin**: (`plugin`) => `Promise`\<`void`\>

#### Parameters

##### plugin

`IPluginMeta`

#### Returns

`Promise`\<`void`\>

### handleUninstallConfirm()

> **handleUninstallConfirm**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### loading

> **loading**: `boolean`

### pluginToUninstall

> **pluginToUninstall**: `IPluginMeta`

### showUninstallModal

> **showUninstallModal**: `boolean`

### togglePluginStatus()

> **togglePluginStatus**: (`plugin`, `status`) => `Promise`\<`void`\>

#### Parameters

##### plugin

`IPluginMeta`

##### status

`"active"` | `"inactive"`

#### Returns

`Promise`\<`void`\>

### uninstallPlugin()

> **uninstallPlugin**: (`plugin`) => `void`

#### Parameters

##### plugin

`IPluginMeta`

#### Returns

`void`
