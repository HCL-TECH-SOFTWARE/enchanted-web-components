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
import { expect, browser } from '@wdio/globals';
import { render, html } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-data-grid.ts';
import '../../../components/atomic-component/enchanted-circular-progress.ts';

// Helper imports
import { EnchantedDataGridColDef } from '../../../types/enchanted-data-grid.js';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils.js';

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

const testColDef: EnchantedDataGridColDef[] = [
  { field: '_source.title', headerName: 'Title' },
  { field: '_source.updated', headerName: 'Last Updated' },
  { field: '_source.documentObject.author.name', headerName: 'Author' },
];

describe('EnchantedDataGrid - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedDataGrid - should capture Data Grid component with initial state - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`<div style="width: 700px; height: 600px;">
        <enchanted-data-grid .localization=${localization} colDef="${JSON.stringify(testColDef)}"></enchanted-data-grid>
      </div>`,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-with-initial-state-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGrid - should capture Data Grid component with loading state - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 700px; height: 500px;">
          <enchanted-data-grid .localization=${localization} colDef="${JSON.stringify(testColDef)}" isLoading=${true}></enchanted-data-grid>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-with-loading-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGrid - should capture Data Grid component with has no content source state - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 700px; height: 500px;">
          <enchanted-data-grid .localization=${localization} colDef="${JSON.stringify(testColDef)}" hasContentSourceAvailable=${true}></enchanted-data-grid>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-with-no-contentsource-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGrid - should capture Data Grid component with invalid column definition - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 700px; height: 150px;">
          <enchanted-data-grid .localization=${localization} colDef="${JSON.stringify(null)}test" hasContentSourceAvailable=${true}></enchanted-data-grid>
        </div>
      `,
      document.body,
    );

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-with-invalid-coldef-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });
});
