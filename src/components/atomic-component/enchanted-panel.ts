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
import { html } from 'lit/static-html.js';
import { property } from 'lit/decorators.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-button';

// Helper imports
import { BUTTON_PARTS, BUTTON_VARIANT, PANEL_PARTS, PANEL_POSITION } from '../../types/cssClassEnums';

// Icon imports
import '@hcl-software/enchanted-icons-web-component/dist/carbon/es/close';
import { generateIconTagName, ENCHANTED_BUTTON_TAG, ENCHANTED_PANEL_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-panel.ts');

export class EnchantedPanel extends EnchantedAcBaseElement {

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String, reflect: true }) position: PANEL_POSITION = PANEL_POSITION.PANEL_LEFT;
  @property({ type: String }) headerTitle = '';
  @property({ type: String }) ariaLabel = '';
  @property({ type: Boolean }) focusPanel = false;

  // Public methods to control the panel to show/hide
  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  private _handleCloseClick() {
    this.hide();
    this.dispatchEvent(new CustomEvent('enchantedPanelClose'));
  }

  render() {
    return html`
      <div
        part=${PANEL_PARTS.PANEL_CONTAINER}
        role="dialog"
        aria-modal="true"
        aria-label=${this.ariaLabel}
        aria-hidden=${!this.open}
        tabindex="${this.focusPanel ? '0' : '-1'}"
      >
        <div part=${PANEL_PARTS.PANEL_HEADER}>
          <div part=${PANEL_PARTS.PANEL_TITLE}>
            <span>${this.headerTitle}</span>
          </div>
          <div>
            <slot name="center-title-content"></slot>
          </div>
          <${ENCHANTED_BUTTON_TAG}
            part=${PANEL_PARTS.PANEL_CLOSE_BUTTON}
            exportparts="${Object.values(BUTTON_PARTS).join(",")}"
            buttontext=""
            ?outlined="${false}"
            .icon="${html`<${generateIconTagName('icon-close')} size="16" color="rgba(0, 0, 0, 0.60)"></${generateIconTagName('icon-close')}>`}"
            @click=${this._handleCloseClick}
            variant=${BUTTON_VARIANT.BUTTON_TEXT_VAR}
          >
          </${ENCHANTED_BUTTON_TAG}>
        </div>
        <div part=${PANEL_PARTS.PANEL_CONTENT} tabindex="-1">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

if (!customElements.get(ENCHANTED_PANEL_TAG_NAME)) {
  customElements.define(ENCHANTED_PANEL_TAG_NAME, EnchantedPanel);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_PANEL_TAG_NAME);
}
