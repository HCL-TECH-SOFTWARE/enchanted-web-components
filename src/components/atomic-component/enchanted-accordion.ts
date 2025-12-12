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
import { html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { debounce } from "lodash";


// component imports
import { EnchantedAcBaseElement } from "./enchanted-ac-base-element";

// Helper imports
import { getCurrentDirection } from "../localization";
import { LOCALE_DIRECTIONS } from "../constants";
import { ACCORDION_PARTS } from "../../types/cssClassEnums";

//Icon import
import "@hcl-software/enchanted-icons-web-component/dist/carbon/es/chevron--down";
import { KeyboardInputKeys } from "../../utils/keyboardEventKeys";

@customElement("enchanted-accordion")
export class EnchantedAccordion extends EnchantedAcBaseElement {
  @property({ type: Boolean, reflect: true }) showCheckbox = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) showSecondaryText = false;
  @property({ type: String }) type: "outlined" | "no-outline" = "outlined";
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) label = "";
  @property({ type: String }) secondaryText = "";

  @state()
  private isLTR: boolean = getCurrentDirection() === LOCALE_DIRECTIONS.LTR;

  toggleAccordion() {
    if (!this.disabled) {
      this.open = !this.open;
    }
  }
  handleKeyToggle(e: KeyboardEvent) {
    if (e.key === KeyboardInputKeys.ENTER || e.key === KeyboardInputKeys.SPACE) {
      e.preventDefault();
      this.toggleAccordion();
    }
  }
  handleArrowClick(e: Event) {
    e.stopPropagation();
    this.toggleAccordion();
  }
  render() {
    return html`
      <div
        part=${this.isLTR
          ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_CONTAINER}`
          : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_CONTAINER_RTL}`}
      >
        <div
          part=${this.isLTR
            ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_HEADER_SCSS}`
            : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_HEADER_SCSS_RTL}`}
        >
          ${this.showCheckbox
            ? html`<input type="checkbox" ?disabled=${this.disabled} />`
            : nothing}
          <div
            part=${this.isLTR
              ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_LABEL_COLUMN}`
              : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_LABEL_COLUMN_RTL}`}
            role="button"
            tabindex="-1"
            aria-expanded="${this.open}"
            aria-disabled="${this.disabled}"
            @keydown=${this.handleKeyToggle}
            @click=${debounce(this.toggleAccordion, 300)}
          >
            ${this.label
              ? html`<div
                  part=${this.isLTR
                    ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_LABEL_TEXT}`
                    : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_LABEL_TEXT_RTL}`}
                >
                  ${this.label}
                </div>`
              : html`<slot name="header"
                  >${this.getMessage("accordion.header.text")}</slot
                >`}
            ${this.showSecondaryText
              ? html`<div
                  part=${this.isLTR ? "secondary-text" : "secondary-text-rtl"}
                >
                  ${this.secondaryText ||
                  html`<slot name="secondary"
                    >${this.getMessage("accordion.secondary.text")}</slot
                  >`}
                </div>`
              : nothing}
          </div>
        </div>
        <span
          part=${this.isLTR
            ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_ARROW}`
            : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_ARROW_RTL}`}
          role="button"
          tabindex="0"
          aria-label="Toggle accordion"
          @click=${debounce(this.handleArrowClick, 300)}
          @keydown=${this.handleKeyToggle}
        >
          <icon-chevron-down
            part=${this.isLTR
              ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_ARROW_ICON}`
              : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_ARROW_ICON_RTL}`}
            size="16"
          ></icon-chevron-down>
        </span>
      </div>
      ${this.open
        ? html`
            <div
              part=${this.isLTR
                ? `${ACCORDION_PARTS.ENCHANTED_ACCORDION_CONTENT}`
                : `${ACCORDION_PARTS.ENCHANTED_ACCORDION_CONTENT_RTL}`}
            >
              <slot
                name="accordion-items"
                @slotchange=${this.handleSlotChange}
              ></slot>
            </div>
          `
        : nothing}
    `;
  }
  handleSlotChange() {
    this.requestUpdate();
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "enchanted-accordion": EnchantedAccordion;
  }
}
