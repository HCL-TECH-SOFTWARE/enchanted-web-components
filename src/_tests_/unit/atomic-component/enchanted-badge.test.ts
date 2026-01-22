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
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-badge';

// Helper imports
import { initSessionStorage } from '../../utils';
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType } from '../../../types/cssClassEnums';

describe('EnchantedBadge component testing', () => {
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

  it('EnchantedBadge - should render without crashing', async () => {
    let component = document.createElement('enchanted-badge');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedBadge - removes component from document body and validates removal', async () => {
    let component = document.createElement('EnchantedBadge');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedBadge - should render default badge ● when badge=""', async () => {
    render(
      html`
        <enchanted-badge badge="${EnchantedBadgeType.TEXT}" text=""> </enchanted-badge>
      `,
      document.body
    );
    let component = await $('enchanted-badge').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('');
  });

  it('EnchantedBadge - should render property badge', async () => {
    render(
      html`
        <enchanted-badge badge="${EnchantedBadgeType.TEXT}" text="20" />
      `,
      document.body
    );
    let component = await $('enchanted-badge').getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveText('20');
  });

  it('EnchantedBadge - should render with default properties', async () => {
    render(
      html`<enchanted-badge></enchanted-badge>`,
      document.body
    );
    const component = await $('enchanted-badge');
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('badge', EnchantedBadgeType.TEXT);
    await expect(component).toHaveAttribute('color', EnchantedBadgeColor.PRIMARY);
    await expect(component).toHaveAttribute('border', EnchantedBadgeBorder.DEFAULT);
  });

  it('EnchantedBadge - should render with custom text', async () => {
    render(
      html`<enchanted-badge badge="${EnchantedBadgeType.TEXT}" text="99"></enchanted-badge>`,
      document.body
    );
    const component = await $('enchanted-badge');
    await expect(component).toBeDisplayed();
    await expect(component).toHaveText('99');
  });

  it('EnchantedBadge - should render dot badge', async () => {
    render(
      html`<enchanted-badge badge="${EnchantedBadgeType.DOT}"></enchanted-badge>`,
      document.body
    );
    const component = await $('enchanted-badge');
    await expect(component).toBeDisplayed();
    await expect(component).not.toHaveText();
  });

  it('EnchantedBadge - should apply color and border styles', async () => {
    render(
      html`<enchanted-badge color="${EnchantedBadgeColor.ERROR}" border="${EnchantedBadgeBorder.DARK}"></enchanted-badge>`,
      document.body
    );
    const component = await $('enchanted-badge');
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('color', EnchantedBadgeColor.ERROR);
    await expect(component).toHaveAttribute('border', EnchantedBadgeBorder.DARK);
  });

  it('EnchantedBadge - should render with correct properties', async () => {
    const component = document.createElement('enchanted-badge');
    component.setAttribute('badge', EnchantedBadgeType.TEXT);
    component.setAttribute('color', EnchantedBadgeColor.PRIMARY);
    component.setAttribute('border', EnchantedBadgeBorder.DEFAULT);

    document.body.appendChild(component);

    const badge = await $(component);
    expect(badge).toHaveAttribute('badge', EnchantedBadgeType.TEXT);
    expect(badge).toHaveAttribute('color', EnchantedBadgeColor.PRIMARY);
    expect(badge).toHaveAttribute('border', EnchantedBadgeBorder.DEFAULT);
  });
});
