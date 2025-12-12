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
import '../../../components/atomic-component/enchanted-menu-item';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="enchanted-menu-item-layout" style="padding: 5px; width: 400px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <div>
          <enchanted-menu-item text="One"></enchanted-menu-item>
          <enchanted-menu-item text="Two"></enchanted-menu-item>
          <enchanted-menu-item text="Three"></enchanted-menu-item>
        </div>
      </div>
    </div>
  `;
}

describe('EnchantedMenuItem - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedMenuItem - should capture Menu Item component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    let enchantedMenuItem = await $('>>>div[data-testid="enchanted-menu-item-layout"]');
    await browser.checkElement(enchantedMenuItem, 'enchanted-menu-item-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
