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
import '../../../components/atomic-component/enchanted-list';
import '../../../components/atomic-component/enchanted-list-item';

// Helper imports
import { LIST_ITEM_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="enchanted-list-item-layout" style="padding: 5px; width: 250px;">
      <div>
        <label>Default</label>
        <enchanted-list>
          ${[1, 2, 3].map((item) => {
            return html`<enchanted-list-item exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}">Item ${item}</enchanted-list-item>`;
          })}
        </enchanted-list>
      </div>

      <div>
        <label>With role</label>
        <enchanted-list>
          ${[1, 2, 3].map((item) => {
            return html`<enchanted-list-item role="menuitem" exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
              >Item ${item}</enchanted-list-item
            >`;
          })}
        </enchanted-list>
      </div>
    </div>
  `;
}

describe('EnchantedListItem - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedListItem - should capture List item component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let enchantedListItemLayout = await $('>>>div[data-testid="enchanted-list-item-layout"]');
    await browser.checkElement(enchantedListItemLayout, 'enchanted-list-item-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
