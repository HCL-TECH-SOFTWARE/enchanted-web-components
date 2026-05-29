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

import { 
  AVATAR_COLOR, 
  AVATAR_PARTS, 
  BUTTON_PARTS, 
  INPUT_SELECT_PARTS, 
  LIST_ITEM_PARTS, 
  LIST_PARTS, 
  TOOLTIP_PARTS, 
  TOOLTIP_PLACEMENT, 
  TOOLTIP_TYPE, 
  TOOLTIP_VARIANT 
} from '../types/cssClassEnums';

export const AUTHORING_ITEM_TYPE_AVATAR_EXPORT_PARTS = [ AVATAR_PARTS.AVATAR_IMAGE_ROUNDED, AVATAR_PARTS.AVATAR_DIV ];
export const ICON_BUTTON_EXPORT_PARTS = [
  ...Object.values(BUTTON_PARTS),
  `${BUTTON_PARTS.BUTTON_CONTAINED}:icon-button-contained`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_INVERSE}:icon-button-contained-inverse`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED}:icon-button-contained-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED_INVERSE}:icon-button-contained-focused-inverse`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_DISABLED}:icon-button-contained-disabled`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_DISABLED_INVERSE}:icon-button-contained-disabled-inverse`,
];

export const PREVIEW_NAV_BUTTONS_EXPORT_PARTS = [
  ICON_BUTTON_EXPORT_PARTS,
  `${BUTTON_PARTS.BUTTON_CONTAINED_INVERSE}:preview-nav-buttons`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED_INVERSE}:preview-nav-buttons-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_DISABLED_INVERSE}:preview-nav-buttons-disabled`,
];

export const PREVIEW_ZOOM_PERCENT_BUTTON_EXPORT_PARTS = [
  ICON_BUTTON_EXPORT_PARTS,
  `${BUTTON_PARTS.BUTTON_CONTAINED_INVERSE}:preview-zoom-percent-button`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED_INVERSE}:preview-zoom-percent-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_DISABLED_INVERSE}:preview-zoom-percent-disabled`,
];

export const PREVIEW_ZOOM_BUTTONS_EXPORT_PARTS = [
  ICON_BUTTON_EXPORT_PARTS,
  `${BUTTON_PARTS.BUTTON_CONTAINED_INVERSE}:preview-zoom-buttons`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED_INVERSE}:preview-zoom-buttons-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_DISABLED_INVERSE}:preview-zoom-buttons-disabled`,
];

export const PREVIEW_RENDITION_SELECT_EXPORT_PARTS = [
  ...Object.values(INPUT_SELECT_PARTS),
  `${INPUT_SELECT_PARTS.DIV}:preview-rendition-select-div`,
  ...Object.values(BUTTON_PARTS),
  'button:preview-rendition-select-button',
  `${BUTTON_PARTS.BUTTON_OUTLINED}:preview-rendition-select-button-outlined`,
  `${BUTTON_PARTS.BUTTON_OUTLINED_FOCUSED}:preview-rendition-select-button-outlined-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED}:preview-rendition-select-button-contained-focused`,
  `${BUTTON_PARTS.BUTTON_TEXT}:preview-rendition-select-button-text`,
  LIST_PARTS.UNORDERED_LIST,
  ...Object.values(LIST_ITEM_PARTS)
];

export const ITEM_TYPE_AVATAR_EXPORT_PARTS = [
  ...Object.values(AVATAR_PARTS),
  ...Object.values(AVATAR_COLOR),
];

export const PAGINATION_SELECT_EXPORT_PARTS = [
  ...Object.values(INPUT_SELECT_PARTS),
  `${INPUT_SELECT_PARTS.DIV}:pagination-select-div`,
  ...Object.values(BUTTON_PARTS),
  'button:pagination-select-button',
  `${BUTTON_PARTS.BUTTON_OUTLINED}:pagination-select-button-outlined`,
  `${BUTTON_PARTS.BUTTON_OUTLINED_FOCUSED}:pagination-select-button-outlined-focused`,
  `${BUTTON_PARTS.BUTTON_CONTAINED_FOCUSED}:pagination-select-button-contained-focused`,
  `${BUTTON_PARTS.BUTTON_TEXT}:pagination-select-button-text`,
  LIST_PARTS.UNORDERED_LIST,
  ...Object.values(LIST_ITEM_PARTS)
];

export const TOOLTIP_EXPORT_PARTS = [
  ...Object.values(TOOLTIP_PARTS),
  ...Object.values(TOOLTIP_PLACEMENT),
  ...Object.values(TOOLTIP_TYPE),
  ...Object.values(TOOLTIP_VARIANT)
];
