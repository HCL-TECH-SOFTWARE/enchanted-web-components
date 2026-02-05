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
import { html, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import { EnchantedAcBaseElement } from "./enchanted-ac-base-element";
import { FAB_PARTS } from "../../types/cssClassEnums";
import "./enchanted-fab";

/**
 * AI-themed floating action button component using composition.
 * This component wraps EnchantedFab with a fixed AI-specific styling theme.
 * It exposes only the properties relevant for AI variants, ensuring consistent theming and type property is not exposed.
 * 
 * @element enchanted-fab-ai
 * @extends EnchantedAcBaseElement
 */
@customElement('enchanted-fab-ai')
export class EnchantedFabAi extends EnchantedAcBaseElement {
  @property({ type: Boolean, reflect: true }) 
  extended = false;

  @property({ type: Boolean, reflect: true }) 
  disabled = false;

  @property() 
  label = '';

  @property() 
  icon?: TemplateResult;

  @property({ type: Boolean, reflect: true }) 
  badge = false;

  render() {
    return html`
      <enchanted-fab
        exportparts="${FAB_PARTS.FAB}, ${FAB_PARTS.FAB_RTL}, ${FAB_PARTS.ICON}, ${FAB_PARTS.LABEL}"
        ?extended=${this.extended}
        ?disabled=${this.disabled}
        .label=${this.label}
        .icon=${this.icon}
        ?badge=${this.badge}
      >
        <slot name="badge" slot="badge"></slot>
      </enchanted-fab>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-fab-ai': EnchantedFabAi;
  }
}
