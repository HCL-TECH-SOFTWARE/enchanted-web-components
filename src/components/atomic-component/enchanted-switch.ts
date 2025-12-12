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
import { customElement, property } from 'lit/decorators.js';
import { html, nothing } from 'lit';
import { debounce } from 'lodash';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Helper imports
import { SWITCH_PARTS } from '../../types/cssClassEnums';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';

@customElement('enchanted-switch')
export class EnchantedSwitch extends EnchantedAcBaseElement {

  @property({ type: Boolean })
  isChecked = false;

  @property({ type: Boolean })
  isDisabled = false;

  private partAttributeDecider(part: string): string {
    let returnPart = part;
    switch (part) {
      case SWITCH_PARTS.SWITCH_SLIDER: {
        if (this.isChecked) {
          returnPart = SWITCH_PARTS.SWITCH_SLIDER_CHECKED;
          if (this.isDisabled) {
            returnPart = SWITCH_PARTS.SWITCH_SLIDER_CHECKED_DISABLED;
          }
        } else if (this.isDisabled) {
          returnPart = SWITCH_PARTS.SWITCH_SLIDER_DISABLED;
        }
        return returnPart;
      }
      case SWITCH_PARTS.SWITCH_LABEL: {
        if (this.isDisabled) {
          returnPart = SWITCH_PARTS.SWITCH_LABEL_DISABLED;
        }
        return returnPart;
      }
      case SWITCH_PARTS.SWITCH_INPUT: {
        return returnPart;
      }
      default:
        return returnPart;
    }
  }

  private handleSwitchToggle(event: Event) {
    event.stopPropagation();
    this.isChecked = !this.isChecked;
    const switchChangeEvent = new CustomEvent('change', {
      detail: { isChecked: this.isChecked },
    });
    this.dispatchEvent(switchChangeEvent);
  }

  private pressKeyHandler(event: Event) {
    // Cast the event to KeyboardEvent
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.key === KeyboardInputKeys.ENTER || keyboardEvent.key == KeyboardInputKeys.SPACE) {
      event.preventDefault();
      this.handleSwitchToggle(event);
    }
  }

  render() {
    return html`
    <label
      data-testid="enchanted-switch-label"
      part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_LABEL)}
      @keydown=${this.pressKeyHandler}
      tabindex=${this.isDisabled ? -1 : 0} >
      <input
        data-testid="enchanted-switch-input"
        type="checkbox"
        tabindex=-1
        disabled=${this.isDisabled || nothing}
        part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_INPUT)}
        @click=${debounce(this.handleSwitchToggle, 300)}>
      </input>
      <span
        data-testid="enchanted-switch-span"
        part=${this.partAttributeDecider(SWITCH_PARTS.SWITCH_SLIDER)}></span>
    </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-switch': EnchantedSwitch;
  }
}
