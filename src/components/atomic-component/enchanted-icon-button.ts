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
import { html, TemplateResult } from 'lit';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-button';

// Helper imports
import { ICON_BUTTON_SIZES } from '../../types/cssClassEnums';
import { ICON_BUTTON_EXPORT_PARTS } from '../exportParts';

@customElement('enchanted-icon-button')
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
  ariaLabel: string = '';

  public _focusButton() {
    const button = this.renderRoot.querySelector('enchanted-button');
    button?._focusButton();
  }

  render() {
    return html`
      <enchanted-button
        outlined="false"
        data-testid="enchanted-icon-button"
        ?inverseColor=${this.inverseColor}
        imgurl="${this.imgurl}"
        size="${this.size}"
        ?withPadding=${this.withPadding}
        exportparts=${ICON_BUTTON_EXPORT_PARTS}
        ?disabled=${this.disabled}
        .icon=${this.icon}
        ariaLabel=${this.ariaLabel}
        @click=${this._handleClick}
        >
        </enchanted-button>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'enchanted-icon-button': EnchantedIconButton;
  }
}
