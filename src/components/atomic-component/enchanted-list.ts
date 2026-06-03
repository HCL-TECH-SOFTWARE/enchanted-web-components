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

// Helper imports
import { LIST_PARTS } from '../../types/cssClassEnums';
import { ENCHANTED_LIST_TAG_NAME } from '../tags';

const debug = createDebug('enchanted-web-components:components:atomic-component:enchanted-list.ts');

/**
 * List component.
 */
export class EnchantedList extends EnchantedAcBaseElement {
  @property({ type: String })
  role = '';

  render() {
    return html`
      <ul
        tabindex="-1"
        part=${LIST_PARTS.UNORDERED_LIST}
        exportpart="unordered-list"
        ${this.role && `role="${this.role}"`}
      >
        <slot/>
      </ul>
    `;
  }
}

if (!customElements.get(ENCHANTED_LIST_TAG_NAME)) {
  customElements.define(ENCHANTED_LIST_TAG_NAME, EnchantedList);
} else {
  debug('Component (%s) is currently registered and not possible to registrate again.', ENCHANTED_LIST_TAG_NAME);
}
