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
import '../../../components/atomic-component/enchanted-badge';

// Helper imports
import { initSessionStorage } from '../../utils';
import { EnchantedBadgeColor, EnchantedBadgeBorder, EnchantedBadgeType } from '../../../types/cssClassEnums';
import { ENCHANTED_BADGE_TAG, ENCHANTED_BADGE_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_BADGE_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_BADGE_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('removes component from document body and validates removal', async () => {
    let component = document.createElement('EnchantedBadge');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should render default badge ● when badge=""', async () => {
    render(
      html`
        <${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.TEXT}" text=""> </${ENCHANTED_BADGE_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BADGE_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('');
  });

  it('should render property badge', async () => {
    render(
      html`
        <${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.TEXT}" text="20" />
      `,
      document.body
    );
    let component = await $(ENCHANTED_BADGE_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    expect(component).toHaveText('20');
  });

  it('should render with default properties', async () => {
    render(
      html`<${ENCHANTED_BADGE_TAG}></${ENCHANTED_BADGE_TAG}>`,
      document.body
    );
    const component = await $(ENCHANTED_BADGE_TAG_NAME);
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('badge', EnchantedBadgeType.TEXT);
    await expect(component).toHaveAttribute('color', EnchantedBadgeColor.PRIMARY);
    await expect(component).toHaveAttribute('border', EnchantedBadgeBorder.DEFAULT);
  });

  it('should render with custom text', async () => {
    render(
      html`<${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.TEXT}" text="99"></${ENCHANTED_BADGE_TAG}>`,
      document.body
    );
    const component = await $(ENCHANTED_BADGE_TAG_NAME);
    await expect(component).toBeDisplayed();
    await expect(component).toHaveText('99');
  });

  it('should render dot badge', async () => {
    render(
      html`<${ENCHANTED_BADGE_TAG} badge="${EnchantedBadgeType.DOT}"></${ENCHANTED_BADGE_TAG}>`,
      document.body
    );
    const component = await $(ENCHANTED_BADGE_TAG_NAME);
    await expect(component).toBeDisplayed();
    await expect(component).not.toHaveText();
  });

  it('should apply color and border styles', async () => {
    render(
      html`<${ENCHANTED_BADGE_TAG} color="${EnchantedBadgeColor.ERROR}" border="${EnchantedBadgeBorder.DARK}"></${ENCHANTED_BADGE_TAG}>`,
      document.body
    );
    const component = await $(ENCHANTED_BADGE_TAG_NAME);
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('color', EnchantedBadgeColor.ERROR);
    await expect(component).toHaveAttribute('border', EnchantedBadgeBorder.DARK);
  });

  it('should render with correct properties', async () => {
    const component = document.createElement(ENCHANTED_BADGE_TAG_NAME);
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
