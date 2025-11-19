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

  afterEach(() => {
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

    let component = await document.querySelector('dx-dialog');
    const dialog = await document.querySelector('dx-dialog');
    const activeElement = dialog?.shadowRoot?.querySelector(':focus')?.getAttribute('part');
    await expect(component).toBeDisplayed();
    const dialogElement = component?.shadowRoot?.querySelector('[role="dialog"]')?.getAttribute('part');

    await expect(dialogElement).toEqual(activeElement);
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

  it('DxDialog - should have proper ARIA attributes for accessibility', async () => {
    render(
      html`
        <dx-dialog open dialogTitle="Accessible Dialog" .localization=${dxLocalization}></dx-dialog>
      `,
      document.body
    );
    let component = await $('dx-dialog').getElement();
    let dialogElement = await component.$('>>>[role="dialog"]').getElement();
    let backdrop = await component.$(`>>>[part="${DIALOG_PARTS.BACKDROP}"]`).getElement();
    let closeButton = await component.$('>>>[part="icon-close"]').getElement();
    let presentationElements = await component.$$('>>>[role="presentation"]');
    
    // Verify dialog element has proper role and ARIA attributes
    await expect(dialogElement).toBeDisplayed();
    await expect(dialogElement).toHaveAttribute('role', 'dialog');
    await expect(dialogElement).toHaveAttribute('aria-modal', 'true');
    await expect(dialogElement).toHaveAttribute('tabindex', '0');
    
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

  it('DxDialog - should focus on the dialog element when focusDialog is called', async () => {
    render(
      html`
        <dx-dialog open .localization=${dxLocalization}>
        </dx-dialog>
      `,
      document.body
    );
    // Create a dummy, focusable element to "steal" focus
    const dummyInput = document.createElement('input');
    document.body.appendChild(dummyInput);

    const component = await document.querySelector('dx-dialog');
    await component?.updateComplete;

    const dialogElement = component?.shadowRoot?.querySelector('[role="dialog"]');
    let activeElement = component?.shadowRoot?.activeElement;

    await expect(activeElement).toEqual(dialogElement);

    dummyInput.focus();
    activeElement = component?.shadowRoot?.activeElement;
    await expect(activeElement).toBeNull();

    component?.focusDialog();
    activeElement = component?.shadowRoot?.activeElement;
    await expect(activeElement).toEqual(dialogElement);

    document.body.removeChild(dummyInput);
  });
});
