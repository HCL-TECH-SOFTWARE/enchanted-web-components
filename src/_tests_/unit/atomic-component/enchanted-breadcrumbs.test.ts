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
import { render } from 'lit';
import { html } from 'lit/static-html.js';
import { expect, $ } from '@wdio/globals';
import { spyOn } from '@wdio/browser-runner';
import { nothing } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-breadcrumbs';
import '../../../components/atomic-component/enchanted-breadcrumbs-item';
import { EnchantedBreadcrumbs } from '../../../components/atomic-component/enchanted-breadcrumbs';

// Helper imports
import { BREADCRUMBS_PART } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { BREADCRUMBS_ICON_TYPE } from '../../../types/enchanted-breadcrumbs';

// Icon imports
import { svgIconInfo } from '../../assets/svg-icon-info';
import { ENCHANTED_BREADCRUMBS_ITEM_TAG, ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME, ENCHANTED_BREADCRUMBS_TAG, ENCHANTED_BREADCRUMBS_TAG_NAME, ENCHANTED_SVG_ICON_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_BREADCRUMBS_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_BREADCRUMBS_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_BREADCRUMBS_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should render component with icon and text', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
    ];
    render(
      html`
        <${ENCHANTED_BREADCRUMBS_TAG}
          .paths=${items}
        ></${ENCHANTED_BREADCRUMBS_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    const breadcrumbsItems = await component.$$(`>>>${ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME}[data-testid="breadcrumbs-item"]`);
    let enchantedBreadcrumbsIcon = await breadcrumbsItems[0].$(`>>>${ENCHANTED_SVG_ICON_TAG_NAME}[data-testid="breadcrumbs-item-icon"]`).getElement();
    await expect(enchantedBreadcrumbsIcon).toBeExisting();
    let enchantedBreadcrumbsTitle = await component.$('>>>span[data-testid="breadcrumbs-title"]').getElement();
    await expect(enchantedBreadcrumbsTitle).toBeExisting();
  });

  it('should trigger handleBreadcrumbClick when clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    let wasClicked = false;
    render(
      html`
        <${ENCHANTED_BREADCRUMBS_TAG}
          .paths=${items}
          .handleBreadcrumbClick=${() => { wasClicked = true; }}
        ></${ENCHANTED_BREADCRUMBS_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$(`>>>${ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME}[data-testid="breadcrumbs-item"]`);
    await breadcrumbsItems[0].click();
    await expect(wasClicked).toBe(true);
  });

  it('should not trigger handleBreadcrumbClick when the last item is clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    const fn = spyOn(EnchantedBreadcrumbs.prototype, 'handleBreadcrumbClick');
    render(
      html`
        <${ENCHANTED_BREADCRUMBS_TAG}
          .paths=${items}
          .handleBreadcrumbClick=${fn}
        ></${ENCHANTED_BREADCRUMBS_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$(`>>>${ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME}[data-testid="breadcrumbs-item"]`);
    await breadcrumbsItems[1].click();
    await expect(fn).not.toHaveBeenCalledTimes(1);
  });

  it('should not trigger handleBreadcrumbClick when the disabled item is clicked', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
    ];
    const fn = spyOn(EnchantedBreadcrumbs.prototype, 'handleBreadcrumbClick');
    render(
      html`
        <${ENCHANTED_BREADCRUMBS_TAG}
          .paths=${items}
          .handleBreadcrumbClick=${fn}
        ></${ENCHANTED_BREADCRUMBS_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let breadcrumbsItems = await component.$$(`>>>${ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME}[data-testid="breadcrumbs-item"]`);
    await breadcrumbsItems[0].click();
    await expect(fn).not.toHaveBeenCalledTimes(1);
  });

  it('should have a dynamic part', async () => {
    let items = [
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs2' },
      { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs3' },
    ];
    render(
      html`
        <${ENCHANTED_BREADCRUMBS_TAG}
          .paths=${items}
        ></${ENCHANTED_BREADCRUMBS_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    
    let breadcrumbsItem = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
    breadcrumbsItem = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM_LAST}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
  });

});

describe(`${ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should accept a partProp', async () => {
    let path = { link: 'sampleLink', icon: svgIconInfo, title: 'Breadcrumbs1', disabled: true };
    let exportParts = Object.values(BREADCRUMBS_PART).join(', ');
    render(
      html`<${ENCHANTED_BREADCRUMBS_ITEM_TAG}
              .path="${path}"
              exportparts="${exportParts}"
              .partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM}"
              data-testid="breadcrumbs-item"
            />`,
      document.body
    );
    let component = await $(ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let breadcrumbsItem = await component.$(`>>>div[part="${BREADCRUMBS_PART.BREADCRUMBS_ITEM} ${BREADCRUMBS_PART.BREADCRUMBS_DISABLED}"]`).getElement();
    await expect(breadcrumbsItem).toBeExisting();
  });

  it('should accept an iconName and render icon', async () => {
    let path = {
      iconName: BREADCRUMBS_ICON_TYPE.HOME,
      title: 'Home',
    };
    let exportParts = Object.values(BREADCRUMBS_PART).join(', ');
    render(
      html`<${ENCHANTED_BREADCRUMBS_ITEM_TAG}
              .path="${path}"
              exportparts="${exportParts}"
              .partProp="${BREADCRUMBS_PART.BREADCRUMBS_ITEM}"
              data-testid="breadcrumbs-item"
            />`,
      document.body
    );

    let component = await $(ENCHANTED_BREADCRUMBS_ITEM_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();

    let breadcrumbsIcon = await component.$(`>>>[part="${BREADCRUMBS_PART.BREADCRUMBS_ICON}"]`).getElement();
    await expect(breadcrumbsIcon).toBeExisting();
  });
});
 