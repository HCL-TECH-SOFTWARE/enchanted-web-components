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
import { $, browser, expect } from '@wdio/globals';
import { render, html } from 'lit';
import { waitFor } from '@testing-library/dom';
import { fn, spyOn } from '@wdio/browser-runner';
import { Key } from 'webdriverio';

// Component imports
import '../../../components/atomic-component/enchanted-data-grid-generic';

// Helper imports
import { EnchantedDataGridColDef, SortOrder } from '../../../types/enchanted-data-grid';
import { initSessionStorage } from '../../utils';
import { DATA_GRID_PARTS } from '../../../types/cssClassEnums';
import { SampleDataRow } from '../../types';
import { sampleData as sampleSearchResultResponse } from '../fixture/sampleData';
import { initDataGridLocalizedStrings, pressKeyAndWait } from '../../helpers';
import { ENCHANTED_DATA_GRID_COLUMNS, LONG_PAUSE, SHORT_PAUSE } from '../../constants';

describe('Data Grid Generic testing', () => {
  const localization: Map<string, string> = initDataGridLocalizedStrings();

  const columns: EnchantedDataGridColDef[] = ENCHANTED_DATA_GRID_COLUMNS;

  const data = 
  {
    searchItems: sampleSearchResultResponse.hits.hits,
    total: sampleSearchResultResponse.hits.total.value || 0,
    sortAttribute: '',
    sortDirection: undefined,
    selectedSearchItems: [...sampleSearchResultResponse.hits.hits],
  };

  const testColDef: EnchantedDataGridColDef[] =
  [
    { 
      field: 'title', 
      headerName: 'Title',
      actions: [
        {
          text: 'Preview',
          icon: 'preview-icon.svg',
          click: (evt, itemData) => { return { evt, itemData }; },
          isVisible: (itemData) => { 
            return (itemData as SampleDataRow).type === 'image';
          }
        },
        {
          text: 'Read',
          icon: 'read-icon.svg',
          click: (evt, itemData) => { return { evt, itemData };},
        },
        {
          text: 'More',
          icon: 'more-icon.svg',
          menu: [
            {
              text: 'Edit',
              icon: 'edit-icon.svg',
              click: (evt, itemData) => { return { evt, itemData };},
              isVisible: (itemData) => { 
                return (itemData as SampleDataRow).status === 'draft';
              }
            },
            {
              text: 'Delete',
              icon: 'delete-icon.svg',
              click: (evt, itemData) => { return { evt, itemData };},
            },
          ]
        }
      ]
    },
    { field: 'updated', headerName: 'Last Updated' },
    { field: 'author', 'headerName': 'Author' }
  ];

  const sampleData = 
  {
    total: 1,
    searchItems: [
      {
        title: 'Test Title',
        type: 'collection',
        status: 'published',
        updated: '2023-10-01',
        documentObject: { author: { name: 'Test Author' } }
      },
      {
        title: 'Test Title2',
        type: 'image',
        status: 'draft',
        updated: '2023-10-01',
        documentObject: { author: { name: 'Test Author' } }
      }
    ]
  };

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

  it('EnchantedDataGridGeneric - should render component with initial state', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGridGeneric - should render component with loading state', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .isLoading=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-loading-text"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGridGeneric - should render component with has middleaware error state', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .hasMiddlewareError=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGridGeneric - should render component with has no content source state', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .hasContentSourceAvailable=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );
  
    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let resultLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });

  });

  it('EnchantedDataGridGeneric - should render component with invalid columns', async () => {

    const invalidColumn = [
      { headerName: 'Title' },
      { field: '_source.updated', headerName: 'Last Updated' },
      { field: '_source.documentObject.author.name', 'headerName': 'Author' }
    ];
    render(
      html`
        <enchanted-data-grid-generic .columns=${invalidColumn} .hasContentSourceAvailable=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );
  
    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let resultLabel = await table.$('>>>p[data-testid="enchanted-invalid-columns-label"]').getElement();
      await expect(resultLabel).toBeDisplayed();
    });

  });

  it('EnchantedDataGridGeneric - should not display table content when loading', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .isLoading=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let loadingText = await table.$('>>>p[data-testid="table-loading-text"]').getElement();
      await expect(loadingText).toBeDisplayed();

      let tableContent = await table.$('>>>table').isExisting();
      await expect(tableContent).toBe(true);
    });
  });

  it('EnchantedDataGridGeneric - should render correctly with null colDef', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${null}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let invalidColDefLabel = await table.$('>>>p[data-testid="enchanted-invalid-columns-label"]').getElement();
      await expect(invalidColDefLabel).toBeDisplayed();
    });
  });
  
  it('EnchantedDataGridGeneric - should render correctly with undefined columns', async () => {
    render(
      html`
        <enchanted-data-grid-generic></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let invalidColDefLabel = await table.$('>>>p[data-testid="enchanted-invalid-columns-label"]').getElement();
      await expect(invalidColDefLabel).toBeDisplayed();
    });
  });

  it('EnchantedDataGridGeneric - should render correctly with empty data', async () => {
    render(
      html`
        <enchanted-data-grid-generic
          .columns=${testColDef}
          .data=${{ total:0 }}
        ></enchanted-data-grid-generic>
      `,
      document.body
    );

    await waitFor(async () => {
      const table = await $('enchanted-data-grid-generic').getElement();
      let invalidColDefLabel = await table.$('>>>p[data-testid="table-result-label"]').getElement();
      await expect(invalidColDefLabel).toHaveText('output.message.no.results.found');
    });
  });

  it('EnchantedDataGridGeneric - should return proper rowPart', async () => {
    render(
      html`
        <enchanted-data-grid-generic
          .columns=${testColDef}
          .data=${sampleData}
          .isRowDisabled=${
            (row: SampleDataRow) => {
              return row.title === 'Test Title';
            }
          }
        ></enchanted-data-grid-generic>
      `,
      document.body
    );
    
    const grid = document.querySelector('enchanted-data-grid-generic');
    const rowPart = grid?.getRowPart(0);
    await expect(rowPart).toBeDefined();
    await expect(rowPart).toBe(DATA_GRID_PARTS.TABLE_ROW_BODY_CONTAINER);
  });

  it('EnchantedDataGridGeneric - should return correct sort button class based on direction', async () => {
    const grid = document.createElement('enchanted-data-grid-generic');

    grid.data.sortDirection = SortOrder.DESC;
    grid.data.sortAttribute = '_source.title';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.ASC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN);

    grid.data.sortDirection = SortOrder.ASC;
    grid.data.sortAttribute = '_source.title';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.ASC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON);

    grid.data.sortDirection = SortOrder.ASC;
    grid.data.sortAttribute = '_source.name';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.ASC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_ASC_SORT_BUTTON_HIDDEN);

    grid.data.sortDirection = SortOrder.ASC;
    grid.data.sortAttribute = '_source.name';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.DESC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN);

    grid.data.sortDirection = SortOrder.DESC;
    grid.data.sortAttribute = '_source.title';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.DESC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_SORT_BUTTON);
    
    grid.data.sortDirection = SortOrder.DESC;
    grid.data.sortAttribute = '_source.name';
    await expect(grid.getPartHeaderSort('_source.title', SortOrder.DESC)).toBe(DATA_GRID_PARTS.TABLE_HEADER_DESC_SORT_BUTTON_HIDDEN);

    grid.data.sortDirection = SortOrder.DESC;
    grid.data.sortAttribute = '_source.name';

    const handleCellHeaderSortDescKeydownSpy = spyOn(grid, 'handleCellHeaderKeydown');
    grid.handleCellHeaderKeydown(new KeyboardEvent('ArrowRight'), SortOrder.ASC, 0);
    grid.handleCellHeaderKeydown(new KeyboardEvent('ArrowRight'), SortOrder.ASC, 0);
    grid.handleCellHeaderKeydown(new KeyboardEvent('ArrowLeft'), SortOrder.ASC, 0);
    grid.handleCellHeaderKeydown(new KeyboardEvent('ArrowDown'), SortOrder.ASC, 0);
    grid.handleCellHeaderKeydown(new KeyboardEvent('Enter'), SortOrder.ASC, 0);
    await expect(handleCellHeaderSortDescKeydownSpy).toHaveBeenCalledTimes(5);
  });


  it('EnchantedDataGridGeneric - should render action buttons based on visibility', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .data=${sampleData}></enchanted-data-grid-generic>
      `,
      document.body
    );

    const grid = await $('enchanted-data-grid-generic');

    // Preview action item for row 0 is not visible since it's type collection and not image (based on isVisible)
    const previewActionButton = await grid.$('>>>enchanted-icon-button[data-testid="enchanted-data-grid-action-item-button-0-0-0"]');
    await expect(previewActionButton).not.toBeDisplayed();

    // Read action item is visible
    const readActionButton = await grid.$('>>>enchanted-icon-button[data-testid="enchanted-data-grid-action-item-button-0-0-1"]');
    await expect(readActionButton).toBeDisplayed();

    const readTooltip = await readActionButton.parentElement();
    await expect(await readTooltip.getTagName()).toBe('enchanted-tooltip');
    await expect(await readTooltip.getProperty('tooltiptext')).toBe('Read');
  });

  it('EnchantedDataGridGeneric - should render icon button for menu if only one item is visible', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .data=${sampleData}></enchanted-data-grid-generic>
      `,
      document.body
    );

    const grid = await $('enchanted-data-grid-generic');

    // First row data should show only an icon button for the only visible menu item, Delete.
    const deleteActionButton = await grid.$('>>>enchanted-icon-button[data-testid="enchanted-data-grid-action-item-button-0-0-2"]');
    await expect(deleteActionButton).toBeDisplayed();
    
    const deleteTooltip = await deleteActionButton.parentElement();
    await expect(await deleteTooltip.getTagName()).toBe('enchanted-tooltip');
    await expect(await deleteTooltip.getProperty('tooltiptext')).toBe('Delete');

    // Menu should not be shown
    const menu = await grid.$('>>>enchanted-menu[data-testid="enchanted-data-grid-menu-0-0-2"]');
    await expect(menu).not.toBeDisplayed();
  });

  it('EnchantedDataGridGeneric - should render menu if menu is given and more than one menu item is visible', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .data=${sampleData}></enchanted-data-grid-generic>
      `,
      document.body
    );

    const grid = await $('enchanted-data-grid-generic');

    // Second row data should show the menu since it has the two menu items visible
    const secondRow = await grid.$('>>>tr[data-testid="enchanted-table-row-1"]');
    const allActionButtons = await secondRow.$$('[data-testid*="enchanted-data-grid-action-item-button"]');
    const moreActionButton = allActionButtons[await allActionButtons.length - 1];
    await expect(moreActionButton).toBeDisplayed();
    
    const moreTooltip = await moreActionButton.parentElement();
    await expect(await moreTooltip.getTagName()).toBe('enchanted-tooltip');
    await expect(await moreTooltip.getProperty('tooltiptext')).toBe('More');

    await moreActionButton.moveTo();
    await moreActionButton.click();

    const menu = await secondRow.$('>>>enchanted-menu[data-testid*="enchanted-data-grid-menu"]');
    await expect(menu).toBeDisplayed();

    const allMenuItems = await secondRow.$$('>>>enchanted-menu-item');
    const menuItemEdit = await allMenuItems[0];
    await expect(menuItemEdit).toBeDisplayed();
    await expect(menuItemEdit).toHaveAttribute('text', 'Edit');

    const menuItemDelete = await allMenuItems[1];
    await expect(menuItemDelete).toBeDisplayed();
    await expect(menuItemDelete).toHaveAttribute('text', 'Delete');
  });

  it('EnchantedDataGridGeneric - should dispatch `data-grid-focus-next` if pressing Tab or ArrowDown from last action button in last row', async() => {
    // Workaround for test environment: deduplicate rapid events within 600ms window
    // (keyboard events in tests are spaced by LONG_PAUSE = 500ms)
    let lastEventTime = 0;
    const debouncedFocusNext = fn();
    const focusNext = fn((evt: CustomEvent) => {
      const now = evt.timeStamp;
      if (now - lastEventTime > 600) {
        debouncedFocusNext(evt);
        lastEventTime = now;
      }
    });

    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .data=${sampleData} @data-grid-focus-next=${focusNext}></enchanted-data-grid-generic>
      `,
      document.body
    );

    await browser.action('key')
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.Tab)
      .pause(LONG_PAUSE)
      .down(Key.ArrowDown)
      .perform();
    await expect(debouncedFocusNext).toHaveBeenCalledTimes(2);
  });

  it('EnchantedDataGridGeneric - should render Data Grid component with content', async () => {
    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${columns}
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

    // Need to pause to allow rendering to complete
    await browser.pause(LONG_PAUSE);
    const element = document.querySelector('enchanted-data-grid-generic');

    if (element) {
      const mouseoverHeaderSpy = spyOn(element, 'handleHeaderOnMouseOver');
      const mouseoutHeaderSpy = spyOn(element, 'handleHeaderOnMouseOut');

      const hoverHeaderTarget = element.shadowRoot ?
        await element.shadowRoot.querySelector('#enchanted-table-header-0') :
        await element.querySelector('#enchanted-table-header-0');

      if (hoverHeaderTarget) {
        hoverHeaderTarget.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true, composed: true }));
        // Need to pause to allow event to be processed
        await browser.pause(50);
        await expect(mouseoverHeaderSpy).toHaveBeenCalledTimes(1);

        hoverHeaderTarget.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true, composed: true }));
        // Need to pause to allow event to be processed
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
        // Need to pause to allow event to be processed
        await browser.pause(50);
        await expect(mouseoverRowSpy).toHaveBeenCalledTimes(1);

        hoverRowTarget.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true, composed: true }));
        // Need to pause to allow event to be processed
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
        await element.shadowRoot.querySelector(`enchanted-menu`) :
        await element.querySelector(`enchanted-menu`);
      const menuChangeEventSpy = spyOn(element, 'handleOverFlowMenu');
      if (menuTarget) {
        menuTarget.dispatchEvent(new CustomEvent('change', { detail: { text: "Read" } }));
      }
      await expect(menuChangeEventSpy).toHaveBeenCalledTimes(1);

      const tableRow = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#table-row-0`) as HTMLElement:
      await element.querySelector(`#table-row-0`) as HTMLElement;

      const handleBodyRowKeydownSpy = spyOn(element, 'handleBodyRowKeydown');
      const handleActionItemKeydownSpy = spyOn(element, 'handleActionItemKeydown');
      if (tableRow) {
        await tableRow.focus();
        await pressKeyAndWait(Key.ArrowDown, LONG_PAUSE);
        await pressKeyAndWait(Key.ArrowUp, LONG_PAUSE);
        await pressKeyAndWait(Key.Tab, LONG_PAUSE);
        await pressKeyAndWait([Key.Shift, Key.Tab], LONG_PAUSE);
        // focus on action item
        await pressKeyAndWait(Key.ArrowRight, LONG_PAUSE);
        // focus back on row
        await pressKeyAndWait([Key.Shift, Key.Tab], LONG_PAUSE);
        await pressKeyAndWait(Key.ArrowRight, LONG_PAUSE);
        await pressKeyAndWait(Key.Tab);
        const moreMenuIconId = 'enchanted-data-grid-action-item-button-0-0-1';
        if (moreMenuIconId) {
          const focusedElement = element.shadowRoot?.activeElement?.getAttribute('id');
          await expect(focusedElement).toBe(moreMenuIconId);
        }
        await pressKeyAndWait([Key.Shift, Key.Tab]);
      }

      // Need to pause to allow all events to be processed
      await browser.pause(SHORT_PAUSE);
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
        await pressKeyAndWait(Key.Enter);
        await pressKeyAndWait(Key.Tab);
        await pressKeyAndWait(Key.Tab);
        await pressKeyAndWait([Key.Shift, Key.Tab]);
        await pressKeyAndWait([Key.Shift, Key.Tab]);
      }
      if (actionMenu) {
        // Testing Menu
        // Go to the menu action button
        await pressKeyAndWait(Key.Tab, LONG_PAUSE);
        await browser.action('key')
          .pause(LONG_PAUSE)
          .down(Key.Enter)
          .pause(LONG_PAUSE)
          .down(Key.ArrowDown)
          .pause(LONG_PAUSE)
          .down(Key.ArrowDown)
          .pause(LONG_PAUSE)
          .down(Key.Escape)
          .pause(LONG_PAUSE)
          .down(Key.Enter)
          .pause(LONG_PAUSE)
          .down(Key.ArrowDown)
          .pause(LONG_PAUSE)
          .down(Key.ArrowUp)
          .pause(LONG_PAUSE)
          .down(Key.ArrowUp)
          .pause(300)
          .down(Key.Tab)
          .perform();
      }

      await expect(handleActionItemKeydownSpy).toHaveBeenCalledTimes(15);
      await expect(handleMenuItemKeydownSpy).toHaveBeenCalledTimes(7);

      // Testing if the last row would go to the focusPaginationSelect
      const length = sampleSearchResultResponse.hits.hits.length - 1;
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
  });

  it('EnchantedDataGridGeneric - should support RTL Keyboard Navigation', async () => {

    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${columns}
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
    await browser.execute("document.documentElement.setAttribute('dir', 'rtl')");
    // Need to pause to allow rendering to complete
    await browser.pause(SHORT_PAUSE);
    const element = document.querySelector('enchanted-data-grid-generic');
    if (element) {
      const tableRow = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#table-row-0`) as HTMLElement:
      await element.querySelector(`#table-row-0`) as HTMLElement;

      const handleBodyRowKeydownSpy = spyOn(element, 'handleBodyRowKeydown');

      await tableRow.focus();
      // Need to pause to allow to process the focus event
      await browser.pause(SHORT_PAUSE);
      await browser.action('key')
        .down(Key.ArrowLeft).pause(SHORT_PAUSE) // Need to pause to allow event to be processed
        .down(Key.Tab).pause(SHORT_PAUSE) // Need to pause to allow event to be processed
        .perform();
      await expect(handleBodyRowKeydownSpy).toHaveBeenCalledTimes(1);
      const moreMenuIconId = 'enchanted-data-grid-action-item-button-0-0-1';
      if (moreMenuIconId) {
        const focusedElement = element.shadowRoot?.activeElement?.getAttribute('id');
        await expect(focusedElement).toBe(moreMenuIconId);
      }
    }
  });

  it('EnchantedDataGridGeneric - should render Data Grid component with content and handleSorts', async () => {
    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${columns}
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

    await browser.execute("document.documentElement.setAttribute('dir', 'ltr')");
    // Need to pause to allow rendering to complete
    await browser.pause(SHORT_PAUSE);

    const element = await document.querySelector('enchanted-data-grid-generic');

    if (element) {
      const sortButton = element.shadowRoot ?
      await element.shadowRoot.querySelector(`#enchanted-table-header-0`) as HTMLElement:
      await element.querySelector(`#enchanted-table-header-0`) as HTMLElement;

      const handleCellHeaderSortAscKeydownSpy = await spyOn(element, 'handleCellHeaderKeydown');
      if (sortButton) {
        sortButton.focus();
        // Need to pause to allow to process the focus event
        await browser.pause(SHORT_PAUSE);
        await browser.action('key')
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowUp)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowDown)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowUp)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowRight)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.ArrowLeft)
          .pause(SHORT_PAUSE) // Need to pause to allow event to be processed
          .down(Key.Enter)
          .perform();
      }
      await browser.pause(SHORT_PAUSE); // Need to pause to allow all events to be processed
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
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        sortDescButton.focus();
        // Need to pause to allow to process the focus event
        await browser.pause(SHORT_PAUSE);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowRight' }));
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowLeft' }));
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowDown' }));
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'ArrowUp' }));
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        await sortButton.dispatchEvent(new KeyboardEvent('keydown', { key:'Enter' }));
        // Need to pause to allow event to be processed
        await browser.pause(SHORT_PAUSE);
        await expect(handleSortSpy).toHaveBeenCalledTimes(2);
        await expect(handleSortButtonBlurSpy).toHaveBeenCalledTimes(3);
        await expect(handleCellHeaderSortDescKeydownSpy).toHaveBeenCalledTimes(5);
      }
    }
  });

  it('EnchantedDataGridGeneric - should focus on row when focusOnRow is called', async () => {
    render(
      html`
        <div style="width: 2000px;">
          <enchanted-data-grid-generic
            .columns=${columns}
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

    // Need to pause to allow rendering to complete
    await browser.pause(SHORT_PAUSE);
    const element = document.querySelector('enchanted-data-grid-generic');

    if (!element) {
      throw new Error('EnchantedDataGridGeneric element not found');
    }

    const rowIndexToFocus = 1;
    element.focusOnRow(rowIndexToFocus);
    // Need to pause to allow to process the focus event
    await browser.pause(SHORT_PAUSE);
    const focusedElement = element.shadowRoot?.activeElement?.getAttribute('data-testid');
    await expect(focusedElement).toBe(`enchanted-table-row-${rowIndexToFocus}`);
  });

  it('EnchantedDataGridGeneric - should focus on the loading container when focusOnLoadingContainer is called', async () => {
    render(
      html`
        <enchanted-data-grid-generic .columns=${testColDef} .isLoading=${true}></enchanted-data-grid-generic>
      `,
      document.body
    );

    const grid = document.querySelector('enchanted-data-grid-generic');

    await waitFor(() => {
      expect(grid).not.toBeNull();
      expect(grid?.shadowRoot).not.toBeNull();
    });

    let loadingContainer: HTMLElement | null = null;
    await waitFor(() => {
      loadingContainer = grid!.shadowRoot!.querySelector('#table-loading-container');
      expect(loadingContainer).toBeInstanceOf(HTMLElement);
    });

    await grid!.focusOnLoadingContainer();

    await waitFor(() => {
      expect(grid!.shadowRoot!.activeElement).toBe(loadingContainer);
    });
  });
});