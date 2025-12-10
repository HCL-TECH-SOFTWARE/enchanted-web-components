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
import { html, render } from 'lit';
import { expect, browser, $ } from '@wdio/globals';

// Component imports
import '../../../components/ac/dx-multiple-select-chip';
import '../../../components/ac/dx-chip';
import '../../../components/ac/dx-button';
import '../../../components/ac/dx-list';
import '../../../components/ac/dx-list-item';

// Helper imports
import { initSessionStorage } from '../../utils';
import { DxMultiSelectInputFieldType, MultiSelectChangeDetail } from '../../../types/dx-multiple-select-chip';


const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('multi.select.placeholder', 'Pagination');
dxLocalization.set('input.select.placeholder.select.attribute', 'Select an attribute');

describe('DxMultiSelectChip component testing', () => {
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

  it('DxMultiSelectChip - should render without crashing', async () => {
    let component = document.createElement('dx-multiple-select-chip');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('DxMultiSelectChip - removes component and validates removal', async () => {
    let component = document.createElement('dx-multiple-select-chip');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxMultiSelectChip - validate default attributes', async () => {
    let component = document.createElement('dx-multiple-select-chip');
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

  it('DxMultiSelectChip - should validate null for non-existent attributes', async () => {
    let component = document.createElement('dx-multiple-select-chip');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('DxMultiSelectChip - should render with label and options', async () => {
    render(
      html`
        <dx-multiple-select-chip
          .localization=${dxLocalization}
          label="Test Label" 
          .options=${[
            { id: '1', name: 'Option 1', value: 'Option 1' },
            { id: '2', name: 'Option 2', value: 'Option 2' },
            { id: '3', name: 'Option 3', value: 'Option 3' }
          ]}
          .selectedValues=${[
            { id: '1', name: 'Option 1', value: 'Option 1' }
          ]}
        ></dx-multiple-select-chip>
      `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    await browser.pause(1000);
    const labelElement = await component.shadow$('label[data-testid="dx-multi-select-label"]').getElement();
    await expect(labelElement).toHaveText('Test Label');
  });

  it('DxMultiSelectChip - should render and validate label and initial chip with constants', async () => {
    render(
      html`
        <dx-multiple-select-chip
          .localization=${dxLocalization}
          field=${DxMultiSelectInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${[
            { id: 'title', name: 'Title', value: 'title' },
            { id: 'description', name: 'Description', value: 'description' },
            { id: 'type', name: 'Type', value: 'type' }
          ]}
          label="Select input"
          .selectedValues=${['type']}
        ></dx-multiple-select-chip>
      `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    await browser.pause(1000);
    await expect(component).toBeDisplayed();
    const labelElement = await component.shadow$('label[data-testid="dx-multi-select-label"]').getElement();
    await expect(labelElement).toHaveText('Select input');
  });

  it('DxMultiSelectChip - should toggle dropdown on button click', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();

    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();
    await browser.waitUntil(
      async () => {
        return await button.isClickable();
      },
      { timeout: 5000, timeoutMsg: 'Button was not clickable within 5 seconds' }
    );
    await button.click();
    await browser.pause(500); // Wait for dropdown animation

    const list = await component.shadow$('dx-list[data-testid="dx-multi-select-list"]').getElement();
    await expect(list).toBeDisplayed();

    // Click again to close dropdown
    await button.click();
    await browser.pause(500);
    await expect(list).not.toBeDisplayed();
  });

  it('DxMultiSelectChip - should filter options based on input', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        .selectedValues=${[
          { id: '2', name: 'Option 2', value: 'Option 2' }
        ]}
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    const input = await component.shadow$('input#input-field').getElement();
    await input.click();
    await input.setValue('Option 2');
    await browser.pause(500);
  });

  it('DxMultiSelectChip - should apply custom width', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        customWidth="500"
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    const container = await component.shadow$('div[part="top-container-div"]').getElement();
    await expect(container).toHaveStyle({ width: '500px' });

    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();
    await button.click();
    await browser.pause(500);
    const list = await component.shadow$('dx-list[data-testid="dx-multi-select-list"]').getElement();
    await expect(list).toHaveStyle({ width: '500px' });
  });

  it('DxMultiSelectChip - should render and remove chips', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
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
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    await browser.pause(500);

    // Verify chips are rendered
    const chips = await component.shadow$$('dx-chip[data-testid="dx-multiple-select-chip"]');
    await expect(chips).toHaveLength(2);
    await expect(chips[0]).toHaveText('Option 1');
    await expect(chips[1]).toHaveText('Option 2');

    // Click clear icon on the first chip
    const clearIcons = await component.shadow$$('span[data-testid="clear-icon"]');
    await expect(clearIcons).toHaveLength(2);
    await clearIcons[0].click();

    // // Verify chip is removed
    const updatedChips = await component.shadow$$('dx-chip[data-testid="dx-multiple-select-chip"]');
    await expect(updatedChips).toHaveLength(1);
    await expect(updatedChips[0]).toHaveText('Option 2');

    // Verify selectedValues updated
    const selectedValues = await component.getProperty('selectedValues');
    expect(selectedValues).toEqual([{ id: '2', name: 'Option 2', value: 'Option 2' }]);

  });

  it('DxMultiSelectChip - should be non-interactive when disabled', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
        ?disabled=${true}
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    const input = await component.shadow$('input#input-field').getElement();
    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();

    await expect(input).toBeDisabled();

    await expect(button).toHaveAttribute('disabled');

    await button.click();
    await browser.pause(500);
    const list = await component.shadow$('dx-list[data-testid="dx-multi-select-list"]');
    await expect(list).not.toBeDisplayed();
  });

  it('DxMultiSelectChip - should handle OptionData objects', async () => {
    const options = [
      { id: '1', name: 'Option One', value: 'Option One' },
      { id: '2', name: 'Option Two', value: 'Option Two' },
      { id: '3', name: 'Option Three', value: 'Option Three' }
    ];
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${options}
        .selectedValues=${[
          { id: '1', name: 'Option One', value: 'Option One' }
        ]}
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    await browser.pause(500);

    const chips = await component.shadow$$('dx-chip[data-testid="dx-multiple-select-chip"]');
    await expect(chips).toHaveLength(1);
    await expect(chips[0]).toHaveText('Option One');

    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();
    await button.click();
    await browser.pause(500);

    const listItems = await component.shadow$$('dx-list-item[data-testid="dx-multi-select-listitem"]');
    await expect(listItems).toHaveLength(3);

    const text0 = await listItems[0].getText();
    expect(text0).toContain('Option One');
    const text1 = await listItems[1].getText();
    expect(text1).toContain('Option Two');

    const text2 = await listItems[2].getText();
    expect(text2).toContain('Option Three');

  });

  it('DxMultiSelectChip - should close dropdown on outside click', async () => {
    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
        label="Test Label"
        .options=${[
          { id: '1', name: 'Option 1', value: 'Option 1' },
          { id: '2', name: 'Option 2', value: 'Option 2' },
          { id: '3', name: 'Option 3', value: 'Option 3' }
        ]}
      ></dx-multiple-select-chip>
      <div id="outside">Outside Element</div>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();
    await button.click();
    await browser.pause(500);

    const list = await component.shadow$('dx-list[data-testid="dx-multi-select-list"]').getElement();
    await expect(list).toBeDisplayed();

    const outsideElement = await $('#outside').getElement();
    await outsideElement.click();
    await browser.pause(500);

    await expect(list).not.toBeDisplayed();
  });

  it('DxMultiSelectChip - should dispatch change event with correct details', async () => {

    let changeEventDetail: MultiSelectChangeDetail | null = null;

    render(
      html`
      <dx-multiple-select-chip
        .localization=${dxLocalization}
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
      ></dx-multiple-select-chip>
    `,
      document.body
    );

    const component = await $('dx-multiple-select-chip').getElement();
    const button = await component.shadow$('dx-button[data-testid="dx-multi-select-button"]').getElement();
    await button.click();
    await browser.pause(500);

    const listItems = await component.shadow$$('dx-list-item[data-testid="dx-multi-select-listitem"]');
    await listItems[0].click();
    await browser.pause(500);

    await expect(changeEventDetail).toEqual({
      value: [{ id: '1', name: 'Option 1', value: 'Option 1' }],
      type: 'test'
    });
  });
});
