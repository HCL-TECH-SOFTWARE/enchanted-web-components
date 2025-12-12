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
import '../../../components/atomic-component/enchanted-tooltip';
import '../../../components/atomic-component/enchanted-button';

// Helper imports
import { TOOLTIP_PLACEMENT, TOOLTIP_TYPE, TOOLTIP_VARIANT } from '../../../types/cssClassEnums';
import { appendEnchantedStylingLink, SNAPSHOT_WINDOW_HEIGHT, SNAPSHOT_WINDOW_WIDTH } from '../utils';

function renderSmallSingleHtml() {
  return html`
    <div data-testid="enchanted-tooltip-layout" style="display: flex; flex-direction: column; gap: 40px;">
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
    </div>
  `;
}

function renderMediumSingleHtml() {
  return html`
    <div data-testid="enchanted-tooltip-layout" style="display: flex; flex-direction: column; gap: 40px;">
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Bottom End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Right End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Left End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Tooltip"
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_SINGLE_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
    </div>
  `;
}

function renderSmallMultiHtml() {
  return html`
    <div data-testid="enchanted-tooltip-layout" style="display: flex; flex-direction: column;">
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 40px;">Tooltip Top End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label>Tooltip Bottom Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-top: 40px;">Tooltip Bottom</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-top: 40px;">Tooltip Bottom End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: center;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 10px;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-top: 40px;">Tooltip Left Start</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px;">Tooltip Left</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px;">Tooltip Left End</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-top: 40px;">Tooltip Right Start</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px;">Tooltip Right</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px;">Tooltip Right End</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_SMALL}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMediumMultiHtml() {
  return html`
    <div data-testid="enchanted-tooltip-layout" style="display: flex; flex-direction: column;">
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 50px;">Tooltip Top Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 50px;">Tooltip Top</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-bottom: 50px;">Tooltip Top End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_TOP_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label>Tooltip Bottom Start</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_START}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-top: 50px;">Tooltip Bottom</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
          <label style="margin-top: 50px;">Tooltip Bottom End</label>
          <enchanted-tooltip
            show=true
            tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
            tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
            tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
            placement=${TOOLTIP_PLACEMENT.TOOLTIP_BOTTOM_END}
          >
            <enchanted-button slot="target" buttontext="Button"></enchanted-button>
          </enchanted-tooltip>
        </div>
      </div>
      <div style="display: flex; justify-content: center;">
        <div style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 10px;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-top: 50px;">Tooltip Left Start</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_START}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 20px 0px 10px;">Tooltip Left</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px 20px;">Tooltip Left End</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_LEFT_END}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin-top: 50px;">Tooltip Right Start</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_START}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 20px 0px 10px;">Tooltip Right</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
          <div style="flex: 1; display: flex; flex-direction: column; align-items: center;">
            <label style="margin: 10px 0px 20px;">Tooltip Right End</label>
            <enchanted-tooltip
              show=true
              tooltiptext="Multiline tooltip. This should be set to a fixed width that is easy to quickly scan or read."
              tooltipSize=${TOOLTIP_VARIANT.TOOLTIP_MEDIUM}
              tooltipType=${TOOLTIP_TYPE.TOOLTIP_MULTI_LINE}
              placement=${TOOLTIP_PLACEMENT.TOOLTIP_RIGHT_END}
            >
              <enchanted-button slot="target" buttontext="Button"></enchanted-button>
            </enchanted-tooltip>
          </div>
        </div>
      </div>
    </div>
  `;
}

describe('EnchantedTooltip - Snapshot testing', () => {
  before(async () => {
    await browser.setWindowSize(SNAPSHOT_WINDOW_WIDTH, SNAPSHOT_WINDOW_HEIGHT);
  });

  it('EnchantedTooltip - should capture snapshot for all possible placement of a SMALL and SINGLE-LINE Tooltip component', async () => {
    const link = appendEnchantedStylingLink();

    render(renderSmallSingleHtml(), document.body);

    // Resize a bit to trigger tooltip update (fix for some intermittent issue)
    const originalSize = await browser.getWindowSize();
    await browser.setWindowSize(originalSize.width + 1, originalSize.height);
    // Restore original window size
    await browser.setWindowSize(originalSize.width, originalSize.height);

    let buttonLayout = await $('>>>div[data-testid="enchanted-tooltip-layout"]');
    await browser.checkElement(buttonLayout, 'enchanted-tooltip-snapshot-small-single-baseline-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedTooltip - should capture snapshot for all possible placement of a MEDIUM and SINGLE-LINE Tooltip component', async () => {
    const link = appendEnchantedStylingLink();

    render(renderMediumSingleHtml(), document.body);
    let buttonLayout = await $('>>>div[data-testid="enchanted-tooltip-layout"]');
    await browser.checkElement(buttonLayout, 'enchanted-tooltip-snapshot-medium-single-baseline-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedTooltip - should capture snapshot for all possible placement of a SMALL and MULTI-LINE Tooltip component', async () => {
    const link = appendEnchantedStylingLink();

    render(renderSmallMultiHtml(), document.body);
    let buttonLayout = await $('>>>div[data-testid="enchanted-tooltip-layout"]');
    await browser.checkElement(buttonLayout, 'enchanted-tooltip-snapshot-small-multi-baseline-authoring');
    document.head.removeChild(link);
  });

  it('EnchantedTooltip - should capture snapshot for all possible placement of a MEDIUM and MULTI-LINE Tooltip component', async () => {
    const link = appendEnchantedStylingLink();

    render(renderMediumMultiHtml(), document.body);
    let buttonLayout = await $('>>>div[data-testid="enchanted-tooltip-layout"]');
    await browser.checkElement(buttonLayout, 'enchanted-tooltip-snapshot-medium-multi-baseline-authoring');
    document.head.removeChild(link);
  });
});
