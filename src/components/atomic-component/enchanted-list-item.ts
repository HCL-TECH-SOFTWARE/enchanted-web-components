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
import { property } from 'lit/decorators.js';
import createDebug from 'debug';

// Component imports
import { EnchantedAcBaseElement } from './enchanted-ac-base-element';

// Icon imports
import { LIST_ITEM_PARTS } from '../../types/cssClassEnums';
import { ENCHANTED_LIST_ITEM_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-list-item.ts');

/**
 * List item component.
 */
export class EnchantedListItem extends EnchantedAcBaseElement {
  @property({ type: String })
  key = '';

  @property({ type: Boolean })
  isSelected = false;

  @property({ type: String })
  role = '';

  private partAttributeDecider(isSelected: Boolean) : string {
    if (this.role === 'menuitem') return LIST_ITEM_PARTS.MENU_ITEM;
    if (isSelected) return LIST_ITEM_PARTS.LIST_ITEM_SELECTED;
    return LIST_ITEM_PARTS.LIST_ITEM;
  }

  render() {
    return html`
      <li
        data-testid="enchanted-list-item-list"
        part="${this.partAttributeDecider(this.isSelected)}"
        key="${this.key}"
        tabindex="0"
        ${this.role && `role="${this.role}"`}
        exportparts="${Object.values(LIST_ITEM_PARTS).join(',')}"
      >
        <slot></slot>
      </li>`;
  }
}

if (!customElements.get(ENCHANTED_LIST_ITEM_TAG_NAME)) {
  customElements.define(ENCHANTED_LIST_ITEM_TAG_NAME, EnchantedListItem);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_LIST_ITEM_TAG_NAME);
}
