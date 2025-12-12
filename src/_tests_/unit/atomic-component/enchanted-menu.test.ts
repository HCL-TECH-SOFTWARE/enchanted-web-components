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
import { $, expect, browser } from '@wdio/globals';
import { fn } from '@wdio/browser-runner';
import { waitFor } from '@testing-library/dom';

// Component imports
import '../../../components/atomic-component/enchanted-menu';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-menu-item';
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { initSessionStorage } from '../../utils';

describe('EnchantedMenu component testing', () => {
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

  it('EnchantedMenu - should render without crashing', async () => {
    let component = document.createElement('enchanted-menu');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedMenu - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-menu');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedMenu - should validate null for non-existent attributes', async () => {
    let component = document.createElement('enchanted-menu');
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('EnchantedMenu - should render component and validate attributes', async () => {
    const menuMockFunction = fn();

    render(
      html`
        <enchanted-menu onchange="${menuMockFunction()}">
          <div slot="target-anchor">
            <enchanted-button buttonText="Open Menu"></enchanted-button>
          </div>
          <div slot="menu-items">
            <enchanted-menu-item text="One"></enchanted-menu-item>
            <enchanted-menu-item text="Two"></enchanted-menu-item>
            <enchanted-menu-item text="ThreeThreeThreeThreeThreeThreeThreeThree"></enchanted-menu-item>
          </div>
        </enchanted-menu>
      `,
      document.body
    );
    let component = await $('enchanted-menu').getElement();
    await expect(component).toBeDisplayed();

    let listElement = await component.$('>>>enchanted-list').getElement();
    await expect(listElement).not.toBeDisplayed();

    await waitFor(async() => {
      const buttonElement = await component.$('>>>enchanted-button').getElement();
      await expect(buttonElement).toBeDisplayed();
      expect(await buttonElement.isClickable()).toEqual(true);
      await buttonElement.click();
      expect(await buttonElement.getAttribute('buttontext')).toEqual('Open Menu');
      await browser.pause(500);
    });

    listElement = await component.$('>>>enchanted-list').getElement();
    await expect(listElement).toBeDisplayed();

    await waitFor(async() => {
      const menuItems = await component.$$('>>>enchanted-menu-item').getElements();
      expect(menuItems.length).toEqual(3);      
      await expect(menuItems[0]).toBeClickable();
      await menuItems[0].click();
      await browser.pause(500);
      expect(menuMockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
