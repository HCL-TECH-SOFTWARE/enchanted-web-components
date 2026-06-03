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
import { render, nothing } from 'lit';
import { html } from 'lit/static-html.js';
import { $, expect } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

// Component imports
import '../../../components/atomic-component/enchanted-table-pagination';

// Helper imports
import { initSessionStorage } from '../../utils';
import { EnchantedInputFieldType } from '../../../types/enchanted-select';
import {
  ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_LIST_ITEM_TAG_NAME, ENCHANTED_LIST_TAG_NAME, ENCHANTED_SELECT_TAG_NAME,
  ENCHANTED_TABLE_PAGINATION_TAG, ENCHANTED_TABLE_PAGINATION_TAG_NAME
} from '../../../components/tags';

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');
localization.set('input.select.placeholder.select.content.source', 'Select a content source');
localization.set('output.table.footer.show.rows', 'Show rows:');
localization.set('output.table.footer.page', 'Page:');
localization.set('output.table.footer.current.pages', '{current_page_start}-{current_page_end} von {total_count}');

describe(`${ENCHANTED_TABLE_PAGINATION_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_TABLE_PAGINATION_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('removes component from document body and validates removal', async () => {
    let component = document.createElement(ENCHANTED_TABLE_PAGINATION_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_TABLE_PAGINATION_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes', async () => {
    render(
      html`
        <${ENCHANTED_TABLE_PAGINATION_TAG}
          .localization=${localization}
          ?hasPreviousPage=${false}
          ?hasNextPage=${true}
          ?disabled=${false}
          currentPage=${1}
          totalCount=${64}
          rowSize=${10}
        ></${ENCHANTED_TABLE_PAGINATION_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TABLE_PAGINATION_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('hasPreviousPage', false); // because current page is 1
    await expect(component).toHaveElementProperty('hasNextPage', true);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('currentPage', 1);
    await expect(component).toHaveElementProperty('totalCount', 64);
    await expect(component).toHaveElementProperty('rowSize', 10);
  });

  it('should be able to change row size', async () => {
    render(
      html`
        <${ENCHANTED_TABLE_PAGINATION_TAG}
          .localization=${localization}
          ?hasPreviousPage=${false}
          ?hasNextPage=${true}
          ?disabled=${false}
          currentPage=${1}
          totalCount=${64}
          rowSize=${10}
        ></${ENCHANTED_TABLE_PAGINATION_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TABLE_PAGINATION_TAG_NAME).getElement();
    const inputElement = await component.$(`>>>${ENCHANTED_SELECT_TAG_NAME}`).getElement();
    await waitFor(async() => {
      expect(await inputElement.getAttribute('field')).toEqual(EnchantedInputFieldType.PAGINATION_ROWS);
      expect(await inputElement.getAttribute('label')).toEqual(null);

      const labelElement = await inputElement.shadow$('label[data-testid="enchanted-select-label"]').getElement();
      expect(await labelElement.getText()).toEqual(localization.get('output.table.footer.show.rows'));

      const buttonElement = await inputElement.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();
      expect(await buttonElement.getAttribute('buttontext')).toEqual('10');

      await buttonElement.click();
    });

    // get the first option element
    const listElement =  await inputElement.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`).getElement();
    const listItemElement = await listElement.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}`).getElements(); // get 1st element
    
    await waitFor(async() => {
      // if we have the option element, click it
      if ((await listItemElement[1].getText()).includes('25')) {
        await listItemElement[1].click();
      }
    });      

    await waitFor(async() => {
      const buttonElement = await inputElement.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();
      expect(await buttonElement.getAttribute('buttontext')).toContain('25');
    });
  });

  it('should be able to change page', async () => {
    render(
      html`
        <${ENCHANTED_TABLE_PAGINATION_TAG}
          .localization=${localization}
          ?hasPreviousPage=${false}
          ?hasNextPage=${true}
          ?disabled=${false}
          currentPage=${1}
          totalCount=${64}
          rowSize=${10}
        ></${ENCHANTED_TABLE_PAGINATION_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TABLE_PAGINATION_TAG_NAME).getElement();
    const inputElementArr = await component.$$(`>>>${ENCHANTED_SELECT_TAG_NAME}`).getElements();
    const inputElement = inputElementArr[1];

    await waitFor(async() => {
      expect(await inputElement.getAttribute('field')).toEqual(EnchantedInputFieldType.PAGINATION_PAGE);
      expect(await inputElement.getAttribute('label')).toEqual(null);

      const labelElement = await inputElement.shadow$('label[data-testid="enchanted-select-label"]').getElement();
      expect(await labelElement.getText()).toEqual(localization.get('output.table.footer.page'));

      const buttonElement = await inputElement.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();
      expect(await buttonElement.getAttribute('buttontext')).toEqual('1');

      await buttonElement.click();
    });

    // get the first option element
    const listElement =  await inputElement.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`).getElement();
    const listItemElement = await listElement.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}`).getElements(); // get 1st element
    
    await waitFor(async() => {
      // if we have the option element, click it
      if ((await listItemElement[1].getText()).includes('2')) {
        await listItemElement[1].click();
      }
    });      

    await waitFor(async() => {
      const buttonElement = await inputElement.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();
      expect(await buttonElement.getAttribute('buttontext')).toContain('2');
    });
  });
});
