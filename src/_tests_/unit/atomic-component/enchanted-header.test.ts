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
import { $, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-header';

// Helper imports
import { initSessionStorage } from '../../utils';

const localization: Map<string, string> = new Map<string, string>();
localization.set('header.authoring.search', 'Authoring search');
localization.set('header.enduser.search.center.title', 'Search Center');
localization.set('header.enduser.search.placeholder', 'Enter keyword...');
localization.set('header.enduser.search', 'Search');

describe('EnchantedHeader component testing', () => {
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

  it('EnchantedHeader - should render without crashing', async () => {
    let component = document.createElement('enchanted-header');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('EnchantedHeader - removes component from document body and validates removal', async () => {
    let component = document.createElement('enchanted-header');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('EnchantedHeader - should render component and validate attribute back button', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} variant="header-authoring" showBackIcon=true />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    let imgElement = await component.$('>>>enchanted-button[data-testid="enchanted-back-button"]').getElement();
    await expect(imgElement).toBeExisting();
  });

  it('EnchantedHeader - should render component and validate attribute filter button', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} variant="header-authoring-modal" showBackIcon=true />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    let imgElement = await component.$('>>>enchanted-button[data-testid="enchanted-filter-button"]').getElement();
    await expect(imgElement).toBeExisting();
  });

  it('EnchantedHeader - should render component and validate attribute showBackIcon', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} variant="header-endUser" ?showBackIcon=${true} />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    let imgElement = await component.$('>>>enchanted-button[data-testid="enchanted-back-button"]').getElement();
    await expect(imgElement).toBeExisting();
  });

  it('EnchantedHeader - should render component and validate attributes - authoring', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} headerTitle="Search Center" variant="header-authoring" ?showBackIcon=${true} ?isSideNavOpen=${false} ?disabled=${false} />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveElementProperty('color', 'rgba(0, 0, 0, .32)');
    expect(component).toHaveText('Search Center');
    expect(component).toHaveElementProperty('variant', 'header-authoring');
    expect(component).toHaveElementProperty('showBackIcon', true);
    expect(component).toHaveElementProperty('isSideNavOpen', false);
    expect(component).toBeDisabled;
  });

  it('EnchantedHeader - should render component and validate attributes - endUser', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} headerTitle="Search Center" variant="header-endUser" ?showBackIcon=${true} ?isSideNavOpen=${false} ?disabled=${false} />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveElementProperty('color', 'rgba(0, 0, 0, .32)');
    expect(component).toHaveText('Search Center');
    expect(component).toHaveElementProperty('variant', 'header-endUser');
    expect(component).toHaveElementProperty('showBackIcon', true);
    expect(component).toHaveElementProperty('isSideNavOpen', false);
    expect(component).toBeDisabled;
  });

  it('EnchantedHeader - should render component and validate attributes - authoring', async () => {
    render(
      html`
        <enchanted-header .localization=${localization} headerTitle="Search Center" variant="header-authoring-modal" ?showBackIcon=${true} ?isSideNavOpen=${false} ?disabled=${false} />
      `,
      document.body
    );
    let component = await $('enchanted-header').getElement();
    await expect(component).toBeDisplayed();
    expect(component).toHaveElementProperty('color', 'rgba(0, 0, 0, .32)');
    expect(component).toHaveText('Search Center');
    expect(component).toHaveElementProperty('variant', 'header-authoring-modal');
    expect(component).toHaveElementProperty('showBackIcon', true);
    expect(component).toHaveElementProperty('isSideNavOpen', false);
    expect(component).toBeDisabled;
  });
});
