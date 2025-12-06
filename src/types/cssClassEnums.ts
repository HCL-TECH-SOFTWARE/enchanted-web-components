/* ======================================================================== *
 * Copyright 2025 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */

/**please use this enum to add all parts to be exposed that will be utilised elsewhere in the search UI */

export enum PAGINATION_PARTS {
  PAGINATION = 'pagination',
  PAGINATION_INDEX_DEFAULT = 'pagination-index-default',
  PAGINATION_INDEX_SELECTED = 'pagination-index-selected',
  PAGINATION_INDEX_DISABLED = 'pagination-index-disabled',
  PAGINATION_INDEX_ELLIPSIS = 'pagination-index-ellipsis',
  PAGINATION_INDEX_PREV = 'pagination-index-prev',
  PAGINATION_INDEX_NEXT = 'pagination-index-next',
  PAGINATION_INDEX_PREV_DISABLED = 'pagination-index-prev-disabled',
  PAGINATION_INDEX_NEXT_DISABLED = 'pagination-index-next-disabled',
  RESULT_TITLE = 'result-title',
}

export enum BUTTON_PARTS {
  BUTTON = 'button',
  BUTTON_DISABLED = 'button-disabled',
  BUTTON_OUTLINED = 'button-outlined',
  BUTTON_OUTLINED_FOCUSED = 'button-outlined-focused',
  BUTTON_OUTLINED_DISABLED = 'button-outlined-disabled',
  BUTTON_START_ICON = 'button-start-icon',
  BUTTON_START_ICON_SMALL_WITH_PADDING = 'button-start-icon-small-with-padding',
  BUTTON_START_ICON_SMALL_WITHOUT_PADDING = 'button-start-icon-small-without-padding',
  BUTTON_START_ICON_MEDIUM_WITH_PADDING = 'button-start-icon-medium-with-padding',
  BUTTON_START_ICON_MEDIUM_WITHOUT_PADDING = 'button-start-icon-medium-without-padding',
  BUTTON_START_ICON_FAB = 'button-start-icon-fab',
  BUTTON_END_ICON = 'button-end-icon',
  BUTTON_START_ICON_RTL_MARGIN = 'button-start-icon-rtl-margin',
  BUTTON_TEXT = 'button-text',
  BUTTON_CONTAINED = 'button-contained',
  BUTTON_CONTAINED_INVERSE = 'button-contained-inverse',
  BUTTON_CONTAINED_DISABLED = 'button-contained-disabled',
  BUTTON_CONTAINED_DISABLED_INVERSE = 'button-contained-disabled-inverse',
  BUTTON_CONTAINED_HOVERED = 'button-contained-hovered',
  BUTTON_CONTAINED_FOCUSED = 'button-contained-focused',
  BUTTON_CONTAINED_FOCUSED_INVERSE = 'button-contained-focused-inverse',
  BUTTON_CONTAINED_HOVERED_FOCUSED = 'button-contained-hovered-and-focused',
  BUTTON_ENCHANTED_TEXT = 'button-enchanted-text',
  BUTTON_ENCHANTED_TEXT_INVERSE = 'button-enchanted-text-inverse',
  BUTTON_ENCHANTED_TEXT_DISABLED = 'button-enchanted-text-disabled',
  BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE = 'button-enchanted-text-disabled-inverse',
  BUTTON_ENCHANTED_TEXT_HOVERED = 'button-enchanted-text-hovered',
  BUTTON_ENCHANTED_TEXT_FOCUSED = 'button-enchanted-text-focused',
  BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE = 'button-enchanted-text-focused-inverse',
  BUTTON_ENCHANTED_TEXT_HOVERED_FOCUSED = 'button-enchanted-text-hovered-and-focused',
  BUTTON_ENCHANTED_OUTLINED = 'button-enchanted-outlined',
  BUTTON_ENCHANTED_OUTLINED_FOCUSED = 'button-enchanted-outlined-focused',
  BUTTON_ENCHANTED_OUTLINED_DISABLED = 'button-enchanted-outlined-disabled',
  BUTTON_ENCHANTED_OUTLINED_HOVERED = 'button-enchanted-outlined-hovered',
  BUTTON_ENCHANTED_OUTLINED_HOVERED_FOCUSED = 'button-enchanted-outlined-hovered-and-focused',
}
export enum BUTTON_VARIANT {
  BUTTON_TEXT_VAR = 'text',
  BUTTON_OUTLINED_VAR = 'outlined',
  BUTTON_CONTAINED_VAR = 'contained',
  BUTTON_VAR = 'contained', // for input-select purposes
}

export enum CHIP_PARTS {
  CHIP_DIV = 'chip-div',
  CHIP_NAME = 'chip-name',
  CHIP_AVATAR = 'chip-avatar',
  CHIP_COUNT = 'chip-count',
  CHIP_COUNT_RTL = 'chip-count-rtl',
  CHIP_DIV_DISABLED = 'chip-div-disabled',
}

export enum TOGGLE_BUTTON_PARTS {
  TOGGLE_BUTTON = 'toggle-button',
  TOGGLE_BUTTON_SELECTED = 'toggle-button-selected',
  TOGGLE_BUTTON_DISABLED = 'toggle-button-disabled',
  TOGGLE_BUTTON_DIV = 'toggle-button-div',
  TOGGLE_BUTTON_DIV_OUTLINED = 'toggle-button-div-outlined',
  TOGGLE_BUTTON_ICON = 'toggle-button-icon',
  FIRST_BUTTON = 'first-button',
  SECOND_BUTTON = 'second-button',
  TOGGLE_SINGLE_BUTTON = 'toggle-single-button',
  TOGGLE_ON_SINGLE_BUTTON = 'toggle-on-single-button',
  TOGGLE_OFF_SINGLE_BUTTON = 'toggle-off-single-button',
  TOGGLE_BUTTON_BADGE = 'badge-dot',
  TOGGLE_BUTTON_BADGE_RTL = 'badge-dot-rtl',
}

export enum TAG_CLOUD_PARTS {
  CLOUD_VIEW = 'cloud-view',
  LIST_VIEW = 'list-view',
}

export enum HEADER_VARIANT {
  HEADER_AUTHORING = 'header-authoring-modal',
  HEADER_AUTHORING_MODAL_CLOSE = 'header-authoring',
  HEADER_ENDUSER = 'header-endUser',
}

export enum HEADER_PARTS {
  BADGE_TEXT = 'badge_text',
  BADGE_TEXT_RTL = 'badge_text-rtl',
  BADGE_DOT = 'badge_dot',
  H6 = 'h6',
  INPUT = 'input',
  HEADER = 'header',
  SUB_HEADER_START = 'sub-header-start',
  SUB_HEADER_END = 'sub-header-end',
  HEADER_SPACING_START = 'header-spacing-start',
  HEADER_SPACING_START_HAMBURGER = 'header-spacing-start-hamburger',
  HEADER_SPACING_END = 'header-spacing-end',
  HR_PART = 'hr-part',
}

export enum HEADER_LAYOUT_PARTS {
  MAIN_HEADER = 'main-header',
  CHAT_MAIN_HEADER = 'chat-main-header',
  HEADER_START_CONTAINER = 'header-start-container',
  HEADER_START = 'header-start',
  HEADER_START_CONTAINER_LABEL = 'header-start-container-label',
  HEADER_START_LABEL = 'header-start-label',
  HEADER_MIDDLE_CONTAINER = 'header-middle-container',
  HEADER_MIDDLE = 'header-middle',
  HEADER_END_CONTAINER = 'header-end-container',
  HEADER_END = 'header-end',
}

export enum BADGE_PARTS {
  BADGE_DOT = 'badge_dot',
  BADGE_TEXT = 'badge_text',
  BADGE_TEXT_RTL = 'badge_text-rtl',
}

export enum AVATAR_VARIANT {
  AVATAR_ICON = 'avatar-icon',
  AVATAR_LETTER = 'avatar-letter',
  AVATAR_IMG = 'avatar-img',
  AVATAR_ICON_TEMPLATE = 'avatar-icon-template',
}

export enum AVATAR_TYPE {
  AVATAR_ROUNDED = 'avatar-rounded',
  AVATAR_CIRCULAR = 'avatar-circular',
}

export enum AVATAR_PARTS {
  AVATAR_DIV = 'avatar-div',
  AVATAR_DIV_CIRCULAR = 'avatar-div-circular',
  AVATAR_SPAN_CIRCULAR = 'avatar-span-circular',
  AVATAR_SPAN_ROUNDED = 'avatar-span-rounded',
  AVATAR_ICON_CIRCULAR = 'avatar-icon-circular',
  AVATAR_ICON_ROUNDED = 'avatar-icon-rounded',
  AVATAR_ICON_TEMPLATE_CIRCULAR = 'avatar-icon-template-circular',
  AVATAR_ICON_TEMPLATE_ROUNDED = 'avatar-icon-template-rounded',
  AVATAR_IMAGE_CIRCULAR = 'avatar-image-circular',
  AVATAR_IMAGE_ROUNDED = 'avatar-image-rounded',
}

export enum AVATAR_COLOR {
  AVATAR_DEFAULT_COLOR = 'avatar-default-color',
  AVATAR_RED = 'avatar-red',
  AVATAR_ORANGE = 'avatar-orange',
  AVATAR_YELLOW = 'avatar-yellow',
  AVATAR_LIME = 'avatar-lime',
  AVATAR_GREEN = 'avatar-green',
  AVATAR_TEAL = 'avatar-teal',
  AVATAR_BLUE = 'avatar-blue',
  AVATAR_INDIGO = 'avatar-indigo',
  AVATAR_PURPLE = 'avatar-purple',
  AVATAR_PINK = 'avatar-pink',
}

export enum SWITCH_PARTS {
  SWITCH_LABEL = 'switch-label',
  SWITCH_LABEL_DISABLED = 'switch-label-disabled',
  SWITCH_INPUT = 'switch-input',
  SWITCH_SLIDER = 'switch-slider',
  SWITCH_SLIDER_CHECKED = 'switch-slider-checked',
  SWITCH_SLIDER_DISABLED = 'switch-slider-disabled',
  SWITCH_SLIDER_CHECKED_DISABLED = 'switch-slider-checked-disabled',
}

export enum DIALOG_PARTS {
  DIALOG_ROOT = 'dialog-root',
  DIALOG_ROOT_CHAT = 'dialog-root-chat',
  BACKDROP = 'backdrop',
  CONTAINER_XL = 'container-xl',
  CONTAINER_XS = 'container-xs',
  PAPER_XL = 'paper-xl',
  PAPER_XS = 'paper-xs',
  TITLE = 'title',
  TITLE_ROOT = 'title-root',
  TITLE_TEXT = 'title-text',
  TITLE_TEXT_RTL = 'title-text-rtl',
  ICON_ROOT = 'icon-root',
  ICON_CLOSE = 'icon-close',
  CONTENT_XL = 'content-xl',
  CONTENT_XL_NO_BORDER = 'content-xl-no-border',
  PAGINATION_XL = 'pagination-xl',
  ACTION = 'action',
  CHAT_ACTION = 'chat-action',
  PAPER_SM = 'paper-sm',
  PAPER_CHAT = 'paper-chat',
  PAPER_MD = 'paper-md',
  PAPER_LG = 'paper-lg',
  CONTAINER_SM = 'container-sm',
  CONTAINER_CHAT = 'container-chat',
  CONTAINER_MD = 'container-md',
  CONTAINER_LG = 'container-lg',
  CONTENT_SM = 'content-sm',
  CONTENT_XS = 'content-xs',
  CONTENT_CHAT = 'content-chat',
  CONTENT_MD = 'content-md',
  CONTENT_LG = 'content-lg',
  ACTION_NO_BORDER = 'action-no-border',
  PAGINATION_XS = 'pagination-xs',
  PAGINATION_SM = 'pagination-sm',
  PAGINATION_MD = 'pagination-md',
  PAGINATION_LG = 'pagination-lg',
}

export enum LIST_PARTS {
  UNORDERED_LIST = 'unordered-list',
}

export enum LIST_ITEM_PARTS {
  LIST_ITEM = 'list-item',
  LIST_ITEM_SELECTED = 'list-item-selected',
  MENU_ITEM = 'menu-item',
}

export enum MENU_PARTS {
  MENU_ROOT = 'menu-root',
  BACKDROP = 'backdrop',
  PAPER_ROOT = 'paper-root',
}

export enum MENU_ITEM_PARTS {
  TEXT_ROOT = 'text-root',
  TEXT = 'text',
}

export enum INPUT_TEXTFIELD_PARTS {
  INPUT = 'input',
  INPUT_DISABLED = 'input-disabled',
  INPUT_ICON_CLEAR = 'input-icon-clear',
  INPUT_ICON_CLEAR_RTL = 'input-icon-clear-rtl',
  INPUT_ICON_BOTH = 'input-icon-both',
  INPUT_ICON_BOTH_RTL = 'input-icon-both-rtl',
  ICON = 'icon',
  ICON_CLEAR = 'icon-clear',
  ICON_CLEAR_RTL = 'icon-clear-rtl',
  ICON_CLEAR_WITH_LABEL = 'icon-clear-with-label',
  ICON_ACTION = 'icon-action',
  ICON_ACTION_RTL = 'icon-action-rtl',
  ICON_ACTION_WITH_LABEL = 'icon-action-with-label',
  ICON_ACTION_DISABLED = 'icon-action-disabled',
}

export enum INPUT_SELECT_PARTS {
  DIV = 'div',
  DIV_LABEL = 'div-label',
  LABEL = 'label',
  LABEL_DISABLED = 'label-disabled',
  REMOVE_LABEL = 'remove-label',
  REMOVE_LABEL_DISABLED = 'remove-label-disabled',
}

export enum INPUT_MULTI_SELECT_PARTS {
  TOP_CONTAINER_DIV = 'top-container-div',
  LABEL = 'label',
  INPUT_CONTAINER = 'input-container',
  INPUT_CONTAINER_HOVERED = 'input-container-hovered',
  CHIP_AND_INPUT_CONTAINER = 'chip-and-input-container',
  CLEAR_AND_ICON_CONTAINER = 'clear-and-icon-container',
  INPUT_TEXT = 'input-text',
  CLEAR_ICON = 'clear-icon',
  CHIP_CONTAINER = 'chip-container',
  CLEAR_ALL_ICON = 'clear-all-icon',
  CHECKMARK = 'checkmark',
  CHECKMARK_PLACEHOLDER = 'checkmark-placeholder',
  LIST_ITEMS = 'list-items',
  LIST_ITEM_CONTENT = 'list-item-content',
  LIST_ITEM_NO_CONTENT = 'list-item-no-content',
  INPUT_FIELD = 'input-field',
  CLEAR_ALL_ICON_HIDDEN = 'clear-all-icon-hidden',
  CLEAR = 'Clear',
  NO_LIST_ITEM = 'no-list-item',
  MULTIPLE_SELECT_DIV_LABEL_AND_REMOVE = 'multiple-select-div-label-and-remove',
  MULTIPLE_SELECT_REMOVE_LABEL = 'multiple-select-remove-label',
  MULTIPLE_SELECT_REMOVE_LABEL_DISABLED = 'multiple-select-remove-label-disabled',
  HELPER_TEXT = 'helper-text',
  TOP_CONTAINER_DIV_DISABLED = 'top-container-div-disabled',
  INPUT_CONTAINER_DISABLED = 'input-container-disabled',
  MULTIPLE_SELECT_LABEL_DISABLED = 'multiple-select-label-disabled',
  LABEL_FOCUS = 'label-focus',
  MULTIPLE_SELECT_INPUT_DEFAULT  = 'multiple-select-input-default',
  CLEAR_ICON_DISABLED = 'clear-icon-disabled'
}

export enum TABLE_PAGINATION_PARTS {
  CONTAINER = 'container',
  ROWS_SECTION = 'rows-section',
  PAGES_SECTION = 'pages-section',
  ROWS_DESCRIPTION = 'rows-description',
  PAGES_DESCRIPTION = 'pages-description',
  PAGES_NAV_BUTTON = 'pages-nav-button',
}

export enum ICON_BUTTON_SIZES {
  SMALL = 'small',
  MEDIUM = 'medium',
  FAB = 'fab',
}

export enum DATA_GRID_PARTS {
  TABLE_CONTAINER = 'table-container',
  TABLE_LOADING_TEXT = 'table-loading-text',
  TABLE_ACTION_BUTTONS_CONTAINER = 'table-action-buttons-container',
  TABLE_ACTION_ICON_BUTTON = 'table-action-icon-button',
  TABLE_ACTION_ICON_BUTTON_MENU = 'table-action-icon-button-menu',
  TABLE_ACTION_ICON_BUTTON_HIDDEN = 'table-action-icon-button-hidden',
  TABLE_SELECT_CHECKBOX_CONTAINER = 'table-select-checkbox-container',
  TABLE_SELECT_CHECKBOX = 'table-select-checkbox',
  TABLE_SELECT_ALL_CHECKBOX = 'table-select-all-checkbox',
  TABLE_HEADER_CONTAINER = 'table-header-container',
  TABLE_HEADER_CONTAINER_RTL = 'table-header-container-rtl',
  TABLE_HEADER_CONTAINER_CHILD = 'table-header-container-child',
  TABLE_HEADER_TEXT_PARENT = 'table-header-text-parent',
  TABLE_HEADER_TEXT = 'table-header-text',
  TABLE_HEADER_TEXT_RTL = 'table-header-text-rtl',
  TABLE_BODY_CONTAINER = 'table-body-container',
  TABLE_ROW_HEADER_CONTAINER = 'table-row-header-container',
  TABLE_ROW_BODY_CONTAINER = 'table-row-body-container',
  TABLE_ROW_BODY_CONTAINER_SELECTED = 'table-row-body-container-selected',
  TABLE_ROW_BODY_CONTAINER_HOVERED = 'table-row-body-container-hovered',
  TABLE_COLUMN_SEPARATOR = 'table-column-separator',
  TABLE_COLUMN_SEPARATOR_RTL = 'table-column-separator-rtl',
  TABLE_COLUMN_SEPARATOR_HR = 'table-column-separator-hr',
  TABLE_CELL_CONTAINER = 'table-cell-container',
  TABLE_CELL_CONTAINER_MULTI_LINES = 'table-cell-container-multi-lines',
  TABLE_CELL_CONTAINER_RTL = 'table-cell-container-rtl',
  TABLE_CELL_TEXT = 'table-cell-text',
  TABLE_CELL_SUBTITLE = 'table-cell-subtitle',
  TABLE_CELL_LINK = 'table-cell-link',
  TABLE_COLUMN_AUTHORING = 'table-column-authoring-{index}',
  TABLE_COLUMN_AUTHORING_DIV = 'table-column-authoring-{index}-div',
  TABLE_COLUMN_AUTHORING_DIV_0 = 'table-column-authoring-{index}-div-0',
  TABLE_COLUMN_AUTHORING_DIV_1 = 'table-column-authoring-{index}-div-1',
  TABLE_COLUMN_AUTHORING_DIV_2 = 'table-column-authoring-{index}-div-2',
  TABLE_COLUMN_AUTHORING_DIV_3 = 'table-column-authoring-{index}-div-3',
  TABLE_COLUMN_AUTHORING_DIV_4 = 'table-column-authoring-{index}-div-4',
  TABLE_COLUMN_PICKER = 'table-column-picker-{index}',
  TABLE_RESULT_LABEL = 'table-result-label',
  TABLE_RESULT_DESCRIPTION = 'table--result-description',
  TABLE_SORT_BUTTON_CONTAINER = 'table-sort-button-container',
  TABLE_SORT_BUTTON_CONTAINER_RTL = 'table-sort-button-container-rtl',
  TABLE_HEADER_ASC_SORT_BUTTON = 'table-header-asc-sort-button',
  TABLE_HEADER_DESC_SORT_BUTTON = 'table-header-desc-sort-button',
  TABLE_HEADER_ICON_BUTTON = 'table-header-icon-button',
  TABLE_CELL_ICON_BUTTON = 'table-cell-icon-button',
  TABLE_CELL_TEXT_ACTION = 'table-cell-text-action',
  TABLE_HEADER_MENU_ITEM = 'table-header-menu-item',
  TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN = 'table-header-asc-sort-button-hidden',
  TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN = 'table-header-desc-sort-button-hidden',
  TABLE_HEADER_SORT_BUTTON = 'table-header-sort-button',
}

export enum SNACKBAR_PARTS {
  SNACKBAR_CONTAINER = 'snackbar-container',
  SNACKBAR_MESSAGE = 'snackbar-message',
  SNACKBAR_BUTTON_CONTAINER = 'snackbar-button-container',
  SNACKBAR_BUTTONS = 'snackbar-buttons',
  SNACKBAR_ICON = 'snackbar-icon',
  SNACKBAR_PROGRESS = 'snackbar-progress',
  SNACKBAR_ICON_CONTAINER = 'snackbar-icon-container',
}

export enum SNACKBAR_POSITION {
  SNACKBAR_LEFT = 'left',
  SNACKBAR_RIGHT = 'right',
}

export enum SNACKBAR_TYPE {
  SNACKBAR_SUCCESS = 'success',
  SNACKBAR_INFO = 'info',
  SNACKBAR_WARNING = 'warning',
  SNACKBAR_ERROR = 'error',
  SNACKBAR_PROGRESS = 'progress',
}

export enum PANEL_PARTS {
  PANEL_CONTAINER = 'panel-container',
  PANEL_HEADER = 'panel-header',
  PANEL_TITLE = 'panel-title',
  PANEL_CONTENT = 'panel-content',
  PANEL_CLOSE_BUTTON = 'panel-close-button',
}

export enum PANEL_POSITION {
  PANEL_LEFT = 'left',
  PANEL_RIGHT = 'right',
}

export enum TOOLTIP_PARTS {
  TOOLTIP_ROOT = 'tooltip-root',
  TOOLTIP_TEXT = 'tooltip-text',
  TOOLTIP_TEXT_HIDDEN = 'tooltip-text-hidden',
  TOOLTIP_TARGET = 'tooltip-target',
}

export enum TOOLTIP_VARIANT {
  TOOLTIP_SMALL = 'tooltip-small',
  TOOLTIP_MEDIUM = 'tooltip-medium',
}

export enum TOOLTIP_TYPE {
  TOOLTIP_SINGLE_LINE = 'tooltip-single-line',
  TOOLTIP_MULTI_LINE = 'tooltip-multi-line',
}

export enum TOOLTIP_PLACEMENT {
  TOOLTIP_BOTTOM = 'tooltip-bottom',
  TOOLTIP_BOTTOM_START = 'tooltip-bottom-start',
  TOOLTIP_BOTTOM_END = 'tooltip-bottom-end',
  TOOLTIP_TOP = 'tooltip-top',
  TOOLTIP_TOP_START = 'tooltip-top-start',
  TOOLTIP_TOP_END = 'tooltip-top-end',
  TOOLTIP_RIGHT = 'tooltip-right',
  TOOLTIP_RIGHT_START = 'tooltip-right-start',
  TOOLTIP_RIGHT_END = 'tooltip-right-end',
  TOOLTIP_LEFT = 'tooltip-left',
  TOOLTIP_LEFT_START = 'tooltip-left-start',
  TOOLTIP_LEFT_END = 'tooltip-left-end',
}

export enum BREADCRUMBS_PART {
  BREADCRUMBS_CONTAINER = 'breadcrumbs-container',
  BREADCRUMBS_LIST = 'breadcrumbs-list',
  BREADCRUMBS_ICON = 'breadcrumbs-icon',
  BREADCRUMBS_SEPARATOR = 'breadcrumbs-separator',
  BREADCRUMBS_ITEM = 'breadcrumbs-item',
  BREADCRUMBS_ITEM_LIST = 'breadcrumbs-item-list',
  BREADCRUMBS_DISABLED = 'disabled',
  BREADCRUMBS_ITEM_LAST = 'breadcrumbs-item-last',
  BREADCRUMBS_ITEM_LAST_ICON = 'breadcrumbs-item-last-icon',
  BREADCRUMBS_LINK = 'breadcrumbs-link',
  BREADCRUMBS_LINK_LAST = 'breadcrumbs-link-last',
  BREADCRUMBS_CONTENT = 'breadcrumbs-content',
  BREADCRUMBS_TEXT = 'breadcrumbs-text',
}

export enum PREVIEW_PARTS {
  PREVIEW_BACKDROP = 'preview-backdrop',
  PREVIEW_CONTAINER = 'preview-container',
  PREVIEW_HEADER = 'preview-header',
  PREVIEW_HEADER_START_ACTIONS = 'preview-header-start-actions',
  PREVIEW_HEADER_MIDDLE_ACTIONS = 'preview-header-middle-actions',
  PREVIEW_HEADER_RENDITION_LABEL = 'preview-header-rendition-label',
  PREVIEW_HEADER_RENDITION_INPUT_SELECT = 'preview-header-rendition-input-select',
  PREVIEW_HEADER_END_ACTIONS = 'preview-header-end-actions',
  PREVIEW_HEADER_SELECT_BUTTON = 'preview-header-select-button',
  PREVIEW_HEADER_TITLE = 'preview-header-title',
  PREVIEW_ITEM_CONTAINER = 'preview-item-container',
  PREVIEW_ITEM_IMAGE = 'preview-item-image',
  PREVIEW_ITEM_VIDEO_CONTAINER = 'preview-item-video-container',
  PREVIEW_ITEM_VIDEO = 'preview-item-video',
  PREVIEW_ITEM_CONTENT = 'preview-item-content',
  PREVIEW_ITEM_CONTENT_CONTAINER = 'preview-item-content-container',
  PREVIEW_ITEM_SPINNER_CONTAINER = 'preview-item-spinner-container',
  PREVIEW_HEADER_DIVIDER = 'preview-header-divider',
  PREVIEW_ITEM_UNSUPPORTED_CONTAINER = 'preview-item-unsupported-container',
  PREVIEW_ITEM_UNSUPPORTED_MESSAGE_CONTAINER = 'preview-item-unsupported-message-container',
  PREVIEW_ITEM_UNSUPPORTED_MESSAGE_TITLE = 'preview-item-unsupported-message-title',
  PREVIEW_ITEM_UNSUPPORTED_MESSAGE_DESCRIPTION = 'preview-item-unsupported-message-description',
  PREVIEW_ITEM_PREVIOUS_BUTTON_CONTAINER = 'preview-item-previous-button-container',
  PREVIEW_ITEM_NEXT_BUTTON_CONTAINER = 'preview-item-next-button-container',
  PREVIEW_ITEM_PREVIOUS_BUTTON = 'preview-item-previous-button',
  PREVIEW_ITEM_NEXT_BUTTON = 'preview-item-next-button',
  PREVIEW_ZOOM_CONTAINER = 'preview-zoom-container',
  PREVIEW_ZOOM_CONTROLS = 'preview-zoom-controls',
}

export enum ALERT_VARIANTS {
  ALERT_CONTAINED = 'contained',
  ALERT_OUTLINED = 'outlined',
}

export enum ALERT_SEVERITY {
  ALERT_INFO = 'info',
  ALERT_ERROR = 'error',
  ALERT_SUCCESS = 'success',
  ALERT_WARNING = 'warning',
}

export enum ALERT {
  ALERT_DIV_ROOT = 'alert-div-root',
  ALERT_CONTAINED_INFO = 'alert-contained-info',
  ALERT_CONTAINED_ERROR = 'alert-contained-error',
  ALERT_CONTAINED_SUCCESS = 'alert-contained-success',
  ALERT_CONTAINED_WARNING = 'alert-contained-warning',
  ALERT_OUTLINED_INFO = 'alert-outlined-info',
  ALERT_OUTLINED_ERROR = 'alert-outlined-error',
  ALERT_OUTLINED_SUCCESS = 'alert-outlined-success',
  ALERT_OUTLINED_WARNING = 'alert-outlined-warning',
  ALERT_SVG_SUCCESS = 'alert-svg-success',
  ALERT_SVG_WARNING = 'alert-svg-warning',
  ALERT_SVG_INFO = 'alert-svg-info',
  ALERT_SVG_ERROR = 'alert-svg-error',
}

export enum DATEPICKER_PARTS {
  DATEPICKER_ROOT = 'datepicker-root',
  DATEPICKER_DIV_LABEL_AND_ACTION = 'datepicker-div-label-and-action',
  DATEPICKER_DIV_LABEL = 'datepicker-div-label',
  DATEPICKER_LABEL_TEXT = 'datepicker-label-text',
  DATEPICKER_LABEL_TEXT_DISABLED = 'datepicker-label-text-disabled',
  DATEPICKER_LABEL_TEXT_INVALID = 'datepicker-label-text-invalid',
  DATEPICKER_LABEL_ICON = 'datepicker-label-icon',
  DATEPICKER_LABEL_REQUIRED = 'datepicker-label-required',
  DATEPICKER_REMOVE_LABEL = 'datepicker-remove-label',
  DATEPICKER_REMOVE_LABEL_DISABLED = 'datepicker-remove-label-disabled',
  DATEPICKER_DIV_FORM = 'datepicker-div-form',
  DATEPICKER_DIV_INPUT = 'datepicker-div-input',
  DATEPICKER_DIV_INPUT_DISABLED = 'datepicker-div-input-disabled',
  DATEPICKER_DIV_INPUT_INVALID = 'datepicker-div-input-invalid',
  DATEPICKER_INPUT = 'datepicker-input',
  DATEPICKER_INPUT_RTL = 'datepicker-input-rtl',
  DATEPICKER_INVALID_TEXT = 'datepicker-invalid-text',
  DATEPICKER_HELP_TEXT = 'datepicker-help-text',
  DATEPICKER_INVALID_TEXT_RTL = 'datepicker-invalid-text-rtl',
  DATEPICKER_HELP_TEXT_RTL = 'datepicker-help-text-rtl',
  DATEPICKER_DIV_ICON = 'datepicker-div-icon',
  DATEPICKER_DIV_CALENDAR_BUTTON = 'datepicker-div-calendar-button',
  DATEPICKER_CALENDAR = 'datepicker-calendar',
  DATEPICKER_CALENDAR_HEADER = 'datepicker-calendar-header',
  DATEPICKER_CALENDAR_DAYS = 'datepicker-calendar-days',
  DATEPICKER_CALENDAR_DAY_LABEL = 'datepicker-calendar-day-label',
  DATEPICKER_CALENDAR_DATES = 'datepicker-calendar-dates',
  DATEPICKER_CALENDAR_DATE_SPAN = 'datepicker-calendar-date-span',
  DATEPICKER_CALENDAR_DATES_EMPTY_DIV = 'datepicker-calendar-dates-empty-div',
  DATEPICKER_CALENDAR_DATES_BUTTON = 'datepicker-calendar-dates-button',
  DATEPICKER_CALENDAR_DATE_LABEL = 'datepicker-calendar-date-label',
  DATEPICKER_CALENDAR_DATES_BUTTON_SELECTED = 'datepicker-calendar-dates-button-selected',
  DATEPICKER_CALENDAR_DATES_TODAY_SPAN = 'datepicker-calendar-dates-today-span',
  DATEPICKER_CALENDAR_DATES_TODAY_SPAN_RTL = 'datepicker-calendar-dates-today-span-rtl',
  DATEPICKER_CALENDAR_DIV_YEAR = 'datepicker-calendar-div-year',
  DATEPICKER_CALENDAR_DIV_YEAR_SPAN = 'datepicker-calendar-div-year-span',
  DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON = 'datepicker-calendar-year-view-button',
  DATEPICKER_CALENDAR_YEAR_VIEW_BUTTON_RTL = 'datepicker-calendar-year-view-button-rtl',
  DATEPICKER_CALENDAR_DIV_MONTH = 'datepicker-calendar-div-month',
  DATEPICKER_CALENDAR_MONTH_PREV = 'datepicker-calendar-month-prev',
  DATEPICKER_CALENDAR_MONTH_NEXT = 'datepicker-calendar-month-next',
  DATEPICKER_CALENDAR_MONTH_PREV_RTL = 'datepicker-calendar-month-prev-rtl',
  DATEPICKER_CALENDAR_MONTH_NEXT_RTL = 'datepicker-calendar-month-next-rtl',
  DATEPICKER_CALENDAR_FOOTER = 'datepicker-calendar-footer',
  DATEPICKER_CALENDAR_FOOTER_BUTTON = 'datepicker-calendar-footer-button',
  DATEPICKER_YEAR_SELECTION = 'datepicker-calendar-year-selection',
  DATEPICKER_YEAR_SELECTION_YEARS = 'datepicker-calendar-year-selection-years',
  DATEPICKER_YEAR_SELECTION_YEAR_DIV = 'datepicker-calendar-year-selection-year-div',
  DATEPICKER_YEAR_SELECTION_YEAR_BUTTON = 'datepicker-calendar-year-selection-year-button',
  DATEPICKER_YEAR_SELECTION_YEAR_BUTTON_SELECTED = 'datepicker-calendar-year-selection-year-button-selected',
}

export enum ADVANCE_SEARCH_PARTS {
  ADVANCE_SEARCH_FILTER_DIV = 'advance-search-filter-div',
  ADVANCE_SEARCH_FILTER_ATTRIBUTE_DIV = 'advance-search-filter-attribute-div',
  ADVANCE_SEARCH_FILTER_HEADER_DIV = 'advance-search-filter-header-div',
  ADVANCE_SEARCH_FILTER_LABEL_SPAN = 'advance-search-filter-label-span',
  ADVANCE_SEARCH_FILTER_LABEL_SPAN_DISABLED = 'advance-search-filter-label-span-disabled',
  ADVANCE_SEARCH_FILTER_REMOVE_SPAN = 'advance-search-filter-remove-span',
  ADVANCE_SEARCH_FILTER_REMOVE_SPAN_DISABLED = 'advance-search-filter-remove-span-disabled'
}
export enum ACCORDION_PARTS {
  DX_ACCORDION_CONTAINER = 'container',
  DX_ACCORDION_CONTAINER_RTL = 'container-rtl',
  DX_ACCORDION_HEADER_SCSS = 'header-scss',
  DX_ACCORDION_HEADER_SCSS_RTL = 'header-scss-rtl',
  DX_ACCORDION_LABEL_COLUMN = 'label-column',
  DX_ACCORDION_LABEL_COLUMN_RTL = 'label-column-rtl',
  DX_ACCORDION_LABEL_TEXT = 'label-text',
  DX_ACCORDION_LABEL_TEXT_RTL = 'label-text-rtl',
  DX_ACCORDION_SECONDARY_TEXT = 'secondary-text',
  DX_ACCORDION_SECONDARY_TEXT_RTL = 'secondary-text-rtl',
  DX_ACCORDION_ARROW = 'arrow',
  DX_ACCORDION_ARROW_RTL = 'arrow-rtl',
  DX_ACCORDION_ARROW_ICON = 'arrow-icon',
  DX_ACCORDION_ARROW_ICON_RTL = 'arrow-icon-rtl',
  DX_ACCORDION_CONTENT = 'accordion-content',
  DX_ACCORDION_CONTENT_RTL = 'accordion-content-rtl'
}
export enum ACCORDION_SUMMARY_PARTS {
  DX_ACCORDION_SUMMARY = 'summary',
  DX_ACCORDION_SUMMARY_RTL = 'summary-rtl',
  DX_ACCORDION_LABEL = 'label',
  DX_ACCORDION_LABEL_RTL = 'label-rtl',
  DX_ACCORDION_SECONDARY = 'secondary',
  DX_ACCORDION_SECONDARY_RTL = 'secondary-rtl'
}

export enum POPOVER_PARTS {
  POPOVER_WRAPPER = 'wrapper',
  POPOVER_ARROW = 'arrow',
  POPOVER_CONTAINER = 'container',
  POPOVER_CONTAINER_RTL = 'container-rtl',
  POPOVER_CONTENT = 'content',
  POPOVER_LABEL = 'label',
  POPOVER_TEXT = 'text',
  POPOVER_CLOSE_ICON = 'close-icon',
  POPOVER_CLOSE_ICON_RTL = 'close-icon-rtl',
  POPOVER_TARGET = 'target'
}