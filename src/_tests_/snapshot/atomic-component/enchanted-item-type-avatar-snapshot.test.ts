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
import { browser, expect } from '@wdio/globals';
import { html, render } from 'lit';

// Component imports
import '../../../components/atomic-component/enchanted-avatar';
import '../../../components/atomic-component/enchanted-item-type-avatar';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';
import { ICON_ITEM_TYPE } from '../../../types/enchanted-svg-icon';

function renderHtml() {
  return html`
    <div data-testid="enchanted-authoring-type-avatar-item-layout" style="padding: 15px 10px; width: 400px; height: 400px;">
      ${Object.values(ICON_ITEM_TYPE).map((icon) => {
        return html`<div style="display: flex;">
          <div>
            <enchanted-item-type-avatar itemType=${icon} />
          </div>
          <div style="margin-left: 5px;">
            <label>${icon}</label>
          </div>
        </div>`;
      })}
    </div>
  `;
}

describe('EnchantedAuthoringItemTypeAvatar - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
    if (document.body.firstElementChild) {
      document.body.removeChild(document.body.firstElementChild);
    }
  });

  it('EnchantedAuthoringItemTypeAvatar - should capture Enchanted Authoring Type Avatar component with different icons - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);

    // The `toMatchFullPageSnapshot` method will let fail the whole test for a mismatch. 
    // Therefore the 100% mismatch threshold was added, but the mismatch image will be generated anyway.
    await expect(browser).toMatchFullPageSnapshot('enchanted-item-type-avatar-snapshot-baseline-authoring', 100);

    document.head.removeChild(link);
  });
});
