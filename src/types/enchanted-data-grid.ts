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

export type ActionColumn =  Omit<EnchantedDataGridColDef, 'actions'>

export type Action =  {
  text: string;
  icon?: string;
  menu?: ActionMenu[],
  click?: (evt: MouseEvent | CustomEvent, arg1: {
    data?: unknown;
    column?: ActionColumn
  }) => void;
  isVisible?: (data: unknown, column: ActionColumn) => boolean;
}
 
export type ActionMenu  = Omit<Action, 'menu'> & Partial<{field?: string;}>

export type EnchantedDataGridColDefClickArgDetails = {
  data?: unknown;
  column?: ActionColumn,
  index?: number;
}

export type EnchantedDataGridColDef = {
  field: string;
  headerName?: string;
  subtitle?: (data: unknown, column: EnchantedDataGridColDef) => string | undefined,
  hideSortIcon?: boolean;
  editIcon?: boolean;
  editLink?: string
  overflowIcon?: boolean;
  overflowList?: OverflowList[];
  tooltip?: string;
  iconTypeTooltip?: string;
  avatar?: boolean;
  avatarType?: string;
  thumbnailUrl?: string;
  keyForStringify?: string;
  sortEnable?: boolean;
  isLink?: (data: unknown, column: EnchantedDataGridColDef) => boolean,
  click?: (evt: MouseEvent | CustomEvent, arg1: EnchantedDataGridColDefClickArgDetails) => void;
  actions?: Action[];
}

export type OverflowList = {
  field: string;
  name: string;
  icon?: string;
  hide: boolean,
}

export type HandleItemClickHandler = (evt: MouseEvent | CustomEvent | KeyboardEvent, itemData: EnchantedDataGridColDefClickArgDetails) => void;

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum ChangeFocusValue {
  PANEL = 'panel',
  PAGINATION = 'pagination',
}
