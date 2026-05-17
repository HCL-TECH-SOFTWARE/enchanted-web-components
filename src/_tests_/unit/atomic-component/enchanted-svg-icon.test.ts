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
import { render, nothing } from 'lit';
import { html } from 'lit/static-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-svg-icon';

// Helper imports
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconEnd } from '../../assets/svg-input-end-icon';
import { ENCHANTED_SVG_ICON_TAG, ENCHANTED_SVG_ICON_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_SVG_ICON_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_SVG_ICON_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('removes component from document body and validates removal', async () => {
    let component = document.createElement(ENCHANTED_SVG_ICON_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_SVG_ICON_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('color', '');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('size', '');
    await expect(component).not.toHaveAttribute('icon');
    component.remove();
  });

  it('should render svg with color and size as passing props if useCurrentColor set to false', async () => {
    render(
      html`
        <${ENCHANTED_SVG_ICON_TAG} .icon=${svgIconEnd} color="red" size="16px" ?useCurrentColor=${false}/>
      `,
      document.body
    );
    let component = await $(ENCHANTED_SVG_ICON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('size', '16px');
    await expect(component).toHaveElementProperty('useCurrentColor', false);
    await expect(component).toHaveElementProperty('color', 'red');
  });

  it('should render svg with parent color if useCurrentColor set to true', async () => {
    render(
      html`
        <${ENCHANTED_SVG_ICON_TAG} .icon=${svgIconEnd} size="16px" ?useCurrentColor=${true} style="color: green;"/>
      `,
      document.body
    );
    let component = await $(ENCHANTED_SVG_ICON_TAG_NAME).getElement();
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
