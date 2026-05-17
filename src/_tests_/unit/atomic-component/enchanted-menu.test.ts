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
import {
  ENCHANTED_BUTTON_TAG, ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_LIST_TAG_NAME, ENCHANTED_MENU_ITEM_TAG,
  ENCHANTED_MENU_ITEM_TAG_NAME, ENCHANTED_MENU_TAG, ENCHANTED_MENU_TAG_NAME
} from '../../../components/tags';

describe(`${ENCHANTED_MENU_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_MENU_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_MENU_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_MENU_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes', async () => {
    const menuMockFunction = fn();

    render(
      html`
        <${ENCHANTED_MENU_TAG} onchange="${menuMockFunction()}">
          <div slot="target-anchor">
            <${ENCHANTED_BUTTON_TAG} buttonText="Open Menu"></${ENCHANTED_BUTTON_TAG}>
          </div>
          <div slot="menu-items">
            <${ENCHANTED_MENU_ITEM_TAG} text="One"></${ENCHANTED_MENU_ITEM_TAG}>
            <${ENCHANTED_MENU_ITEM_TAG} text="Two"></${ENCHANTED_MENU_ITEM_TAG}>
            <${ENCHANTED_MENU_ITEM_TAG} text="ThreeThreeThreeThreeThreeThreeThreeThree"></${ENCHANTED_MENU_ITEM_TAG}>
          </div>
        </${ENCHANTED_MENU_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_MENU_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let listElement = await component.$(`>>>${ENCHANTED_LIST_TAG_NAME}`).getElement();
    await expect(listElement).not.toBeDisplayed();

    await waitFor(async() => {
      const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}`).getElement();
      await expect(buttonElement).toBeDisplayed();
      expect(await buttonElement.isClickable()).toEqual(true);
      await buttonElement.click();
      expect(await buttonElement.getAttribute('buttontext')).toEqual('Open Menu');
      await browser.pause(500);
    });

    listElement = await component.$(`>>>${ENCHANTED_LIST_TAG_NAME}`).getElement();
    await expect(listElement).toBeDisplayed();

    await waitFor(async() => {
      const menuItems = await component.$$(`>>>${ENCHANTED_MENU_ITEM_TAG_NAME}`).getElements();
      expect(menuItems.length).toEqual(3);      
      await expect(menuItems[0]).toBeClickable();
      await menuItems[0].click();
      await browser.pause(500);
      expect(menuMockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
