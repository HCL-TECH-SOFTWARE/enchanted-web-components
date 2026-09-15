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
import { $, expect } from '@wdio/globals';
import { nothing, render } from 'lit';
import { html } from 'lit/static-html.js';

// Component imports
import '../../../components/atomic-component/enchanted-link';

// Helper imports
import { PAGINATION_PARTS } from '../../../types/cssClassEnums';
import { initSessionStorage } from '../../utils';
import { ENCHANTED_LINK_TAG, ENCHANTED_LINK_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_LINK_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_LINK_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_LINK_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_LINK_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('url', '');
    await expect(component).toHaveElementProperty('weight', 0);
    await expect(component).toHaveElementProperty('title', '');
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('selected', false);
    component.remove();
  });

  it('should set and remove attributes and validate', async () => {
    let component = document.createElement(ENCHANTED_LINK_TAG_NAME);
    component.setAttribute('anchorURL', 'testURL');
    document.body.appendChild(component);
    await expect($(component).getAttribute('anchorURL')).not.toBeNull();
    await expect($(component)).toHaveAttribute('anchorURL', 'testURL');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_LINK_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes', async () => {
    render(
      html`
        <${ENCHANTED_LINK_TAG}
          url="testURL"
          weight="0"
          anchorTitle="Anchor Title"
          name="Test"
          rel="noopener"
          value="1"
          mode="pagination">
        </${ENCHANTED_LINK_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_LINK_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let linkElement = await component.$('>>>a[data-testid="enchanted-link-link"]').getElement();
    await expect(linkElement).toHaveText('Test');
    await expect(linkElement).toHaveAttribute('href', 'testURL');
    await expect(linkElement).toHaveAttribute('title', 'Anchor Title');
    await expect(linkElement).toHaveAttribute('rel', 'noopener');
    await expect(linkElement).toHaveAttribute('value', '1');
  }); 

  it('should render component with selected css as per setting mode', async () => {
    render(
      html`
        <${ENCHANTED_LINK_TAG}
          url="testURL"
          weight="0"
          anchorTitle="Anchor Title"
          name="Test"
          rel="noopener"
          mode=${PAGINATION_PARTS.PAGINATION_INDEX_DEFAULT}>
        </${ENCHANTED_LINK_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_LINK_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    let linkElement = await component.$('>>>a[data-testid="enchanted-link-link"]').getElement();
    const color = await linkElement.getCSSProperty('color');
    const display = await component.getCSSProperty('display');
    const textSize = await component.getCSSProperty('font-size');
    await expect(color.value).toBe('rgba(0,0,238,1)');
    await expect(display.value).toBe('inline');
    await expect(textSize.value).toBe('16px');
  });

  it('should assign the correct part for each mode and state', async () => {
    const cases = [
      { mode: PAGINATION_PARTS.RESULT_TITLE, expectedPart: PAGINATION_PARTS.RESULT_TITLE },
      { mode: 'unknown', expectedPart: '' },
      { mode: PAGINATION_PARTS.PAGINATION, expectedPart: PAGINATION_PARTS.PAGINATION_INDEX_DEFAULT },
      {
        mode: PAGINATION_PARTS.PAGINATION,
        selected: true,
        expectedPart: PAGINATION_PARTS.PAGINATION_INDEX_SELECTED,
      },
      {
        mode: PAGINATION_PARTS.PAGINATION,
        disabled: true,
        expectedPart: PAGINATION_PARTS.PAGINATION_INDEX_DISABLED,
      },
    ];

    for (const testCase of cases) {
      const component = document.createElement(ENCHANTED_LINK_TAG_NAME) as HTMLElement & {
        mode: string;
        selected: boolean;
        disabled: boolean;
        updateComplete: Promise<unknown>;
      };
      component.mode = testCase.mode;
      component.selected = testCase.selected ?? false;
      component.disabled = testCase.disabled ?? false;
      document.body.appendChild(component);
      await component.updateComplete;

      const linkElement = component.shadowRoot?.querySelector('a');
      await expect(linkElement?.getAttribute('part')).toBe(testCase.expectedPart);
      component.remove();
    }
  });

  it('should dispatch a custom event and prevent navigation for pagination clicks', async () => {
    const component = document.createElement(ENCHANTED_LINK_TAG_NAME) as HTMLElement & {
      mode: string;
      updateComplete: Promise<unknown>;
    };
    component.mode = PAGINATION_PARTS.PAGINATION;
    document.body.appendChild(component);
    await component.updateComplete;

    let eventDetail: boolean | undefined;
    component.addEventListener('anchorCustomClick', (event: Event) => {
      eventDetail = (event as CustomEvent<boolean>).detail;
    });

    const paginationClick = new MouseEvent('click', { bubbles: true, cancelable: true });
    component.shadowRoot?.querySelector('a')?.dispatchEvent(paginationClick);

    await expect(eventDetail).toBe(true);
    await expect(paginationClick.defaultPrevented).toBe(true);
    component.remove();
  });

  it('should allow navigation and skip the custom event outside pagination mode', async () => {
    const component = document.createElement(ENCHANTED_LINK_TAG_NAME) as HTMLElement & {
      mode: string;
      updateComplete: Promise<unknown>;
    };
    component.mode = PAGINATION_PARTS.RESULT_TITLE;
    document.body.appendChild(component);
    await component.updateComplete;

    let customEventDispatched = false;
    component.addEventListener('anchorCustomClick', () => {
      customEventDispatched = true;
    });

    const linkClick = new MouseEvent('click', { bubbles: true, cancelable: true });
    component.shadowRoot?.querySelector('a')?.dispatchEvent(linkClick);

    await expect(customEventDispatched).toBe(false);
    await expect(linkClick.defaultPrevented).toBe(false);
    component.remove();
  });
});
