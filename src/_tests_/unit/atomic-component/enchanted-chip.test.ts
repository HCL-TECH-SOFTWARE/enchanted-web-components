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
import '../../../components/atomic-component/enchanted-chip';

// Helper imports
import { initSessionStorage } from '../../utils';
import { ENCHANTED_CHIP_TAG, ENCHANTED_CHIP_TAG_NAME } from '../../../components/tags';
 
describe(`${ENCHANTED_CHIP_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render chip web component without crashing', async () => {
    let component = document.createElement(ENCHANTED_CHIP_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove web component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_CHIP_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_CHIP_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('name', '');
    await expect(component).toHaveElementProperty('count', 0);
    await expect(component).toHaveElementProperty('showChipCount', false);
    component.remove();
  });

  it('should render web component and validate attributes', async () => {
    render(
      html`
        <${ENCHANTED_CHIP_TAG} 
          name="tag cloud" 
          count="100"
          showChipCount
        ></${ENCHANTED_CHIP_TAG}>
      `,
      document.body
    );

    let component = await $(ENCHANTED_CHIP_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('name', 'tag cloud');
    await expect(component).toHaveAttribute('count', '100');
    await expect(component).toHaveAttribute('showChipCount', '');
  });

  it('should render web component with a badge counter if showChipCount attribute is set to true', async () => {
    render(
      html`
        <${ENCHANTED_CHIP_TAG} 
          name="tag cloud" 
          count="100"
          showChipCount
        ></${ENCHANTED_CHIP_TAG}>
      `,
      document.body
    );

    let component = await $(ENCHANTED_CHIP_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    if (await component.getAttribute('showChipCount') === '') {
      let badgeSpan = await component.$('>>>span[part="chip-count"]').getElement();
      await expect(badgeSpan).toBeDisplayed();
      await expect(badgeSpan).toHaveText('100');
    } else {
      let badgeSpan = await component.$('>>>span[part="chip-count"]').getElement();
      await expect(badgeSpan).not.toBeDisplayed();
    }
  });
});
