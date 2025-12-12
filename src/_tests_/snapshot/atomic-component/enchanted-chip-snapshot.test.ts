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
import '../../../components/atomic-component/enchanted-chip';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderHtml() {
  return html`
    <div data-testid="enchanted-chip-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px; width: 300px;">
      <div style="display: flex; flex-direction: column;">
        <label>With name</label>
        <enchanted-chip name="tag cloud"></enchanted-chip>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>With name and count</label>
        <enchanted-chip name="tag cloud" count="10"></enchanted-chip>
      </div>
      <div style="display: flex; flex-direction: column;">
        <label>With name, count and showChipCount</label>
        <enchanted-chip name="tag cloud" count="10" showChipCount></enchanted-chip>
      </div>
    </div>
  `;
}

describe('EnchantedChip - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedChip - should capture Chip component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let enchantedSwitchLayout = await $('>>>div[data-testid="enchanted-chip-layout"]');
    await browser.checkElement(enchantedSwitchLayout, 'enchanted-chip-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
