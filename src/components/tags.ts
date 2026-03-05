/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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

import { StaticValue, unsafeStatic } from 'lit/static-html.js';
import createDebug from 'debug';

const debug = createDebug('enchanted-web-components:components:tags.ts');

export let COMPONENT_PREFIX = '';
try {
  COMPONENT_PREFIX = import.meta.env.VITE_COMPONENT_PREFIX ? import.meta.env.VITE_COMPONENT_PREFIX : '';
} catch (error) {
  debug('Error accessing environment variable for component prefix:', error);
  COMPONENT_PREFIX = '';
}
debug("Component prefix is '%s'", COMPONENT_PREFIX);

export const generateIconTagName = (iconTagName: string): StaticValue => {
  return unsafeStatic(`${COMPONENT_PREFIX}${iconTagName}`);
};

export const ENCHANTED_ACCORDION_TAG_NAME = `${COMPONENT_PREFIX}enchanted-accordion`;
export const ENCHANTED_ACCORDION_ITEM_TAG_NAME = `${COMPONENT_PREFIX}enchanted-accordion-item`;
export const ENCHANTED_ACCORDION_SUMMARY_TAG_NAME = `${COMPONENT_PREFIX}enchanted-accordion-summary`;
export const ENCHANTED_ALERT_TAG_NAME = `${COMPONENT_PREFIX}enchanted-alert`;
export const ENCHANTED_AVATAR_TAG_NAME = `${COMPONENT_PREFIX}enchanted-avatar`;
export const ENCHANTED_BADGE_TAG_NAME = `${COMPONENT_PREFIX}enchanted-badge`;
export const ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME = `${COMPONENT_PREFIX}enchanted-breadcrumbs-item`;
export const ENCHANTED_BREADCRUMBS_TAG_NAME = `${COMPONENT_PREFIX}enchanted-breadcrumbs`;
export const ENCHANTED_BUTTON_TAG_NAME = `${COMPONENT_PREFIX}enchanted-button`;
export const ENCHANTED_CHIP_TAG_NAME = `${COMPONENT_PREFIX}enchanted-chip`;
export const ENCHANTED_CIRCULAR_PROGRESS_TAG_NAME = `${COMPONENT_PREFIX}enchanted-circular-progress`;
export const ENCHANTED_DATA_GRID_TAG_NAME = `${COMPONENT_PREFIX}enchanted-data-grid`;
export const ENCHANTED_DATA_GRID_GENERIC_TAG_NAME = `${COMPONENT_PREFIX}enchanted-data-grid-generic`;
export const ENCHANTED_DATEPICKER_TAG_NAME = `${COMPONENT_PREFIX}enchanted-datepicker`;
export const ENCHANTED_DIALOG_TAG_NAME = `${COMPONENT_PREFIX}enchanted-dialog`;
export const ENCHANTED_FAB_AI_TAG_NAME = `${COMPONENT_PREFIX}enchanted-fab-ai`;
export const ENCHANTED_FAB_TAG_NAME = `${COMPONENT_PREFIX}enchanted-fab`;
export const ENCHANTED_HEADER_TAG_NAME = `${COMPONENT_PREFIX}enchanted-header`;
export const ENCHANTED_HEADER_LAYOUT_TAG_NAME = `${COMPONENT_PREFIX}enchanted-header-layout`;
export const ENCHANTED_ICON_BUTTON_TAG_NAME = `${COMPONENT_PREFIX}enchanted-icon-button`;
export const ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME = `${COMPONENT_PREFIX}enchanted-item-type-avatar`;
export const ENCHANTED_LINK_TAG_NAME = `${COMPONENT_PREFIX}enchanted-link`;
export const ENCHANTED_LIST_ITEM_TAG_NAME = `${COMPONENT_PREFIX}enchanted-list-item`;
export const ENCHANTED_LIST_TAG_NAME = `${COMPONENT_PREFIX}enchanted-list`;
export const ENCHANTED_MENU_ITEM_TAG_NAME = `${COMPONENT_PREFIX}enchanted-menu-item`;
export const ENCHANTED_MENU_TAG_NAME = `${COMPONENT_PREFIX}enchanted-menu`;
export const ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME = `${COMPONENT_PREFIX}enchanted-multiple-select-chip`;
export const ENCHANTED_PANEL_TAG_NAME = `${COMPONENT_PREFIX}enchanted-panel`;
export const ENCHANTED_POPOVER_TAG_NAME = `${COMPONENT_PREFIX}enchanted-popover`;
export const ENCHANTED_PREVIEW_TAG_NAME = `${COMPONENT_PREFIX}enchanted-preview`;
export const ENCHANTED_SELECT_TAG_NAME = `${COMPONENT_PREFIX}enchanted-select`;
export const ENCHANTED_SNACKBAR_TAG_NAME = `${COMPONENT_PREFIX}enchanted-snackbar`;
export const ENCHANTED_SVG_ICON_TAG_NAME = `${COMPONENT_PREFIX}enchanted-svg-icon`;
export const ENCHANTED_SWITCH_TAG_NAME = `${COMPONENT_PREFIX}enchanted-switch`;
export const ENCHANTED_TABLE_PAGINATION_TAG_NAME = `${COMPONENT_PREFIX}enchanted-table-pagination`;
export const ENCHANTED_TEXTFIELD_TAG_NAME = `${COMPONENT_PREFIX}enchanted-textfield`;
export const ENCHANTED_THEME_INSPECTOR_TAG_NAME = `${COMPONENT_PREFIX}enchanted-theme-inspector`;
export const ENCHANTED_TOGGLE_BUTTON_TAG_NAME = `${COMPONENT_PREFIX}enchanted-toggle-button`;
export const ENCHANTED_TOOLTIP_TAG_NAME = `${COMPONENT_PREFIX}enchanted-tooltip`;

export const ENCHANTED_ACCORDION_TAG = unsafeStatic(ENCHANTED_ACCORDION_TAG_NAME);
export const ENCHANTED_ACCORDION_ITEM_TAG = unsafeStatic(ENCHANTED_ACCORDION_ITEM_TAG_NAME);
export const ENCHANTED_ACCORDION_SUMMARY_TAG = unsafeStatic(ENCHANTED_ACCORDION_SUMMARY_TAG_NAME);
export const ENCHANTED_ALERT_TAG = unsafeStatic(ENCHANTED_ALERT_TAG_NAME);
export const ENCHANTED_AVATAR_TAG = unsafeStatic(ENCHANTED_AVATAR_TAG_NAME);
export const ENCHANTED_BADGE_TAG = unsafeStatic(ENCHANTED_BADGE_TAG_NAME);
export const ENCHANTED_BREADCRUMBS_ITEM_TAG = unsafeStatic(ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME);
export const ENCHANTED_BREADCRUMBS_TAG = unsafeStatic(ENCHANTED_BREADCRUMBS_TAG_NAME);
export const ENCHANTED_BUTTON_TAG = unsafeStatic(ENCHANTED_BUTTON_TAG_NAME);
export const ENCHANTED_CHIP_TAG = unsafeStatic(ENCHANTED_CHIP_TAG_NAME);
export const ENCHANTED_CIRCULAR_PROGRESS_TAG = unsafeStatic(ENCHANTED_CIRCULAR_PROGRESS_TAG_NAME);
export const ENCHANTED_DATA_GRID_GENERIC_TAG = unsafeStatic(ENCHANTED_DATA_GRID_GENERIC_TAG_NAME);
export const ENCHANTED_DATA_GRID_TAG = unsafeStatic(ENCHANTED_DATA_GRID_TAG_NAME);
export const ENCHANTED_DATEPICKER_TAG = unsafeStatic(ENCHANTED_DATEPICKER_TAG_NAME);
export const ENCHANTED_DIALOG_TAG = unsafeStatic(ENCHANTED_DIALOG_TAG_NAME);
export const ENCHANTED_FAB_AI_TAG = unsafeStatic(ENCHANTED_FAB_AI_TAG_NAME);
export const ENCHANTED_FAB_TAG = unsafeStatic(ENCHANTED_FAB_TAG_NAME);
export const ENCHANTED_HEADER_TAG = unsafeStatic(ENCHANTED_HEADER_TAG_NAME);
export const ENCHANTED_HEADER_LAYOUT_TAG = unsafeStatic(ENCHANTED_HEADER_LAYOUT_TAG_NAME);
export const ENCHANTED_ICON_BUTTON_TAG = unsafeStatic(ENCHANTED_ICON_BUTTON_TAG_NAME);
export const ENCHANTED_ITEM_TYPE_AVATAR_TAG = unsafeStatic(ENCHANTED_ITEM_TYPE_AVATAR_TAG_NAME);
export const ENCHANTED_LINK_TAG = unsafeStatic(ENCHANTED_LINK_TAG_NAME);
export const ENCHANTED_LIST_ITEM_TAG = unsafeStatic(ENCHANTED_LIST_ITEM_TAG_NAME);
export const ENCHANTED_LIST_TAG = unsafeStatic(ENCHANTED_LIST_TAG_NAME);
export const ENCHANTED_MENU_ITEM_SELECTOR = ENCHANTED_MENU_ITEM_TAG_NAME;
export const ENCHANTED_MENU_ITEM_TAG = unsafeStatic(ENCHANTED_MENU_ITEM_TAG_NAME);
export const ENCHANTED_MENU_TAG = unsafeStatic(ENCHANTED_MENU_TAG_NAME);
export const ENCHANTED_MULTIPLE_SELECT_CHIP_TAG = unsafeStatic(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
export const ENCHANTED_PANEL_TAG = unsafeStatic(ENCHANTED_PANEL_TAG_NAME);
export const ENCHANTED_POPOVER_TAG = unsafeStatic(ENCHANTED_POPOVER_TAG_NAME);
export const ENCHANTED_PREVIEW_TAG = unsafeStatic(ENCHANTED_PREVIEW_TAG_NAME);
export const ENCHANTED_SELECT_TAG = unsafeStatic(ENCHANTED_SELECT_TAG_NAME);
export const ENCHANTED_SNACKBAR_TAG = unsafeStatic(ENCHANTED_SNACKBAR_TAG_NAME);
export const ENCHANTED_SVG_ICON_TAG = unsafeStatic(ENCHANTED_SVG_ICON_TAG_NAME);
export const ENCHANTED_SWITCH_TAG = unsafeStatic(ENCHANTED_SWITCH_TAG_NAME);
export const ENCHANTED_TABLE_PAGINATION_TAG = unsafeStatic(ENCHANTED_TABLE_PAGINATION_TAG_NAME);
export const ENCHANTED_TEXTFIELD_TAG = unsafeStatic(ENCHANTED_TEXTFIELD_TAG_NAME);
export const ENCHANTED_THEME_INSPECTOR_TAG = unsafeStatic(ENCHANTED_THEME_INSPECTOR_TAG_NAME);
export const ENCHANTED_TOGGLE_BUTTON_TAG = unsafeStatic(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
export const ENCHANTED_TOOLTIP_TAG = unsafeStatic(ENCHANTED_TOOLTIP_TAG_NAME);