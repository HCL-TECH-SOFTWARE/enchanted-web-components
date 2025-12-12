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
import '../../../components/atomic-component/enchanted-svg-icon';

// Helper imports
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import { svgIconEnd } from '../../assets/svg-input-end-icon';

function renderHtml() {
  return html`
    <div data-testid="enchanted-svg-icon-layout" style="padding: 5px; width: 250px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With color and size</label>
        <enchanted-svg-icon .icon=${svgIconEnd} color="red" size="16px" />
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>useCurrentColor prop as false</label>
        <enchanted-svg-icon .icon=${svgIconEnd} color="red" size="32px" ?useCurrentColor=${false} />
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>useCurrentColor prop as true</label>
        <enchanted-svg-icon .icon=${svgIconEnd} color="red" size="16px" ?useCurrentColor=${true} />
      </div>
    </div>
  `;
}

describe('EnchantedSvgIcon - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedSvgIcon - should capture SVG Icon component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let enchantedSvgIcon = await $('>>>div[data-testid="enchanted-svg-icon-layout"]');
    await browser.checkElement(enchantedSvgIcon, 'enchanted-svg-icon-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
