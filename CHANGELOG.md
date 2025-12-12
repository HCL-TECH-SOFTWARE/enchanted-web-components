# Changelog

## Unreleased

### Added

### Fixed

### Changed

### Breaking changes

#### Type Renaming

All type, enum and interface have been renamed from `DX*` prefix to `Enchanted*` prefix:

| **Old Name (Dx)** | **New Name (Enchanted)** |
|-------------------|---------------------------|
| DxDataGridColDef | EnchantedDataGridColDef |
| DxMenuPlacement | EnchantedMenuPlacement |
| DxMenuSize | EnchantedMenuSize |

#### Folder Restructuring

- Refactored folder structure: renamed `ac` directories to `atomic-component` across the codebase.

#### Web Component Renaming

All web components have been renamed from `dx-*` prefix to `enchanted-*` prefix:

| **Old Name (dx-)** | **New Name (enchanted-)** |
|-------------------|---------------------------|
| dx-ac-base-element | enchanted-ac-base-element |
| dx-accordion | enchanted-accordion |
| dx-accordion-summary | enchanted-accordion-summary |
| dx-alert | enchanted-alert |
| dx-anchor | enchanted-link |
| dx-avatar | enchanted-avatar |
| dx-badge | enchanted-badge |
| dx-breadcrumbs | enchanted-breadcrumbs |
| dx-breadcrumbs-item | enchanted-breadcrumbs-item |
| dx-button | enchanted-button |
| dx-chip | enchanted-chip |
| dx-circular-progress | enchanted-circular-progress |
| dx-data-grid | enchanted-data-grid |
| dx-data-grid-generic | enchanted-data-grid-generic |
| dx-datepicker | enchanted-datepicker |
| dx-dialog | enchanted-dialog |
| dx-header | enchanted-header |
| dx-header-layout | enchanted-header-layout |
| dx-icon-button | enchanted-icon-button |
| dx-input-select | enchanted-select |
| dx-input-textfield | enchanted-textfield |
| dx-item-type-avatar | enchanted-item-type-avatar |
| dx-list | enchanted-list |
| dx-list-item | enchanted-list-item |
| dx-menu | enchanted-menu |
| dx-menu-item | enchanted-menu-item |
| dx-multiple-select-chip | enchanted-multiple-select-chip |
| dx-panel | enchanted-panel |
| dx-popover | enchanted-popover |
| dx-preview | enchanted-preview |
| dx-search-center-layout | enchanted-search-center-layout |
| dx-snackbar | enchanted-snackbar |
| dx-svg-icon | enchanted-svg-icon |
| dx-switch | enchanted-switch |
| dx-table-pagination | enchanted-table-pagination |
| dx-theme-inspector | enchanted-theme-inspector |
| dx-toggle-button | enchanted-toggle-button |
| dx-tooltip | enchanted-tooltip |


## 2.0.0

### Added
- Added new `placement` and `size` property for `dx-menu` component.
- Added `icons` property to `dx-toggle-button` component to support enchanted-icons (TemplateResult array) alongside existing `iconUrls` (string array) for dual-button mode.
- Added `clearIcon` and `actionIcon` properties to `dx-input-textfield` component to support enchanted-icons (TemplateResult) for icon rendering.
- Added `dx-data-grid-generic` storybook story
- Added `icon` property to the `dx-chip` component
- Added a new storybook for the theme inspector and also added some new color tokens.
- Added comprehensive accessibility focus tests for `dx-dialog` component.
- Added RTL support for `dx-dialog` default title layout.

### Fixed
- Fixed `dx-preview` image zoom functionality to enable scrolling on all sides when zoomed beyond 100%.
- Fixed the `XS` size of the `dx-dialog` component
- Fixed the `disabled` state for the `dx-header` component
- Fixed `dx-dialog` close button positioning.
- Fixed truncated title text in `dx-dialog` if overflowing.

### Changed
- Refactored menu placement logic using a switch statement for clarity and maintainability.
- Updated `dx-toggle-button` component to support both enchanted-icons via `icons` property and static SVG URLs via `iconUrls` property with fallback logic (`icons[0] || iconUrls[0]`).
- Updated `dx-input-textfield` component to use `clearIcon` and `actionIcon` properties (TemplateResult) instead of URL-based icons.
- Updated `dx-input-textfield` storybook to use enchanted-icons (`icon-close`, `icon-search`) from `@hcl-software/enchanted-icons-web-component`.
- Checked and reworked all storybook stories
- Adjusted `dx-chip` stylings
- Adjusted `dx-datepicker` stylings
- Adjusted `dx-input-select` stylings
- Adjusted `dx-input-textfield` stylings
- Adjusted `dx-multiple-select-chip` stylings
- Adjusted `dx-snackbar` stylings

### Breaking changes
- Removed `clearIconUrl` and `actionIconUrl` properties from `dx-input-textfield` component. Use `clearIcon` and `actionIcon` properties instead, which accept TemplateResult for enchanted-icons rendering.
- Removed unused `error` property from the `dx-multiple-select-chip` component
- Removed unused `color` property from the `dx-header` component
- Changed `dx-data-grid-generic` interface property types (isLoading, hasMiddlewareError, hasContentSourceAvailable, checkboxSelection)
- Removed `dx-search-center-layout` component
- Removed the `ignoreDisable` property from the `dx-input-textfield` component
- Removed useless `open` property from `dx-menu` component
- Changed `dx-dialog` focus behavior to immediately focus the first focusable element (prioritizing slotted content) instead of focusing the dialog element first.

## 1.4.0

### Added
- Added new `placement` and `size` property for `dx-menu` component.

### Changed
- Refactored menu placement logic using a switch statement for clarity and maintainability.

## 1.3.0

### Added
- Added a new storybook component for `dx-popover`.
- Added new property for disabling popover on hover in `dx-popover`.
- Prevent dropdown closing when dragging scrollbar inside `<dx-input-select>`.


### Fixed
- Fixed the disabled state bug of `dx-icon-button`.

### Changed
- Changed `dx-dialog` live region styling from a CSS class selector to a `part` attribute with `::part()` selector, ensuring proper accessibility and visual hiding inside shadow DOM. This resolves issues with screen reader announcements and visible text flashes on dialog open.

## 1.2.1

### Fixed
- Refactored `dx-dialog` component to use reactive state properties (`@state()`) for ARIA attributes instead of direct DOM manipulation, improving maintainability and alignment with Lit's reactive programming model
- Fixed `dx-dialog` test for auto-focus behavior to properly check dialog element focus state
- Fixed `dx-breadcrumbs` component list styling by adding `list-style-type: none` to ensure proper rendering
- Fixed the icon bug for sorting of `dx-data-grid`.
- Fixed the style bug for filter button in `dx-toggle-button`.

### Changed
- Changed `dx-dialog` accessibility implementation to use Lit reactive state for `role`, `aria-label`, `tabindex`, and content visibility management
- Updated `dx-dialog` live region to be part of the template instead of dynamically created
- Set the correct border and outline color on the `dx-avatar` component

## 1.2.0

### Added
- Added comprehensive ARIA attributes and labels for screen reader accessibility in `dx-preview` component
- Added `aria-modal="true"` attribute to dialog role in `dx-dialog` component
- Added keyboard navigation tests for `dx-dialog` close button (Enter and Space keys)
- Added ARIA accessibility tests for `dx-preview` and `dx-dialog` components
- Added `focusOnLoadingContainer()` public method in `dx-data-grid-generic` component
- Added `focusDialog()` public method in `dx-dialog` component
- Added `subtitle` part to `dx-data-grid-generic` component.

### Fixed
- Fixed screen reader accessibility in `dx-preview` component by adding proper ARIA labels, roles, and attributes
- Fixed screen reader accessibility in `dx-dialog` component with proper ARIA modal attribute
- Fixed focus management in `dx-preview` to focus on dialog element instead of header
- Fixed `dx-preview` interactive elements to have proper `aria-hidden` and `aria-label` attributes
- Fixed keyboard accessibility for `dx-dialog` close button
- Improved accessibility of `dx-breadcrumbs` component for screen readers
- Improved accessibility of `dx-dialog` component for screen readers
- Fix `dx-preview` component bug of previewing the same item will open the first index item in preview.
- Fixed the badge icon position for the rtl.

### Changed
- Changed `dx-preview` backdrop to use `role="presentation"` for better screen reader experience
- Changed `dx-preview` container to use proper dialog role with ARIA attributes
- Updated `dx-data-grid-generic` component with improved ARIA attributes:
- Changed table `role` from "table" to "grid" for better screen reader support
- Changed cell `role` from "cell" to "gridcell" to match grid semantics
- Added `aria-colcount`, `aria-rowcount`, and `aria-busy` attributes to table element
- Added `role="status"` and `aria-label` to loading container
- Wrapped table header and body in `<thead>` and `<tbody>` elements for better semantic structure
- Using debug instead of console as logging framework. `export DEBUG=enchanted-web-components:*` is enabling the specific debug messages

## 1.1.0

### Added
- Added focus trap functionality in `dx-preview` component to improve keyboard navigation
- Added `_focusButton()` public method in `dx-button` component
- Added `_focusButton()` public method in `dx-icon-button` component
- Added `focusOnRow()` public method in `dx-data-grid-generic` component
- Added accessibility properties (`ariaHasPopup`, `ariaExpanded`) in `dx-button` component
- Added `ariaLabel` property support in `dx-input-select` component
- Added ARIA labels for pagination controls in `dx-table-pagination` component
- Added role attributes (`role="listbox"`, `role="option"`) in `dx-input-select` component for better screen reader support

### Fixed
- Fixed intermittent test failure in `dx-preview` zoom percentage toggle test

## 1.0.1

### Fixed
Broken npm publish

## 1.0.0

### Added
Initial release.
