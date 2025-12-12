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
import '../../../components/atomic-component/enchanted-menu';
import '../../../components/atomic-component/enchanted-menu';
import '../../../components/atomic-component/enchanted-menu-item';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="enchanted-menu-layout" style="padding: 5px; width: 400px; height: 260px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>Default (Close)</label>
        <enchanted-menu>
          <div slot="target-anchor">
            <enchanted-button buttonText="Open Menu"></enchanted-button>
          </div>
          <div slot="menu-items">
            <enchanted-menu-item text="One"></enchanted-menu-item>
            <enchanted-menu-item text="Two"></enchanted-menu-item>
            <enchanted-menu-item text="Three"></enchanted-menu-item>
          </div>
        </enchanted-menu>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <div style="margin-top: 20px;">
          <label style="margin: 10px 0;">Menu Open</label>
          <enchanted-menu open="true">
            <div slot="target-anchor">
              <enchanted-button buttonText="Open Menu"></enchanted-button>
            </div>
            <div slot="menu-items">
              <enchanted-menu-item text="One"></enchanted-menu-item>
              <enchanted-menu-item text="Two"></enchanted-menu-item>
              <enchanted-menu-item text="Three"></enchanted-menu-item>
            </div>
          </enchanted-menu>
        </div>
      </div>
    </div>
  `;
}

describe('EnchantedMenu - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedMenu - should capture Menu component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    let enchantedMenuLayout = await $('>>>div[data-testid="enchanted-menu-layout"]');
    await browser.checkElement(enchantedMenuLayout, 'enchanted-menu-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
