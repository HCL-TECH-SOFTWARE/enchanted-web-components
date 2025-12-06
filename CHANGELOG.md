# Changelog

## Unreleased

### Added
- Add `dx-data-grid-generic` storybook story
- Add `iconUrl` property to the `dx-chip` component

### Fixed
- Fix the `XS` size of the `dx-dialog` component

### Changed
- Remove unused `error` property from the `dx-multiple-select-chip` component
- Remove unused `color` property from the `dx-header` component
- Check and rework all storybook stories
- Adjust `dx-chip` stylings
- Adjust `dx-datepicker` stylings
- Adjust `dx-input-select` stylings
- Adjust `dx-input-textfield` stylings
- Adjust `dx-multiple-select-chip` stylings
- Adjust `dx-snackbar` stylings

### Breaking changes
- Remove `dx-search-center-layout` component

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
