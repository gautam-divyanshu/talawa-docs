[**talawa-admin**](../../../../../README.md)

***

# Function: usePluginFilters()

> **usePluginFilters**(`__namedParameters`): `object`

Defined in: [screens/PluginStore/hooks/usePluginFilters.ts:16](https://github.com/PalisadoesFoundation/talawa-admin/blob/5e2c1fcdf6d126e8b534527cdf2ce6281a7d5d7d/src/screens/PluginStore/hooks/usePluginFilters.ts#L16)

## Parameters

### \_\_namedParameters

`IUsePluginFiltersProps`

## Returns

`object`

### debouncedSearch()

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

### getInstalledPlugin()

> **getInstalledPlugin**: (`pluginName`) => `IInstalledPlugin`

#### Parameters

##### pluginName

`string`

#### Returns

`IInstalledPlugin`

### handleFilterChange()

> **handleFilterChange**: (`value`) => `void`

#### Parameters

##### value

`string`

#### Returns

`void`

### isInstalled()

> **isInstalled**: (`pluginName`) => `boolean`

#### Parameters

##### pluginName

`string`

#### Returns

`boolean`

### searchTerm

> **searchTerm**: `string`
