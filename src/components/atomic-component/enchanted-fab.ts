/* ======================================================================== *
 * Copyright 2026 HCL America Inc.                                          *
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
import { TemplateResult, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';


// Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { FAB_PARTS, EnchantedFabType } from '../../types/cssClassEnums';

// Component imports
import  "./enchanted-badge";

@customElement('enchanted-fab')
export class EnchantedFab extends EnchantedAcBaseElement {
  @property({ reflect: true }) type: EnchantedFabType = EnchantedFabType.CONTAINED;
  @property({ type: Boolean, reflect: true }) extended = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Object }) icon?: TemplateResult;
  @property({ type: String }) label = "";
  @property({ type: Boolean, reflect: true }) badge = false;

  @state()
  private isLTR: boolean = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;

  render() {
    return html`
      <button
        part="${this.isLTR ? FAB_PARTS.FAB : FAB_PARTS.FAB_RTL}"
        ?disabled=${this.disabled}
        exportparts="${FAB_PARTS.ICON}, ${FAB_PARTS.LABEL}"
        aria-label=${this.label || ''}
      >
        ${this.icon 
          ? html`<span part="${FAB_PARTS.ICON}">
              <slot name="icon">
                ${this.icon}
              </slot>
            </span>`
          : nothing}
        ${this.extended && this.label
          ? html`<span part="${FAB_PARTS.LABEL}">${this.label}</span>`
          : nothing}
      </button>
      ${this.badge
        ? html`<slot name="badge">
          </slot>`
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-fab': EnchantedFab;
  }
}