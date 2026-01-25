[**talawa-admin**](../../../../../../README.md)

***

# Function: usePluginActions()

> **usePluginActions**(`__namedParameters`): `object`

Defined in: [screens/AdminPortal/PluginStore/hooks/usePluginActions.ts:17](https://github.com/PalisadoesFoundation/talawa-admin/blob/6445033f887df17fecf22e7ce251f7ab43ed5425/src/screens/AdminPortal/PluginStore/hooks/usePluginActions.ts#L17)

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
