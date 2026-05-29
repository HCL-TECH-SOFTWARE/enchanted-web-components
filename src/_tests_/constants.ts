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

import { EnchantedDataGridColDef } from "../types/enchanted-data-grid";
import { SampleDataRow } from "./types";
import svgIconEdit from './assets/svg-edit.svg';
import svgIconOverflow from './assets/Overflow-menu--horizontal.svg';

export const SEARCH_COMMON_FIELDS = [
  'title',
  'description',
  'type',
  'tags'
];

export const DEFAULT_DOCUMENT_OBJECT_TYPE = 'title';

export const ENCHANTED_DATA_GRID_COLUMNS: EnchantedDataGridColDef[] = [
  {
    field: 'title', 
    headerName: 'Title',
    avatar: true,
    isLink: (data) => {
      return (data as SampleDataRow).type === 'Folder';
    },
    avatarType: 'itemType',
    sortEnable: true,
    actions: [
      {
        icon: svgIconEdit,
        text: "Edit",
        click: (_evt, { data }) => {
          return data;
        },
      },
      {
        icon: svgIconOverflow,
        text: "More",
        menu: [
          {
            text: "Read",
            click(_evt, { data }) {
              return data;
            },
          },
          {
            text: "Preview",
            click(_evt, { data }) {
              return data;
            }
          },
        ],
      },
    ],
  },
  { field: 'name', headerName: 'Name', sortEnable: true },
  {
    field: 'status',
    headerName: 'Status',
    sortEnable: true,
    actions: [
      {
        text: 'Publish',
        icon: svgIconOverflow,
        menu: [
          {
            text: "Read",
            click(_evt, { data }) {
              return data;
            },
          },
          {
            text: "Preview",
            click(_evt, { data }) {
              return data;
            },
          },
        ],
      }
    ]
  },
  { field: 'author', headerName: 'Author', keyForStringify: 'name', sortEnable: true },
  { field: '_source.updated', headerName: 'Last Modified', sortEnable: true }, 
  { field: 'contentPath', headerName: 'Location', sortEnable: true },
];

export const ENCHANTED_DATA_GRID_PICKER_COLUMNS: EnchantedDataGridColDef[] = [
  {
    field: 'title', 
    headerName: 'Title',
    avatar: true,
    subtitle: (data) => {
      return (data as SampleDataRow).subtitle;
    },
    isLink: (data) => {
      return (data as SampleDataRow).type === 'collection';
    },
    avatarType: 'type',
    sortEnable: true,
  },
  { field: 'description', headerName: 'Description', sortEnable: false },
  { field: 'type', headerName: 'Type', sortEnable: true },
  { field: 'tags', headerName: 'Tags', sortEnable: false },
  { field: 'updated', headerName: 'Last Modified', sortEnable: true },
];

export const SHORT_PAUSE = 100;
export const LONG_PAUSE = 500;
