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
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import { html, nothing, TemplateResult } from 'lit';

// Component imports
import './enchanted-avatar';

// Helper imports
import { AVATAR_TYPE, AVATAR_VARIANT, CHIP_PARTS } from '../../types/cssClassEnums';
import { getCurrentDirection } from '../localization';
import { LOCALE_DIRECTIONS } from '../constants';

@customElement('enchanted-chip')
export class EnchantedChip extends EnchantedAcBaseElement {
  @property({ type: String }) name = '';
  @property({ type: Number }) count = 0;
  @property({ type: Boolean }) showChipCount = false;
  @property({ type: Boolean }) showAvatar = false;
  @property({ type: Boolean }) clearIcon = false; 
  @property({ type: Boolean }) disabled = false; 
  @property({ type: Object }) icon: TemplateResult | undefined;

  private isLocaleRTL () {
    const currentDirection = getCurrentDirection();        
    if (currentDirection === LOCALE_DIRECTIONS.RTL) {
      return true;
    }
    return false;
  }

  render() {
    const chipCountPart = this.isLocaleRTL() ? CHIP_PARTS.CHIP_COUNT_RTL : CHIP_PARTS.CHIP_COUNT;
    return html`
      <div part=${this.disabled ? `${CHIP_PARTS.CHIP_DIV} ${CHIP_PARTS.CHIP_DIV_DISABLED}` : CHIP_PARTS.CHIP_DIV} tabindex=${this.disabled ? '-1' : '0'}>
        ${this.showAvatar
          ? html`<enchanted-avatar .variant=${AVATAR_VARIANT.AVATAR_ICON} .type=${AVATAR_TYPE.AVATAR_ROUNDED} .iconUrl=${this.icon} ?disabled=${this.disabled}></enchanted-avatar>`
          : nothing}
        <span part=${CHIP_PARTS.CHIP_NAME}>${this.name}</span>
        ${this.showChipCount
          ? html`<span part=${chipCountPart}>${this.count}</span>`
          : nothing}
        ${this.clearIcon
          ? html`<slot name="clear-icon"></slot>`
          : nothing}
      </div>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'enchanted-chip': EnchantedChip
  }
}
