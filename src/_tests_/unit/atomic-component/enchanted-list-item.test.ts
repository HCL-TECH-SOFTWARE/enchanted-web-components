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
import { nothing, render } from 'lit';
import { html } from 'lit/static-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { initSessionStorage } from '../../utils';
import { ENCHANTED_LIST_ITEM_TAG, ENCHANTED_LIST_ITEM_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_LIST_ITEM_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_LIST_ITEM_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_LIST_ITEM_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_LIST_ITEM_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('key', '');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_LIST_ITEM_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render with different attributes', async () => {
    render(
      html`<${ENCHANTED_LIST_ITEM_TAG} key="test_key" isSelected/>`,
      document.body
    );
    const component = await $(ENCHANTED_LIST_ITEM_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let listElement = await component.$('>>>li[data-testid="enchanted-list-item-list"]').getElement();
    await expect(listElement).toHaveAttribute('key', 'test_key');
  });
});
