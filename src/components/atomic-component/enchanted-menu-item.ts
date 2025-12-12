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
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { localized } from '@lit/localize';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';
import './enchanted-list-item';

// Helper imports
import { LIST_ITEM_PARTS, MENU_ITEM_PARTS } from '../../types/cssClassEnums';

@customElement('enchanted-menu-item')
@localized()
export class EnchantedMenuItem extends EnchantedAcBaseElement {
  @property({ type: String })
  text = '';

  @property({ type: String })
  value = '';

  @property({ type: Object })
  menuObject = {};

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  handleMenuItemClick(evt: MouseEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    this.dispatchEvent(new CustomEvent('menuItemClick', {
      bubbles: true, composed: true, detail: { text: this.text, value: this.value, menuObject: this.menuObject },
    }));
  }

  handleMenuItemEnter(evt: KeyboardEvent) {
    if (evt.key === 'Enter') {
      this.dispatchEvent(new CustomEvent('menuItemClick', {
        bubbles: true, composed: true, detail: { text: this.text, value: this.value, menuObject: this.menuObject },
      }));
    }
  }

  handleMenuItemTooltip(e: MouseEvent) {
    const textRoot = e.currentTarget as HTMLTableCellElement;
    if (textRoot.offsetWidth < textRoot.scrollWidth ) {
      textRoot.setAttribute('title', this.text || '');
    }
  }
  
  render() {
    return html`
      <enchanted-list-item
        role="menuitem"
        cascading="0"
        exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
        @click=${this.handleMenuItemClick}
        @keydown=${this.handleMenuItemEnter}
        value=${this.value}
      >
        <div @mouseenter=${(evt: MouseEvent) => {return this.handleMenuItemTooltip(evt);}} part=${MENU_ITEM_PARTS.TEXT_ROOT}>
          <span part=${MENU_ITEM_PARTS.TEXT}>${this.text}</span>
        </div>
      </enchanted-list-item>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    'enchanted-menu-item': EnchantedMenuItem
  }
}
