[**talawa-admin**](../../../../../../README.md)

***

# Function: usePluginFilters()

> **usePluginFilters**(`__namedParameters`): `object`

Defined in: [screens/AdminPortal/PluginStore/hooks/usePluginFilters.ts:16](https://github.com/PalisadoesFoundation/talawa-admin/blob/b87aaed727690609a6d5a345627bfa10a8d26ef0/src/screens/AdminPortal/PluginStore/hooks/usePluginFilters.ts#L16)

## Parameters

### \_\_namedParameters

`IUsePluginFiltersProps`

## Returns

`object`

### debouncedSearch

> **debouncedSearch**: (...`args`) => `void`

#### Parameters

##### args

...`unknown`[]

#### Returns

`void`

### filteredPlugins

> **filteredPlugins**: `IPluginMeta`[]

### filterState

> **filterState**: `object`

#### filterState.option

> **option**: `string` = `'all'`

#### filterState.selectedOption

> **selectedOption**: `string`

### getInstalledPlugin

> **getInstalledPlugin**: (`pluginName`) => `IInstalledPlugin`

#### Parameters

##### pluginName

`string`

#### Returns

`IInstalledPlugin`

### handleFilterChange

> **handleFilterChange**: (`value`) => `void`

#### Parameters

##### value

`string` \| `number`

#### Returns

`void`

### isInstalled

> **isInstalled**: (`pluginName`) => `boolean`

#### Parameters

##### pluginName

`string`

#### Returns

`boolean`

### searchTerm

> **searchTerm**: `string`
