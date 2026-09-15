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
import { $, browser, expect } from '@wdio/globals';

// Component imports
import '../../../components/atomic-component/enchanted-button';

// Helper imports
import { initSessionStorage } from '../../utils';
import { BUTTON_PARTS, BUTTON_VARIANT, ICON_BUTTON_SIZES } from '../../../types/cssClassEnums';

// Icon imports
import { svgIconSearch } from '../../assets/svg-search';
import { EnchantedButton } from '../../../components/atomic-component/enchanted-button';
import { ENCHANTED_BUTTON_TAG, ENCHANTED_BUTTON_TAG_NAME } from '../../../components/tags';

describe(`${ENCHANTED_BUTTON_TAG_NAME} component testing`, () => {
  before(async () => {
    await initSessionStorage();
    render(nothing, document.body);
  });

  afterEach(() => {
    render(nothing, document.body);
  });

  it('should render without crashing', async () => {
    let component = document.createElement(ENCHANTED_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    await expect(document.body.contains(component)).toBeTruthy();
    document.body.removeChild(component);
    component.remove();
  });

  it('removes component from document body and validates removal', async () => {
    let component = document.createElement(ENCHANTED_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    document.body.removeChild(component);
    await expect(document.body.contains(component)).toBeFalsy();
    component.remove();
  });

  it('validate default value of attributes', async () => {
    let component = document.createElement(ENCHANTED_BUTTON_TAG_NAME);
    document.body.appendChild(component);
    await expect(component).toHaveElementProperty('focused', false);
    await expect(component).toHaveElementProperty('disabled', false);
    await expect(component).toHaveElementProperty('endicon', false);
    await expect(component).not.toHaveAttribute('imgUrl');
    await expect(component).not.toHaveAttribute('buttontext');
    component.remove();
  });

  it('should validate null for non-existent attributes', async () => {
    let component = document.createElement(ENCHANTED_BUTTON_TAG_NAME);
    await expect(component.getAttribute('nonExistentAttribute')).toBeNull();
    component.remove();
  });

  it('should render component and validate attributes for outlined, disabled, and with start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          disabled="true"
          imgurl="sample-url"
          buttontext="sample-buttontext"
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('should render component and validate attributes for NOT outlined, NOT disabled, and without start icon', async () => {
    let wasClicked = false;
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          buttontext="sample-buttontext"
          @click=${() => { wasClicked = true; }}
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('buttontext', 'sample-buttontext');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).not.toHaveElementProperty('disabled');
    await expect(buttonElement).toHaveText('sample-buttontext');
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    await buttonElement.click();
    await expect(wasClicked).toBe(true);
  });

  it('should render component and validate attributes for NOT outlined, but disabled, and without button text', async () => {
    let wasClicked = false;
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          disabled
          imgurl="sample-url"
          @click=${() => { wasClicked = true; }}
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    await expect(wasClicked).toBe(false);
    let component = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    await expect(component).toBeDisplayed();
    await expect(component).toHaveElementProperty('imgurl', 'sample-url');
    await expect(component).not.toHaveElementProperty('outlined');
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    await expect(buttonElement).toHaveElementProperty('disabled', true);
    await expect(buttonElement).not.toHaveText(/.+/g);
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).toHaveAttribute('src', 'sample-url');
    await buttonElement.click();
    await expect(wasClicked).toBe(false); // because disabled
  });

  it('should render icon and validate attributes for lit template icon', async () => {
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="enchanted-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    let svgElement = await buttonElement.$('>>>span[data-testid="enchanted-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('should override imgurl and display lit template icon', async () => {
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          imgurl="sample-url"
          buttontext="sample-buttontext"
          .icon=${
            html`
              <span data-testid="enchanted-svg-test">${svgIconSearch}</span>
            `
          }
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    let component = await $(ENCHANTED_BUTTON_TAG_NAME).getElement();
    let buttonElement = await component.$('>>>button[data-testid="enchanted-button"]').getElement();
    let imgElement = await buttonElement.$('>>>img[data-testid="enchanted-button-img"]').getElement();
    await expect(imgElement).not.toBeExisting();
    let svgElement = await buttonElement.$('>>>span[data-testid="enchanted-svg-test"]').getElement();
    await expect(svgElement).toBeExisting();
  });

  it('should focus the button when _focusButton is called', async () => {
    render(
      html`
        <${ENCHANTED_BUTTON_TAG}
          buttontext="sample-buttontext"
          data-testid="enchanted-button"
        >
        </${ENCHANTED_BUTTON_TAG}>
      `,
      document.body
    );
    let enchantedButton = await document.querySelector(ENCHANTED_BUTTON_TAG_NAME) as EnchantedButton;
    // Call the _focusButton method
    enchantedButton._focusButton();

    // Wait for the focus to be applied
    await browser.pause(100); // Small delay to ensure focus is set

    // Verify that the button is focused
    const activeElement = document.querySelector(ENCHANTED_BUTTON_TAG_NAME)?.shadowRoot?.activeElement?.getAttribute('data-testid');
    await expect(activeElement).toBe(enchantedButton.getAttribute('data-testid'));
  });

  it('should render the requested disabled, focused, inverse, and outlined button parts', () => {
    const cases = [
      { disabled: true, inverseColor: true, variant: BUTTON_VARIANT.BUTTON_TEXT_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_DISABLED_INVERSE },
      { disabled: true, variant: BUTTON_VARIANT.BUTTON_OUTLINED_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED_DISABLED },
      { focused: true, inverseColor: true, variant: BUTTON_VARIANT.BUTTON_TEXT_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_FOCUSED_INVERSE },
      { focused: true, variant: BUTTON_VARIANT.BUTTON_OUTLINED_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED_FOCUSED },
      { inverseColor: true, variant: BUTTON_VARIANT.BUTTON_TEXT_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_TEXT_INVERSE },
      { variant: BUTTON_VARIANT.BUTTON_OUTLINED_VAR, part: BUTTON_PARTS.BUTTON_ENCHANTED_OUTLINED },
    ];

    cases.forEach(({ disabled = false, focused = false, inverseColor = false, variant, part }) => {
      const button = new EnchantedButton();
      button.disabled = disabled;
      button.focused = focused;
      button.inverseColor = inverseColor;
      button.variant = variant;
      render(button.render(), document.body);

      expect(document.querySelector(`button[part="${part}"]`)).not.toBeNull();
    });
  });

  it('should render the requested start and end icon parts', () => {
    const mediumIconButton = new EnchantedButton();
    mediumIconButton.size = ICON_BUTTON_SIZES.MEDIUM;
    mediumIconButton.withPadding = true;
    mediumIconButton.imgurl = 'medium-icon';
    render(mediumIconButton.render(), document.body);
    expect(document.querySelector(`img[part="${BUTTON_PARTS.BUTTON_START_ICON_MEDIUM_WITH_PADDING}"]`)).not.toBeNull();

    document.documentElement.dir = 'rtl';
    try {
      const rtlButton = new EnchantedButton();
      rtlButton.buttontext = 'RTL button';
      rtlButton.imgurl = 'rtl-icon';
      render(rtlButton.render(), document.body);
      expect(document.querySelector(`img[part="${BUTTON_PARTS.BUTTON_START_ICON_RTL_MARGIN}"]`)).not.toBeNull();
    } finally {
      document.documentElement.dir = 'ltr';
    }

    const endIconButton = new EnchantedButton();
    endIconButton.endicon = true;
    endIconButton.imgurl = 'end-icon';
    render(endIconButton.render(), document.body);
    expect(document.querySelector(`img[part="${BUTTON_PARTS.BUTTON_END_ICON}"]`)).not.toBeNull();
  });
});