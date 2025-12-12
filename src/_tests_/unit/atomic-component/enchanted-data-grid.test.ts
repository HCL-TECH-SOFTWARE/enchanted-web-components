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
// External imports
import { $, expect } from '@wdio/globals';
import { render, html } from 'lit';
import { waitFor } from '@testing-library/dom';

// Component imports
import '../../../components/atomic-component/enchanted-data-grid';

// Helper imports
import { EnchantedDataGridColDef } from '../../../types/enchanted-data-grid';
import { DATA_GRID_PARTS } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';

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

describe('Data Grid testing', () => {

  interface EnchantedDataGridElement extends HTMLElement {
    enchantedDataGridContext?: { sortDirection: string; sortAttribute: string };
    getPartHeaderSort(headerField: string, sortDirection: string): string;
  }
  const testColDef: EnchantedDataGridColDef[] =
    [
      { field: '_source.title', headerName: 'Title' },
      { field: '_source.updated', headerName: 'Last Updated' },
      { field: '_source.documentObject.author.name', 'headerName': 'Author' }
    ];

  before(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedDataGrid - should render component with initial state', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}'></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGrid - should render component with loading state', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}' isLoading=${true}></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-loading-text"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGrid - should render component with has middleaware error state', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}' hasMiddlewareError=${true}></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGrid - should render component with has no content source state', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}' hasContentSourceAvailable=${true}></enchanted-data-grid>
      `,
      document.body
    );
  
    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });

  });


  it('EnchantedDataGrid - should render component with invalid coldef', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}test' hasContentSourceAvailable=${true}></enchanted-data-grid>
      `,
      document.body
    );
  
    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="enchanted-invalid-coldef-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });

  });
  it('EnchantedDataGrid - should not display table content when loading', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef='${JSON.stringify(testColDef)}' isLoading=${true}></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let loadingText = await table.$('>>>p[data-testid="table-loading-text"]').getElement();
      await expect(loadingText).toBeDisplayed();

      let tableContent = await table.$('>>>table').isExisting();
      await expect(tableContent).toBe(true);
    });
  });
  it('EnchantedDataGrid - should render correctly with null colDef', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization} colDef=${null}></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let invalidColDefLabel = await table.$('>>>p[data-testid="enchanted-invalid-coldef-label"]').getElement();
      await expect(invalidColDefLabel).toBeDisplayed();
    });
  });
  it('EnchantedDataGrid - should render correctly with undefined colDef', async () => {
    render(
      html`
        <enchanted-data-grid .localization=${localization}></enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let invalidColDefLabel = await table.$('>>>p[data-testid="enchanted-invalid-coldef-label"]').getElement();
      await expect(invalidColDefLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGrid - should render correctly with custom row navigation', async () => {
    render(
      html`
        <enchanted-data-grid 
          .localization=${localization} 
          colDef='${JSON.stringify(testColDef)}' 
          ?hasContentSourceAvailable=${true} 
          ?customRowNavigation=${true}>
        </enchanted-data-grid>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });
  
  it('should return correct sort button class based on direction', async () => {
    const grid = document.createElement('enchanted-data-grid') as EnchantedDataGridElement;
      
    grid.enchantedDataGridContext = { sortDirection: 'asc', sortAttribute: '_source.title' };
  
    expect(grid.getPartHeaderSort('_source.title', 'asc')).toBe(DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON);
  
    grid.enchantedDataGridContext.sortDirection = 'desc';
    expect(grid.getPartHeaderSort('_source.title', 'asc')).toBe(DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN);
  });

});
