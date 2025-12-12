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
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-circular-progress';

// Helper imports
import { SNACKBAR_PARTS, SNACKBAR_TYPE } from '../../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/checkmark--outline';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/information';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/warning--alt';
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/warning';

@customElement('enchanted-snackbar')
export class EnchantedSnackbar extends EnchantedAcBaseElement {

    @property({ type: String }) message = '';
    @property({ type: String }) type: SNACKBAR_TYPE = SNACKBAR_TYPE.SNACKBAR_INFO;

    private _renderPreElement() {
      if (SNACKBAR_TYPE.SNACKBAR_PROGRESS == this.type) {
        // valuecolor is HCLSOFTWAREBLUE09, trailcolor is the hex equivalent of Enchanted Palette WHITE15P
        return html`
          <div part="${SNACKBAR_PARTS.SNACKBAR_PROGRESS}">
            <enchanted-circular-progress
              size="36" strokewidth="2"
              valuecolor="#B3D9F8"
              trailcolor="#ffffff26"
            />
          </div>
        `;
      } else {
        switch (this.type) {
          case SNACKBAR_TYPE.SNACKBAR_INFO:
            return html`<icon-information size="16" data-test-id="enchanted-snackbar-icon" part="${SNACKBAR_PARTS.SNACKBAR_ICON} icon-${this.type}"></icon-information>`;
          case SNACKBAR_TYPE.SNACKBAR_WARNING:
            return html`<icon-warning-alt size="16" data-test-id="enchanted-snackbar-icon" part="${SNACKBAR_PARTS.SNACKBAR_ICON} icon-${this.type}"></icon-warning-alt>`;
          case SNACKBAR_TYPE.SNACKBAR_ERROR:
            return html`<icon-warning size="16" data-test-id="enchanted-snackbar-icon" part="${SNACKBAR_PARTS.SNACKBAR_ICON} icon-${this.type}"></icon-warning>`;
          case SNACKBAR_TYPE.SNACKBAR_SUCCESS:
            return html`<icon-checkmark-outline size="16" part="${SNACKBAR_PARTS.SNACKBAR_ICON} icon-${this.type}"></icon-checkmark-outline>`;
        }
      }
    }

    render() {
      return html`
        <div part=${SNACKBAR_PARTS.SNACKBAR_CONTAINER}>
          <div part=${SNACKBAR_PARTS.SNACKBAR_ICON_CONTAINER}>${this._renderPreElement()}</div>
          <span
            data-testid="enchanted-snackbar-message"
            part=${SNACKBAR_PARTS.SNACKBAR_MESSAGE}
            .innerHTML=${this.message}
          ></span>
          <div part=${SNACKBAR_PARTS.SNACKBAR_BUTTON_CONTAINER}>
            <div part=${SNACKBAR_PARTS.SNACKBAR_BUTTONS}><slot name="snackbar-buttons"></slot></div>
          </div>
        </div>
      `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-snackbar': EnchantedSnackbar;
  }
}
