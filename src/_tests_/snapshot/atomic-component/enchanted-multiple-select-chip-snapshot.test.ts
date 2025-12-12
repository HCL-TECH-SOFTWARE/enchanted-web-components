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
import '../../../components/atomic-component/enchanted-multiple-select-chip';
import '../../../components/atomic-component/enchanted-chip';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { initSessionStorage } from '../../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('multi.select.placeholder', 'Pagination');
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');

function renderHtml() {
  return html`
    <div data-testid="enchanted-multiple-select-chip-layout" style="padding: 5px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With label</label>
        <enchanted-multiple-select-chip .localization=${localization} label="Test Label"></enchanted-multiple-select-chip>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With Options and Selected</label>
        <enchanted-multiple-select-chip
          .localization=${localization}
          label="Test Label"
          .options=${['Option 1', 'Option 2', 'Option 3']}
          .selectedValues=${['Option 1']}
        ></enchanted-multiple-select-chip>
      </div>
    </div>
  `;
}

describe('EnchantedMultiSelectChip - Snapshot testing', () => {
  before(async () => {
    await initSessionStorage();
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  // Existing Test Cases
  it('EnchantedMultiSelectChip - should capture Multi Select Chip component with attributes - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(renderHtml(), document.body);
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-baseline-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(renderHtml(), document.body);
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-baseline-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with empty options and custom input - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            emptyOptions
            .selectedValues=${['Custom Value']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-empty-options-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with empty options and custom input - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            emptyOptions
            .selectedValues=${['Custom Value']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-empty-options-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with hidden label - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            hiddenLabel
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-hidden-label-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with hidden label - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            hiddenLabel
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-hidden-label-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip in error state - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            error
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-error-state-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip in error state - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            error
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-error-state-authoring');
    document.head.removeChild(link);
  });

  // New Test Cases
  it('EnchantedMultiSelectChip - should capture Multi Select Chip in disabled state - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            disabled
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-disabled-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip in disabled state - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            disabled
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-disabled-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with custom width - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            customWidth="300"
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-custom-width-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with custom width - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            customWidth="300"
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-custom-width-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with dropdown open - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-dropdown-open-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with dropdown open - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1']}
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-dropdown-open-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip without clear icon - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1', 'Option 2']}
            .clearIcon=${false}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-no-clear-icon-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip without clear icon - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${['Option 1', 'Option 2']}
            .clearIcon=${false}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-no-clear-icon-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with complex option data - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${[{ id: '1', name: 'Option One' }, { id: '2', name: 'Option Two' }, { id: '3', name: 'Option Three' }]}
            .selectedValues=${['1']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-complex-options-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with complex option data - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${[{ id: '1', name: 'Option One' }, { id: '2', name: 'Option Two' }, { id: '3', name: 'Option Three' }]}
            .selectedValues=${['1']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-complex-options-authoring');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with custom placeholder - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            placeholder="Custom Placeholder Text"
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-custom-placeholder-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with custom placeholder - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            placeholder="Custom Placeholder Text"
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-custom-placeholder-authoring');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with no options and dropdown open - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            emptyOptions
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-no-options-dropdown-enduser');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with no options and dropdown open - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            emptyOptions
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-no-options-dropdown-authoring');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with multiple selected values and input filtering - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Apple', 'Banana', 'Orange', 'Pineapple']}
            .selectedValues=${['Apple', 'Banana']}
            .inputValue=${'an'}
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-multiple-selected-filtered-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with multiple selected values and input filtering - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Apple', 'Banana', 'Orange', 'Pineapple']}
            .selectedValues=${['Apple', 'Banana']}
            .inputValue=${'an'}
            .toggleDropDown=${true}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-multiple-selected-filtered-authoring');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with empty selectedValues - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${[]}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-empty-selected-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with empty selectedValues - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3']}
            .selectedValues=${[]}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-empty-selected-authoring');
    document.head.removeChild(link);
  });
  it('EnchantedMultiSelectChip - should capture Multi Select Chip with large number of selectedValues - Enduser', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8']}
            .selectedValues=${['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-large-selected-enduser');
    document.head.removeChild(link);
  });

  it('EnchantedMultiSelectChip - should capture Multi Select Chip with large number of selectedValues - Authoring', async () => {
    const link = appendEnchantedStylingLink();
    render(
      html`
        <div data-testid="enchanted-multiple-select-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
          <enchanted-multiple-select-chip
            .localization=${localization}
            label="Test Label"
            .options=${['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8']}
            .selectedValues=${['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
          ></enchanted-multiple-select-chip>
        </div>
      `,
      document.body
    );
    let EnchantedMultiSelectChip = await $('>>>div[data-testid="enchanted-multiple-select-chip-layout"]');
    await browser.checkElement(EnchantedMultiSelectChip, 'enchanted-multiple-select-chip-snapshot-large-selected-authoring');
    document.head.removeChild(link);
  });
  
});
