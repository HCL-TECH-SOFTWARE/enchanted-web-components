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
import '../../../components/ac/dx-input-textfield';

// Helper imports
import { HEADER_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

const dxLocalization: Map<string, string> = new Map<string, string>();
dxLocalization.set('input.textfield.placeholder.type.to.search', 'Type to search');

function renderHtml() {
  return html`
    <div data-testid="dx-input-textfield-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With placeholder</label>
        <dx-input-textfield .localization=${dxLocalization} exportparts=${HEADER_PARTS.INPUT} placeholder="test placeholder text"> </dx-input-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With label</label>
        <dx-input-textfield .localization=${dxLocalization} exportparts=${HEADER_PARTS.INPUT} label="test label"> </dx-input-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With Label and Value</label>
        <dx-input-textfield .localization=${dxLocalization} exportparts=${HEADER_PARTS.INPUT} label="test label" value="test-value"> </dx-input-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with Start Icon</label>
        <dx-input-textfield .localization=${dxLocalization} exportparts=${HEADER_PARTS.INPUT} .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}> </dx-input-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with End Icon</label>
        <dx-input-textfield .localization=${dxLocalization} exportparts=${HEADER_PARTS.INPUT} .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}> </dx-input-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with both Start and End Icon</label>
        <dx-input-textfield
          .localization=${dxLocalization}
          exportparts=${HEADER_PARTS.INPUT}
          .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}
          .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}
        >
        </dx-input-textfield>
      </div>
    </div>
  `;
}

describe('DxInputTextfield - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('DxInputTextfield - should capture Input Textfield component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let DxTextInputfield = await $('>>>div[data-testid="dx-input-textfield-layout"]');
    await browser.checkElement(DxTextInputfield, 'dx-input-textfield-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
