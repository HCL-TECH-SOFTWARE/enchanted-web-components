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
import { $, browser, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-button';

// Helper imports
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconSearch } from '../../assets/svg-search';
import { EnchantedButton } from '../../../components/atomic-component/enchanted-button';

describe('EnchantedButton component testing', () => {
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

  it('EnchantedButton - should render without crashing', async () => {
    let component = document.createElement('enchanted-button');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedButton - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-button');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedButton - validate default value of attributes', async () => {
    let component = document.createElement('enchanted-button');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('focused', false);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('endicon', false);
    await expect(component).not.toHaveAttribute('imgUrl');
    await expect(component).not.toHaveAttribute('buttontext');
    component.remove();
  });

  it('EnchantedButton - should validate null for non-existent attributes', async () => {
    let component = document.createElement('enchanted-button');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('EnchantedButton - should render component and validate attributes for outlined, disabled, and with start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <enchanted-button
          disabled="true"
          imgurl="sample-url"
          buttontext="sample-buttontext"
        >
        </enchanted-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('enchanted-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('EnchantedButton - should render component and validate attributes for NOT outlined, NOT disabled, and without start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <enchanted-button
          buttontext="sample-buttontext"
          @click=${() => { wasClicked = true; }}
        >
        </enchanted-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('enchanted-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).not.toHaveElementProperty('disabled');
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    await buttonElement.click();
    await expect(wasClicked).toBe(true);
  });

  it('EnchantedButton - should render component and validate attributes for NOT outlined, but disabled, and without button text', async () => {
    let wasClicked = false;
    render(
      html`
        <enchanted-button
          disabled
          imgurl="sample-url"
          @click=${() => { wasClicked = true; }}
        >
        </enchanted-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('enchanted-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).not.toHaveText(/.+/g);
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('EnchantedButton - should render icon and validate attributes for lit template icon', async () => {
    render(
      html`
        <enchanted-button
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="enchanted-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </enchanted-button>
      `,
      document.body
    );
    let component = await $('enchanted-button').getElement();
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    let svgElement = await buttonElement.$('>>>span[data-testid="enchanted-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('EnchantedButton - should override imgurl and display lit template icon', async () => {
    render(
      html`
        <enchanted-button
          imgurl="sample-url"
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="enchanted-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </enchanted-button>
      `,
      document.body
    );
    let component = await $('enchanted-button').getElement();
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    let svgElement = await buttonElement.$('>>>span[data-testid="enchanted-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('EnchantedButton - should focus the button when _focusButton is called', async () => {
    render(
      html`
        <enchanted-button
          buttontext="sample-buttontext"
          data-testid="enchanted-button"
        >
        </enchanted-button>
      `,
      document.body
    );
    let enchantedButton = await document.querySelector('enchanted-button') as EnchantedButton;
    // Call the _focusButton method
    enchantedButton._focusButton();

    // Wait for the focus to be applied
    await browser.pause(100); // Small delay to ensure focus is set

    // Verify that the button is focused
    const activeElement = document.querySelector('enchanted-button')?.shadowRoot?.activeElement?.getAttribute('data-testid');
    await expect(activeElement).toBe(enchantedButton.getAttribute('data-testid'));
  });
});