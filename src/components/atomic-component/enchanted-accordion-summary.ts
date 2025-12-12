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
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

//Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { ACCORDION_SUMMARY_PARTS } from "../../types/cssClassEnums";
import { EnchantedAcBaseElement } from "./enchanted-ac-base-element";

@customElement("enchanted-accordion-summary")
export class EnchantedAccordionSummary extends EnchantedAcBaseElement {
  @property({ type: String }) label = "";
  @property({ type: String }) secondaryText = "";

   @state()
  private isLTR: boolean = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;

   render() {
     return html`
      <div
        part="${this.isLTR
          ? `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SUMMARY}`
          : `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SUMMARY_RTL}`}"
      >
        ${this.label
          ? html` <div
              part=${this.isLTR
                ? `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_LABEL}`
                : `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_LABEL_RTL}`}
            >
              ${this.label}
            </div>`
          : html`<slot name="label"
              >${this.getMessage("accordion.summary.label.text")}</slot
            > `}
        ${this.secondaryText
          ? html` <div
              part="${this.isLTR
                ? `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SECONDARY}`
                : `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SECONDARY_RTL}`}"
            >
              ${this.secondaryText}
            </div>`
          : html`
              <div
                part="${this.isLTR
                  ? `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SECONDARY}`
                  : `${ACCORDION_SUMMARY_PARTS.ENCHANTED_ACCORDION_SECONDARY_RTL}`}"
              >
                <slot name="secondary-text"
                  >${this.getMessage("accordion.summary.secondary.text")}</slot
                >
              </div>
            `}
        <slot></slot>
      </div>
    `;
   }
}
declare global {
  interface HTMLElementTagNameMap {
    "enchanted-accordion-summary": EnchantedAccordionSummary;
  }
}
