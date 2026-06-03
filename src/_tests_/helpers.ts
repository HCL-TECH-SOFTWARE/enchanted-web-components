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

import { KeyboardInputKeys } from "../utils/keyboardEventKeys";
import { browser } from '@wdio/globals';
import { SHORT_PAUSE } from "./constants";

export const initDataGridLocalizedStrings: () => Map<string, string> = () => {
  // Initialize localized string resources
  const localization: Map<string, string> = new Map<string, string>();
  localization.set('authoring.datagrid.overflow.list.read', 'Read');
  localization.set('authoring.datagrid.overflow.list.preview', 'Preview');
  localization.set('authoring.datagrid.overflow.list.delete', 'Delete');
  localization.set('authoring.datagrid.column.header.sort.ascending', 'Sort by {column} ascending');
  localization.set('authoring.datagrid.column.header.sort.descending', 'Sort by {column} descending');
  localization.set('output.message.loading.search.results', 'Loading search results...');
  localization.set('datagrid.tooltip.edit', 'Edit');
  localization.set('authoring.datagrid.action.aria.label.edit', 'Edit item');
  localization.set('datagrid.tooltip.more', 'More');
  localization.set('output.message.no.results.found', 'No results were found.');
  localization.set('output.message.no.match.found', "We couldn't find a match for <strong>\"{search_term}\"</strong>. Try checking your spelling or try words with similar meanings.");
  localization.set('output.message.no.engine.found', 'Search engine is currently unavailable.');
  localization.set('output.message.contact.admin', 'Please try again or contact your administrator for assistance.');
  localization.set('output.message.no.content.sources.found', 'No content source is available.');
  localization.set('authoring.data.grid.initial.message', 'Authoring search');
  localization.set('output.message.looking.for.something', 'Looking for something? Type in the search bar or select from the tag cloud to get started.');
  localization.set('authoring.data.grid.message.looking.for.something', 'Looking for something? Type in the search bar above.');
  localization.set('data.grid.invalid.column.definition', 'Invalid column definition.');
  return localization;
};

export const pressKeyAndWait = async (keys: string[] | KeyboardInputKeys[] | string, waitTime: number = SHORT_PAUSE) => {
  await browser.keys(keys);
  await browser.pause(waitTime);
};
