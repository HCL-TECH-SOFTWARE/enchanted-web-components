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
import { $, browser } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-snackbar';
import '../../../components/atomic-component/enchanted-svg-icon';
import '../../../components/atomic-component/enchanted-button';
import '../../../components/atomic-component/enchanted-icon-button';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, SNACKBAR_TYPE } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import svgClose from '../../assets/close.svg';

describe('EnchantedSnackbar snapshot testing', () => {
  const simpleMessage = 'This is a simple snackbar message.';
  const htmlMessage = 'This message contains <strong>HTML</strong> tags. <br/> This is an <i>italicize</i> text.';
  const specialCharMessage = 'Special characters: & < > " \' /';
  const multilineMessage = 'This is the first line. <br/> This is the second line. <br/> This is the third line.';

  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedSnackbar (success) - should capture EnchantedSnackbar component with simple message and icon - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_SUCCESS}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-success-baseline-with-simple-message-and-icon-authoring');
 
    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with simple message and icon - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-info-baseline-with-simple-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (warning) - should capture EnchantedSnackbar component with simple message and icon - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_WARNING}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-warning-baseline-with-simple-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (error) - should capture EnchantedSnackbar component with simple message and icon - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_ERROR}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-error-baseline-with-simple-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with multiline message - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${multilineMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-multiline-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with html message - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${htmlMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-html-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with special characters message - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${specialCharMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-special-chars-message-and-icon-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with button - focused', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          >
            <div slot="snackbar-buttons">
              <enchanted-button
                buttontext="Button"
                variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
                exportparts="${Object.values(BUTTON_PARTS).join(',')}"
                autofocus
                inverseColor
              >
              </enchanted-button>
            </div>
          </enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-button-focused');

    document.head.removeChild(link);
  });


  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with icon-button - focused', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          >
            <div slot="snackbar-buttons">
              <enchanted-icon-button size="small" ?isDisabled="${true}" .imgurl=${svgClose} inverseColor></enchanted-icon-button>
            </div>
          </enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    const enchantedIconButton = await enchantedSnackbar.$('>>>enchanted-icon-button');
    await enchantedIconButton.click();
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-icon-button-focused');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (info) - should capture EnchantedSnackbar component with button and icon button - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_INFO}
          >
            <div slot="snackbar-buttons">
              <enchanted-button
                buttontext="Button"
                variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
                exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              >
              </enchanted-button>
              <enchanted-icon-button size="small" ?isDisabled="${true}" .imgurl=${svgClose}></enchanted-icon-button>
            </div>
          </enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-baseline-with-button-and-icon-button-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedSnackbar (progress) - should capture EnchantedSnackbar component with progress indicator - Authoring ', async () => {
    const link = appendEnchantedStylingLink();

    render(
      html`
        <div data-testid="enchanted-snackbar-layout" style="position: relative; width: 400px; height: 1600px;">
          <enchanted-snackbar
            message=${simpleMessage}
            type=${SNACKBAR_TYPE.SNACKBAR_PROGRESS}
          ></enchanted-snackbar>
        </div>
      `,
      document.body,
    );

    const enchantedSnackbar = await $('>>>div[data-testid="enchanted-snackbar-layout"]');
    await browser.checkElement(enchantedSnackbar, 'enchanted-snackbar-snapshot-loading-indicator-baseline-authoring');
 
    document.head.removeChild(link);
  });
});
 