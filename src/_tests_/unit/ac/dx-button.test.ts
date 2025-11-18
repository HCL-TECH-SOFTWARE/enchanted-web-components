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
import '../../../components/ac/dx-button';

// Helper imports
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconSearch } from '../../assets/svg-search';
import { DxButton } from '../../../components/ac/dx-button';

describe('DxButton component testing', () => {
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

  it('DxButton - should render without crashing', async () => {
    let component = document.createElement('dx-button');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxButton - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-button');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxButton - validate default value of attributes', async () => {
    let component = document.createElement('dx-button');
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('focused', false);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('endicon', false);
    await expect(component).not.toHaveAttribute('imgUrl');
    await expect(component).not.toHaveAttribute('buttontext');
    component.remove();
  });

  it('DxButton - should validate null for non-existent attributes', async () => {
    let component = document.createElement('dx-button');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('DxButton - should render component and validate attributes for outlined, disabled, and with start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <dx-button
          disabled="true"
          imgurl="sample-url"
          buttontext="sample-buttontext"
        >
        </dx-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('dx-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    let buttonElement = await component.$('>>>button[data-testid="dx-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="dx-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('DxButton - should render component and validate attributes for NOT outlined, NOT disabled, and without start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <dx-button
          buttontext="sample-buttontext"
          @click=${() => { wasClicked = true; }}
        >
        </dx-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('dx-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="dx-button"]').getElement();
    await expect(buttonElement).not.toHaveElementProperty('disabled');
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="dx-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    await buttonElement.click();
    await expect(wasClicked).toBe(true);
  });

  it('DxButton - should render component and validate attributes for NOT outlined, but disabled, and without button text', async () => {
    let wasClicked = false;
    render(
      html`
        <dx-button
          disabled
          imgurl="sample-url"
          @click=${() => { wasClicked = true; }}
        >
        </dx-button>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $('dx-button').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="dx-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).not.toHaveText(/.+/g);
    let imgElement = await buttonElement.$('>>>img[data-testid="dx-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('DxButton - should render icon and validate attributes for lit template icon', async () => {
    render(
      html`
        <dx-button
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="dx-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </dx-button>
      `,
      document.body
    );
    let component = await $('dx-button').getElement();
    let buttonElement = await component.$('>>>button[data-testid="dx-button"]').getElement();
    let svgElement = await buttonElement.$('>>>span[data-testid="dx-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('DxButton - should override imgurl and display lit template icon', async () => {
    render(
      html`
        <dx-button
          imgurl="sample-url"
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="dx-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </dx-button>
      `,
      document.body
    );
    let component = await $('dx-button').getElement();
    let buttonElement = await component.$('>>>button[data-testid="dx-button"]').getElement();
    let imgElement = await buttonElement.$('>>>img[data-testid="dx-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    let svgElement = await buttonElement.$('>>>span[data-testid="dx-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('DxButton - should focus the button when _focusButton is called', async () => {
    render(
      html`
        <dx-button
          buttontext="sample-buttontext"
          data-testid="dx-button"
        >
        </dx-button>
      `,
      document.body
    );
    let dxButton = await document.querySelector('dx-button') as DxButton;
    // Call the _focusButton method
    dxButton._focusButton();

    // Wait for the focus to be applied
    await browser.pause(100); // Small delay to ensure focus is set

    // Verify that the button is focused
    const activeElement = document.querySelector('dx-button')?.shadowRoot?.activeElement?.getAttribute('data-testid');
    await expect(activeElement).toBe(dxButton.getAttribute('data-testid'));
  });
});