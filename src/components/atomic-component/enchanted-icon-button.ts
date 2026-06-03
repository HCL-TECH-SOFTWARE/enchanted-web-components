/* ======================================================================== *
 * Copyright 2025, 2026 HCL America Inc.                                          *
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
import { property } from 'lit/decorators.js';
import { TemplateResult } from 'lit';
import { html } from 'lit/static-html.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-button';

// Helper imports
import { ARIA_ROLES, ICON_BUTTON_SIZES } from '../../types/cssClassEnums';
import { ICON_BUTTON_EXPORT_PARTS } from '../exportParts';
import { KeyboardInputKeys } from '../../utils/keyboardEventKeys';
import { EnchantedButton } from './enchanted-button';
import { ENCHANTED_BUTTON_TAG, ENCHANTED_BUTTON_TAG_NAME, ENCHANTED_ICON_BUTTON_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-icon-button.ts');

export class EnchantedIconButton extends EnchantedAcBaseElement {
  static override shadowRootOptions = {
    ...EnchantedAcBaseElement.shadowRootOptions,
    delegatesFocus: true
  };

  @property({ type: String })
  size: ICON_BUTTON_SIZES = ICON_BUTTON_SIZES.SMALL;

  @property({ type: Boolean })
  withPadding = false;

  @property({ type: String })
  imgurl = '';

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  @property()
  icon: TemplateResult | undefined;
  
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: Boolean })
  inverseColor = false;

  @property({ type: String })
  ariaLabel: string = 'Icon button'; // Provide a default accessible name

  public _focusButton() {
    const button: EnchantedButton | null = this.renderRoot.querySelector(ENCHANTED_BUTTON_TAG_NAME);
    button?._focusButton();
  }

  render() {
    return html`
      <${ENCHANTED_BUTTON_TAG}
        outlined="false"
        data-testid="enchanted-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${ICON_BUTTON_EXPORT_PARTS}
        ?disabled=${this.disabled}
        .icon=${this.icon}
        aria-label=${this.ariaLabel} // Ensure aria-label is passed correctly
        role=${ARIA_ROLES.BUTTON}
        aria-disabled="${this.disabled ? 'true' : 'false'}" // Communicate disabled state
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown} // Add keyboard event listener
        >
        </${ENCHANTED_BUTTON_TAG}>
      `;
  }

  private _handleKeyDown(event: KeyboardEvent) {
    if ((event.key === KeyboardInputKeys.ENTER || event.key === KeyboardInputKeys.SPACE) && !this.disabled) {
      event.preventDefault();
      this._handleClick(event);
    }
  }
}

if (!customElements.get(ENCHANTED_ICON_BUTTON_TAG_NAME)) {
  customElements.define(ENCHANTED_ICON_BUTTON_TAG_NAME, EnchantedIconButton);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_ICON_BUTTON_TAG_NAME);
}
