[**talawa-admin**](../../../../README.md)

***

# Function: default()

> **default**(): `JSX.Element`

Defined in: [src/screens/SubTags/SubTags.tsx:60](https://github.com/PalisadoesFoundation/talawa-admin/blob/3104525a1c66b9686a5ac0b80c45c43369f312bb/src/screens/SubTags/SubTags.tsx#L60)

Component that renders the SubTags screen when the app navigates to '/orgtags/:orgId/subtags/:tagId'.

This component does not accept any props and is responsible for displaying
the content associated with the corresponding route.

## CSS Strategy Explanation:

To ensure consistency across the application and reduce duplication, common styles
(such as button styles) have been moved to the global CSS file. Instead of using
component-specific classes (e.g., `.greenregbtnOrganizationFundCampaign`, `.greenregbtnPledge`), a single reusable
class (e.g., .addButton) is now applied.

### Benefits:
- **Reduces redundant CSS code.
- **Improves maintainability by centralizing common styles.
- **Ensures consistent styling across components.

### Global CSS Classes used:
- `.editButton`
- `.modalHeader`
- `.inputField`
- `.removeButton`

For more details on the reusable classes, refer to the global CSS file.

## Returns

`JSX.Element`
