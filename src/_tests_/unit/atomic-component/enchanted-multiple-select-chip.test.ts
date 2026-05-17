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
import { nothing, render } from 'lit';
import { html } from 'lit/static-html.js';
import { expect, browser, $ } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-multiple-select-chip';
import '../../../components/atomic-component/enchanted-chip';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { initSessionStorage } from '../../utils';
import { EnchantedMultiSelectInputFieldType, MultiSelectChangeDetail } from '../../../types/enchanted-multiple-select-chip';
import {
  ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_CHIP_TAG_NAME, ENCHANTED_LIST_ITEM_TAG_NAME, ENCHANTED_LIST_TAG_NAME,
  ENCHANTED_MULTIPLE_SELECT_CHIP_TAG, ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME
} from '../../../components/tags';


const localization: Map<string, string> = new Map<string, string>();
localization.set('multi.select.placeholder', 'Pagination');
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');

describe(`${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove component and validate removal', async () => {
    let component = document.createElement(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default attributes', async () => {
    let component = document.createElement(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('toggleDropDown', false);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('showRemoveLabel', false);
    await expect(component).toHaveElementProperty('emptyOptions', false);
    await expect(component).toHaveElementProperty('clearIcon', true);
    await expect(component).not.toHaveAttribute('customWidth');
    await expect(component).not.toHaveAttribute('selectedValue');
    await expect(component).not.toHaveAttribute('options');
    await expect(component).not.toHaveAttribute('field');
    await expect(component).not.toHaveAttribute('currentFocusedItem');
    await expect(component).not.toHaveAttribute('listItems');
    await expect(component).not.toHaveAttribute('inputValue');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render with label and options', async () => {
    render(
      html`
        <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
          .localization=${localization}
          label="Test Label" 
          .options=${[
            { id: '1', name: 'Option 1', value: 'Option 1' },
            { id: '2', name: 'Option 2', value: 'Option 2' },
            { id: '3', name: 'Option 3', value: 'Option 3' }
          ]}
          .selectedValues=${[
            { id: '1', name: 'Option 1', value: 'Option 1' }
          ]}
        ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    await browser.pause(1000);
    const labelElement = await component.shadow$('label[data-testid="enchanted-multi-select-label"]').getElement();
    await expect(labelElement).toHaveText('Test Label');
  });

  it('should render and validate label and initial chip with constants', async () => {
    render(
      html`
        <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
          .localization=${localization}
          field=${EnchantedMultiSelectInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${[
            { id: 'title', name: 'Title', value: 'title' },
            { id: 'description', name: 'Description', value: 'description' },
            { id: 'type', name: 'Type', value: 'type' }
          ]}
          label="Select input"
          .selectedValues=${['type']}
        ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    await browser.pause(1000);
    await expect(component).toBeDisplayed();
    const labelElement = await component.shadow$('label[data-testid="enchanted-multi-select-label"]').getElement();
    await expect(labelElement).toHaveText('Select input');
  });

  it('should toggle dropdown on button click', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();

    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();
    await browser.waitUntil(
      async () => {
        return await button.isClickable();
      },
      { timeout: 5000, timeoutMsg: 'Button was not clickable within 5 seconds' }
    );
    await button.click();
    await browser.pause(500); // Wait for dropdown animation

    const list = await component.shadow$(`${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-multi-select-list"]`).getElement();
    await expect(list).toBeDisplayed();

    // Click again to close dropdown
    await button.click();
    await browser.pause(500);
    await expect(list).not.toBeDisplayed();
  });

  it('should filter options based on input', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        .selectedValues=${[
          { id: '2', name: 'Option 2', value: 'Option 2' }
        ]}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    const input = await component.shadow$('input#input-field').getElement();
    await input.click();
    await input.setValue('Option 2');
    await browser.pause(500);
  });

  it('should apply custom width', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        customWidth="500"
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    const container = await component.shadow$('div[part="top-container-div"]').getElement();
    await expect(container).toHaveStyle({ width: '500px' });

    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();
    await button.click();
    await browser.pause(500);
    const list = await component.shadow$(`${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-multi-select-list"]`).getElement();
    await expect(list).toHaveStyle({ width: '500px' });
  });

  it('should render and remove chips', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        .selectedValues=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' }
        ]}
        ?clearIcon=${true}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    await browser.pause(500);

    // Verify chips are rendered
    const chips = await component.shadow$$(`${ENCHANTED_CHIP_TAG_NAME}[data-testid="enchanted-multiple-select-chip"]`);
    await expect(chips).toHaveLength(2);
    await expect(chips[0]).toHaveText('Option 1');
    await expect(chips[1]).toHaveText('Option 2');

    // Click clear icon on the first chip
    const clearIcons = await component.shadow$$('span[data-testid="clear-icon"]');
    await expect(clearIcons).toHaveLength(2);
    await clearIcons[0].click();

    // // Verify chip is removed
    const updatedChips = await component.shadow$$(`${ENCHANTED_CHIP_TAG_NAME}[data-testid="enchanted-multiple-select-chip"]`);
    await expect(updatedChips).toHaveLength(1);
    await expect(updatedChips[0]).toHaveText('Option 2');

    // Verify selectedValues updated
    const selectedValues = await component.getProperty('selectedValues');
    expect(selectedValues).toEqual([{ id: '2', name: 'Option 2', value: 'Option 2' }]);

  });

  it('should be non-interactive when disabled', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        ?disabled=${true}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    const input = await component.shadow$('input#input-field').getElement();
    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();

    await expect(input).toBeDisabled();

    await expect(button).toHaveAttribute('disabled');

    await button.click();
    await browser.pause(500);
    const list = await component.shadow$(`${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-multi-select-list"]`);
    await expect(list).not.toBeDisplayed();
  });

  it('should handle OptionData objects', async () => {
    const options = [
      { id: '1', name: 'Option One', value: 'Option One' },
      { id: '2', name: 'Option Two', value: 'Option Two' },
      { id: '3', name: 'Option Three', value: 'Option Three' }
    ];
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${options}
        .selectedValues=${[
          { id: '1', name: 'Option One', value: 'Option One' }
        ]}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    await browser.pause(500);

    const chips = await component.shadow$$(`${ENCHANTED_CHIP_TAG_NAME}[data-testid="enchanted-multiple-select-chip"]`);
    await expect(chips).toHaveLength(1);
    await expect(chips[0]).toHaveText('Option One');

    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();
    await button.click();
    await browser.pause(500);

    const listItems = await component.shadow$$(`${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-multi-select-listitem"]`);
    await expect(listItems).toHaveLength(3);

    const text0 = await listItems[0].getText();
    expect(text0).toContain('Option One');
    const text1 = await listItems[1].getText();
    expect(text1).toContain('Option Two');

    const text2 = await listItems[2].getText();
    expect(text2).toContain('Option Three');

  });

  it('should close dropdown on outside click', async () => {
    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
      <div id="outside">Outside Element</div>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();
    await button.click();
    await browser.pause(500);

    const list = await component.shadow$(`${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-multi-select-list"]`).getElement();
    await expect(list).toBeDisplayed();

    const outsideElement = await $('#outside').getElement();
    await outsideElement.click();
    await browser.pause(500);

    await expect(list).not.toBeDisplayed();
  });

  it('should dispatch change event with correct details', async () => {

    let changeEventDetail: MultiSelectChangeDetail | null = null;

    render(
      html`
      <${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}
        .localization=${localization}
        label="Test Label"
        field="test"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        @change=${(e: CustomEvent) => {
          changeEventDetail = e.detail;
        }}
      ></${ENCHANTED_MULTIPLE_SELECT_CHIP_TAG}>
    `,
      document.body
    );

    const component = await $(ENCHANTED_MULTIPLE_SELECT_CHIP_TAG_NAME).getElement();
    const button = await component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-multi-select-button"]`).getElement();
    await button.click();
    await browser.pause(500);

    const listItems = await component.shadow$$(`${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-multi-select-listitem"]`);
    await listItems[0].click();
    await browser.pause(500);

    await expect(changeEventDetail).toEqual({
      value: [{ id: '1', name: 'Option 1', value: 'Option 1' }],
      type: 'test'
    });
  });
});
