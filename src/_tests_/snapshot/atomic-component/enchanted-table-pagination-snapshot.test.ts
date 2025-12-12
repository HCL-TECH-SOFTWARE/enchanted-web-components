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
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-table-pagination';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');
localization.set('input.select.placeholder.select.content.source', 'Select a content source');
localization.set('output.table.footer.show.rows', 'Show rows:');
localization.set('output.table.footer.page', 'Page:');
localization.set('output.table.footer.current.pages', '{current_page_start}-{current_page_end} von {total_count}');

function renderHtml() {
  return html`
    <div data-testid="enchanted-table-pagination-layout" style="margin: 20px; width: 700px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>Disabled Previous button</label>
        <enchanted-table-pagination .localization=${localization} currentPage=${1} totalCount=${64} rowSize=${10}></enchanted-table-pagination>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>Disabled next button</label>
        <enchanted-table-pagination .localization=${localization} currentPage=${7} totalCount=${64} rowSize=${10}></enchanted-table-pagination>
      </div>
    </div>
  `;
}

describe('EnchantedTablePagination - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  after(() => {
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  // TODO - test was failing, has to fix later
  it('EnchantedTablePagination - should capture Table Pagination component with different attributes', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    const enchantedTablePagination = await $('>>>div[data-testid="enchanted-table-pagination-layout"]');
    await browser.checkElement(enchantedTablePagination, 'enchanted-table-pagination-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
