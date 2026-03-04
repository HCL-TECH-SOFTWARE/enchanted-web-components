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
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-header-layout';

// Helper imports
import { initSessionStorage } from '../../utils';
import { HEADER_LAYOUT_PARTS } from '../../../types/cssClassEnums';
import { ENCHANTED_HEADER_LAYOUT_TAG, ENCHANTED_HEADER_LAYOUT_TAG_NAME } from '../../../components/tags';
 
describe(`${ENCHANTED_HEADER_LAYOUT_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_HEADER_LAYOUT_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_HEADER_LAYOUT_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_HEADER_LAYOUT_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes', async () => {
    render(
      html`
        <${ENCHANTED_HEADER_LAYOUT_TAG}>
          <div slot="header-start">testing1</div>
          <div slot="header-middle">testing2</div>
          <div slot="header-end">testing3</div>
        </${ENCHANTED_HEADER_LAYOUT_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_HEADER_LAYOUT_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    const slot1 = await $('div[slot="header-start"]').getElement();
    await expect(slot1).toHaveText('testing1');

    const slot2 = await $('div[slot="header-middle"]').getElement();
    await expect(slot2).toHaveText('testing2');

    const slot3 = await $('div[slot="header-end"]').getElement();
    await expect(slot3).toHaveText('testing3');
  });

  it('should render component in chat header mode', async () => {
    render(
      html`
        <${ENCHANTED_HEADER_LAYOUT_TAG} ?isChatHeader=${true}>
        </${ENCHANTED_HEADER_LAYOUT_TAG}>
      `,
      document.body
    );
    let component = await $(`>>>[part="${HEADER_LAYOUT_PARTS.CHAT_MAIN_HEADER}"]`).getElement();
    await expect(component).toBeDisplayed();
  });
});
