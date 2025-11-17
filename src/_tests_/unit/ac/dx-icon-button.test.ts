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
import '../../../components/ac/dx-icon-button';

// Helper imports
import { ICON_BUTTON_SIZES } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';

// Icon imports
import { svgIconSearch } from '../../assets/svg-search';
import { DxIconButton } from '../../../components/ac/dx-icon-button';

describe('DxIconButton component testing', () => {
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

  it('DxIconButton - should render without crashing', async () => {
    let component = document.createElement('dx-icon-button');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxIconButton - removes component from document body and validates removal', async () => {
    let component = document.createElement('DxIconButton');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxIconButton - should render with attribute withPadding', async () => {
    render(
      html`
        <dx-icon-button withPadding=true></dx-icon-button>
      `,
      document.body
    );
    let component = $('dx-icon-button').getAttribute('withPadding');
    expect(await component).toBe("true");
  });

  it('DxIconButton - should render with attribute size', async () => {
    render(
      html`
        <dx-icon-button size='small' withPadding=true imgurl='../../static/assets/add-icon.svg'></dx-icon-button>
      `,
      document.body
    );
    let component = await $('dx-icon-button').getElement();
    await expect(component).toHaveAttribute('size', ICON_BUTTON_SIZES.SMALL);
    await expect(component).toHaveAttribute('withPadding', "true");
    let buttonElement = await component.$('>>>dx-button[data-testid="dx-icon-button"]').getElement();
    await expect(buttonElement).toHaveAttribute('outlined', "false");
    await expect(buttonElement).toHaveAttribute('imgurl', '../../static/assets/add-icon.svg');
  });

  it('DxIconButton - should render with fab size', async () => {
    render(
      html`
        <dx-icon-button size='fab' withPadding imgurl='../../static/assets/add-icon.svg'></dx-icon-button>
      `,
      document.body
    );
    let component = await $('dx-icon-button').getElement();
    await expect(component).toHaveAttribute('size', ICON_BUTTON_SIZES.FAB);
    await expect(component).toHaveAttribute('withPadding');
    let buttonElement = await component.$('>>>dx-button[data-testid="dx-icon-button"]').getElement();
    await expect(buttonElement).toHaveAttribute('outlined', "false");
    await expect(buttonElement).toHaveAttribute('imgurl', '../../static/assets/add-icon.svg');
  });

  it('DxIconButton - should render with attribute icon', async () => {
    render(
      html`
        <dx-icon-button
          .icon=${
            html`
              <span data-testid="dx-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </dx-icon-button>
      `,
      document.body
    );
    let component = await $('dx-icon-button').getElement();
    let buttonElement = await component.$('>>>dx-button[data-testid="dx-icon-button"]').getElement();
    let svgElement = await buttonElement.$('>>>span[data-testid="dx-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('DxIconButton - should focus the button when _focusButton is called', async () => {
    render(
      html`
        <dx-icon-button
          .icon=${
            html`
              <span data-testid="dx-svg-test">${svgIconSearch}</span>
            `
          }
          data-testid="dx-icon-button"
        >
        </dx-icon-button>
      `,
      document.body
    );

    const iconButton = document.querySelector('dx-icon-button') as DxIconButton;
    if (!iconButton) {
      throw new Error('DxIconButton component not found');
    }
    
    // Wait for the component to be fully rendered
    await iconButton.updateComplete;
    
    const dxButton = iconButton.shadowRoot?.querySelector('dx-button');
    if (dxButton) {
      await (dxButton as DxIconButton).updateComplete;
    }
    
    // Call _focusButton to set focus
    iconButton._focusButton();
    
    // Wait for focus to be applied
    await browser.pause(100);
    
    // Check what element is actually focused - navigate through shadow DOMs
    const focusedElementInfo = await browser.execute(
      `const iconBtn = document.querySelector('dx-icon-button');
       const dxBtn = iconBtn?.shadowRoot?.querySelector('dx-button');
       const activeInDxBtn = dxBtn?.shadowRoot?.activeElement;
       return activeInDxBtn?.getAttribute('data-testid');`
    ) as string;
    
    // The actual button inside dx-button shadow DOM should be focused
    await expect(focusedElementInfo).toBe('dx-button');
  });
});