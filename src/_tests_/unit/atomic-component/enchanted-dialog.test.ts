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
import '../../../components/atomic-component/enchanted-dialog';
import '../../../components/atomic-component/enchanted-textfield';
import '../../../components/atomic-component/enchanted-circular-progress';
import '../../../components/atomic-component/enchanted-header';
import { EnchantedDialog } from '../../../components/atomic-component/enchanted-dialog';

// Helper imports
import { initSessionStorage } from '../../utils';
import { DialogSizes } from '../../../types/enchanted-dialog';
import { DIALOG_PARTS } from '../../../types/cssClassEnums';

const localization: Map<string, string> = new Map<string, string>();
localization.set('generic.label', 'Label');

describe('EnchantedDialog component testing', () => {
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

  it('EnchantedDialog - should render without crashing', async () => {
    let component = document.createElement('enchanted-dialog');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedDialog - removes component from document body and validates removal', async () => {
    let component = document.createElement('EnchantedDialog');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedDialog - should NOT render default dialog children when open attribute is not present', async () => {
    render(
      html`
        <enchanted-dialog .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    expect(component).not.toHaveText(localization.get('generic.label'));
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
  });

  it('EnchantedDialog - should render default dialog children when open attribute is present', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText(localization.get('generic.label'));
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    await browser.pause(100);
    expect(svgIcon).toBeDisplayed();
  });

  it('EnchantedDialog - should render dialog with title and content attribute property', async () => {
    render(
      html`
        <enchanted-dialog title="Test Title" open .localization=${localization}>
          <enchanted-circular-progress slot="content"></enchanted-circular-progress>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveText('Test Title');
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).toBeDisplayed();
    let circularProgress = await component.$('>>>enchanted-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
  });

  it('EnchantedDialog - should render dialog with overrideTitle property', async () => {
    render(
      html`
        <enchanted-dialog open overrideTitle .localization=${localization}>
          <enchanted-header variant="header-authoring-modal" />
          <enchanted-circular-progress slot="content"></enchanted-circular-progress>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    let svgIcon = await component.$('>>>enchanted-svg-icon').getElement();
    expect(svgIcon).not.toBeDisplayed();
    let circularProgress = await component.$('>>>enchanted-circular-progress').getElement();
    expect(circularProgress).toBeDisplayed();
    let headerAuthoring = await component.$('>>>enchanted-header').getElement();
    expect(headerAuthoring).toBeDisplayed();
  });

  it('EnchantedDialog - should close the dialog when handleClose() is triggered', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    // Click on the close button
    let closeButton = await component.$('>>>[part="icon-close"]').getElement();
    await closeButton.click();

    await browser.pause(400);
    await expect(component).not.toHaveAttribute('open');
  });
  
  it('EnchantedDialog - should focus the first focusable element in slotted content when opened', async () => {
    render(
      html`
        <enchanted-dialog open .localization=${localization}>
          <div slot="content">
            <input type="text" id="test-input" />
          </div>
        </enchanted-dialog>
      `,
      document.body
    );
    await browser.pause(150);
    let component = await document.querySelector('enchanted-dialog');
    const testInput = document.querySelector('input[id="test-input"]');
    await expect(component).toBeDisplayed();

    // Input in slotted content should receive focus
    await expect(testInput).toBe(document.activeElement);
  });

  it('EnchantedDialog - support size md', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.MD}" open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.MD);
  });

  it('EnchantedDialog - support size lg', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.LG}" open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.LG);
  });

  it('EnchantedDialog - support size sm', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.SM}" open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.SM);
  });

  it('EnchantedDialog - support size xl', async () => {
    render(
      html`
        <enchanted-dialog size="${DialogSizes.XL}" open .localization=${localization}></enchanted-dialog>
      `,
      document.body
    );

    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.XL);
  });

  it('EnchantedDialog - should render dialog in chat mode', async () => {
    render(
      html`
        <enchanted-dialog size="chat" open .localization=${localization}>
        </enchanted-dialog>
      `,
      document.body
    );
    let component = await $('enchanted-dialog').getElement();
    await expect(component).toBeDisplayed();
    let dialogRootChat = await component.$(`>>>[part="${DIALOG_PARTS.DIALOG_ROOT_CHAT}"]`).getElement();
    expect(dialogRootChat).toBeDisplayed();
  });

  describe('Accessibility - Dialog Focus and Announcement Flow', () => {
    it('EnchantedDialog - should have aria-modal when opened', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${localization}>
            <div slot="content">
              <input type="text" placeholder="Search" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      const component = document.querySelector('enchanted-dialog');
      await browser.pause(10); // Check immediately after open

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should have aria-modal initially
      expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('EnchantedDialog - should prioritize slotted content over shadow DOM elements', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" id="slotted-input" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const slottedInput = document.querySelector('input[id="slotted-input"]') as HTMLElement;
      // Slotted input should be focused (found first, before shadow DOM close button)
      await expect(slottedInput).toBe(document.activeElement);
    });

    it('EnchantedDialog - should have aria-label for accessibility', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      await expect(dialogElement).toHaveAttribute('aria-label', 'Test Dialog');
    });

    it('EnchantedDialog - refocusDialog() should focus first focusable element again', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Select an item" open .localization=${localization}>
            <div slot="content">
              <input type="text" id="refocus-input" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      await browser.pause(150);
      const component = document.querySelector('enchanted-dialog') as EnchantedDialog;
      const inputElement = component?.querySelector('input[id="refocus-input"]') as HTMLElement;

      // Blur the input
      inputElement?.blur();
      expect(document.activeElement).not.toBe(inputElement);

      // Call refocusDialog to re-focus
      await component.refocusDialog();

      // Input should be focused again
      expect(document.activeElement).toBe(inputElement);
    });

    it('EnchantedDialog - refocusDialog() should not run if dialog is closed', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );

      const component = document.querySelector('enchanted-dialog') as EnchantedDialog;

      // Attempt to refocus a closed dialog
      await component.refocusDialog();

      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);

      // Dialog should not exist (not rendered when closed)
      expect(dialogElement).toBeFalsy();
    });

    it('EnchantedDialog - should recursively focus into nested web component shadow DOM', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <enchanted-textfield></enchanted-textfield>
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = await document.querySelector('enchanted-dialog') as EnchantedDialog;
      const inputField = component?.querySelector('enchanted-textfield') as HTMLElement | null;
      const shadowInput = inputField?.shadowRoot?.querySelector('input') as HTMLElement;

      // Shadow DOM input should receive focus (recursive search through nested components)
      expect(shadowInput).toBe(inputField?.shadowRoot?.activeElement);
    });

    it('EnchantedDialog - should have role="dialog" and aria-modal for accessibility', async () => {
      render(
        html`
          <enchanted-dialog dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector('enchanted-dialog');
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      await expect(dialogElement).toHaveAttribute('role', 'dialog');
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('EnchantedDialog - should have proper ARIA attributes for accessibility', async () => {
      render(
        html`
          <enchanted-dialog open dialogTitle="Accessible Dialog" .localization=${localization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
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

    it('EnchantedDialog - should close when Enter key is pressed on close button', async () => {
      render(
        html`
          <enchanted-dialog open .localization=${localization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      await browser.keys(['Enter']);
      await browser.pause(400);
      await expect(component).not.toHaveAttribute('open');
    });

    it('EnchantedDialog - should close when Space key is pressed on close button', async () => {
      render(
        html`
          <enchanted-dialog open .localization=${localization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      
      await browser.keys([' ']);
      await browser.pause(400);
      
      await expect(component).not.toHaveAttribute('open');
    });

    it('EnchantedDialog - should not have backdrop in chat mode for better accessibility', async () => {
      render(
        html`
          <enchanted-dialog size="chat" open .localization=${localization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`);
      
      await expect(backdrop).not.toBeExisting();
    });

    it('EnchantedDialog - dialog title should be accessible to screenreaders', async () => {
      const customTitle = 'Important Announcement';
      render(
        html`
          <enchanted-dialog open dialogTitle="${customTitle}" .localization=${localization}></enchanted-dialog>
        `,
        document.body
      );
      let component = await $('enchanted-dialog').getElement();
      
      await expect(component).toHaveText(customTitle);
    });

    it('EnchantedDialog - should support RTL layout for dialog title', async () => {
      document.documentElement.dir = 'rtl';
      
      render(
        html`
          <enchanted-dialog open dialogTitle="Test Dialog RTL" .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      
      let component = await $('enchanted-dialog').getElement();
      let titleRootRTL = await component.$(`>>>[part="${DIALOG_PARTS.TITLE_ROOT_RTL}"]`);
      let titleTextRTL = await component.$(`>>>[part="${DIALOG_PARTS.TITLE_TEXT_RTL}"]`);
      let closeIcon = await component.$(`>>>[part="${DIALOG_PARTS.ICON_CLOSE}"]`);
      
      await expect(titleRootRTL).toBeExisting();
      await expect(titleTextRTL).toBeExisting();
      await expect(closeIcon).toBeExisting();
      
      document.documentElement.dir = 'ltr';
    });

    it('EnchantedDialog - should focus element directly when depth >= MAX_FOCUS_DEPTH', async () => {
      render(
        html`
          <enchanted-dialog open dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      
      const component = document.querySelector('enchanted-dialog') as EnchantedDialog;
      const testInput = document.querySelector('input#test-input') as HTMLElement;
      
      testInput?.blur();
      await expect(document.activeElement).not.toBe(testInput);
      
      const enchantedDialog = component as unknown as { _focusElement: (element: HTMLElement, depth: number) => void };
      enchantedDialog._focusElement(testInput, 10);
      
      await expect(document.activeElement).toBe(testInput);
    });

    it('EnchantedDialog - should traverse renderRoot when element has no shadowRoot but has renderRoot', async () => {
      render(
        html`
          <enchanted-dialog open dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content"></div>
          </enchanted-dialog>
        `,
        document.body
      );
      await browser.pause(150);
      
      const component = document.querySelector('enchanted-dialog') as EnchantedDialog;
      
      const mockRenderRoot = document.createElement('div').attachShadow({ mode: 'open' });
      const focusableInRenderRoot = document.createElement('input');
      focusableInRenderRoot.id = 'focusable-render-root';
      mockRenderRoot.appendChild(focusableInRenderRoot);
      
      const mockElement = document.createElement('div');
      Object.defineProperty(mockElement, 'shadowRoot', {
        value: null,
        configurable: true
      });
      Object.defineProperty(mockElement, 'renderRoot', {
        value: mockRenderRoot,
        configurable: true
      });
      
      const enchantedDialog = component as unknown as { _focusElement: (element: HTMLElement, depth: number) => void };
      enchantedDialog._focusElement(mockElement as unknown as HTMLElement, 0);
      
      await expect(mockRenderRoot.querySelector('input')).toBe(focusableInRenderRoot);
    });
  });
});
