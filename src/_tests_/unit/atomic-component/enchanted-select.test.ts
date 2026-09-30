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
import { render, nothing } from 'lit';
import { html } from 'lit/static-html.js';
import { expect, browser, $ } from '@wdio/globals';
import { Key } from 'webdriverio';

// Component imports
import '../../../components/atomic-component/enchanted-select';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { DEFAULT_DOCUMENT_OBJECT_TYPE, SEARCH_COMMON_FIELDS } from '../../constants';
import { initSessionStorage } from '../../utils';
import { EnchantedInputFieldType } from '../../../types/enchanted-select';
import { ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_LIST_ITEM_TAG_NAME, ENCHANTED_LIST_TAG_NAME, ENCHANTED_SELECT_TAG, ENCHANTED_SELECT_TAG_NAME } from '../../../components/tags';

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.select.placeholder.select.attribute', 'Select an attribute');
localization.set('input.select.placeholder.select.content.source', 'Select a content source');
localization.set('output.table.footer.show.rows', 'Show rows:');
localization.set('output.table.footer.page', 'Page:');

describe(`${ENCHANTED_SELECT_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(async () => {
    await browser.pause(300);
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_SELECT_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('should remove component from document body and validate removal', async () => {
    let component = document.createElement(ENCHANTED_SELECT_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('should validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_SELECT_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('toggleDropDown', false);
    await expect(component).toHaveElementProperty('label', '');
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).not.toHaveAttribute('selectedValue');
    await expect(component).not.toHaveAttribute('options');
    await expect(component).not.toHaveAttribute('field');
    await expect(component).not.toHaveAttribute('currentFocusedItem');
    await expect(component).not.toHaveAttribute('listItems');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_SELECT_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render with label and options', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG} 
          .localization=${localization}
          label="Test Label" 
          .options=${['Option 1', 'Option 2', 'Option 3']} 
          selectedValue="Option 1"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = $(ENCHANTED_SELECT_TAG_NAME);
    const labelElement = component.shadow$('label[data-testid="enchanted-select-label"]');
    const buttonElement = component.shadow$(ENCHANTED_BUTTON_TAG_NAME);

    await expect(labelElement).toHaveText('Test Label');
    await expect(buttonElement).toHaveAttribute('buttontext', 'Option 1');
  });

  it('should render labels for each supported input field', async () => {
    const fields = [
      EnchantedInputFieldType.CONTENT_SOURCE,
      EnchantedInputFieldType.ADD_SEARCH_FILTER,
      EnchantedInputFieldType.ADD_STATUS_FILTER,
      EnchantedInputFieldType.PAGINATION_ROWS,
      EnchantedInputFieldType.PAGINATION_PAGE,
    ];

    for (const field of fields) {
      render(
        html`
          <${ENCHANTED_SELECT_TAG}
            .localization=${localization}
            field=${field}
            .options=${['Option 1']}
          ></${ENCHANTED_SELECT_TAG}>
        `,
        document.body
      );

      const component = $(ENCHANTED_SELECT_TAG_NAME);
      const labelElement = component.shadow$('label[data-testid="enchanted-select-label"]');
      await expect(labelElement).toBeDisplayed();
      await expect(labelElement.getText()).not.toBe('');
    }
  });

  it('should use the attribute label for document object type when no label is provided', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${['Option 1']}
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = $(ENCHANTED_SELECT_TAG_NAME);
    const labelElement = component.shadow$('label[data-testid="enchanted-select-label"]');

    await expect(labelElement).toBeDisplayed();
    const labelText = await browser.execute((element) => {return element.textContent?.trim();}, await labelElement);
    await expect(labelText).toBe('Select an attribute');
  });

  it('should render the configured disabled, hidden, and remove-label states', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.CONTENT_SOURCE}
          .options=${['Option 1']}
          ?disabled=${true}
          hiddenLabel
          hiddenIcon
          showRemoveLabel
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = $(ENCHANTED_SELECT_TAG_NAME);
    await expect(component.shadow$('label[data-testid="enchanted-select-label"]')).not.toBeDisplayed();
    await expect(component.shadow$('label[data-testid="enchanted-select-remove-label"]')).toHaveAttribute('tabindex', '-1');
    await expect(component.shadow$(`${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`)).toHaveAttribute('disabled');
  });

  it('should parse string and array options and resolve the selected id', async () => {
    const component = document.createElement(ENCHANTED_SELECT_TAG_NAME) as HTMLElement & {
      options: string | string[] | Array<{ id: string; name: string; value: string }>;
      selectedValue: string | undefined;
      selectedId: string | undefined;
      parseOptions: () => unknown[];
    };
    component.options = '["One", "Two"]';
    component.selectedValue = 'Two';
    const parsedStringOptions = component.parseOptions();
    const stringSelectedId = component.selectedId;

    component.options = '{"not":"an array"}';
    const parsedObjectOptions = component.parseOptions();

    component.options = 'invalid json';
    const parsedInvalidOptions = component.parseOptions();

    component.options = [{ id: 'option-1', name: 'First', value: 'first' }];
    component.selectedValue = 'First';
    const parsedArrayOptions = component.parseOptions();

    await expect(parsedStringOptions).toEqual(['One', 'Two']);
    await expect(stringSelectedId).toBe('Two');
    await expect(parsedObjectOptions).toEqual([]);
    await expect(parsedInvalidOptions).toEqual([]);
    await expect(parsedArrayOptions).toEqual([{ id: 'option-1', name: 'First', value: 'first' }]);
    await expect(component.selectedId).toBe('option-1');
  });

  it('should render component and validate label and initial dropdown value', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
          selectedValue=${DEFAULT_DOCUMENT_OBJECT_TYPE}
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );
    let component = $(ENCHANTED_SELECT_TAG_NAME);
    await expect(component).toBeDisplayed();
    let labelElement = component.$('>>>label[data-testid="enchanted-select-label"]');
    await expect(labelElement).toHaveText('Select input');
    let buttonElement = component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`);
    await expect(buttonElement).toHaveAttribute('buttontext', DEFAULT_DOCUMENT_OBJECT_TYPE);
  });

  it('should render component and validate placeholder over the selected value if alwaysShowPlaceholder', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
          selectedValue=${DEFAULT_DOCUMENT_OBJECT_TYPE}
          placeholder="Select an option"
          alwaysShowPlaceholder
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );
    let component = $(ENCHANTED_SELECT_TAG_NAME);
    await expect(component).toBeDisplayed();
    let labelElement = component.$('>>>label[data-testid="enchanted-select-label"]');
    await expect(labelElement).toHaveText('Select input');
    let buttonElement = component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`);
    await expect(buttonElement).toHaveAttribute('buttontext', 'Select an option');
    await buttonElement.click();
    let listElement = await component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`);
    await expect(listElement).toBeTruthy();
    const listItem = await component.$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`);
    const listItemText = await listItem.getText();
    if (listItemText === 'title') {
      await listItem.click();
    }
    //  After selection, button text should be updated to the selected value if alwaysShowPlaceholder is true
    await expect(buttonElement).toHaveAttribute('buttontext', 'Select an option');
  });

  it('should render component and validate placeholder not showing always over the selected value if alwaysShowPlaceholder is false', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
          placeholder="Select an option"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );
    let component = $(ENCHANTED_SELECT_TAG_NAME);
    await expect(component).toBeDisplayed();
    let labelElement = component.$('>>>label[data-testid="enchanted-select-label"]');
    await expect(labelElement).toHaveText('Select input');
    let buttonElement = component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`);
    await expect(buttonElement).toHaveAttribute('buttontext', 'Select an option');
    await buttonElement.click();
    let listElement = await component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`);
    await expect(listElement).toBeTruthy();
    const listItem = await component.$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`);
    const listItemText = await listItem.getText();
    if (listItemText === 'title') {
      await listItem.click();
    }
    // After selection, button text should not be updated to the selected value as alwaysShowPlaceholder is true
    await expect(buttonElement).toHaveAttribute('buttontext', listItemText);
  });

  it('should test that buttontext attribute of button is having dropdown selection as per user selection', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );
    let component = $(ENCHANTED_SELECT_TAG_NAME);
    await expect(component).toBeDisplayed();
    let buttonElement = component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`);
    await buttonElement.click();
    let listElement = component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`);
    await expect(listElement).toBeTruthy();
    const listItem = component.$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`);
    const listItemText = await listItem.getText();
    if (listItemText === 'title') {
      await listItem.click();
    }
    expect(buttonElement).toHaveAttribute('buttontext', listItemText);

  });

  it('should navigate dropdown using ArrowDown and ArrowUp keys', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          selectedvalue=${DEFAULT_DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = $(ENCHANTED_SELECT_TAG_NAME);
    const buttonElement = component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`);
    await buttonElement.click();
    await browser.pause(500);
    const btnText = await buttonElement.getText();
    expect(btnText).toBe(DEFAULT_DOCUMENT_OBJECT_TYPE);

    const listElement = component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`);
    await expect(listElement).toBeTruthy();

    const listItems = component.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`);
    await expect((await listItems).length).toBeGreaterThan(0);
    await browser.keys([Key.ArrowDown, Key.ArrowUp, Key.Enter]);
    const btnTextAfterSelection = await buttonElement.getText();
    expect(btnTextAfterSelection).toBe('title');
  });

  it('should focus the shadow li when navigating select options with ArrowDown', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();

    await buttonElement.click();
    await browser.pause(300);
    await browser.keys(Key.ArrowDown);
    await browser.pause(300);

    const listItems = await component.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`).getElements();
    await expect(listItems.length).toBeGreaterThan(0);

    const isShadowLiFocused = await browser.execute((element) => {
      const listItemElement = element as HTMLElement & { shadowRoot?: ShadowRoot | null };
      const li = listItemElement.shadowRoot?.querySelector('li[data-testid="enchanted-list-item-list"]');
      return Boolean(li && listItemElement.shadowRoot?.activeElement === li);
    }, listItems[0]);

    expect(isShadowLiFocused).toBe(true);
  });

  it('should move focus to next list item when pressing Tab', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();

    await buttonElement.click();
    await browser.pause(300);
    await browser.keys(Key.ArrowDown);
    await browser.pause(300);
    await browser.keys(Key.Tab);
    await browser.pause(300);

    const listItems = await component.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`).getElements();
    await expect(listItems.length).toBeGreaterThan(1);

    const isSecondShadowLiFocused = await browser.execute((element) => {
      const listItemElement = element as HTMLElement & { shadowRoot?: ShadowRoot | null };
      const li = listItemElement.shadowRoot?.querySelector('li[data-testid="enchanted-list-item-list"]');
      return Boolean(li && listItemElement.shadowRoot?.activeElement === li);
    }, listItems[1]);

    expect(isSecondShadowLiFocused).toBe(true);
  });

  it('should focus underlying native button when pressing Shift+Tab on first list item', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();

    await buttonElement.click();
    await browser.pause(300);
    await browser.keys(Key.ArrowDown);
    await browser.pause(300);
    await browser.keys(['Shift', 'Tab']);
    await browser.pause(300);

    const isUnderlyingButtonFocused = await browser.execute((element) => {
      const selectElement = element as HTMLElement & { shadowRoot?: ShadowRoot | null };
      const selectButtonHost = selectElement.shadowRoot?.querySelector('[data-testid="enchanted-select-button"]') as
        (HTMLElement & { shadowRoot?: ShadowRoot | null }) | null;
      const nativeButton = selectButtonHost?.shadowRoot?.querySelector('button[data-testid="enchanted-button"]');

      return Boolean(nativeButton && selectButtonHost?.shadowRoot?.activeElement === nativeButton);
    }, component);

    expect(isUnderlyingButtonFocused).toBe(true);
  });

  it('should close dropdown on Escape via handleDropdownNav', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();

    await buttonElement.click();
    await browser.pause(300);
    await browser.keys(Key.ArrowDown);
    await browser.pause(200);
    await browser.keys(Key.Escape);
    await browser.pause(300);

    await expect(component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`)).not.toBeDisplayed();
    await expect(component).toHaveElementProperty('toggleDropDown', false);
  });

  it('should close the dropdown and prevent default on Escape from the select button', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();
    await buttonElement.click();
    await browser.pause(300);

    const result = await browser.execute(async (element) => {
      const select = element as HTMLElement & {
        handleButtonKeyDown: (event: KeyboardEvent) => Promise<void>;
        toggleDropDown: boolean;
      };
      const escapeEvent = new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      await select.handleButtonKeyDown(escapeEvent);
      return {
        defaultPrevented: escapeEvent.defaultPrevented,
        toggleDropDown: select.toggleDropDown,
      };
    }, component);

    await expect(result.defaultPrevented).toBe(true);
    await expect(result.toggleDropDown).toBe(false);
  });

  it('should handle focus transitions inside and outside the select', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const result = await browser.execute((element) => {
      const select = element as HTMLElement & {
        toggleDropDown: boolean;
        ignoreNextFocusOut: boolean;
        handleFocusOut: (event: FocusEvent) => void;
      };
      const insideElement = document.createElement('span');
      select.appendChild(insideElement);
      const outsideElement = document.createElement('span');
      document.body.appendChild(outsideElement);

      select.toggleDropDown = true;
      select.ignoreNextFocusOut = true;
      select.handleFocusOut(new FocusEvent('focusout', { relatedTarget: outsideElement }));
      const afterIgnoredFocusOut = {
        isOpen: select.toggleDropDown,
        ignoreNextFocusOut: select.ignoreNextFocusOut,
      };

      select.handleFocusOut(new FocusEvent('focusout', { relatedTarget: insideElement }));
      const afterInsideFocusOut = select.toggleDropDown;

      select.handleFocusOut(new FocusEvent('focusout', { relatedTarget: outsideElement }));
      const afterOutsideFocusOut = select.toggleDropDown;

      outsideElement.remove();
      insideElement.remove();
      return { afterIgnoredFocusOut, afterInsideFocusOut, afterOutsideFocusOut };
    }, component);

    await expect(result.afterIgnoredFocusOut).toEqual({ isOpen: true, ignoreNextFocusOut: false });
    await expect(result.afterInsideFocusOut).toBe(true);
    await expect(result.afterOutsideFocusOut).toBe(false);
  });

  it('should dispatch the field when the remove label is clicked', async () => {
    let removeEventDetail: { type: string } | null = null;

    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field="test-field"
          showRemoveLabel
          @remove=${(event: CustomEvent) => {
            removeEventDetail = event.detail;
          }}
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = $(ENCHANTED_SELECT_TAG_NAME);
    const removeLabel = component.shadow$('label[data-testid="enchanted-select-remove-label"]');
    await removeLabel.click();

    await expect(removeEventDetail).toEqual({ type: 'test-field' });
  });

  it('should dispatch remove on Enter and ignore unrelated remove-label keys', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field="test-field"
          showRemoveLabel
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const result = await browser.execute((element) => {
      const select = element as HTMLElement & { removeCount?: number; removeType?: string };
      select.removeCount = 0;
      select.addEventListener('remove', (event) => {
        select.removeCount = (select.removeCount || 0) + 1;
        select.removeType = (event as CustomEvent<{ type: string }>).detail.type;
      });

      const removeLabel = select.shadowRoot?.querySelector('label[data-testid="enchanted-select-remove-label"]');
      removeLabel?.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        composed: true,
        cancelable: true,
      }));
      removeLabel?.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'ArrowDown',
        bubbles: true,
        composed: true,
        cancelable: true,
      }));

      return { removeCount: select.removeCount, removeType: select.removeType };
    }, component);

    await expect(result).toEqual({ removeCount: 1, removeType: 'test-field' });
  });

  it('should select focused option on Enter via handleDropdownNav', async () => {
    render(
      html`
        <${ENCHANTED_SELECT_TAG}
          .localization=${localization}
          field=${EnchantedInputFieldType.DOCUMENT_OBJECT_TYPE}
          .options=${SEARCH_COMMON_FIELDS}
          label="Select input"
        ></${ENCHANTED_SELECT_TAG}>
      `,
      document.body
    );

    const component = await $(ENCHANTED_SELECT_TAG_NAME).getElement();
    const buttonElement = await component.$(`>>>${ENCHANTED_BUTTON_TAG_NAME}[data-testid="enchanted-select-button"]`).getElement();

    await buttonElement.click();
    await browser.pause(300);

    const listItems = await component.$$(`>>>${ENCHANTED_LIST_ITEM_TAG_NAME}[data-testid="enchanted-select-listitem"]`).getElements();
    await expect(listItems.length).toBeGreaterThan(0);
    const firstOptionText = await listItems[0].getText();

    await browser.keys(Key.ArrowDown);
    await browser.pause(200);
    await browser.keys(Key.Enter);
    await browser.pause(300);

    await expect(component.$(`>>>${ENCHANTED_LIST_TAG_NAME}[data-testid="enchanted-select-list"]`)).not.toBeDisplayed();
    await expect(component).toHaveElementProperty('toggleDropDown', false);
    await expect(buttonElement).toHaveAttribute('buttontext', firstOptionText);
  });
});
