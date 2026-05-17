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
import { expect, browser, $ } from '@wdio/globals';
import { Key } from 'webdriverio';

// Component imports
import '../../../components/atomic-component/enchanted-textfield';

// Helper imports
import { initSessionStorage } from '../../utils';
import { EnchantedInputFieldType } from '../../../types/enchanted-select';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import { generateIconTagName, ENCHANTED_TEXTFIELD_TAG, ENCHANTED_TEXTFIELD_TAG_NAME } from '../../../components/tags';

interface TestableElement extends HTMLElement {
  __lastChangeDetail: { value: string; type: string; triggerSearch: boolean } | null;
  __changeCount: number;
  __searchDetail: { value: string; type: string; triggerSearch: boolean } | null;
  __blurChangeDetail: { value: string; type: string } | null;
}

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.textfield.placeholder.type.to.search', 'Type to search');

describe(`${ENCHANTED_TEXTFIELD_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_TEXTFIELD_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_TEXTFIELD_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_TEXTFIELD_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('value', '');
    await expect(component).toHaveElementProperty('type', 'text');
    await expect(component).toHaveElementProperty('placeholder', '');
    await expect(component).toHaveElementProperty('field', '');
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).not.toHaveAttribute('label');
    await expect(component).not.toHaveAttribute('iconStartUrl');
    await expect(component).not.toHaveAttribute('iconEndUrl');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_TEXTFIELD_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          label="test-label"
          placeholder="test-placeholder"
          buttontext="test-buttontext"
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    // To get the label element
    let labelElement = await component.$('>>>label[data-testid="enchanted-textfield-label"]').getElement();
    await expect(labelElement).toHaveText('test-label');
    // To get the input element
    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('type', 'text');
    await expect(inputElement).toHaveElementProperty('placeholder', 'test-placeholder');
    await expect(inputElement).toHaveElementProperty('disabled', false);
    await expect(inputElement).toHaveElementProperty('id', 'input-queryString');
    await inputElement.click();
    await browser.action('key')
      .down('t')
      .down('e')
      .down('s')
      .down('t')
      .perform();
    await browser.action('key')
      .down(Key.Enter)
      .perform();
    await expect(inputElement).toHaveValue('test');
  });

  it('should clear value when clear icon is clicked', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="test-value"
          .clearIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
        <button type="button">Click Me!</button>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let clearIcon = await $('>>>div[data-testid="enchanted-clear-icon"]').getElement();
    clearIcon.click();
    // To get the input element
    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', '');
    // to lose focus
    let button = document.getElementsByTagName('button')[0];
    button.focus();
  });

  it('should not remove value on blur when input is focused', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="test-value"
          .clearIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
        <button type="button">Click Me!</button>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    // Focus the input directly instead of using Tab (unreliable across shadow DOM)
    await inputElement.click();
    await expect(inputElement).toHaveElementProperty('value', 'test-value');

    // Blur by focusing the button
    let button = document.getElementsByTagName('button')[0];
    button.focus();

    inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', 'test-value');
  });

  // Multiline rendering
  it('should render a <textarea> when multiline is true', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          ?multiline=${true}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let textareaElement = await component.$('>>>textarea[data-testid="enchanted-textfield-textarea"]').getElement();
    await expect(textareaElement).toBeExisting();

    let inputExists = await component.$('>>>input[data-testid="enchanted-textfield-input"]').isExisting();
    await expect(inputExists).toBeFalsy();
  });

  // Auto-grow, shrink, cap, and fewer rows
  it('should auto-grow, shrink, cap at numberOfLines, and allow fewer rows than numberOfLines', async () => {
    // 1. Auto-grow without limit (numberOfLines=null)
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          ?multiline=${true}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let textareaElement = await component.$('>>>textarea[data-testid="enchanted-textfield-textarea"]').getElement();
    let initialRows = await textareaElement.getProperty('rows');

    // Type multiple lines - rows should grow
    const multiLineText = 'Line1\nLine2\nLine3\nLine4\nLine5';
    await browser.execute((el: HTMLElement, val: string) => {
      (el as HTMLTextAreaElement).value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, textareaElement, multiLineText);
    await component.waitForStable();

    let grownRows = await textareaElement.getProperty('rows');
    await expect(grownRows).toBeGreaterThan(initialRows);

    // 2. Shrink when content is removed
    await browser.execute((el: HTMLElement) => {
      (el as HTMLTextAreaElement).value = '';
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, textareaElement);
    await component.waitForStable();

    let shrunkRows = await textareaElement.getProperty('rows');
    await expect(shrunkRows).toBeLessThan(grownRows);

    // 3. Cap at numberOfLines and fewer rows - render with numberOfLines=3
    render(nothing, document.body);
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          ?multiline=${true}
          .numberOfLines=${3}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    textareaElement = await component.$('>>>textarea[data-testid="enchanted-textfield-textarea"]').getElement();

    // Type 10 lines - should be capped at 3 rows but content preserved
    const tenLines = 'Line1\nLine2\nLine3\nLine4\nLine5\nLine6\nLine7\nLine8\nLine9\nLine10';
    await browser.execute((el: HTMLElement, val: string) => {
      (el as HTMLTextAreaElement).value = val;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, textareaElement, tenLines);
    await component.waitForStable();

    let cappedRows = await textareaElement.getProperty('rows');
    await expect(cappedRows).toBe(3);
    let textContent = await textareaElement.getProperty('value');
    await expect(textContent).toBe(tenLines);
    let isScrollable = await browser.execute((el: HTMLElement) => {
      return el.scrollHeight > el.clientHeight;
    }, textareaElement);
    await expect(isScrollable).toBeTruthy();

    // 4. Fewer rows than numberOfLines - set 2 lines with cap=3
    await browser.execute((el: HTMLElement) => {
      (el as HTMLTextAreaElement).value = 'Line1\nLine2';
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, textareaElement);
    await component.waitForStable();

    let fewerRows = await textareaElement.getProperty('rows');
    await expect(fewerRows).toBe(2);
  });

  // Clear icon via Enter and Space keys
  it('should clear value when clear icon receives Enter or Space key', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="test-value"
          .clearIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    // Clear via Enter key
    let clearIcon = await component.$('>>>div[data-testid="enchanted-clear-icon"]').getElement();
    await clearIcon.click();
    await browser.action('key')
      .down(Key.Enter)
      .perform();

    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', '');

    // Re-render with value to test Space key
    render(nothing, document.body);
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="space-clear"
          .clearIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    clearIcon = await component.$('>>>div[data-testid="enchanted-clear-icon"]').getElement();
    await clearIcon.click();
    await browser.action('key')
      .down(' ')
      .perform();

    inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', '');
  });

  // Textarea keyboard events (Enter, Shift+Enter) and paste
  it('should handle Enter, Shift+Enter, and paste in textarea', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          ?multiline=${true}
          value="search-text"
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    await browser.execute((el: HTMLElement) => {
      const te = el as unknown as TestableElement;
      te.__lastChangeDetail = null;
      te.__changeCount = 0;
      el.addEventListener('change', (e: Event) => {
        te.__lastChangeDetail = (e as CustomEvent).detail;
        te.__changeCount++;
      });
    }, component);

    // 1. Enter triggers search
    let textareaElement = await component.$('>>>textarea[data-testid="enchanted-textfield-textarea"]').getElement();
    await textareaElement.click();
    await browser.action('key')
      .down(Key.Enter)
      .perform();

    let changeDetail = await browser.execute((el: HTMLElement) => { return (el as unknown as TestableElement).__lastChangeDetail; }, component);
    await expect(changeDetail).toBeTruthy();
    await expect(changeDetail!.triggerSearch).toBe(true);

    // 2. Shift+Enter should NOT trigger search (input event still fires but triggerSearch must be false)
    await browser.execute((el: HTMLElement) => { (el as unknown as TestableElement).__lastChangeDetail = null; }, component);
    await browser.action('key')
      .down(Key.Shift)
      .down(Key.Enter)
      .up(Key.Enter)
      .up(Key.Shift)
      .perform();

    let shiftEnterDetail = await browser.execute((el: HTMLElement) => { return (el as unknown as TestableElement).__lastChangeDetail; }, component);
    if (shiftEnterDetail) {
      await expect(shiftEnterDetail.triggerSearch).not.toBe(true);
    }

    // 3. Paste event
    await browser.execute((el: HTMLElement) => {
      (el as HTMLTextAreaElement).value = 'pasted content\nline 2\nline 3';
      el.dispatchEvent(new Event('paste', { bubbles: true }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, textareaElement);
    await component.waitForStable();

    let value = await textareaElement.getProperty('value');
    await expect(value).toContain('pasted content');
  });

  // Action icon: click search, Enter key search, and blur with empty value
  it('should handle action icon click, Enter key search, and blur with empty value', async () => {
    // 1. Action icon click triggers search
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="action-search"
          .actionIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    await browser.execute((el: HTMLElement) => {
      const te = el as unknown as TestableElement;
      te.__searchDetail = null;
      el.addEventListener('change', (e: Event) => {
        te.__searchDetail = (e as CustomEvent).detail;
      });
    }, component);

    let actionIcon = await component.$('>>>div[data-testid="enchanted-action-icon"]').getElement();
    await expect(actionIcon).toBeExisting();
    await actionIcon.click();

    let detail = await browser.execute((el: HTMLElement) => { return (el as unknown as TestableElement).__searchDetail; }, component);
    await expect(detail).toBeTruthy();
    await expect(detail!.triggerSearch).toBe(true);
    await expect(detail!.value).toBe('action-search');

    // 2. Enter key on action icon triggers search
    await browser.execute((el: HTMLElement) => { (el as unknown as TestableElement).__searchDetail = null; }, component);
    await actionIcon.click();
    await browser.action('key')
      .down(Key.Enter)
      .perform();

    detail = await browser.execute((el: HTMLElement) => { return (el as unknown as TestableElement).__searchDetail; }, component);
    await expect(detail).toBeTruthy();
    await expect(detail!.triggerSearch).toBe(true);

    // 3. Blur with empty value dispatches change
    render(nothing, document.body);
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value=""
        ></${ENCHANTED_TEXTFIELD_TAG}>
        <button type="button">Focus target</button>
      `,
      document.body
    );
    component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await browser.execute((el: HTMLElement) => {
      const te = el as unknown as TestableElement;
      te.__blurChangeDetail = null;
      el.addEventListener('change', (e: Event) => {
        te.__blurChangeDetail = (e as CustomEvent).detail;
      });
    }, component);

    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await inputElement.click();
    let button = document.getElementsByTagName('button')[0];
    button.focus();

    let blurDetail = await browser.execute((el: HTMLElement) => { return (el as unknown as TestableElement).__blurChangeDetail; }, component);
    await expect(blurDetail).toBeTruthy();
    await expect(blurDetail!.value).toBe('');
  });

  // Disabled state with both icons, label - covers all getInputParts branches
  it('should render disabled state with label, both icons, and correct parts', async () => {
    render(
      html`
        <${ENCHANTED_TEXTFIELD_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.QUERY_STRING}
          value="disabled-value"
          label="Test Label"
          ?disabled=${true}
          .clearIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
          .actionIcon=${html`<${generateIconTagName('icon-close')} size="16" color="currentColor"></${generateIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    // Input is disabled
    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('disabled', true);

    // Label exists
    let labelElement = await component.$('>>>label[data-testid="enchanted-textfield-label"]').getElement();
    await expect(labelElement).toHaveText('Test Label');

    // Both icons exist
    let clearIcon = await component.$('>>>div[data-testid="enchanted-clear-icon"]').getElement();
    await expect(clearIcon).toBeExisting();

    let actionIcon = await component.$('>>>div[data-testid="enchanted-action-icon"]').getElement();
    await expect(actionIcon).toBeExisting();

    // Disabled action icon should have tabindex -1
    let tabindex = await actionIcon.getAttribute('tabindex');
    await expect(tabindex).toBe('-1');
  });
});
