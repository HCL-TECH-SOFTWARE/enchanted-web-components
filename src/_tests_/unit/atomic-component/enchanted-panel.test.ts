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
import { expect, $ } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-panel';

// Helper imports
import { initSessionStorage } from '../../utils';
import { ENCHANTED_PANEL_TAG, ENCHANTED_PANEL_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_PANEL_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_PANEL_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_PANEL_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should render component with title and content', async () => {
    let panelContent = html`
      <div data-testid="content-slot-wrapper">
        <h2>Sample content</h2>
        <p>This is a sample text.</p>
      </div>
    `;
    render(
      html`
        <${ENCHANTED_PANEL_TAG}
          class="drawer1"
          position="right"
          title="Sample Content"
          open
        >
          <div slot="content">
            ${panelContent}
          </div>
        </${ENCHANTED_PANEL_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_PANEL_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('Sample Content');
    const contentWrapper = await $('[data-testid="content-slot-wrapper"]');
    await expect(contentWrapper).toBeDisplayed();
  });

  it('should hide the panel when close button is clicked', async () => {
    render(
      html`
        <${ENCHANTED_PANEL_TAG}
          class="drawer1"
          position="right"
          title="Sample Content"
          open
        >
        </${ENCHANTED_PANEL_TAG}>
      `,
      document.body
    );

    let component = await $(ENCHANTED_PANEL_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let panelContainer = await component.shadow$('[part="panel-container"]').getElement();

    // Click on the close button
    let closeButton = await component.shadow$('[part="panel-close-button"]').getElement();
    await closeButton.isExisting();
    await closeButton.click();

    const ariaHiddenValue = await panelContainer.getAttribute('aria-hidden');
    expect(ariaHiddenValue).toBe('true');
  });

  it('should hide panel if open attribute is not present', async () => {
    render(
      html`
        <${ENCHANTED_PANEL_TAG} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_PANEL_TAG_NAME).getElement();
    let panelContainer = await component.shadow$('[part="panel-container"]').getElement();
    const ariaHiddenValue = await panelContainer.getAttribute('aria-hidden');
    expect(ariaHiddenValue).toBe('true');
  });

  it('should focus on the panel when opened', async () => {
    render(
      html`
        <${ENCHANTED_PANEL_TAG} open ?focusPanel=${true} />
      `,
      document.body
    );
    let component = await $(ENCHANTED_PANEL_TAG_NAME).getElement();
    let panelContainer = await component.shadow$('[part="panel-container"]').getElement();
    const ariaHiddenValue = await panelContainer.getAttribute('tabindex');
    expect(ariaHiddenValue).toBe('0');
  });
});
