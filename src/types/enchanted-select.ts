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

export type OptionData = {
  id: string;
  name: string;
  value: string;
}

export enum EnchantedInputFieldType {
  CONTENT_SOURCE = 'contentSource',
  DOCUMENT_OBJECT_TYPE = 'documentObjectType',
  ADD_SEARCH_FILTER = 'addSearchFilter',
  ADD_STATUS_FILTER = 'addStatusFilter',
  QUERY_STRING = 'queryString',
  TRIGGER_BUTTON = 'triggerButton',
  PAGINATION_ROWS = 'paginationRows',
  PAGINATION_PAGE = 'paginationPage',
  PARENT_ID = 'parentId',
  SORT = 'sort',
  CLEAR_QUERY = 'clearQuery',
  SELECTION = 'selection',
  SELECT_ALL = 'selectAll',
  PARENT_ID_LOCATION = 'parentIdLocation',
}
