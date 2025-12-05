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
import '../../../components/ac/dx-dialog';
import '../../../components/ac/dx-input-textfield';
import '../../../components/ac/dx-circular-progress';
import '../../../components/ac/dx-header';
import { DxDialog } from '../../../components/ac/dx-dialog';

// Helper imports
import { initSessionStorage } from '../../utils';
import { DialogSizes } from '../../../types/dx-dialog';
import { DIALOG_PARTS } from '../../../types/cssClassEnums';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('generic.label', 'Label');

describe('DxDialog component testing', () => {
  before(async () => {
    await initSessionStorage();
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  afterEach(async () => {
    // Wait for any pending setTimeout callbacks to complete (100ms cleanup + 20ms focus delay)
    await browser.pause(150);

    while (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('DxDialog - should render without crashing', async () => {
    let component = document.createElement('dx-dialog');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxDialog - removes component from document body and validates removal', async () => {
    let component = document.createElement('DxDialog');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxDialog - should NOT render default dialog children when open attribute is not present', async () => {
    render(
      html`
        <dx-dialog .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    expect(component).not.toHaveText(dxLocalization.get('generic.label'));
    let svgIcon = await component.$('>>>dx-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
  });

  it('DxDialog - should render default dialog children when open attribute is present', async () => {
    render(
      html`
        <dx-dialog open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText(dxLocalization.get('generic.label'));
    let svgIcon = await component.$('>>>dx-svg-icon').getElement();
    await browser.pause(100);
    expect(svgIcon).toBeDisplayed();
  });

  it('DxDialog - should render dialog with title and content attribute property', async () => {
    render(
      html`
        <dx-dialog title="Test Title" open .localization=${dxLocalization}>
          <dx-circular-progress slot="content"></dx-circular-progress>
        </dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('Test Title');
    let svgIcon = await component.$('>>>dx-svg-icon').getElement();
    expect(svgIcon).toBeDisplayed();
    let circularProgress = await component.$('>>>dx-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
  });

  it('DxDialog - should render dialog with overrideTitle property', async () => {
    render(
      html`
        <dx-dialog open overrideTitle .localization=${dxLocalization}>
          <dx-header variant="header-authoring-modal" />
          <dx-circular-progress slot="content"></dx-circular-progress>
        </dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    let svgIcon = await component.$('>>>dx-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
    let circularProgress = await component.$('>>>dx-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
    let headerAuthoring = await component.$('>>>dx-header').getElement();
    expect(headerAuthoring).toBeDisplayed();
  });

  it('DxDialog - should close the dialog when handleClose() is triggered', async () => {
    render(
      html`
        <dx-dialog open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    // Click on the close button
    let closeButton = await component.$('>>>[part="icon-close"]').getElement();
    await closeButton.click();

    await browser.pause(400);
    await expect(component).not.toHaveAttribute('open');
  });
  
  it('DxDialog - should focus the first focusable element in slotted content when opened', async () => {
    render(
      html`
        <dx-dialog open .localization=${dxLocalization}>
          <div slot="content">
            <input type="text" id="test-input" />
          </div>
        </dx-dialog>
      `,
      document.body
    );
    await browser.pause(150);
    let component = await document.querySelector('dx-dialog');
    const testInput = document.querySelector('input[id="test-input"]');
    await expect(component).toBeDisplayed();

    // Input in slotted content should receive focus
    await expect(testInput).toBe(document.activeElement);
  });

  it('DxDialog - support size md', async () => {
    render(
      html`
        <dx-dialog size="${DialogSizes.MD}" open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.MD);
  });

  it('DxDialog - support size lg', async () => {
    render(
      html`
        <dx-dialog size="${DialogSizes.LG}" open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.LG);
  });

  it('DxDialog - support size sm', async () => {
    render(
      html`
        <dx-dialog size="${DialogSizes.SM}" open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.SM);
  });

  it('DxDialog - support size xl', async () => {
    render(
      html`
        <dx-dialog size="${DialogSizes.XL}" open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.XL);
  });

  it('DxDialog - should render dialog in chat mode', async () => {
    render(
      html`
        <dx-dialog size="chat" open .localization=${dxLocalization}>
        </dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    await expect(component).toBeDisplayed();
    let dialogRootChat = await component.$(`>>>[part="${DIALOG_PARTS.DIALOG_ROOT_CHAT}"]`).getElement();
    expect(dialogRootChat).toBeDisplayed();
  });

  describe('Accessibility - Dialog Focus and Announcement Flow', () => {
    it('DxDialog - should have aria-modal when opened', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" placeholder="Search" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      const component = document.querySelector('dx-dialog');
      await browser.pause(10); // Check immediately after open

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should have aria-modal initially
      expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('DxDialog - should prioritize slotted content over shadow DOM elements', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="slotted-input" />
            </div>
          </dx-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const slottedInput = document.querySelector('input[id="slotted-input"]') as HTMLElement;
      // Slotted input should be focused (found first, before shadow DOM close button)
      await expect(slottedInput).toBe(document.activeElement);
    });

    it('DxDialog - should have aria-label for accessibility', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      await expect(dialogElement).toHaveAttribute('aria-label', 'Test Dialog');
    });

    it('DxDialog - refocusDialog() should focus first focusable element again', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="refocus-input" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      await browser.pause(150);
      const component = document.querySelector('dx-dialog') as DxDialog;
      const inputElement = component?.querySelector('input[id="refocus-input"]') as HTMLElement;

      // Blur the input
      inputElement?.blur();
      expect(document.activeElement).not.toBe(inputElement);

      // Call refocusDialog to re-focus
      await component.refocusDialog();

      // Input should be focused again
      expect(document.activeElement).toBe(inputElement);
    });

    it('DxDialog - refocusDialog() should not run if dialog is closed', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      const component = document.querySelector('dx-dialog') as DxDialog;

      // Attempt to refocus a closed dialog
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should not exist (not rendered when closed)
      expect(dialogElement).toBeFalsy();
    });

    it('DxDialog - should recursively focus into nested web component shadow DOM', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <dx-input-textfield></dx-input-textfield>
            </div>
          </dx-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = await document.querySelector('dx-dialog') as DxDialog;
      const inputField = component?.querySelector('dx-input-textfield') as HTMLElement | null;
      const shadowInput = inputField?.shadowRoot?.querySelector('input') as HTMLElement;

      // Shadow DOM input should receive focus (recursive search through nested components)
      expect(shadowInput).toBe(inputField?.shadowRoot?.activeElement);
    });

    it('DxDialog - should have role="dialog" and aria-modal for accessibility', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      await expect(dialogElement).toHaveAttribute('role', 'dialog');
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('DxDialog - should have proper ARIA attributes for accessibility', async () => {
      render(
        html`
          <dx-dialog open dialogTitle="Accessible Dialog" .localization=${dxLocalization}></dx-dialog>
        `,
        document.body
      );
      let component = await $('dx-dialog').getElement();
      let dialogElement = await component.$(`>>>[part*="${DIALOG_PARTS.PAPER_XL}"]`).getElement();
      let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`).getElement();
      let closeButton = await component.$('>>>[part="icon-close"]').getElement();
      let presentationElements = await component.$$('>>>[role="presentation"]');
      
      // Verify dialog element has proper ARIA attributes (initially)
      await expect(dialogElement).toBeDisplayed();
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
      
      // Verify backdrop is hidden from screenreaders
      await expect(backdrop).toHaveAttribute('aria-hidden', 'true');
      
      // Verify close button is keyboard accessible
      await expect(closeButton).toHaveAttribute('tabindex', '0');
      
      // Verify presentation elements exist
      await expect(presentationElements.length).toBeGreaterThan(0);
    });

    it('DxDialog - should close when Enter key is pressed on close button', async () => {
      render(
        html`
          <dx-dialog open .localization=${dxLocalization}></dx-dialog>
        `,
        document.body
      );
      let component = await $('dx-dialog').getElement();
      await browser.keys(['Enter']);
      await browser.pause(400);
      await expect(component).not.toHaveAttribute('open');
    });

    it('DxDialog - should close when Space key is pressed on close button', async () => {
      render(
        html`
          <dx-dialog open .localization=${dxLocalization}></dx-dialog>
        `,
        document.body
      );
      let component = await $('dx-dialog').getElement();
      
      await browser.keys([' ']);
      await browser.pause(400);
      
      await expect(component).not.toHaveAttribute('open');
    });

    it('DxDialog - should not have backdrop in chat mode for better accessibility', async () => {
      render(
        html`
          <dx-dialog size="chat" open .localization=${dxLocalization}></dx-dialog>
        `,
        document.body
      );
      let component = await $('dx-dialog').getElement();
      let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`);
      
      await expect(backdrop).not.toBeExisting();
    });

    it('DxDialog - dialog title should be accessible to screenreaders', async () => {
      const customTitle = 'Important Announcement';
      render(
        html`
          <dx-dialog open dialogTitle="${customTitle}" .localization=${dxLocalization}></dx-dialog>
        `,
        document.body
      );
      let component = await $('dx-dialog').getElement();
      
      await expect(component).toHaveText(customTitle);
    });
  });
});
