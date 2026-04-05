[**talawa-admin**](../../../../../../README.md)

***

# Function: usePluginActions()

> **usePluginActions**(`__namedParameters`): `object`

Defined in: [screens/AdminPortal/PluginStore/hooks/usePluginActions.ts:26](https://github.com/PalisadoesFoundation/talawa-admin/blob/daa074e07cb9ddfe6bb0bbbf7427f4dea4b5d8d7/src/screens/AdminPortal/PluginStore/hooks/usePluginActions.ts#L26)

## Parameters

### \_\_namedParameters

`IUsePluginActionsProps`

## Returns

`object`

### closeUninstallModal

> **closeUninstallModal**: () => `void`

#### Returns

`void`

### handleInstallPlugin

> **handleInstallPlugin**: (`plugin`) => `Promise`\<`void`\>

#### Parameters

##### plugin

`IPluginMeta`

#### Returns

`Promise`\<`void`\>

### handleUninstallConfirm

> **handleUninstallConfirm**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### loading

> **loading**: `boolean`

### pluginToUninstall

> **pluginToUninstall**: `IPluginMeta`

### showUninstallModal

> **showUninstallModal**: `boolean` = `uninstallModal.isOpen`

### togglePluginStatus

> **togglePluginStatus**: (`plugin`, `status`) => `Promise`\<`void`\>

#### Parameters

##### plugin

`IPluginMeta`

##### status

`"active"` \| `"inactive"`

#### Returns

`Promise`\<`void`\>

### uninstallPlugin

> **uninstallPlugin**: (`plugin`) => `void`

#### Parameters

##### plugin

`IPluginMeta`

#### Returns

`void`
