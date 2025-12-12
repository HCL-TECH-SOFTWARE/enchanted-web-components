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
import { expect, $ } from '@wdio/globals';
import { waitFor } from '@testing-library/dom';

// Component imports
import '../../../components/atomic-component/enchanted-toggle-button';
import { svgIconSearch } from '../../assets/svg-search';

// Helper imports
import { initSessionStorage } from '../../utils';
import { TOGGLE_BUTTON_PARTS } from '../../../types/cssClassEnums';

describe('EnchantedToggleButton component testing', () => {
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

  it('EnchantedToggleButton - should render without crashing', async () => {
    let component = document.createElement('enchanted-toggle-button');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedToggleButton - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-toggle-button');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedToggleButton - should validate null for non-existent attributes', async () => {
    let component = document.createElement('enchanted-toggle-button');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('EnchantedToggleButton - validate default value of attributes', async () => {
    let component = document.createElement('enchanted-toggle-button');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('outlined', false);
    component.remove();
  });

  it('EnchantedToggleButton - should render component and validate attributes for outlined', async () => {
    let wasClicked = false;
    let selectedView = 'iconOne';

    render(
      html`
        <enchanted-toggle-button
          .iconUrls=${[
            'iconOneUrl', 'iconTwoUrl'
          ]}
          .values=${['iconOne', 'iconTwo']}
          selectedValue=${selectedView}
          ?outlined=${true}
          @click=${() => { wasClicked = true; selectedView = 'iconTwo'; }}
        >
        </enchanted-toggle-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('enchanted-toggle-button').getElement();
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

  it('EnchantedToggleButton - should render component and validate attributes for non-outlined', async () => {
    let wasClicked = false;
    let selectedView = 'iconTwo';

    render(
      html`
        <enchanted-toggle-button
          .iconUrls=${[
            'iconOneUrl', 'iconTwoUrl'
          ]}
          .values=${['iconOne', 'iconTwo']}
          selectedValue=${selectedView}
          ?outlined=${false}
          @click=${() => { wasClicked = true; selectedView = 'iconOne'; }}
        >
        </enchanted-toggle-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('enchanted-toggle-button').getElement();
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

  it('EnchantedToggleButton - should render single button element', async () => {
    render(
      html`
        <enchanted-toggle-button
          data-testid="enchanted-filter-button"
          id='enchanted-filter-button'
          ?singleButton=${true}
          singleButtonTitle="test"
          singleButtonAria="test"
          .icon=${html `${svgIconSearch}`}
          >
        </enchanted-toggle-button>
      `,
      document.body
    );
    let component = await $('enchanted-toggle-button').getElement();
    await expect(component).toBeDisplayed();
    let enchantedButtonElement = await component.$$('>>>enchanted-icon-button[data-testid="enchanted-toggle-single-button"]').getElements();
    await expect(enchantedButtonElement.length).toBe(1);
    
    const attributes = await enchantedButtonElement[0].getAttribute('part');
    await expect(attributes).toContain(`${TOGGLE_BUTTON_PARTS.TOGGLE_OFF_SINGLE_BUTTON}`);
  });

  it('EnchantedToggleButton - should render single button element with toggle on state', async () => {
    render(
      html`
        <enchanted-toggle-button
          ?singleButton=${true}
          ?toggleOn=${true}
          .icon=${html `${svgIconSearch}`}
          >
        </enchanted-toggle-button>
      `,
      document.body
    );
    let component = await $('enchanted-toggle-button').getElement();
    await expect(component).toBeDisplayed();
    let enchantedButtonElement = component.$('>>>enchanted-icon-button[data-testid="enchanted-toggle-single-button"]');
    await expect(enchantedButtonElement).toBeDisplayed();

    const attributes = await enchantedButtonElement.getAttribute('part');
    await expect(attributes).toContain(`${TOGGLE_BUTTON_PARTS.TOGGLE_ON_SINGLE_BUTTON}`);
  });

  it('EnchantedToggleButton - should render single button element with badge', async () => {
    render(
      html`
        <enchanted-toggle-button
          ?showBadge=${true}
          ?singleButton=${true}
          ?toggleOn=${true}
          .icon=${html `${svgIconSearch}`}
          >
        </enchanted-toggle-button>
      `,
      document.body
    );
    let component = await $('enchanted-toggle-button').getElement();
    await expect(component).toBeDisplayed();
    let enchantedBadgeElement = await component.$('>>>enchanted-badge[data-testid="enchanted-badge"]').getElement();
    await expect(await enchantedBadgeElement.getHTML()).toContain('enchanted-badge');
  });
});
