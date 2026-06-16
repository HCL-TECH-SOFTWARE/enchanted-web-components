/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                    *
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
import {
  ENCHANTED_CIRCULAR_PROGRESS_TAG, ENCHANTED_CIRCULAR_PROGRESS_TAG_NAME, ENCHANTED_DIALOG_TAG, ENCHANTED_DIALOG_TAG_NAME,
  ENCHANTED_HEADER_TAG, ENCHANTED_HEADER_TAG_NAME, ENCHANTED_SVG_ICON_TAG_NAME, ENCHANTED_TEXTFIELD_TAG, ENCHANTED_TEXTFIELD_TAG_NAME
} from '../../../components/tags';

const localization: Map<string, string> = new Map<string, string>();
localization.set('generic.label', 'Label');

describe(`${ENCHANTED_DIALOG_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(async () => {
    await browser.pause(300);
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_DIALOG_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_DIALOG_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should NOT render default dialog children when open attribute is not present', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await expect(component).not.toHaveText(localization.get('generic.label') as string);
    const svgIcon = component.$(`>>>${ENCHANTED_SVG_ICON_TAG_NAME}`);
    await expect(svgIcon).not.toBeDisplayed();
  });

  it('should render default dialog children when open attribute is present', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveText(localization.get('generic.label') as string);
    const svgIcon = component.$(`>>>${ENCHANTED_SVG_ICON_TAG_NAME}`);
    await expect(svgIcon).not.toBeDisplayed();
  });

  it('should render dialog with title and content attribute property', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} title="Test Title" open .localization=${localization}>
          <${ENCHANTED_CIRCULAR_PROGRESS_TAG} slot="content"></${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveText('Label');
    const svgCloseIcon = component.$('>>>[part="icon-close"]');
    await expect(svgCloseIcon).toBeExisting();
    const circularProgress = component.$(`>>>${ENCHANTED_CIRCULAR_PROGRESS_TAG_NAME}`);
    await circularProgress.waitForExist();
    await expect(circularProgress).toBeExisting();
  });

  it('should render dialog with overrideTitle property', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} open overrideTitle .localization=${localization}>
          <${ENCHANTED_HEADER_TAG} variant="header-authoring-modal" />
          <${ENCHANTED_CIRCULAR_PROGRESS_TAG} slot="content"></${ENCHANTED_CIRCULAR_PROGRESS_TAG}>
        </${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    const svgIcon = component.$(`>>>${ENCHANTED_SVG_ICON_TAG_NAME}`);
    await expect(svgIcon).not.toBeDisplayed();
    const circularProgress = component.$(`>>>${ENCHANTED_CIRCULAR_PROGRESS_TAG_NAME}`);
    await circularProgress.waitForExist();
    await expect(circularProgress).toBeExisting();
    const headerAuthoring = component.$(`>>>${ENCHANTED_HEADER_TAG_NAME}`);
    await headerAuthoring.waitForExist();
    await expect(headerAuthoring).toBeExisting();
  });

  it('should close the dialog when handleClose() is triggered', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    // After closeButton.click() Lit re-renders and removes the open
    // state. A cached .getElement() ref becomes stale at that point.
    // always uses a fresh reference.
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await expect(component).toBeDisplayed();
    const closeButton = component.$('>>>[part="icon-close"]');
    await closeButton.click();
    await browser.pause(400);
    await expect(component).not.toHaveAttribute('open');
  });

  it('should focus the first focusable element in slotted content when opened', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} open .localization=${localization}>
          <div slot="content">
            <input type="text" id="test-input" />
          </div>
        </${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    await browser.pause(150);
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await expect(component).toBeDisplayed();
    const testInput = document.querySelector('input[id="test-input"]');
    expect(document.activeElement).toBe(testInput);
  });

  it('should support size md', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} size="${DialogSizes.MD}" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    // [FIX] Use $() without .getElement()
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.MD);
  });

  it('should support size lg', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} size="${DialogSizes.LG}" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    // [FIX] Use $() without .getElement()
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.LG);
  });

  it('should support size sm', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} size="${DialogSizes.SM}" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    // [FIX] Use $() without .getElement()
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.SM);
  });

  it('should support size xl', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} size="${DialogSizes.XL}" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    // [FIX] Use $() without .getElement()
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveAttribute('size', DialogSizes.XL);
  });

  it('should render dialog in chat mode', async () => {
    render(
      html`
        <${ENCHANTED_DIALOG_TAG} size="chat" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
      `,
      document.body
    );
    const component = $(ENCHANTED_DIALOG_TAG_NAME);
    await component.waitForDisplayed();
    await expect(component).toBeDisplayed();
    const dialogRootChat = component.$(`>>>[part="${DIALOG_PARTS.DIALOG_ROOT_CHAT}"]`);
    await dialogRootChat.waitForDisplayed();
    await expect(dialogRootChat).toBeDisplayed();
  });

  describe('Accessibility - Dialog Focus and Announcement Flow', () => {
    it('should have aria-modal when opened', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Select an item" open .localization=${localization}>
            <div slot="content">
              <input type="text" placeholder="Search" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME);
      await browser.pause(10);
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('should prioritize slotted content over shadow DOM elements', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" id="slotted-input" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const slottedInput = document.querySelector('input[id="slotted-input"]') as HTMLElement;
      expect(document.activeElement).toBe(slottedInput);
    });

    it('should have aria-label for accessibility', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME);
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      await expect(dialogElement).toHaveAttribute('aria-label', 'Test Dialog');
    });

    it('should focus first focusable element again when refocusDialog() is called', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Select an item" open .localization=${localization}>
            <div slot="content">
              <input type="text" id="refocus-input" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      const inputElement = component?.querySelector('input[id="refocus-input"]') as HTMLElement;
      inputElement?.blur();
      expect(document.activeElement).not.toBe(inputElement);
      await component.refocusDialog();
      expect(document.activeElement).toBe(inputElement);
    });

    it('should not run refocusDialog() if dialog is closed', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      await component.refocusDialog();
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      expect(dialogElement).toBeFalsy();
    });

    it('should recursively focus into nested web component shadow DOM', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <${ENCHANTED_TEXTFIELD_TAG}></${ENCHANTED_TEXTFIELD_TAG}>
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      const inputField = component?.querySelector(ENCHANTED_TEXTFIELD_TAG_NAME) as HTMLElement | null;
      const shadowInput = inputField?.shadowRoot?.querySelector('input') as HTMLElement;
      expect(shadowInput).toBe(inputField?.shadowRoot?.activeElement);
    });

    it('should have role="dialog" and aria-modal for accessibility', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} dialogTitle="Test Dialog" open .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME);
      const dialogElement = component?.shadowRoot?.querySelector(`[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      await expect(dialogElement).toHaveAttribute('role', 'dialog');
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    });

    it('should have proper ARIA attributes for accessibility', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open dialogTitle="Accessible Dialog" .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await component.waitForDisplayed();
      const dialogElement = component.$(`>>>[part*="${DIALOG_PARTS.PAPER_XL}"]`);
      const backdrop = component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`);
      const closeButton = component.$('>>>[part="icon-close"]');
      const presentationElements = await component.$$('>>>[role="presentation"]');

      await expect(dialogElement).toBeDisplayed();
      await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
      await expect(backdrop).toHaveAttribute('aria-hidden', 'true');
      await expect(closeButton).toHaveAttribute('tabindex', '0');
      await expect(presentationElements.length).toBeGreaterThan(0);
    });

    it('should close when Enter key is pressed on close button', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await browser.keys(['Enter']);
      await browser.pause(400);
      await expect(component).not.toHaveAttribute('open');
    });

    it('should close when Space key is pressed on close button', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await browser.keys([' ']);
      await browser.pause(400);
      await expect(component).not.toHaveAttribute('open');
    });

    it('should not have backdrop in chat mode for better accessibility', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} size="chat" open .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      const backdrop = component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`);
      await expect(backdrop).not.toBeExisting();
    });

    it('should have dialog title accessible to screenreaders', async () => {
      const customTitle = 'Important Announcement';
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open dialogTitle="${customTitle}" .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await expect(component).toHaveText(customTitle);
    });

    it('should support RTL layout for dialog title', async () => {
      document.documentElement.dir = 'rtl';
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open dialogTitle="Test Dialog RTL" .localization=${localization}>
            <div slot="content">
              <input type="text" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      const titleRootRTL = component.$(`>>>[part="${DIALOG_PARTS.TITLE_ROOT_RTL}"]`);
      const titleTextRTL = component.$(`>>>[part="${DIALOG_PARTS.TITLE_TEXT_RTL}"]`);
      const closeIcon = component.$(`>>>[part="${DIALOG_PARTS.ICON_CLOSE}"]`);
      await expect(titleRootRTL).toBeExisting();
      await expect(titleTextRTL).toBeExisting();
      await expect(closeIcon).toBeExisting();
      document.documentElement.dir = 'ltr';
    });

    it('should focus element directly when depth >= MAX_FOCUS_DEPTH', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content">
              <input type="text" id="test-input" />
            </div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      const testInput = document.querySelector('input#test-input') as HTMLElement;
      testInput?.blur();
      expect(document.activeElement).not.toBe(testInput);
      const enchantedDialog = component as unknown as { _focusElement: (element: HTMLElement, depth: number) => void };
      enchantedDialog._focusElement(testInput, 10);
      expect(document.activeElement).toBe(testInput);
    });

    it('should traverse renderRoot when element has no shadowRoot but has renderRoot', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open dialogTitle="Test Dialog" .localization=${localization}>
            <div slot="content"></div>
          </${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      await browser.pause(150);
      const component = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      const mockRenderRoot = document.createElement('div').attachShadow({ mode: 'open' });
      const focusableInRenderRoot = document.createElement('input');
      focusableInRenderRoot.id = 'focusable-render-root';
      mockRenderRoot.appendChild(focusableInRenderRoot);
      const mockElement = document.createElement('div');
      Object.defineProperty(mockElement, 'shadowRoot', { value: null, configurable: true });
      Object.defineProperty(mockElement, 'renderRoot', { value: mockRenderRoot, configurable: true });
      const enchantedDialog = component as unknown as { _focusElement: (element: HTMLElement, depth: number) => void };
      enchantedDialog._focusElement(mockElement as unknown as HTMLElement, 0);
      expect(mockRenderRoot.querySelector('input')).toBe(focusableInRenderRoot);
    });

    it('should NOT close dialog on backdrop click when disableBackdropClick is true', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open disableBackdropClick .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await expect(component).toBeDisplayed();
      const domComponent = document.querySelector(ENCHANTED_DIALOG_TAG_NAME) as EnchantedDialog;
      const backdrop = domComponent?.shadowRoot?.querySelector(`[part="${DIALOG_PARTS.BACKDROP}"]`) as HTMLElement;
      backdrop?.dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true, cancelable: true }));
      await browser.pause(400);
      await expect(component).toHaveAttribute('open');
    });

    it('should still close dialog via close icon when disableBackdropClick is true', async () => {
      render(
        html`
          <${ENCHANTED_DIALOG_TAG} open disableBackdropClick .localization=${localization}></${ENCHANTED_DIALOG_TAG}>
        `,
        document.body
      );
      const component = $(ENCHANTED_DIALOG_TAG_NAME);
      await expect(component).toBeDisplayed();
      const closeButton = component.$('>>>[part="icon-close"]');
      await closeButton.click();
      await browser.pause(400);
      await expect(component).not.toHaveAttribute('open');
    });

  });
});