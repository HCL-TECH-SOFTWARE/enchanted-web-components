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
import { property } from "lit/decorators.js";
import { html } from "lit/static-html.js";
// import { nothing } from 'lit';
import createDebug from 'debug';
import { EnchantedAcBaseElement } from "./enchanted-ac-base-element";
import './enchanted-toggle-button';
import { ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME } from "../tags";
import { TOGGLE_BUTTON_PARTS } from "../../types/cssClassEnums";
import { EnchantedToggleButton } from "./enchanted-toggle-button";
// import { EnchantedToggleButtonGroupProps } from "../../types/enchanted-toggle-button-group";

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-toggle-button-group.ts');

export class EnchantedToggleButtonGroup extends EnchantedAcBaseElement {

  @property({ type: String, reflect: true })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  @property({ type: String })
  size: 'small' | 'large' = 'large';

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Number })
  selectedIndex = 0;

  @property({ attribute: false })
  toggleItems: EnchantedToggleButton[] = [];

  private handleSlotChange() {
    const slot = this.renderRoot.querySelector('slot') as HTMLSlotElement;
    if (!slot) {
      return;
    }
    this.toggleItems = slot.assignedElements({ flatten: true }) as EnchantedToggleButton[];
    this.updateButtons();
  }

  protected updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    this.updateButtons();
  }

  private updateButtons() {
    if (!this.toggleItems.length) {
      return;
    }
    const isHorizontal = this.orientation === 'horizontal';
    this.toggleItems.forEach((button, index) => {
      button.firstType = isHorizontal ? index === 0 : true;
      button.lastType = isHorizontal ? index === this.toggleItems.length - 1 : true;
      button.toggleOn = index === this.selectedIndex;
      button.size = this.size === 'small' ? 'small' : 'large';
      button.disabled = this.disabled;
      button.removeEventListener('toggle-change', this.handleToggleChange);
      button.addEventListener('toggle-change', this.handleToggleChange);
    });
  }

  private handleToggleChange = (event: Event) => {
    const clickedButton = event.target as EnchantedToggleButton;
    const index = this.toggleItems.indexOf(clickedButton);
    if (index < 0 || index === this.selectedIndex) {
      return;
    }
    this.selectedIndex = index;
    this.updateButtons();
    this.dispatchEvent(new CustomEvent('toggle-group-change', {
      detail: { selectedIndex: this.selectedIndex },
      bubbles: true,
      composed: true
    }));
  };

  render() {
    return html`
        <div part=${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_GROUP_CONTAINER} data-testid="enchanted-toggle-button-group-div">
            <slot part=${TOGGLE_BUTTON_PARTS.TOGGLE_BUTTON_GROUP_SLOT} @slotchange=${this.handleSlotChange}></slot>
        </div>
    `;
  }
}
/* istanbul ignore else -- module registration is single-pass in test/runtime */
if (!customElements.get(ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME)) {
  customElements.define(ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME, EnchantedToggleButtonGroup);
} else {
  /* istanbul ignore next -- else path not reachable in module-based tests */
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_TOGGLE_BUTTON_GROUP_TAG_NAME);
}
