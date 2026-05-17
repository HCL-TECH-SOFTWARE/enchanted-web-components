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
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-snackbar';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, SNACKBAR_TYPE } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { COMPONENT_PREFIX, ENCHANTED_BUTTON_TAG, ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_SNACKBAR_TAG, ENCHANTED_SNACKBAR_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_SNACKBAR_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_SNACKBAR_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('removes component from document body and validates removal', async () => {
    let component = document.createElement(ENCHANTED_SNACKBAR_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should render component with icon and message', async () => {
    let snackbarMessage = "Sample snackbar message";
    render(
      html`
        <${ENCHANTED_SNACKBAR_TAG}
          message=${snackbarMessage}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        ></${ENCHANTED_SNACKBAR_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_SNACKBAR_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let messageElement = await component.$('>>>span[data-testid="enchanted-snackbar-message"]').getElement();
    await expect(messageElement).toBeExisting();
    let svgInfoIcon = await component.shadow$(`${COMPONENT_PREFIX}icon-information`).getElement();
    await expect(svgInfoIcon).toBeExisting();
  });

  it('should render with buttons in the slot', async () => {
    let snackbarMessage = "Sample snackbar message";
    render(
      html`
        <${ENCHANTED_SNACKBAR_TAG}
          message=${snackbarMessage}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
          <div slot="snackbar-buttons">
            <${ENCHANTED_BUTTON_TAG}
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="false"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </${ENCHANTED_BUTTON_TAG}>
          </div>
        </${ENCHANTED_SNACKBAR_TAG}>
      `,
      document.body
    );

    let buttonElement = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    await expect(buttonElement).toBeExisting();
  });

  it('should render with complex HTML message', async () => {
    const message = 'This is a <strong>bold</strong> message.<br>With a line break.';
    const expectedHTML = unsafeHTML(message);
    render(
      html`
        <${ENCHANTED_SNACKBAR_TAG}
          message=${message}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </${ENCHANTED_SNACKBAR_TAG}>
      `,
      document.body
    );

    const snackbar = await $(ENCHANTED_SNACKBAR_TAG_NAME);
    const messageSpan = await snackbar.shadow$('[data-testid="enchanted-snackbar-message"]');
    expect(messageSpan.getHTML()).toHaveText(expectedHTML);
  });

  it('should handle special characters correctly', async () => {
    const message = 'Special characters: & < > " \' /';
    const expectedText = 'Special characters: & < > " \' /';
    render(
      html`
        <${ENCHANTED_SNACKBAR_TAG}
          message=${message}
          open={true}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </${ENCHANTED_SNACKBAR_TAG}>
      `,
      document.body
    );

    const snackbar = await $(ENCHANTED_SNACKBAR_TAG_NAME);
    const messageSpan = await snackbar.shadow$('[data-testid="enchanted-snackbar-message"]');
    expect(await messageSpan.getText()).toEqual(expectedText);
  });

  it('should not be visible if open is false', async () => {
    render(
      html`
        <${ENCHANTED_SNACKBAR_TAG}
          message=""
          open={false}
          type=${SNACKBAR_TYPE.SNACKBAR_INFO}
        >
        </${ENCHANTED_SNACKBAR_TAG}>
      `,
      document.body
    );

    const snackbar = await $(ENCHANTED_SNACKBAR_TAG_NAME);
    expect(snackbar).not.toBeDisplayed();
  });
});
 