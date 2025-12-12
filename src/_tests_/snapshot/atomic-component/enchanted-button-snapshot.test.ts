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
import '../../../components/atomic-component/enchanted-button';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

// Icon imports
import svgSearchUrl from '../../assets/search.svg';

describe('EnchantedButton snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  function renderButtonVariants() {
    return html`
      <div data-testid="enchanted-button-layout" style="display: flex; flex-direction: column; gap: 20px; margin: 20px;">
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Default</label>
            <enchanted-button buttontext="Button" variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR} exportparts="${Object.values(BUTTON_PARTS).join(',')}">
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Default Disabled</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Default Focused</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Outlined Normal</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Outlined Disabled</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Outlined Focused</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_OUTLINED_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Contained Normal</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Contained Disabled</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Contained Focused</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_CONTAINED_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Start Icon Normal</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Start Icon Disabled</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Start Icon Focused</label>
            <enchanted-button
              buttontext="Button"
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
        </div>
      </div>
    `;
  }

  function renderButtonInverseVariants() {
    return html`
      <div data-testid="enchanted-button-layout" style="display: flex; flex-direction: column; gap: 20px; margin: 20px;">
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Inverse Default</label>
            <enchanted-button 
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Inverse Default Disabled</label>
            <enchanted-button
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Button Inverse Default Focused</label>
            <enchanted-button
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
            >
            </enchanted-button>
          </div>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Inverse Text Start Icon</label>
            <enchanted-button
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Inverse Text Start Icon Disabled</label>
            <enchanted-button
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              disabled="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-bottom: 10px;">Inverse Text Start Icon Focused</label>
            <enchanted-button
              buttontext="Button"
              inverseColor
              variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
              focused="true"
              exportparts="${Object.values(BUTTON_PARTS).join(',')}"
              imgurl="${svgSearchUrl}"
            >
            </enchanted-button>
          </div>
        </div>
      </div>
    `;
  }

  it('EnchantedButton - should capture snapshot for all possible variants and types of AC button component for Authoring styling', async () => {
    const link = appendEnchantedStylingLink();

    render(renderButtonVariants(), document.body);
    await browser.checkElement(await $('>>>div[data-testid="enchanted-button-layout"]'), 'enchanted-button-snapshot-baseline-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedButton - should capture snapshot for inverse variants and types of AC button component for Authoring styling', async () => {
    const link = appendEnchantedStylingLink();

    render(renderButtonInverseVariants(), document.body);
    await browser.checkElement(await $('>>>div[data-testid="enchanted-button-layout"]'), 'enchanted-button-inverse-snapshot-baseline-authoring');
    document.head.removeChild(link);
  });
});
