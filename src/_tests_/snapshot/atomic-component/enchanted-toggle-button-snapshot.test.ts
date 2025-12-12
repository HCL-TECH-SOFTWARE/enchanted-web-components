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
import '../../../components/atomic-component/enchanted-toggle-button';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import tagIconSelected from '../../assets/tag-selected.svg';
import tagIcon from '../../assets/tag.svg';
import listIcon from '../../assets/list.svg';
import listSelectedIcon from '../../assets/list-selected.svg';

function renderHtml() {
  const values = ['cloud-view', 'list-view'];
  return html`
    <div data-testid="enchanted-toggle-button-layout" style="display: flex; padding: 15px; width: 400px;">
      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">First Button Selected with Outlined - false</label>
        <enchanted-toggle-button .iconUrls=${[tagIconSelected, listIcon]} .values=${values} selectedValue=${values[0]} ?outlined=${true}>
        </enchanted-toggle-button>
      </div>

      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">Second Button Selected with Outlined - true</label>
        <enchanted-toggle-button .iconUrls=${[tagIcon, listSelectedIcon]} .values=${values} selectedValue=${values[1]} ?outlined=${true}>
        </enchanted-toggle-button>
      </div>

      <div style="flex: 1;">
        <label style="margin-bottom: 5px;">Button Selected with disabled</label>
        <enchanted-toggle-button
          ?disabled=${true}
          .iconUrls=${[tagIcon, listSelectedIcon]}
          .values=${values}
          selectedValue=${values[1]}
          ?outlined=${true}
        >
        </enchanted-toggle-button>
      </div>
    </div>
  `;
}

describe('EnchantedToggleButton - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedToggleButton - should capture Toggle Button component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    let enchantedToggleButton = await $('>>>div[data-testid="enchanted-toggle-button-layout"]');

    await browser.checkElement(enchantedToggleButton, 'enchanted-toggle-button-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
