# Changelog

## Unreleased

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
- Fix `dx-preview` component bug of previewing the same item will open the first index item in preview.

### Changed
- Changed `dx-preview` backdrop to use `role="presentation"` for better screen reader experience
- Changed `dx-preview` container to use proper dialog role with ARIA attributes
- Updated `dx-data-grid-generic` component with improved ARIA attributes:
- Changed table `role` from "table" to "grid" for better screen reader support
- Changed cell `role` from "cell" to "gridcell" to match grid semantics
- Added `aria-colcount`, `aria-rowcount`, and `aria-busy` attributes to table element
- Added `role="status"` and `aria-label` to loading container
- Wrapped table header and body in `<thead>` and `<tbody>` elements for better semantic structure

### Breaking changes

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
