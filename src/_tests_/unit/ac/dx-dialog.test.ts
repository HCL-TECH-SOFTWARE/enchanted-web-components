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
  
  it('DxDialog - should automatically focus on itself when opened', async () => {
    render(
      html`
        <dx-dialog open .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );

    await browser.pause(10); // Check immediately after open

    let component = await document.querySelector('dx-dialog');
    const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;
    await expect(component).toBeDisplayed();

    // Dialog should be focused initially
    const hasFocus = dialogElement === component?.shadowRoot?.activeElement;
    await expect(hasFocus).toBeTruthy();
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

    it('DxDialog - should temporarily focus dialog element on open', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      await browser.pause(10); // Check immediately after open

      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;

      // Dialog should be focused initially
      const hasFocus = dialogElement === component?.shadowRoot?.activeElement;

      expect(hasFocus).toBeTruthy();
    });

    it('DxDialog - should move focus to first focusable element after delay', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Test Dialog" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      await browser.pause(150); // Wait for focus sequence to complete (100ms + 20ms)

      const component = document.querySelector('dx-dialog');
      const activeElement = component?.shadowRoot?.activeElement as HTMLElement;

      // The first focusable element in the dialog (close button) should be focused
      expect(activeElement).not.toBeNull();
    });

    it('DxDialog - should remove aria-label after initial announcement', async () => {
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

      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be removed to prevent re-announcement
      expect(dialogElement).not.toHaveAttribute('aria-label');
    });

    it('DxDialog - should remove aria-hidden from content wrapper after announcement', async () => {
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

      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      const contentWrapper = dialogElement?.querySelector('div[role="presentation"]');

      // aria-hidden should be removed so content is accessible
      expect(contentWrapper).not.toHaveAttribute('aria-hidden');
    });

    it('DxDialog - refocusDialog() should re-announce dialog', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('dx-dialog') as any;
      await browser.pause(150); // Wait for initial focus sequence

      // Call refocusDialog
      await component.refocusDialog();

      await browser.pause(10); // Check immediately after refocus

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`) as HTMLElement;

      // Dialog should be focused again
      const hasFocus = dialogElement === component?.shadowRoot?.activeElement;

      expect(hasFocus).toBeTruthy();
    });

    it('DxDialog - refocusDialog() should restore aria-label temporarily', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('dx-dialog') as any;
      await browser.pause(150); // Wait for initial cleanup

      // Call refocusDialog and check immediately
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be temporarily restored (check before cleanup at 100ms)
      expect(dialogElement).toHaveAttribute('aria-label', 'Select an item');
    });

    it('DxDialog - refocusDialog() should clean up attributes after announcement', async () => {
      render(
        html`
          <dx-dialog dialogTitle="Select an item" open .localization=${dxLocalization}>
            <div slot="content">
              <input type="text" />
            </div>
          </dx-dialog>
        `,
        document.body
      );

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('dx-dialog') as any;
      await browser.pause(150); // Wait for initial sequence

      // Call refocusDialog
      await component.refocusDialog();
      await browser.pause(150); // Wait for cleanup (100ms + 20ms)

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // aria-label should be removed again after refocus
      expect(dialogElement).not.toHaveAttribute('aria-label');
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

      // eslint-why refocusDialog is a public method not in the type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = document.querySelector('dx-dialog') as any;

      // Attempt to refocus a closed dialog
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should not exist (not rendered when closed)
      expect(dialogElement).toBeFalsy();
    });

    it('DxDialog - should handle shadow DOM input focus correctly', async () => {
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

      await browser.pause(150); // Wait for focus sequence to complete

      const component = await document.querySelector('dx-dialog');
      // eslint-why accessing shadowRoot which is not in type definition
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const inputField = component?.shadowRoot?.querySelector('dx-input-textfield') as any;
      const shadowInput = inputField?.shadowRoot?.querySelector('input') as HTMLElement;

      // Shadow DOM input should be focused
      expect(shadowInput).toBe(inputField?.shadowRoot?.activeElement);
    });

    it('DxDialog - should remove role="dialog" after announcement to prevent VoiceOver context', async () => {
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

      await browser.pause(150); // Wait for full sequence and cleanup

      const component = document.querySelector('dx-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // role="dialog" should be removed to prevent VoiceOver from announcing dialog context
      expect(dialogElement).not.toHaveAttribute('role');
      expect(dialogElement).not.toHaveAttribute('aria-label');
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
      
      // Tab to focus the close button
      await browser.keys(['Tab']);
      await browser.pause(100);
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
      
      // Tab to focus the close button
      await browser.keys(['Tab']);
      await browser.pause(100);
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
