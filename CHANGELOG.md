# Changelog

## Unreleased

### Added
- Added `focusOnLoadingContainer()` public method in `dx-data-grid-generic` component
- Added `focusDialog()` public method in `dx-dialog` component

### Fixed
- Improved accessibility of `dx-breadcrumbs` component for screen readers

### Changed
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
