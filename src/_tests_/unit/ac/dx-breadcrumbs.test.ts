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
import { expect, $ } from '@wdio/globals';
import { spyOn } from '@wdio/browser-runner';

// Component imports
import '../../../components/ac/dx-breadcrumbs';
import { DxBreadcrumbs } from '../../../components/ac/dx-breadcrumbs';

// Helper imports
import { BREADCRUMBS_PART } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { BREADCRUMBS_ICON_TYPE } from '../../../types/dx-breadcrumbs';

// Icon imports
import { svgIconInfo } from '../../assets/svg-icon-info';

describe('DxBreadcrumbs component testing', () => {
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

  it('DxBreadcrumbs - should render without crashing', async () => {
    let component = document.createElement('dx-breadcrumbs');
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('DxBreadcrumbs - removes component from document body and validates removal', async () => {
    let component = document.createElement('dx-breadcrumbs');
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('DxBreadcrumbs - should render component with icon and text', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
    ];
    render(
      html`
        <dx-breadcrumbs
          .paths=${items}
        ></dx-breadcrumbs>
      `,
      document.body
    );
    let component = await $('dx-breadcrumbs').getElement();
    await expect(component).toBeDisplayed();
    let dxBreadcrumbsIcon = await component.$('>>>dx-svg-icon[data-testid="breadcrumbs-item-icon"]').getElement();
    await expect(dxBreadcrumbsIcon).toBeExisting();
    let dxBreadcrumbsTitle = await component.$('>>>span[data-testid="breadcrumbs-title"]').getElement();
    await expect(dxBreadcrumbsTitle).toBeExisting();
  });

  it('DxBreadcrumbs - should trigger handleBreadcrumbClick when clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    let wasClicked = false;
    render(
      html`
        <dx-breadcrumbs
          .paths=${items}
          .handleBreadcrumbClick=${() => { wasClicked = true; }}
        ></dx-breadcrumbs>
      `,
      document.body
    );
    let component = await $('dx-breadcrumbs').getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$('>>>dx-breadcrumbs-item[data-testid="breadcrumbs-item"]');
    await breadcrumbsItems[0].click();
    await expect(wasClicked).toBe(true);
  });

  it('DxBreadcrumbs - should not trigger handleBreadcrumbClick when the last item is clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    const fn = spyOn(DxBreadcrumbs.prototype, 'handleBreadcrumbClick');
    render(
      html`
        <dx-breadcrumbs
          .paths=${items}
          .handleBreadcrumbClick=${fn}
        ></dx-breadcrumbs>
      `,
      document.body
    );
    let component = await $('dx-breadcrumbs').getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$('>>>dx-breadcrumbs-item[data-testid="breadcrumbs-item"]');
    await breadcrumbsItems[1].click();
    await expect(fn).not.toHaveBeenCalledTimes(1);
  });

  it('DxBreadcrumbs - should not trigger handleBreadcrumbClick when the disabled item is clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    const fn = spyOn(DxBreadcrumbs.prototype, 'handleBreadcrumbClick');
    render(
      html`
        <dx-breadcrumbs
          .paths=${items}
          .handleBreadcrumbClick=${fn}
        ></dx-breadcrumbs>
      `,
      document.body
    );
    let component = await $('dx-breadcrumbs').getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$('>>>dx-breadcrumbs-item[data-testid="breadcrumbs-item"]');
    await breadcrumbsItems[0].click();
    await expect(fn).not.toHaveBeenCalledTimes(1);
  });

  it('DxBreadcrumbsItem - should have a dynamic part', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs3' },
    ];
    render(
      html`
        <dx-breadcrumbs
          .paths=${items}
        ></dx-breadcrumbs>
      `,
      document.body
    );
    let component = await $('dx-breadcrumbs').getElement();
    await expect(component).toBeDisplayed();
    
    let breadcrumbsItem = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
    breadcrumbsItem = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
  });

  it('DxBreadcrumbsItem - should accept a partProp', async () => {
    let path = { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true };
    let exportParts = Object.values(BREADCRUMBS_PART).join(', ');
    render(
      html`<dx-breadcrumbs-item
              .path="${path}"
              exportparts="${exportParts}"
              .partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM}"
              data-testid="breadcrumbs-item"
            />`,
      document.body
    );
    let component = await $('dx-breadcrumbs-item').getElement();
    await expect(component).toBeDisplayed();

    let breadcrumbsItem = await component.$(`>>>div[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
  });

  it('DxBreadcrumbsItem - should accept an iconName and render icon', async () => {
    let path = {
      iconName: BREADCRUMBS_ICON_TYPE.HOME,
      title: 'Home',
    };
    let exportParts = Object.values(BREADCRUMBS_PART).join(', ');
    render(
      html`<dx-breadcrumbs-item
              .path="${path}"
              exportparts="${exportParts}"
              .partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM}"
              data-testid="breadcrumbs-item"
            />`,
      document.body
    );

    let component = await $('dx-breadcrumbs-item').getElement();
    await expect(component).toBeDisplayed();

    let breadcrumbsIcon = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ICON}"]`).getElement();
    await expect(breadcrumbsIcon).toBeExisting();
  });
});
 