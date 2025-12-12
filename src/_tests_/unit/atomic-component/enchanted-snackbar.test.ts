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
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-snackbar';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, SNACKBAR_TYPE } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';

describe('EnchantedSnackbar component testing', () => {
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

  it('EnchantedSnackbar - should render without crashing', async () => {
    let component = document.createElement('enchanted-snackbar');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedSnackbar - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-snackbar');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedSnackbar - should render component with icon and message', async () => {
    let snackbarMessage = "Sample snackbar message";
    render(
      html`
        <enchanted-snackbar
          message=${snackbarMessage}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        ></enchanted-snackbar>
      `,
      document.body
    );
    let component = await $('enchanted-snackbar').getElement();
    await expect(component).toBeDisplayed();
    let messageElement = await component.$('>>>span[data-testid="enchanted-snackbar-message"]').getElement();
    await expect(messageElement).toBeExisting();
    let svgInfoIcon = await component.shadow$('icon-information').getElement();
    await expect(svgInfoIcon).toBeExisting();
  });

  it('EnchantedSnackbar - should render with buttons in the slot', async () => {
    let snackbarMessage = "Sample snackbar message";
    render(
      html`
        <enchanted-snackbar
          message=${snackbarMessage}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
          <div slot="snackbar-buttons">
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="false"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
        </enchanted-snackbar>
      `,
      document.body
    );

    let buttonElement = await $('enchanted-button').getElement();
    await expect(buttonElement).toBeExisting();
  });

  it('EnchantedSnackbar - should render with complex HTML message', async () => {
    const message = 'This is a <strong>bold</strong> message.<br>With a line break.';
    const expectedHTML = unsafeHTML(message);
    render(
      html`
        <enchanted-snackbar
          message=${message}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </enchanted-snackbar>
      `,
      document.body
    );

    const snackbar = await $('enchanted-snackbar');
    const messageSpan = await snackbar.shadow$('[data-testid="enchanted-snackbar-message"]');
    expect(messageSpan.getHTML()).toHaveText(expectedHTML);
  });

  it('EnchantedSnackbar - should handle special characters correctly', async () => {
    const message = 'Special characters: & < > " \' /';
    const expectedText = 'Special characters: & < > " \' /';
    render(
      html`
        <enchanted-snackbar
          message=${message}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </enchanted-snackbar>
      `,
      document.body
    );

    const snackbar = await $('enchanted-snackbar');
    const messageSpan = await snackbar.shadow$('[data-testid="enchanted-snackbar-message"]');
    expect(await messageSpan.getText()).toEqual(expectedText);
  });

  it('EnchantedSnackbar - should not be visible is open is false', async () => {
    render(
      html`
        <enchanted-snackbar
          message=""
          open={false}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </enchanted-snackbar>
      `,
      document.body
    );

    const snackbar = await $('enchanted-snackbar');
    expect(snackbar).not.toBeDisplayed();
  });
});
 