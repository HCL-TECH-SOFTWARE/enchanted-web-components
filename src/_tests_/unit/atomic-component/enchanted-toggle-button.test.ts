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
import { expect, $ } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

// Component imports
import '../../../components/atomic-component/enchanted-toggle-button';
import { svgIconSearch } from '../../assets/svg-search';

// Helper imports
import { initSessionStorage } from '../../utils';
import { TOGGLE_BUTTON_PARTS } from '../../../types/cssClassEnums';
import { ENCHANTED_BADGE_TAG_NAME, ENCHANTED_ICON_BUTTON_TAG_NAME, ENCHANTED_TOGGLE_BUTTON_TAG, ENCHANTED_TOGGLE_BUTTON_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_TOGGLE_BUTTON_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_TOGGLE_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('outlined', false);
    component.remove();
  });

  it('should render component and validate attributes for outlined', async () => {
    let wasClicked = false;
    let selectedView = 'iconOne';

    render(
      html`
        <${ENCHANTED_TOGGLE_BUTTON_TAG}
          .iconUrls=${[
            'iconOneUrl', 'iconTwoUrl'
          ]}
          .values=${['iconOne', 'iconTwo']}
          selectedValue=${selectedView}
          ?outlined=${true}
          @click=${() => { wasClicked = true; selectedView = 'iconTwo'; }}
        >
        </${ENCHANTED_TOGGLE_BUTTON_TAG}>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('selectedValue', 'iconOne');
    await expect(component).toHaveElementProperty('outlined', true);
    let firstButtonElement = await component.$('>>>button[data-testid="enchanted-toggle-button-first"]').getElement();
    let firstImgElement = await firstButtonElement.$('>>>img[data-testid="enchanted-toggle-button-img"]').getElement();
    let secondButtonElement = await component.$('>>>button[data-testid="enchanted-toggle-button-second"]').getElement();
    let secondImgElement = await secondButtonElement.$('>>>img[data-testid="enchanted-toggle-button-img"]').getElement();
    await expect(firstImgElement).toHaveAttribute('src', 'iconOneUrl');
    await expect(secondImgElement).toHaveAttribute('src', 'iconTwoUrl');

    await waitFor(async () => {
      await secondButtonElement.click();
    });
    await expect(wasClicked).toBe(true);
    await expect(selectedView).toBe('iconTwo'); 
  });

  it('should render component and validate attributes for non-outlined', async () => {
    let wasClicked = false;
    let selectedView = 'iconTwo';

    render(
      html`
        <${ENCHANTED_TOGGLE_BUTTON_TAG}
          .iconUrls=${[
            'iconOneUrl', 'iconTwoUrl'
          ]}
          .values=${['iconOne', 'iconTwo']}
          selectedValue=${selectedView}
          ?outlined=${false}
          @click=${() => { wasClicked = true; selectedView = 'iconOne'; }}
        >
        </${ENCHANTED_TOGGLE_BUTTON_TAG}>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('selectedValue', 'iconTwo');
    await expect(component).toHaveElementProperty('outlined', false);
    let firstButtonElement = await component.$('>>>button[data-testid="enchanted-toggle-button-first"]').getElement();
    let firstImgElement = await firstButtonElement.$('>>>img[data-testid="enchanted-toggle-button-img"]').getElement();
    let secondButtonElement = await component.$('>>>button[data-testid="enchanted-toggle-button-second"]').getElement();
    let secondImgElement = await secondButtonElement.$('>>>img[data-testid="enchanted-toggle-button-img"]').getElement();
    await expect(firstImgElement).toHaveAttribute('src', 'iconOneUrl');
    await expect(secondImgElement).toHaveAttribute('src', 'iconTwoUrl');

    await waitFor(async () => {
      await firstButtonElement.click();
    });
    await expect(wasClicked).toBe(true);
    await expect(selectedView).toBe('iconOne'); 
  });

  it('should render single button element', async () => {
    render(
      html`
        <${ENCHANTED_TOGGLE_BUTTON_TAG}
          data-testid="enchanted-filter-button"
          id='enchanted-filter-button'
          ?singleButton=${true}
          singleButtonTitle="test"
          singleButtonAria="test"
          .icon=${html `${svgIconSearch}`}
          >
        </${ENCHANTED_TOGGLE_BUTTON_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let enchantedButtonElement = await component.$$(`>>>${ENCHANTED_ICON_BUTTON_TAG_NAME}[data-testid="enchanted-toggle-single-button"]`).getElements();
    await expect(enchantedButtonElement.length).toBe(1);
    
    const attributes = await enchantedButtonElement[0].getAttribute('part');
    await expect(attributes).toContain(`${TOGGLE_BUTTON_PARTS.TOGGLE_OFF_SINGLE_BUTTON}`);
  });

  it('should render single button element with toggle on state', async () => {
    render(
      html`
        <${ENCHANTED_TOGGLE_BUTTON_TAG}
          ?singleButton=${true}
          ?toggleOn=${true}
          .icon=${html `${svgIconSearch}`}
          >
        </${ENCHANTED_TOGGLE_BUTTON_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let enchantedButtonElement = component.$(`>>>${ENCHANTED_ICON_BUTTON_TAG_NAME}[data-testid="enchanted-toggle-single-button"]`);
    await expect(enchantedButtonElement).toBeDisplayed();

    const attributes = await enchantedButtonElement.getAttribute('part');
    await expect(attributes).toContain(`${TOGGLE_BUTTON_PARTS.TOGGLE_ON_SINGLE_BUTTON}`);
  });

  it('should render single button element with badge', async () => {
    render(
      html`
        <${ENCHANTED_TOGGLE_BUTTON_TAG}
          ?showBadge=${true}
          ?singleButton=${true}
          ?toggleOn=${true}
          .icon=${html `${svgIconSearch}`}
          >
        </${ENCHANTED_TOGGLE_BUTTON_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_TOGGLE_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let enchantedBadgeElement = await component.$(`>>>${ENCHANTED_BADGE_TAG_NAME}[data-testid="enchanted-badge"]`).getElement();
    await expect(await enchantedBadgeElement.getHTML()).toContain(ENCHANTED_BADGE_TAG_NAME);
  });
});
