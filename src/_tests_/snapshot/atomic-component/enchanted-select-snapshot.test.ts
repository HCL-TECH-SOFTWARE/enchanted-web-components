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
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-select';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { SEARCH_COMMON_FIELDS } from '../../constants';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { EnchantedInputFieldType } from '../../../types/enchanted-select';
import { initSessionStorage } from '../../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');
localization.set('input.select.placeholder.select.content.source', 'Select a content source');
localization.set('output.table.footer.show.rows', 'Show rows:');
localization.set('output.table.footer.page', 'Page:');

function renderHtml() {
  return html`
    <div data-testid="enchanted-select-layout" style="padding: 5px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With label</label>
        <enchanted-select .localization=${localization} label="Test Label"></enchanted-select>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With Options and Selected</label>
        <enchanted-select .localization=${localization} label="Test Label" .options=${['Option 1', 'Option 2', 'Option 3']} selectedValue="Option 1"></enchanted-select>
      </div>
    </div>
  `;
}

describe('EnchantedInputSelect - Snapshot testing', () => {
  before(async () => {
    await initSessionStorage();
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedInputSelect - should capture Input Select component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let EnchantedTextInputfield = await $('>>>div[data-testid="enchanted-select-layout"]');
    await browser.checkElement(EnchantedTextInputfield, 'enchanted-select-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedInputSelect - should capture Input Select component with Open Dropdown - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-select-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; height: 250px;">
          <enchanted-select .localization=${localization} field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE} .options=${SEARCH_COMMON_FIELDS} label="Select input">
          </enchanted-select>
        </div>
      `,
      document.body,
    );
    let component = await $('enchanted-select').getElement();
    await expect(component).toBeDisplayed();
    let buttonElement = await component.$('>>>enchanted-button[data-testid="enchanted-select-button"]').getElement();
    await buttonElement.click();

    let listElement = await component.$('>>>enchanted-list[data-testid="enchanted-select-list"]').getElement();

    await expect(listElement).toBeDisplayed();

    let EnchantedTextInputSelect = await $('>>>div[data-testid="enchanted-select-layout"]');
    await browser.checkElement(EnchantedTextInputSelect, 'enchanted-select-snapshot-baseline-with-dropdown-opened-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedInputSelect - should capture Input Select component with Open Dropdown and Selected and remove label - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-select-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; height: 250px;">
          <enchanted-select
            .localization=${localization}
            field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
            .options=${SEARCH_COMMON_FIELDS}
            label="Select input"
            selectedValue="description"
            showRemoveLabel
          ></enchanted-select>
        </div>
      `,
      document.body,
    );
    let component = await $('enchanted-select').getElement();
    await expect(component).toBeDisplayed();
    let buttonElement = await component.$('>>>enchanted-button[data-testid="enchanted-select-button"]').getElement();
    await buttonElement.click();

    let listElement = await component.$('>>>enchanted-list[data-testid="enchanted-select-list"]').getElement();

    await expect(listElement).toBeDisplayed();

    let EnchantedTextInputSelect = await $('>>>div[data-testid="enchanted-select-layout"]');
    await browser.checkElement(EnchantedTextInputSelect, 'enchanted-select-snapshot-baseline-with-dropdown-opened-with-selected-authoring'),

    document.head.removeChild(link);
  });
});
