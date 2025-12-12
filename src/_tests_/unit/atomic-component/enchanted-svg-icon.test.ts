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
import '../../../components/atomic-component/enchanted-svg-icon';

// Helper imports
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconEnd } from '../../assets/svg-input-end-icon';

describe('EnchantedSvgIcon component testing', () => {
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

  it('EnchantedSvgIcon - should render without crashing', async () => {
    let component = document.createElement('enchanted-svg-icon');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('EnchantedSvgIcon - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-svg-icon');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedSvgIcon - validate default value of attributes', async () => {
    let component = document.createElement('enchanted-svg-icon');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('color', '');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('size', '');
    await expect(component).not.toHaveAttribute('icon');
    component.remove();
  });

  it('EnchantedSvgIcon - should render svg with color and size as passing props if useCurrentColor set to false', async () => {
    render(
      html`
        <enchanted-svg-icon .icon=${svgIconEnd} color="red" size="16px" ?useCurrentColor=${false}/>
      `,
      document.body
    );
    let component = await $('enchanted-svg-icon').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', '16px');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('color', 'red');
  });

  it('EnchantedSvgIcon - should render svg with parent color if useCurrentColor set to true', async () => {
    render(
      html`
        <enchanted-svg-icon .icon=${svgIconEnd} size="16px" ?useCurrentColor=${true} style="color: green;"/>
      `,
      document.body
    );
    let component = await $('enchanted-svg-icon').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', '16px');
    await expect(component).toHaveElementProperty('useCurrentColor', true);
    let svgElement = await component.$('>>>svg').getElement();
    await expect(svgElement).toHaveAttribute('fill', 'currentColor');
    let pathElement = await svgElement.$('>>>path').getElement();
    const color = await pathElement.getCSSProperty('color');
    await expect(color.value).toBe('rgba(0,128,0,1)'); // parent color green
  });
});
