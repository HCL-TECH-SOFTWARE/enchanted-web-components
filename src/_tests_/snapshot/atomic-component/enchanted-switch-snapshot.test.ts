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
import '../../../components/atomic-component/enchanted-switch';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div
      data-testid="enchanted-switch-layout"
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
        width: 300px;
        justify-content: center;
      "
    >
      <div>
        <label>Default</label>
        <enchanted-switch></enchanted-switch>
      </div>
      <div style="display: flex; justify-content: center;">
        <div>
          <label>Checked</label>
          <enchanted-switch ?isChecked=${true}></enchanted-switch>
        </div>
      </div>
      <div style="display: flex; justify-content: flex-end;">
        <div>
          <label>Disabled</label>
          <enchanted-switch ?isDisabled=${true}></enchanted-switch>
        </div>
      </div>
    </div>
  `;
}

describe('EnchantedSwitch - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedSwitch - should capture Switch component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let enchantedSwitchLayout = await $('>>>div[data-testid="enchanted-switch-layout"]');
    await browser.checkElement(enchantedSwitchLayout, 'enchanted-switch-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
