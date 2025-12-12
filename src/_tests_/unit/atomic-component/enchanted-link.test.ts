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
import { $, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-link';

// Helper imports
import { PAGINATION_PARTS } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';

describe('EnchantedAnchorTag component testing', () => {
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

  it('EnchantedAnchorTag - should render without crashing', async () => {
    let component = document.createElement('enchanted-link');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('EnchantedAnchorTag - remove component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-link');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedAnchorTag - validate default value of attributes', async () => {
    let component = document.createElement('enchanted-link');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('url', '');
    await expect(component).toHaveElementProperty('weight', 0);
    await expect(component).toHaveElementProperty('title', '');
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('selected', false);
    component.remove();
  });

  it('EnchantedAnchorTag - set and remove attributes and validate', async () => {
    let component = document.createElement('enchanted-link');
    component.setAttribute('anchorURL', 'testURL');
    document.body.appendChild(component);
    await expect($(component).getAttribute('anchorURL')).not.toBeNull();
    await expect($(component)).toHaveAttribute('anchorURL', 'testURL');
    component.remove();
  });

  it('EnchantedAnchorTag - should validate null for non-existent attributes', async () => {
    let component = document.createElement('enchanted-link');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('EnchantedAnchorTag - should render component and validate attributes', async () => {
    render(
      html`
        <enchanted-link
          url="testURL"
          weight="0"
          anchorTitle="Anchor Title"
          name="Test"
          rel="noopener"
          value="1"
          mode="pagination">
        </enchanted-link>
      `,
      document.body
    );
    let component = await $('enchanted-link').getElement();
    await expect(component).toBeDisplayed();
    let linkElement = await component.$('>>>a[data-testid="enchanted-link-link"]').getElement();
    await expect(linkElement).toHaveText('Test');
    await expect(linkElement).toHaveAttribute('href', 'testURL');
    await expect(linkElement).toHaveAttribute('title', 'Anchor Title');
    await expect(linkElement).toHaveAttribute('rel', 'noopener');
    await expect(linkElement).toHaveAttribute('value', '1');
  }); 

  it('EnchantedAnchorTag - should render component with selected css as per setting mode', async () => {
    render(
      html`
        <enchanted-link
          url="testURL"
          weight="0"
          anchorTitle="Anchor Title"
          name="Test"
          rel="noopener"
          mode=${PAGINATION_PARTS.PAGINATION_INDEX_DEFAULT}>
        </enchanted-link>
      `,
      document.body
    );
    let component = await $('enchanted-link').getElement();
    await expect(component).toBeDisplayed();
    let linkElement = await component.$('>>>a[data-testid="enchanted-link-link"]').getElement();
    const color = await linkElement.getCSSProperty('color');
    const display = await component.getCSSProperty('display');
    const textSize = await component.getCSSProperty('font-size');
    await expect(color.value).toBe('rgba(0,0,238,1)');
    await expect(display.value).toBe('inline');
    await expect(textSize.value).toBe('16px');
  });
});
