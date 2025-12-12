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
import { expect, browser, $ } from '@wdio/globals';
import { render, html } from 'lit';
import { Key } from 'webdriverio';

// Component imports
import '../../../components/atomic-component/enchanted-data-grid-generic.ts';
import '../../../components/atomic-component/enchanted-circular-progress.ts';

// Helper imports
import { EnchantedDataGridColDef, SortOrder } from '../../../types/enchanted-data-grid.js';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils.js';
import { sampleDamData, sampleData } from '../../unit/fixture/sampleData.js';
import { spyOn } from '@wdio/browser-runner';
import { initDataGridLocalizedStrings } from '../../helpers.js';
import { ENCHANTED_DATA_GRID_COLUMNS, ENCHANTED_DATA_GRID_PICKER_COLUMNS } from '../../constants.js';
import { DATA_GRID_PARTS } from '../../../types/cssClassEnums.js';
import { initSessionStorage } from '../../utils.js';

const localization: Map<string, string> = initDataGridLocalizedStrings();

const testColDef: EnchantedDataGridColDef[] = ENCHANTED_DATA_GRID_COLUMNS;
const testPickerColDef: EnchantedDataGridColDef[] = ENCHANTED_DATA_GRID_PICKER_COLUMNS;

const data = {
  searchItems: sampleData.hits.hits,
  total: sampleData.hits.total.value || 0,
  sortAttribute: '',
  sortDirection: undefined,
  selectedSearchItems: [...sampleData.hits.hits],
};

const pickerData = {
  searchItems: sampleDamData.hits.hits,
  total: sampleDamData.hits.total.value || 0,
  sortAttribute: '',
  sortDirection: undefined,
  selectedSearchItems: [...sampleDamData.hits.hits],
};

describe('EnchantedDataGridGeneric - Snapshot testing', () => {
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

  it('EnchantedDataGridGeneric - should capture Data Grid component with initial state - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`<div style="width: 700px; height: 600px;">
        <enchanted-data-grid-generic .localization=${localization} .columns="${testColDef}"></enchanted-data-grid-generic>
      </div>`,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-initial-state-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with loading state - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div style="width: 700px; height: 500px;">
          <enchanted-data-grid-generic .localization=${localization} .columns="${testColDef}" .isLoading=${true}></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-loading-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with has no content source state - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div style="width: 700px; height: 500px;">
          <enchanted-data-grid-generic .localization=${localization} .columns="${testColDef}" .hasContentSourceAvailable=${true}></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-no-contentsource-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with invalid column definition - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    const invalidColumn = [
      { headerName: 'Title' },
      { field: '_source.updated', headerName: 'Last Updated' },
      { field: '_source.documentObject.author.name', 'headerName': 'Author' }
    ];

    render(
      html`
        <div style="width: 700px; height: 150px;">
          <enchanted-data-grid-generic .localization=${localization} .columns="${invalidColumn}" .hasContentSourceAvailable=${true}></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-invalid-coldef-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with content - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${testColDef}
            .isLoading=${false}
            customTableHeaderPart=${DATA_GRID_PARTS.TABLE_COLUMN_PICKER}
            customTableCellPart=${DATA_GRID_PARTS.TABLE_COLUMN_PICKER}
            .data=${data}
            .localization=${localization}
          ></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);

    const element = document.querySelector('enchanted-data-grid-generic');

    if (element) {
      const mouseoverHeaderSpy = spyOn(element, 'handleHeaderOnMouseOver');
      const mouseoutHeaderSpy = spyOn(element, 'handleHeaderOnMouseOut');

      const hoverHeaderTarget = element.shadowRoot ?
        await element.shadowRoot.querySelector('#enchanted-table-header-0') :
        await element.querySelector('#enchanted-table-header-0');

      if (hoverHeaderTarget) {
        hoverHeaderTarget.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true, composed: true }));
        await browser.pause(50);
        await expect(mouseoverHeaderSpy).toHaveBeenCalledTimes(1);

        hoverHeaderTarget.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true, composed: true }));
        await browser.pause(50);
        await expect(mouseoutHeaderSpy).toHaveBeenCalledTimes(1);
      } else {
        throw new Error('hoverHeaderTarget not found');
      }

      const hoverRowTarget = element.shadowRoot ?
        await element.shadowRoot.querySelector('#table-row-0') :
        await element.querySelector('#table-row-0');

      if (hoverRowTarget) {
        const mouseoverRowSpy = spyOn(element, 'handleRowOnMouseOver');
        const mouseoutRowSpy = spyOn(element, 'handleRowOnMouseOut');

        hoverRowTarget.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true, composed: true }));
        await browser.pause(50);
        await expect(mouseoverRowSpy).toHaveBeenCalledTimes(1);

        hoverRowTarget.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true, composed: true }));
        await browser.pause(50);
        await expect(mouseoutRowSpy).toHaveBeenCalledTimes(1);

      } else {
        throw new Error('hoverRowTarget not found');
      }

      const sortTarget = element.shadowRoot ?
        await element.shadowRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.ASC}-0`) :
        await element.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.ASC}-0`);
      const sortClickEventSpy = spyOn(element, 'handleSort');

      if (sortTarget) {
        sortTarget.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
      }

      await expect(sortClickEventSpy).toHaveBeenCalledTimes(1);
      const menuTarget = element.shadowRoot ?
        element.shadowRoot.querySelector(`enchanted-menu`) :
        element.querySelector(`enchanted-menu`);
      const menuChangeEventSpy = spyOn(element, 'handleOverFlowMenu');
      if (menuTarget) {
        menuTarget.dispatchEvent(new CustomEvent('change', { detail: { text: "Read" } }));

      }
      await expect(menuChangeEventSpy).toHaveBeenCalledTimes(1);

      const tableRow = element.shadowRoot ?
      element.shadowRoot.querySelector(`#table-row-0`) as HTMLElement:
      element.querySelector(`#table-row-0`) as HTMLElement;

      const handleBodyRowKeydownSpy = spyOn(element, 'handleBodyRowKeydown');
      const handleActionItemKeydownSpy = spyOn(element, 'handleActionItemKeydown');
      if (tableRow) {
        tableRow.focus();
        await browser.keys(Key.ArrowDown);
        await browser.keys(Key.ArrowUp);
        await browser.keys(Key.Tab);
        await browser.keys([Key.Shift, Key.Tab]);
        // focus on action item
        await browser.keys(Key.ArrowRight);
        // focus back on row
        await browser.keys([Key.Shift, Key.Tab]);
        await browser.keys(Key.ArrowRight);
      }
      await browser.pause(50);
      await expect(handleBodyRowKeydownSpy).toHaveBeenCalledTimes(7);

      const actionItem = element.shadowRoot ?
        await element.shadowRoot.querySelector(`#enchanted-data-grid-action-item-button-0-0-0`) :
        await element.querySelector(`#enchanted-data-grid-action-item-button-0-0-0`);

      const actionMenu = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#enchanted-data-grid-action-item-button-0-0-1`) as HTMLElement:
      await element.querySelector(`#enchanted-data-grid-action-item-button-0-0-1`) as HTMLElement;

      const handleMenuItemKeydownSpy = spyOn(element, 'handleMenuItemKeydown');
      if (actionItem) {
        // Navigate around the action items
        await browser.keys(Key.Enter);
        await browser.keys(Key.Tab);
        await browser.keys(Key.Tab);
        await browser.keys([Key.Shift, Key.Tab]);
        await browser.keys([Key.Shift, Key.Tab]);
      }
      if (actionMenu) {
        // Testing Menu
        // Go to the menu action button
        await browser.keys(Key.Tab);
        await browser.pause(1000);
        await browser.action('key')
          .pause(500)
          .down(Key.Enter)
          .pause(500)
          .down(Key.ArrowDown)
          .pause(500)
          .down(Key.ArrowDown)
          .pause(500)
          .down(Key.Escape)
          .pause(500)
          .down(Key.Enter)
          .pause(500)
          .down(Key.ArrowDown)
          .pause(500)
          .down(Key.ArrowUp)
          .pause(500)
          .down(Key.ArrowUp)
          .pause(300)
          .down(Key.Tab)
          .perform();
      }

      await expect(handleActionItemKeydownSpy).toHaveBeenCalled();
      await expect(handleMenuItemKeydownSpy).toHaveBeenCalled();

      // Testing if the last row would go to the focusPaginationSelect
      const length = sampleData.hits.hits.length - 1;
      const lastRow = element.shadowRoot ?
        await element.shadowRoot.querySelector(`#table-row-${length}`) :
        await element.querySelector(`#table-row-${length}`);
      const focusNextElementSpy = spyOn(element, 'focusNextElement');
      if (lastRow) {
        (lastRow as HTMLElement).focus();
        lastRow.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
      }
      await expect(focusNextElementSpy).toHaveBeenCalledTimes(1);
    }

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should render Data Grid component with content and handleSorts', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${testColDef}
            .isLoading=${false}
            customTableHeaderPart=${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING}
            customTableCellPart=${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING}
            .data=${data}
            .localization=${localization}
          ></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);

    const element = document.querySelector('enchanted-data-grid-generic');

    if (element) {
      const sortButton = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#enchanted-table-header-0`) as HTMLElement:
      await element.querySelector(`#enchanted-table-header-0`) as HTMLElement;

      const handleCellHeaderSortAscKeydownSpy = await spyOn(element, 'handleCellHeaderKeydown');

      if (sortButton) {
        sortButton.focus();
        await browser.pause(100);
        await browser.action('key')
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowUp)
          .pause(100)
          .down(Key.ArrowDown)
          .pause(100)
          .down(Key.ArrowUp)
          .pause(100)
          .down(Key.ArrowRight)
          .pause(100)
          .down(Key.ArrowLeft)
          .pause(100)
          .down(Key.Enter)
          .perform();
      }
      await browser.pause(100);

      await expect(handleCellHeaderSortAscKeydownSpy).toHaveBeenCalledTimes(10);

      const sortDescButton = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.DESC}-0`) as HTMLElement:
      await element.querySelector(`#enchanted-data-grid-sort-button-${SortOrder.DESC}-0`) as HTMLElement;

      const handleSortSpy = spyOn(element, 'handleSort');
      const handleCellHeaderSortDescKeydownSpy = spyOn(element, 'handleCellHeaderKeydown');
      const handleSortButtonBlurSpy = spyOn(element, 'handleSortButtonBlur');

      if (sortDescButton) {
        sortDescButton.click();
        sortDescButton.blur();
        await browser.pause(100);
        sortDescButton.focus();
        await browser.pause(100);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowRight' }));
        await browser.pause(100);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowLeft' }));
        await browser.pause(100);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowDown' }));
        await browser.pause(100);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowUp' }));
        await browser.pause(100);
        await sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'Enter' }));
        await browser.pause(100);
        await expect(handleSortSpy).toHaveBeenCalledTimes(2);
        await expect(handleSortButtonBlurSpy).toHaveBeenCalledTimes(2);
        await expect(handleCellHeaderSortDescKeydownSpy).toHaveBeenCalledTimes(5);
      }
    }
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-sort-snapshot-baseline-authoring', 100);
    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with content - RTL', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${testColDef}
            .isLoading=${false}
            customTableHeaderPart=${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING}
            customTableCellPart=${DATA_GRID_PARTS.TABLE_COLUMN_AUTHORING}
            .data=${data}
            .localization=${localization}
          ></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    document.documentElement.dir = 'rtl';

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-rtl', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should not have a scrollbar if the screen width is more than 2000px', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic .localization=${localization} .columns="${testColDef}" .hasContentSourceAvailable=${false} 
            customTableHeaderPart=${DATA_GRID_PARTS.TABLE_COLUMN_PICKER}
            customTableCellPart=${DATA_GRID_PARTS.TABLE_COLUMN_PICKER}
            .data=${data}
            ></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    const dataGrid = await $('enchanted-data-grid-generic');
    await dataGrid.waitForDisplayed();

    await browser.setWindowSize(2000, SNAPSHOT_WINDOW_HEIGHT);
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-with-picker-width-of-2000-3', 100);

    document.head.removeChild(link);
  });

  it('EnchantedDataGridGeneric - should capture Data Grid component with header subtitle - Picker', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div style="width: 700px; height: 600px;">
          <enchanted-data-grid-generic
            .columns="${testPickerColDef}"
            .isLoading=${false}
            .data="${pickerData}"
            .localization=${localization}
          ></enchanted-data-grid-generic>
        </div>
      `,
      document.body,
    );

    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    await expect(browser).toMatchFullPageSnapshot('enchanted-data-grid-generic-2-with-header-subtitle-snapshot-baseline-picker', 100);

    document.head.removeChild(link);
  });
});
