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
import { createIconTagName, ENCHANTED_TEXTFIELD_TAG, ENCHANTED_TEXTFIELD_TAG_NAME } from '../../../components/tags';

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
          .clearIcon=${html`<${createIconTagName('icon-close')} size="16" color="currentColor"></${createIconTagName('icon-close')}>`}
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
          .clearIcon=${html`<${createIconTagName('icon-close')} size="16" color="currentColor"></${createIconTagName('icon-close')}>`}
        ></${ENCHANTED_TEXTFIELD_TAG}>
        <button type="button">Click Me!</button>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TEXTFIELD_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    await browser.action('key')
      .down(Key.Tab)
      .perform();

    let inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', 'test-value');

    expect(await component.isFocused()).toBe(true);
    // to lose focus
    let button = document.getElementsByTagName('button')[0];
    button.focus();

    inputElement = await component.$('>>>input[data-testid="enchanted-textfield-input"]').getElement();
    await expect(inputElement).toHaveElementProperty('value', 'test-value');
  });
});
