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
import '../../../components/atomic-component/enchanted-icon-button';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import addIcon from '../../assets/add-icon.svg';

function renderHtml() {
  return html`
    <div data-testid="enchanted-icon-button-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 300px;">
      <div style="display: flex; flex-direction: column;">
        <label>Small with url icon and padding</label>
        <enchanted-icon-button size="small" withPadding ?isDisabled="${true}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>Small with url icon without padding</label>
        <enchanted-icon-button size="small" ?isDisabled="${false}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>

      <div style="display: flex; flex-direction: column;">
        <label>Medium with url icon and padding</label>
        <enchanted-icon-button size="medium" withPadding ?isDisabled="${true}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>Medium with url icon without padding</label>
        <enchanted-icon-button size="medium" ?isDisabled="${false}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>
    </div>
  `;
}

function renderInverseVariantHtml() {
  return html`
    <div data-testid="enchanted-icon-button-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 300px; background-color: #383838;">
      <div style="display: flex; flex-direction: column;">
        <label>Inverse Variant With url icon and padding</label>
        <enchanted-icon-button size="small" inverseColor ?isDisabled="${true}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>

      <div style="display: flex; flex-direction: column;">
        <label>Inverse Variant With url icon without padding</label>
        <enchanted-icon-button size="small" inverseColor ?isDisabled="${false}" .imgurl=${addIcon}></enchanted-icon-button>
      </div>
    </div>
  `;
}

describe('EnchantedIconButton - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedIconButton - should capture Icon Button component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let enchantedIconButton = await $('>>>div[data-testid="enchanted-icon-button-layout"]');
    await browser.checkElement(enchantedIconButton, 'enchanted-icon-button-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });

  it('EnchantedIconButton - should capture Icon Button Inverse Variant component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderInverseVariantHtml(), document.body);
    let enchantedIconButton = await $('>>>div[data-testid="enchanted-icon-button-layout"]');
    await browser.checkElement(enchantedIconButton, 'enchanted-icon-button-inverse-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
