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
import '../../../components/atomic-component/enchanted-textfield';

// Helper imports
import { HEADER_PARTS } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/search';

const localization: Map<string, string> = new Map<string, string>();
localization.set('input.textfield.placeholder.type.to.search', 'Type to search');

function renderHtml() {
  return html`
    <div data-testid="enchanted-textfield-layout" style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With placeholder</label>
        <enchanted-textfield .localization=${localization} exportparts=${HEADER_PARTS.INPUT} placeholder="test placeholder text"> </enchanted-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With label</label>
        <enchanted-textfield .localization=${localization} exportparts=${HEADER_PARTS.INPUT} label="test label"> </enchanted-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>With Label and Value</label>
        <enchanted-textfield .localization=${localization} exportparts=${HEADER_PARTS.INPUT} label="test label" value="test-value"> </enchanted-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with Start Icon</label>
        <enchanted-textfield .localization=${localization} exportparts=${HEADER_PARTS.INPUT} .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}> </enchanted-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with End Icon</label>
        <enchanted-textfield .localization=${localization} exportparts=${HEADER_PARTS.INPUT} .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}> </enchanted-textfield>
      </div>

      <div style="display: flex; flex-direction: column; gap: 5px;">
        <label>with both Start and End Icon</label>
        <enchanted-textfield
          .localization=${localization}
          exportparts=${HEADER_PARTS.INPUT}
          .actionIcon=${html`<icon-search size="16" color="currentColor"></icon-search>`}
          .clearIcon=${html`<icon-close size="16" color="currentColor"></icon-close>`}
        >
        </enchanted-textfield>
      </div>
    </div>
  `;
}

describe('EnchantedInputTextfield - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedInputTextfield - should capture Input Textfield component with attributes - Authoring', async () => {
    const link = appendEnchantedStylingLink();

    render(renderHtml(), document.body);
    let EnchantedTextInputfield = await $('>>>div[data-testid="enchanted-textfield-layout"]');
    await browser.checkElement(EnchantedTextInputfield, 'enchanted-textfield-snapshot-baseline-authoring');

    document.head.removeChild(link);
  });
});
